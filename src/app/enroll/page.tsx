import type { Metadata } from "next";
import { ArrowRight, CreditCard, MessageCircle, ShieldCheck } from "lucide-react";
import { EnrollmentForm } from "@/components/enrollment-form";
import { Container, Section } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Enroll",
  path: "/enroll",
  description: "Apply for a CyberVSI career program and get guidance from industry mentors.",
});

export default function EnrollPage() {
  return (
    <>
      <section className="border-b border-cyan-300/10 bg-slate-950/60 py-8 sm:py-10">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">CyberVSI Enrollment</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Choose your next move</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Submit your program enquiry, view payment details with your sales code, or talk directly with a mentor.</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <EnrollmentForm />
            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-cyan-300/15 bg-slate-900/50 p-6 shadow-xl shadow-cyan-950/10 sm:p-7">
                <div className="flex items-center gap-2 text-cyan-300"><ShieldCheck size={18} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Your next step</span></div>
                <h2 className="mt-4 text-2xl font-extrabold text-white">Need help deciding?</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">Talk to a mentor about the right program, schedule, learning path, and enrollment process.</p>
                <ExternalLink href={siteConfig.whatsapp} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"><MessageCircle size={17} /> Talk to a mentor</ExternalLink>
              </div>
              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-amber-200"><CreditCard size={18} /><span className="text-xs font-bold uppercase tracking-[0.18em]">Already ready to pay?</span></div>
                <h2 className="mt-4 text-xl font-extrabold text-white">Open payment details</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Use the sales executive code provided by Pornima to view the official bank and UPI details.</p>
                <a href="/payment" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300/30 px-5 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300/10">View payment details <ArrowRight size={16} /></a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
