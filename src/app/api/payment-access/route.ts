import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ code: z.string().trim().min(1).max(40) });

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  const expected = (process.env.PAYMENT_ACCESS_CODE || "CYBERVSI").trim().toUpperCase();
  if (!parsed.success || parsed.data.code.toUpperCase() !== expected) return NextResponse.json({ success: false, message: "Invalid sales executive code." }, { status: 403 });
  return NextResponse.json({ success: true, payment: { accountHolder: "N PRUTHVI KRISHNA", accountNumber: "5547800373", ifsc: "KKBK0008066", upiId: "9740781976@kotak", branchName: "M.G. ROAD", branchAddress: "22, Ground Floor, M.G. Road, Bengaluru 560001", salesExecutive: "Pornima" } });
}
