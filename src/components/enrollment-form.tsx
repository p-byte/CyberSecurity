"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

const courses = [
  "Cybersecurity Program",
  "Full Stack Developer Program",
  "Dynamics 365 & Power Platform Program",
  "Cloud & DevSecOps Program",
] as const;

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: (typeof courses)[number];
};

type Errors = Partial<Record<keyof FormData, string>>;

export function EnrollmentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: courses[0],
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [apiError, setApiError] = useState("");

  function validate(data: FormData): Errors {
    const next: Errors = {};
    if (data.name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = "Enter a valid email address.";
    if (!/^[+]?[0-9\s-]{10,18}$/.test(data.phone.trim())) next.phone = "Enter a valid phone number.";
    return next;
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value } as FormData));
    setErrors((current) => ({ ...current, [field]: "" }));
    setApiError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setApiError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, message: "Enrollment request" }),
      });
      const result = await response.json();
      if (!response.ok) {
        setApiError(result.message || "We could not submit your enrollment. Please try again.");
        return;
      }
      setReferenceId(result.referenceId || "CYBERVSI-ENROLLMENT");
      setSuccess(true);
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative py-10 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
              <CheckCircle2 size={32} />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-white">Enrollment request received</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
              Thank you, {formData.name}. Our academy team will contact you about the {formData.course} schedule and next steps.
            </p>
            <p className="mt-5 font-mono text-xs text-cyan-300">Reference: {referenceId}</p>
            <a href="https://wa.me/919180399906" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20">
              <MessageCircle size={17} /> Talk to the academy on WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} noValidate className="relative space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles size={17} className="text-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Start your application</span>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">Tell us where you want to grow</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">Share your basic details. A mentor will contact you with the right batch and learning plan.</p>
            </div>

            {apiError ? <p role="alert" className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{apiError}</p> : null}

            <div>
              <label htmlFor="enroll-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Full name</label>
              <input id="enroll-name" name="name" value={formData.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" disabled={loading} placeholder="Your full name" className="input-glow w-full rounded-lg px-4 py-3 text-sm" />
              {errors.name ? <p className="mt-1.5 text-xs text-red-400">{errors.name}</p> : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="enroll-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Email address</label>
                <input id="enroll-email" name="email" type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" disabled={loading} placeholder="you@example.com" className="input-glow w-full rounded-lg px-4 py-3 text-sm" />
                {errors.email ? <p className="mt-1.5 text-xs text-red-400">{errors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="enroll-phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Phone number</label>
                <input id="enroll-phone" name="phone" type="tel" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" disabled={loading} placeholder="+91 9876543210" className="input-glow w-full rounded-lg px-4 py-3 text-sm" />
                {errors.phone ? <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="enroll-course" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Program of interest</label>
              <select id="enroll-course" name="course" value={formData.course} onChange={(event) => updateField("course", event.target.value)} disabled={loading} className="input-glow w-full rounded-lg px-4 py-3 text-sm">
                {courses.map((course) => <option key={course}>{course}</option>)}
              </select>
            </div>

            <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <><Loader2 size={17} className="animate-spin" /> Sending securely...</> : <>Submit Enrollment <ArrowRight size={17} /></>}
            </button>
            <p className="flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck size={15} className="mt-0.5 shrink-0 text-cyan-300" /> Your details are used only to respond about CyberVSI programs. No payment is collected on this form.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
