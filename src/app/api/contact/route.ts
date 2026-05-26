import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/content/site";
import { checkRateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{7,20}$/, "Invalid phone number")
    .or(z.literal(""))
    .optional()
    .default(""),
  course: z.enum(["Beginner", "Professional", "Enterprise"]).default("Beginner"),
  message: z.string().trim().min(10).max(1000),
  website: z.string().max(0).optional().default(""),
  csrfToken: z.string().uuid(),
});

const googleScriptHosts = new Set(["script.google.com", "script.googleusercontent.com"]);

async function forwardToGoogleSheets(data: z.infer<typeof contactSchema>, request: NextRequest, ip: string) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return { configured: false, ok: true };
  }

  let url: URL;
  try {
    url = new URL(webhookUrl);
  } catch {
    console.error("Invalid GOOGLE_SHEETS_WEBHOOK_URL");
    return { configured: true, ok: false };
  }

  if (url.protocol !== "https:" || !googleScriptHosts.has(url.hostname)) {
    console.error("Blocked non-Google Sheets webhook host");
    return { configured: true, ok: false };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET ?? "",
      source: "website-contact-form",
      receivedAt: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      message: data.message,
      ip,
      userAgent: request.headers.get("user-agent") ?? "",
    }),
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("Google Sheets webhook failed", response.status);
    return { configured: true, ok: false };
  }

  return { configured: true, ok: true };
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const csrfHeader = request.headers.get("x-csrf-token");
  const origin = request.headers.get("origin");
  const expectedOrigin = new URL(siteConfig.url).origin;

  if (process.env.NODE_ENV === "production" && origin && origin !== expectedOrigin) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success || csrfHeader !== parsed.data.csrfToken || parsed.data.website) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Wire this to an email, CRM, or queue provider using server-side secrets.
  console.info("New course enquiry", {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    course: parsed.data.course,
    receivedAt: new Date().toISOString(),
  });

  try {
    const sheetsResult = await forwardToGoogleSheets(parsed.data, request, ip);
    if (!sheetsResult.ok) {
      return NextResponse.json({ error: "Could not save enquiry" }, { status: 502 });
    }
  } catch (error) {
    console.error("Google Sheets forwarding error", error);
    return NextResponse.json({ error: "Could not save enquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}
