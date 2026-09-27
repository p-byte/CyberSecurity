import { NextResponse } from "next/server";
import { z } from "zod";

// 1. Define strict Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." })
    .transform((val) => val.trim()),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .transform((val) => val.trim().toLowerCase()),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^[+]?[0-9\s-]{10,18}$/, { message: "Invalid characters in phone number." })
    .transform((val) => val.trim()),
  course: z
    .enum(["Cybersecurity Program", "Full Stack Developer Program", "Dynamics 365 & Power Platform Program", "Cloud & DevSecOps Program", "General Enquiry"] as const),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." })
    .transform((val) => val.trim()),
});

export async function POST(request: Request) {
  try {
    // 2. Parse request payload
    const body = await request.json();

    // 3. Validate fields with Zod
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Return structured field errors for client form rendering
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed.", 
          errors: fieldErrors 
        },
        { status: 400 }
      );
    }

    // 4. Extract validated data (safe & sanitized)
    const { name, email, phone, course, message } = result.data;

    const leadEndpoint = process.env.SYLLABUS_LEAD_ENDPOINT;
    if (!leadEndpoint) {
      return NextResponse.json(
        { success: false, message: "Enrollment storage is not configured yet." },
        { status: 503 },
      );
    }

    let sheetResponse: Response;
    try {
      sheetResponse = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message,
          source: "enrollment-form",
          submittedAt: new Date().toISOString(),
        }),
        redirect: "follow",
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });
    } catch (error) {
      console.error("[API Contact Sheet Timeout]", error);
      return NextResponse.json(
        { success: false, message: "Enrollment storage is temporarily unavailable. Please try again shortly." },
        { status: 502 },
      );
    }

    if (!sheetResponse.ok) {
      throw new Error(`Enrollment storage returned HTTP ${sheetResponse.status}`);
    }

    console.log(`[API Contact Inquiry Success]`, {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      course,
      messageLength: message.length,
      messageSnippet: message.slice(0, 50) + (message.length > 50 ? "..." : ""),
    });

    // Generate unique mock admission reference ID
    const refId = `PCA-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json(
      {
        success: true,
        message: "Your enrollment request has been received successfully.",
        referenceId: refId,
        data: { name, email, course },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Contact Route Error]:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error. Please try again later." 
      },
      { status: 500 }
    );
  }
}
