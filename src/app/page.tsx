"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, MessageCircle, Star, Sparkles, TerminalSquare, ShieldCheck } from "lucide-react";
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Cyber security Academy Cybersecurity Training",
    description: "IITR CYB oriented cybersecurity training with SOC, VAPT, ethical hacking, SIEM, cloud security, and bug bounty labs.",
    provider: { "@type": "Organization", name: "Cyber security Academy" },
    instructor: { "@type": "Person", name: trainer.name, jobTitle: trainer.role },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />

      {/* Stats Section */}
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[20%] left-[20%] size-[240px] bg-cyan-500/5 blur-[80px]" />
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="relative rounded-xl border border-cyan-300/10 bg-slate-900/30 p-6 backdrop-blur-md hover:border-cyan-300/25 transition duration-300 group overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 size-12 rounded-full bg-cyan-400/5 blur-lg group-hover:bg-cyan-400/10 transition" />
                <p className="text-4xl font-extrabold text-cyan-300 tracking-tight">{stat.value}</p>
                <p className="mt-2.5 text-sm font-medium text-slate-450 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Trainer Section */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[-10%] right-[10%] size-[300px] bg-emerald-500/5 blur-[90px]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Trainer Credentials</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{trainer.name}</h2>
              <p className="mt-2 text-lg font-medium text-cyan-300/90">{trainer.role}</p>
              <p className="mt-5 leading-7 text-slate-300">{trainer.bio}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href={trainer.linkedin} className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/35 bg-white/[0.02] px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/10 transition duration-200">
                  LinkedIn Profile <ArrowRight size={18} />
                </ExternalLink>
                <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-bold text-black hover:bg-cyan-200 shadow-md shadow-cyan-950 transition duration-200">
                  <MessageCircle size={18} /> Contact Trainer
                </ExternalLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[...trainer.experience, ...trainer.specialties].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.35 }}
                  className="flex flex-col justify-between rounded-xl border border-cyan-300/10 bg-slate-900/60 p-5 hover:border-cyan-300/25 transition group"
                >
                  <div className="grid size-9 place-items-center rounded bg-cyan-300/5 text-cyan-300 border border-cyan-300/10 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/10 transition duration-300">
                    <Check size={16} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-200 tracking-wide">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mentors Directory */}
      <Section>
        <Container>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={12} className="text-cyan-300" />
              <span>Learn From Practitioners</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Mentors & Experts</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Go deep into defensive investigation and offensive exploit verification with instructors active in cybersecurity.
            </p>
          </div>
          <div className="mt-8">
            <MentorGrid mentors={mentors} />
          </div>
        </Container>
      </Section>

      {/* Program Core Strengths */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute top-[30%] right-[20%] size-[280px] bg-cyan-500/5 blur-[85px]" />
        <Container>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            <Sparkles size={12} className="text-cyan-300" />
            <span>Guaranteed Quality</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Why Choose Our Program</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseProgram.map(({ title, summary, icon: Icon }, idx) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="group relative rounded-xl border border-cyan-300/10 bg-slate-900/40 p-6 hover:border-cyan-300/35 hover:bg-cyan-300/[0.03] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center rounded-lg border border-cyan-300/10 bg-cyan-300/5 p-2.5 text-cyan-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 transition duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-bold text-white group-hover:text-cyan-200 transition duration-200">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-400 group-hover:text-slate-350 transition duration-200">{summary}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Career Outcomes */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Industry Roles Mapping</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Target Career Outcomes</h2>
              <p className="mt-4 leading-7 text-slate-400">
                The structured syllabus maps directly to skills expected in modern defensive, offensive, and cloud security departments.
              </p>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {careerOutcomes.map((outcome, idx) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.35 }}
                  className="rounded-lg border border-cyan-300/10 bg-slate-900/30 p-4 text-sm font-bold text-cyan-200/90 text-center hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] transition duration-200"
                >
                  {outcome}
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Student Benefits & Live Sessions */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[-20%] left-[20%] size-[280px] bg-emerald-500/5 blur-[90px]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Student Advantages</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Built for career switchers</h2>
              <div className="mt-6 grid gap-3">
                {studentBenefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.35 }}
                    className="flex gap-3.5 rounded-xl border border-cyan-300/10 bg-slate-900/30 p-4 text-sm leading-6 text-slate-300"
                  >
                    <Check className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Interactive Live Learning</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Practice with mentor review</h2>
              <div className="mt-6 grid gap-3">
                {liveSessionTopics.map((topic, idx) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.35 }}
                    className="flex items-center gap-3.5 rounded-xl border border-cyan-300/10 bg-slate-900/30 p-4 text-sm font-semibold text-slate-350 hover:border-cyan-300/20 transition duration-200"
                  >
                    <div className="size-2 rounded-full bg-cyan-300 shrink-0" />
                    <span>{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Projects */}
      <Section>
        <Container>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={12} className="text-cyan-300" />
              <span>Realistic Labs</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Real-World Cybersecurity Projects</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {realWorldProjects.map(({ title, summary, icon: Icon }, idx) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className="group rounded-xl border border-cyan-300/10 bg-slate-900/30 p-6 hover:border-cyan-300/35 hover:bg-cyan-300/[0.03] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center rounded-lg border border-cyan-300/10 bg-cyan-300/5 p-2.5 text-cyan-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 transition duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-bold text-white group-hover:text-cyan-200 transition duration-200">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-400 group-hover:text-slate-350 transition duration-200">{summary}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technologies/Tools list */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute top-[-30%] right-[10%] size-[320px] bg-cyan-500/5 blur-[90px]" />
        <Container>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            <Sparkles size={12} className="text-cyan-300" />
            <span>Modern Tools Ecosystem</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Tools & Workflows Covered</h2>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.02] px-4 py-2.5 text-sm font-semibold text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-300/10 transition duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Curriculum Preview */}
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Syllabus Highlights</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">From Foundations to Field-Ready</h2>
            </div>
            <Link href="/curriculum" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200 group">
              Full 12-Week Curriculum <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumModules.slice(0, 5).map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Enrollment Quick Trigger */}
      <section id="google-form-placeholder" className="relative overflow-hidden py-16">
        <Container>
          <div className="relative rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-10 shadow-lg shadow-black/40 backdrop-blur-md overflow-hidden sm:px-12">
            <div className="cyber-grid absolute inset-0 opacity-15 pointer-events-none" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Fast Enrollment</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white">Google Form Submission</h2>
                <p className="mt-3 max-w-2xl text-slate-350">
                  Fill the direct inquiry Google Form to queue your profile. The academy team will review details and confirm slot schedules.
                </p>
              </div>
              <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3.5 font-bold text-black shadow-md shadow-cyan-950 transition hover:bg-cyan-200 active:scale-98">
                Open Enrollment Form <ArrowRight size={18} />
              </EnrollmentLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="relative rounded-xl border border-cyan-300/10 bg-slate-900/30 p-6 backdrop-blur hover:border-cyan-300/25 transition group overflow-hidden">
                <div className="absolute -right-4 -bottom-4 size-14 rounded-full bg-cyan-400/5 blur-lg" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={17} />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-300 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="font-bold text-white group-hover:text-cyan-300 transition duration-200">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Options */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute top-[30%] left-[20%] size-[360px] bg-cyan-500/5 blur-[90px]" />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={12} className="text-cyan-300" />
              <span>Tuition Packages</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Flexible Pricing Tiers</h2>
            <p className="mt-3 text-slate-400">Choose the depth of training matching your career goals.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
            {pricingPlans.map((plan) => {
              const isProfessional = plan.name === "Professional";
              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-2xl border p-8 backdrop-blur-md transition-all duration-300 ${
                    isProfessional
                      ? "border-cyan-300 bg-cyan-300/[0.04] shadow-[0_0_35px_rgba(34,211,238,0.16)] scale-102 z-10"
                      : "border-cyan-300/10 bg-slate-900/40 hover:border-cyan-300/30"
                  }`}
                >
                  {isProfessional && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-2xs font-extrabold uppercase tracking-wider text-black">
                      <ShieldCheck size={11} /> Recommended
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{plan.name}</h3>
                    <p className="mt-4 text-4xl font-extrabold text-cyan-300 tracking-tight">{plan.price}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-350">{plan.description}</p>
                    
                    <ul className="mt-6 border-t border-white/5 pt-6 grid gap-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm text-slate-300">
                          <Check className="mt-0.5 shrink-0 text-cyan-300" size={17} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <EnrollmentLink className={`inline-flex w-full justify-center rounded-lg px-4 py-3.5 text-center text-sm font-bold shadow-md transition duration-200 hover:scale-[1.01] active:scale-99 ${
                      isProfessional
                        ? "bg-cyan-300 text-black shadow-cyan-950 hover:bg-cyan-200"
                        : "border border-cyan-300/30 bg-slate-900/60 text-cyan-200 hover:bg-cyan-300/5 hover:border-cyan-300/60"
                    }`}>
                      Enroll Now
                    </EnrollmentLink>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection />

      {/* Frequently Asked Questions */}
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[-20%] right-[10%] size-[280px] bg-cyan-500/5 blur-[95px]" />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={12} className="text-cyan-300" />
              <span>Student Inquiries</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          
          <div className="mt-8 grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-cyan-300/10 bg-slate-900/30 overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-white hover:text-cyan-200 hover:bg-cyan-300/[0.02] transition"
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-cyan-300 shrink-0 ml-4"
                    >
                      <ChevronRight size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/5 bg-slate-950/20 p-5 text-sm leading-7 text-slate-350">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
