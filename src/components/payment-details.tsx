"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, Loader2, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";

type PaymentData = { accountHolder: string; accountNumber: string; ifsc: string; upiId: string; branchName: string; branchAddress: string; salesExecutive: string };
type ConfirmationForm = { name: string; email: string; phone: string; course: string; paymentId: string; screenshot: File | null };
const courses = ["Cybersecurity Program", "SOC Mastery for VAPT Professionals", "Full Stack Developer Program", "Dynamics 365 & Power Platform Program", "Cloud & DevSecOps Program"];

export function PaymentDetails() {
  const [code, setCode] = useState("");
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [accessError, setAccessError] = useState("");
  const [accessLoading, setAccessLoading] = useState(false);
  const [form, setForm] = useState<ConfirmationForm>({ name: "", email: "", phone: "", course: courses[0], paymentId: "", screenshot: null });
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function unlockPayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setAccessLoading(true); setAccessError("");
    try {
      const response = await fetch("/api/payment-access", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Invalid sales executive code.");
      setPayment(result.payment);
    } catch (error) { setAccessError(error instanceof Error ? error.message : "Unable to unlock payment details."); }
    finally { setAccessLoading(false); }
  }

  function update(field: keyof ConfirmationForm, value: string | File | null) { setForm((current) => ({ ...current, [field]: value })); setSubmitError(""); }

  async function submitConfirmation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitError("");
    if (!form.screenshot) { setSubmitError("Upload the payment screenshot to continue."); return; }
    if (!form.paymentId.trim()) { setSubmitError("Enter the payment ID or UTR number."); return; }
    if (form.screenshot.size > 5 * 1024 * 1024) { setSubmitError("The screenshot must be smaller than 5 MB."); return; }
    if (!form.screenshot.type.startsWith("image/")) { setSubmitError("Upload a PNG, JPG, or JPEG screenshot."); return; }
    setSubmitting(true);
    try {
      const screenshotDataUrl = await new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = () => reject(new Error("Could not read screenshot.")); reader.readAsDataURL(form.screenshot as File); });
      const response = await fetch("/api/payment-confirmation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, course: form.course, paymentId: form.paymentId, screenshotDataUrl }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not submit payment confirmation.");
      setSubmitted(true);
    } catch (error) { setSubmitError(error instanceof Error ? error.message : "Could not submit payment confirmation."); }
    finally { setSubmitting(false); }
  }

  return <div className="space-y-8">
    <div className="flex flex-wrap items-center justify-between gap-4"><Link href="/enroll" className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"><ArrowLeft size={16} /> Back to enrollment</Link><span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200"><CheckCircle2 size={15} /> Restricted payment access</span></div>
    {!payment ? <section className="mx-auto max-w-xl rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8"><div className="flex items-center gap-2 text-cyan-300"><LockKeyhole size={19} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Sales executive access</span></div><h2 className="mt-4 text-2xl font-extrabold text-white">Enter your sales executive code</h2><p className="mt-3 text-sm leading-6 text-slate-400">Ask your CyberVSI sales executive for the access code. Payment details are shown only after the code is verified.</p><form onSubmit={unlockPayment} className="mt-7 space-y-4"><label htmlFor="sales-code" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Sales executive code</label><input id="sales-code" value={code} onChange={(event) => setCode(event.target.value)} autoComplete="off" required className="input-glow w-full rounded-lg px-4 py-3 text-sm uppercase" placeholder="Enter access code" />{accessError ? <p role="alert" className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{accessError}</p> : null}<button type="submit" disabled={accessLoading} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-60">{accessLoading ? <><Loader2 size={17} className="animate-spin" /> Verifying...</> : <><LockKeyhole size={17} /> Unlock payment details</>}</button></form></section> : <>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><section className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8"><div className="flex items-center gap-2 text-cyan-300"><ShieldCheck size={19} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Bank transfer details</span></div><h2 className="mt-4 text-2xl font-extrabold text-white">Pay securely to CyberVSI</h2><dl className="mt-7 divide-y divide-white/10 rounded-xl border border-white/10 bg-slate-950/60">{[["Account Holder", payment.accountHolder], ["Account Number", payment.accountNumber], ["Branch IFSC", payment.ifsc], ["UPI ID", payment.upiId], ["Branch Name", payment.branchName], ["Branch Address", payment.branchAddress]].map(([label, value]) => <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"><dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt><dd className="break-words text-sm font-semibold text-slate-100">{value}</dd></div>)}</dl><div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-amber-100"><strong>Sales executive:</strong> {payment.salesExecutive}. Share your payment confirmation after transfer.</div></section><section className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">UPI payment</p><h2 className="mt-2 text-2xl font-extrabold text-white">Scan to pay</h2><p className="mt-3 text-sm leading-6 text-slate-400">Scan the official PhonePe QR code and confirm the recipient name before paying.</p><div className="mt-7 max-w-sm rounded-xl border border-white/10 bg-white p-3"><Image src="/upi-phonepe-qr.png" alt="PhonePe UPI QR code" width={512} height={1024} className="h-auto w-full rounded-lg" /><p className="px-1 pb-1 pt-3 text-center text-sm font-semibold text-slate-900">PhonePe UPI</p></div></section></div>
      <section className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-8"><div className="flex items-center gap-2 text-cyan-300"><CreditCard size={19} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Payment confirmation</span></div><h2 className="mt-4 text-2xl font-extrabold text-white">Submit your payment proof</h2><p className="mt-3 text-sm leading-6 text-slate-400">Enter the payment ID or UTR and upload the screenshot. The admissions team will review it later.</p>{submitted ? <div className="mt-6 rounded-xl border border-emerald-300/25 bg-emerald-300/10 p-5 text-sm leading-6 text-emerald-100"><CheckCircle2 className="mb-2 text-emerald-300" />Payment confirmation submitted successfully. The CyberVSI team will verify it and contact you.</div> : <form onSubmit={submitConfirmation} className="mt-7 grid gap-5 md:grid-cols-2"><input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Full name" className="input-glow rounded-lg px-4 py-3 text-sm" /><input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" className="input-glow rounded-lg px-4 py-3 text-sm" /><input required type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Phone number" className="input-glow rounded-lg px-4 py-3 text-sm" /><select required value={form.course} onChange={(event) => update("course", event.target.value)} className="input-glow rounded-lg px-4 py-3 text-sm">{courses.map((course) => <option key={course}>{course}</option>)}</select><input required value={form.paymentId} onChange={(event) => update("paymentId", event.target.value)} placeholder="Payment ID / UTR number" className="input-glow rounded-lg px-4 py-3 text-sm md:col-span-2" /><label className="rounded-lg border border-dashed border-cyan-300/25 bg-slate-950/50 p-4 text-sm text-slate-300 md:col-span-2"><span className="mb-2 block font-semibold text-white">Upload payment screenshot</span><input required type="file" accept="image/png,image/jpeg,image/jpg" onChange={(event) => update("screenshot", event.target.files?.[0] || null)} className="block w-full text-sm text-slate-400 file:mr-4 file:rounded file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-semibold file:text-slate-950" /><span className="mt-2 block text-xs text-slate-500">PNG or JPG, maximum 5 MB.</span></label>{submitError ? <p role="alert" className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 md:col-span-2">{submitError}</p> : null}<button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-60 md:col-span-2">{submitting ? <><Loader2 size={17} className="animate-spin" /> Uploading securely...</> : <>Submit payment confirmation <ArrowLeft size={17} className="rotate-180" /></>}</button></form>}</section>
    </>}
  </div>;
}
