"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const csrfToken = crypto.randomUUID();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        course: formData.get("course"),
        message: formData.get("message"),
        website: formData.get("website"),
        csrfToken,
      }),
    });

    if (response.ok) {
      setState("success");
      setMessage("Message received. The academy team will contact you soon.");
      form.reset();
      return;
    }

    setState("error");
    setMessage("Something went wrong. Please try WhatsApp or email if this continues.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded border border-cyan-300/15 bg-white/[0.035] p-5 backdrop-blur">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input required name="name" minLength={2} maxLength={80} className="rounded border border-white/10 bg-black/60 px-3 py-3 text-white outline-none focus:border-cyan-300" />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input required type="email" name="email" maxLength={120} className="rounded border border-white/10 bg-black/60 px-3 py-3 text-white outline-none focus:border-cyan-300" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Phone
          <input name="phone" inputMode="tel" pattern="^[0-9+()\\-\\s]{7,20}$" maxLength={20} className="rounded border border-white/10 bg-black/60 px-3 py-3 text-white outline-none focus:border-cyan-300" />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Course Interest
          <select name="course" className="rounded border border-white/10 bg-black/60 px-3 py-3 text-white outline-none focus:border-cyan-300">
            <option>Beginner</option>
            <option>Professional</option>
            <option>Enterprise</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-300">
        Message
        <textarea required name="message" minLength={10} maxLength={1000} rows={5} className="rounded border border-white/10 bg-black/60 px-3 py-3 text-white outline-none focus:border-cyan-300" />
      </label>
      <button disabled={state === "loading"} className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
        <Send size={18} /> {state === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message ? <p className={state === "success" ? "text-sm text-emerald-300" : "text-sm text-red-300"}>{message}</p> : null}
    </form>
  );
}
