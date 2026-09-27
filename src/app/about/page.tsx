import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { MentorGrid } from "@/components/mentor-card";
import { mentors, trainer, whyChooseProgram } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Meet the mentors behind CyberVSI, Cyber Vision Software Institute, and explore practical cybersecurity and full stack developer programs.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About CyberVSI" title="Cyber Vision Software Institute" description="CyberVSI helps learners move from theory to practical skill through guided cybersecurity and full stack developer programs, live sessions, and portfolio-focused projects." />
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded border border-cyan-300/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Make technical education practical, ethical, and job-ready for beginners and working professionals. The academy brings together specialist mentors, structured lessons, safe labs, and communication skills that modern teams expect.
              </p>
            </div>
            <div className="rounded border border-cyan-300/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">About CyberVSI Leadership</h2>
              <p className="mt-4 leading-7 text-slate-300">{trainer.bio}</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Mentors & Experts</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Learn from practitioners</h2>
          <div className="mt-8">
            <MentorGrid mentors={mentors} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Why Learn From Us</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Professional, practical, and industry-focused</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseProgram.map(({ title, summary, icon: Icon }) => (
              <article key={title} className="rounded border border-cyan-300/10 bg-white/[0.035] p-5">
                <Icon className="text-cyan-200" size={24} />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
