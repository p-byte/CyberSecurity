import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { EnrollmentForm } from "@/components/enrollment-form";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Enroll",
  path: "/enroll",
  description: "Apply for a CyberVSI career program and get guidance from industry mentors.",
});

const nextSteps = [
  "Choose the career program that matches your goal.",
  "A CyberVSI mentor reviews your details and contacts you.",
  "Get batch timings, curriculum guidance, and the next steps.",
];

export default function EnrollPage() {
  return (
    <>
      <PageHero eyebrow="CyberVSI Enrollment" title="Start your practical career journey" description="Apply once and speak directly with the right mentor for cybersecurity, full stack development, Dynamics 365, or Cloud & DevSecOps." />
      <Section>
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">A clear next step</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Get the right path, not a generic brochure.</h2>
                <p className="mt-4 leading-7 text-slate-400">Tell us what you want to learn and our team will help you understand the program, schedule, mentor support, and practical outcomes.</p>
              </div>
              <div className="space-y-3">
                {nextSteps.map((step, index) => <div key={step} className="flex gap-3 rounded-xl border border-cyan-300/10 bg-slate-900/35 p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-200">0{index + 1}</span><p className="text-sm leading-6 text-slate-300">{step}</p></div>)}
              </div>
              <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-5">
                <div className="flex items-center gap-2 text-emerald-300"><ShieldCheck size={17} /><span className="text-sm font-semibold">Simple and secure</span></div>
                <p className="mt-2 text-sm leading-6 text-slate-400">We collect only the details needed to respond to your course enquiry. Your submission is recorded in the CyberVSI admissions sheet.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"><MessageCircle size={16} /> WhatsApp</ExternalLink>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30"><Mail size={16} /> Email us</a>
              </div>
            </div>
            <EnrollmentForm />
          </div>
        </Container>
      </Section>
      <section className="border-t border-cyan-300/10 py-12">
        <Container>
          <div className="flex flex-col justify-between gap-5 rounded-2xl border border-cyan-300/10 bg-slate-900/30 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={20} /><div><h2 className="font-bold text-white">Prefer to ask before applying?</h2><p className="mt-1 text-sm text-slate-400">Talk to a mentor on WhatsApp and we will guide you to the right program.</p></div></div>
            <ExternalLink href={siteConfig.whatsapp} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Talk to a mentor <ArrowRight size={16} /></ExternalLink>
          </div>
        </Container>
      </section>
    </>
  );
}
