import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().regex(/^[+]?[0-9\s-]{10,18}$/),
  course: z.enum(["Cybersecurity Program", "SOC Mastery for VAPT Professionals", "Full Stack Developer Program", "Dynamics 365 & Power Platform Program", "Cloud & DevSecOps Program"]),
  paymentId: z.string().trim().min(4).max(120),
  screenshotDataUrl: z.string().regex(/^data:image\/(png|jpeg|jpg);base64,[a-zA-Z0-9+/=]+$/).max(8_000_000),
});

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json().catch(() => null));
    if (!parsed.success) return NextResponse.json({ success: false, message: "Please provide valid contact details, payment ID, and screenshot." }, { status: 400 });
    const endpoint = process.env.SYLLABUS_LEAD_ENDPOINT;
    if (!endpoint) return NextResponse.json({ success: false, message: "Payment confirmation storage is not configured." }, { status: 503 });
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, email: parsed.data.email.toLowerCase(), source: "payment-confirmation", submittedAt: new Date().toISOString() }), redirect: "follow", cache: "no-store", signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`Payment confirmation endpoint returned ${response.status}`);
    return NextResponse.json({ success: true, message: "Payment confirmation submitted." });
  } catch (error) {
    console.error("[Payment confirmation error]", error);
    return NextResponse.json({ success: false, message: "We could not save the payment confirmation. Please try again." }, { status: 502 });
  }
}
