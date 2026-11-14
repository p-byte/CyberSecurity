import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Copy, ShieldCheck } from "lucide-react";

const accountDetails = [
  ["Account Holder", "N PRUTHVI KRISHNA"],
  ["Account Number", "5547800373"],
  ["Branch IFSC", "KKBK0008066"],
  ["UPI ID", "9740781976@kotak"],
  ["Branch Name", "M.G. ROAD"],
  ["Branch Address", "22, Ground Floor, M.G. Road, Bengaluru 560001"],
] as const;

export function PaymentDetails() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/enroll" className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
          <ArrowLeft size={16} /> Back to enrollment
        </Link>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
          <CheckCircle2 size={15} /> Payment information
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8">
          <div className="flex items-center gap-2 text-cyan-300"><ShieldCheck size={19} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Bank transfer details</span></div>
          <h2 className="mt-4 text-2xl font-extrabold text-white">Pay securely to CyberVSI</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Use these verified account details only after confirming your selected program with our admissions team.</p>
          <dl className="mt-7 divide-y divide-white/10 rounded-xl border border-white/10 bg-slate-950/60">
            {accountDetails.map(([label, value]) => <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"><dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt><dd className="break-words text-sm font-semibold text-slate-100">{value}</dd></div>)}
          </dl>
          <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-amber-100">
            <strong>Sales executive:</strong> Pornima. Please share the payment confirmation with the CyberVSI admissions team after transfer.
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8">
          <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">UPI payment</p><h2 className="mt-2 text-2xl font-extrabold text-white">Scan to pay</h2></div><Copy size={20} className="text-slate-500" /></div>
          <p className="mt-3 text-sm leading-6 text-slate-400">Scan either QR code using your preferred UPI app. Confirm the recipient name and amount before completing payment.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <figure className="rounded-xl border border-white/10 bg-white p-3"><Image src="/upi-kotak-qr.png" alt="Kotak Mahindra Bank UPI QR code" width={512} height={1138} className="h-auto w-full rounded-lg" /><figcaption className="px-1 pb-1 pt-3 text-center text-sm font-semibold text-slate-900">Kotak Mahindra Bank UPI</figcaption></figure>
            <figure className="rounded-xl border border-white/10 bg-white p-3"><Image src="/upi-phonepe-qr.png" alt="PhonePe UPI QR code" width={512} height={1024} className="h-auto w-full rounded-lg" /><figcaption className="px-1 pb-1 pt-3 text-center text-sm font-semibold text-slate-900">PhonePe UPI</figcaption></figure>
          </div>
        </section>
      </div>
    </div>
  );
}
