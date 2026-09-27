import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{10,18}$/),
  course: z.enum(["Cybersecurity Program", "Full Stack Developer Program", "Dynamics 365 & Power Platform Program", "Cloud & DevSecOps Program"]),
});

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ success: false, message: "Please provide valid name, email, phone, and course details." }, { status: 400 });

    const endpoint = process.env.SYLLABUS_LEAD_ENDPOINT;
    if (!endpoint) return NextResponse.json({ success: false, message: "Syllabus form is not configured yet." }, { status: 503 });

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, source: "syllabus-download", submittedAt: new Date().toISOString() }),
      redirect: "follow",
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`);
    return NextResponse.json({ success: true, message: "Details saved. Opening your syllabus..." });
  } catch (error) {
    console.error("[Syllabus lead error]", error);
    return NextResponse.json({ success: false, message: "We could not save your details. Please try again." }, { status: 502 });
  }
}
