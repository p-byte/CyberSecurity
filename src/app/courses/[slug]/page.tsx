import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Container, Section } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { PageHero } from "@/components/cards";
import { SyllabusDownloadButton } from "@/components/syllabus-download";
import { courseCatalog, pricingPlans, siteConfig } from "@/content/site";

type CourseParams = { slug: string };

export function generateStaticParams() {
  return courseCatalog.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<CourseParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courseCatalog.find((item) => item.slug === resolvedParams.slug);
  return { title: course?.name ?? "Course", description: course?.description };
}

export default async function CoursePage({ params }: { params: Promise<CourseParams> }) {
  const resolvedParams = await params;
  const course = courseCatalog.find((item) => item.slug === resolvedParams.slug);
  const plan = pricingPlans.find((item) => item.slug === resolvedParams.slug);
  if (!course || !plan) notFound();

  return (
    <>
      <PageHero eyebrow="Career Program" title={course.name} description={course.description} />
      <Section>
        <Container>
          <div className="flex flex-wrap gap-3">
            <SyllabusDownloadButton course={course} />
            <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded bg-emerald-400 px-5 py-3 font-bold text-black hover:bg-emerald-300"><MessageCircle size={18} /> Enquire on WhatsApp</ExternalLink>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded border border-cyan-300/30 px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/10"><ArrowLeft size={18} /> All Programs</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-cyan-300/15 bg-white/[0.035] p-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">Mentor</p><p className="mt-2 text-lg font-semibold text-white">{plan.mentor}</p></div>
            <div className="rounded-xl border border-cyan-300/15 bg-white/[0.035] p-5"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">Schedule</p><p className="mt-2 text-lg font-semibold text-white">{plan.schedule}</p></div>
          </div>
        </Container>
      </Section>
      <Section className="border-y border-cyan-300/10 bg-slate-950/40">
        <Container>
          <h2 className="text-3xl font-extrabold text-white">What you will learn</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {course.modules.map((module) => <article key={module} className="flex gap-3 rounded-xl border border-cyan-300/10 bg-slate-900/40 p-5 text-slate-200"><Check className="mt-0.5 shrink-0 text-cyan-300" size={19} />{module}</article>)}
          </div>
        </Container>
      </Section>
      <CTASection title={`Ready to explore ${course.name}?`} description="Talk to the mentor team on WhatsApp for batch timing, enrollment guidance, and the next steps." />
    </>
  );
}
