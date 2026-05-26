import Link from "next/link";
import { ArrowRight, Check, ChevronRight, MessageCircle, Star } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { Container, Section } from "@/components/container";
import { EnrollmentLink } from "@/components/enrollment-link";
import { ExternalLink } from "@/components/external-link";
import { Hero } from "@/components/hero";
import { MentorGrid } from "@/components/mentor-card";
import { ModuleCard } from "@/components/cards";
import {
  careerOutcomes,
  curriculumModules,
  faqs,
  liveSessionTopics,
  mentors,
  pricingPlans,
  realWorldProjects,
  siteConfig,
  stats,
  studentBenefits,
  technologies,
  testimonials,
  trainer,
  whyChooseProgram,
} from "@/content/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Cyber security Academy Cybersecurity Training",
    description: "Industry-oriented cybersecurity training with SOC, VAPT, ethical hacking, SIEM, cloud security, and bug bounty labs.",
    provider: { "@type": "Organization", name: "Cyber security Academy" },
    instructor: { "@type": "Person", name: trainer.name, jobTitle: trainer.role },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded border border-cyan-300/10 bg-white/[0.035] p-5">
                <p className="text-3xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">About Trainer</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">{trainer.name}</h2>
              <p className="mt-3 text-lg text-cyan-100">{trainer.role}</p>
              <p className="mt-5 leading-7 text-slate-300">{trainer.bio}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href={trainer.linkedin} className="inline-flex items-center justify-center gap-2 rounded border border-cyan-300/40 bg-white/[0.03] px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/10">
                  LinkedIn Profile <ArrowRight size={18} />
                </ExternalLink>
                <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black hover:bg-cyan-200">
                  <MessageCircle size={18} /> Contact Trainer
                </ExternalLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[...trainer.experience, ...trainer.specialties].map((item) => (
                <div key={item} className="rounded border border-cyan-300/10 bg-black/50 p-4">
                  <Check className="text-cyan-200" size={18} />
                  <p className="mt-3 text-sm font-medium text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Meet Your Trainers</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Mentors & Experts</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                Learn SOC operations and VAPT methodology from practitioners who focus on real investigation, testing,
                evidence, and reporting workflows.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MentorGrid mentors={mentors} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Why Learn From Us</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Why Choose Our Program</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseProgram.map(({ title, summary, icon: Icon }) => (
              <article key={title} className="rounded border border-cyan-300/10 bg-black/50 p-5 hover:border-cyan-300/40">
                <Icon className="text-cyan-200" size={24} />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Career Opportunities</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Professional course outcomes</h2>
              <p className="mt-4 leading-7 text-slate-400">
                The curriculum supports learners targeting defensive, offensive, cloud, and monitoring roles across modern cybersecurity teams.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {careerOutcomes.map((outcome) => (
                <div key={outcome} className="rounded border border-cyan-300/10 bg-white/[0.035] p-4 text-sm font-semibold text-cyan-100">
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Student Benefits</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Built for serious beginners and career switchers</h2>
              <div className="mt-6 grid gap-3">
                {studentBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded border border-cyan-300/10 bg-black/40 p-4 text-slate-300">
                    <Check className="mt-0.5 shrink-0 text-cyan-200" size={18} />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Live Practical Sessions</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Practice with mentor review</h2>
              <div className="mt-6 grid gap-3">
                {liveSessionTopics.map((topic) => (
                  <div key={topic} className="rounded border border-cyan-300/10 bg-black/40 p-4 text-slate-300">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Real-World Cybersecurity Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Portfolio-ready security practice</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {realWorldProjects.map(({ title, summary, icon: Icon }) => (
              <article key={title} className="rounded border border-cyan-300/10 bg-white/[0.035] p-5 hover:border-cyan-300/40">
                <Icon className="text-cyan-200" size={24} />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Technologies Covered</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Tools and workflows used by modern security teams</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((item) => (
              <span key={item} className="rounded border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-100">{item}</span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Curriculum</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">From foundations to field-ready security skills</h2>
            </div>
            <Link href="/curriculum" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              Full curriculum <ChevronRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {curriculumModules.slice(0, 8).map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </Section>

      <section id="google-form-placeholder" className="border-y border-cyan-300/10 bg-cyan-300/[0.04] py-16">
        <Container>
          <div className="grid gap-6 rounded border border-cyan-300/20 bg-black/60 p-6 backdrop-blur lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Enrollment</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Google Form Enrollment</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Fill the public Google Form to share your details and start the enrollment process.
              </p>
            </div>
            <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black hover:bg-cyan-200">
              Open Enrollment Form <ArrowRight size={18} />
            </EnrollmentLink>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded border border-cyan-300/10 bg-white/[0.035] p-5">
                <Star className="text-cyan-200" size={20} />
                <p className="mt-4 leading-7 text-slate-300">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-5 font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-cyan-300/10 bg-white/[0.02]">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`rounded border p-6 ${plan.featured ? "border-cyan-300 bg-cyan-300/10" : "border-cyan-300/10 bg-white/[0.035]"}`}>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-3 text-3xl font-semibold text-cyan-200">{plan.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
                <EnrollmentLink className="mt-6 inline-flex w-full justify-center rounded bg-cyan-300 px-4 py-3 font-semibold text-black">Enroll Now</EnrollmentLink>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded border border-cyan-300/10 bg-white/[0.035] p-5">
                <summary className="cursor-pointer font-semibold text-white">{faq.q}</summary>
                <p className="mt-3 leading-7 text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
