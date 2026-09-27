"use client";

import { FormEvent, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Download, Loader2, X } from "lucide-react";

type Course = {
  name: string;
  syllabusUrl: string;
};

export function SyllabusDownloadButton({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/syllabus-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          course: course.name,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to save your details.");
      setState("success");
      setMessage(result.message || "Details saved successfully.");
      if (course.syllabusUrl) window.location.assign(course.syllabusUrl);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <>
      <button type="button" onClick={() => { setOpen(true); setState("idle"); }} className="inline-flex w-full items-center justify-center gap-2 rounded border border-cyan-300/30 px-4 py-3 font-semibold text-cyan-100 hover:border-cyan-300/70 hover:bg-cyan-300/10">
        <Download size={17} /> Download Syllabus
      </button>
      {open && typeof document !== "undefined" ? createPortal((
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="syllabus-title">
          <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl border border-cyan-300/20 bg-white text-slate-900 shadow-2xl lg:grid-cols-[0.82fr_1.18fr]">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close syllabus form" className="absolute right-4 top-4 z-10 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"><X size={21} /></button>
            <div className="bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-700 p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">CyberVSI</p>
              <h2 className="mt-10 text-3xl font-extrabold leading-tight sm:text-4xl">Start your journey with us.</h2>
              <p className="mt-5 text-lg leading-8 text-blue-50">Get the syllabus, understand the learning path, and choose the right career program with mentor guidance.</p>
              <div className="mt-10 rounded-xl border border-white/25 bg-white/10 p-5 text-sm leading-6 text-blue-50">Your details are used only to share the requested syllabus and course information.</div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Download syllabus</p>
              <h2 id="syllabus-title" className="mt-2 text-3xl font-extrabold text-slate-950">Tell us where to send it</h2>
              <p className="mt-2 text-slate-500">Complete these basic details to continue to the course download.</p>
              {state === "success" && !course.syllabusUrl ? (
                <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800"><CheckCircle2 className="mb-2" />{message} Add the Google Drive link for this course in your environment settings to enable direct download.</div>
              ) : (
                <form onSubmit={submit} className="mt-7 grid gap-5">
                  <label className="grid gap-2 font-semibold text-slate-800">Name*<input name="name" required minLength={2} maxLength={100} className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-cyan-600" placeholder="Your full name" /></label>
                  <label className="grid gap-2 font-semibold text-slate-800">Email*<input name="email" type="email" required className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-cyan-600" placeholder="you@example.com" /></label>
                  <label className="grid gap-2 font-semibold text-slate-800">Phone Number*<input name="phone" required pattern="[+0-9\\s-]{10,18}" className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-cyan-600" placeholder="+91 98765 43210" /></label>
                  <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-600"><span className="font-semibold text-slate-900">Selected program:</span> {course.name}</div>
                  {message ? <p className="text-sm text-red-600">{message}</p> : null}
                  <button type="submit" disabled={state === "submitting"} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3.5 font-bold text-white hover:bg-blue-900 disabled:opacity-60">{state === "submitting" ? <><Loader2 className="animate-spin" size={18} /> Saving details...</> : "Next"}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      ), document.body) : null}
    </>
  );
}
