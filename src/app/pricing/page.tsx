import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, MessageCircle, Star } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { EnrollmentLink } from "@/components/enrollment-link";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { pricingPlans } from "@/content/site";
import { courseCatalog, siteConfig } from "@/content/site";
import { ExternalLink } from "@/components/external-link";
import { SyllabusDownloadButton } from "@/components/syllabus-download";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Pricing", path: "/pricing" });

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Programs & Enrollment" title="Choose your next career program" description="Enroll in practical cybersecurity, full stack development, or Microsoft Dynamics 365 and Power Platform training with guided learning and mentor support." />
        <Section>
          <Container>
          <div className="grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className="flex flex-col rounded border border-cyan-300/15 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]">
                <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-3 text-lg font-semibold text-cyan-200">Click to enquire for course details</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-2 font-semibold text-amber-300">
                    <span className="inline-flex items-center gap-0.5" aria-label={`${plan.rating} learner rating`}>
                      {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill="currentColor" strokeWidth={1.5} />)}
                    </span>
                    {plan.rating} learner rating
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300"><Clock size={16} className="text-cyan-200" /> {plan.schedule}</span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Mentor: {plan.mentor}</p>
                <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>
                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 shrink-0 text-cyan-200" size={17} /> {feature}
                    </li>
                  ))}
                </ul>
                {(() => {
                  const course = courseCatalog.find((item) => item.slug === plan.slug);
                  return course ? (
                    <div className="mt-8 grid gap-3">
                      <Link href={`/courses/${plan.slug}`} className="inline-flex w-full justify-center rounded border border-cyan-300/30 bg-slate-950/50 px-4 py-3 font-semibold text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-300/10">View Course Details</Link>
                      <ExternalLink href={siteConfig.whatsapp} className="inline-flex w-full items-center justify-center gap-2 rounded bg-emerald-400 px-4 py-3 font-semibold text-black hover:bg-emerald-300"><MessageCircle size={17} /> Enquire on WhatsApp</ExternalLink>
                      <SyllabusDownloadButton course={course} />
                    </div>
                  ) : null;
                })()}
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Talk to a mentor before enrolling" description="Use the CyberVSI enrollment form to select your program, then connect with the academy team for batch and learning guidance." />
    </>
  );
}
