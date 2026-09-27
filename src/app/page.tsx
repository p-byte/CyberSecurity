"use client";

import Link from "next/link";
import Image from "next/image";
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
import { SyllabusDownloadButton } from "@/components/syllabus-download";
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
  courseCatalog,
} from "@/content/site";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CyberVSI Career Programs",
    description: "Practical cybersecurity and full stack developer programs with guided labs, mentor support and portfolio projects.",
    provider: { "@type": "Organization", name: "CyberVSI - Cyber Vision Software Institute" },
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

      {/* Lead Mentor Section */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[-10%] right-[10%] size-[300px] bg-emerald-500/5 blur-[90px]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Image
                src="/n-durga-prasad.png"
                alt="N Durga Prasad, Head of Business Development at CyberVSI"
                width={160}
                height={160}
                className="mb-6 size-32 rounded-2xl border border-cyan-300/25 object-cover object-top shadow-xl shadow-cyan-950/30 sm:size-36"
              />
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Sparkles size={12} className="text-cyan-300" />
                <span>CyberVSI Leadership</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{trainer.name}</h2>
              <p className="mt-2 text-lg font-medium text-cyan-300/90">{trainer.role}</p>
              <p className="mt-5 leading-7 text-slate-300">{trainer.bio}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {trainer.linkedin ? (
                  <ExternalLink href={trainer.linkedin} className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/35 bg-white/[0.02] px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/10 transition duration-200">
                    LinkedIn Profile <ArrowRight size={18} />
                  </ExternalLink>
                ) : null}
                <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-bold text-black hover:bg-cyan-200 shadow-md shadow-cyan-950 transition duration-200">
                  <MessageCircle size={18} /> Contact
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
              Learn from specialist mentors across cybersecurity and full stack development, with guided projects and practical feedback.
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">CyberVSI Enrollment</h2>
                <p className="mt-3 max-w-2xl text-slate-350">
                  Complete the secure CyberVSI enrollment form to share your profile. The academy team will review your details and confirm the next batch schedule.
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
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Four Career-Focused Programs</h2>
            <p className="mt-3 text-slate-400">Choose cybersecurity, software development, Microsoft business applications, or cloud DevSecOps, then enquire for the right learning plan.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto items-stretch">
            {pricingPlans.map((plan) => {
              const course = courseCatalog.find((item) => item.slug === plan.slug);
              return (
                <article
                  key={plan.name}
                  className="relative flex flex-col justify-between rounded-2xl border border-cyan-300/15 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
                >
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{plan.name}</h3>
                    <p className="mt-4 text-lg font-bold text-cyan-200">Click to enquire for course details</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-amber-300">
                      <Star size={16} fill="currentColor" /> {plan.rating} learner rating
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Mentor: {plan.mentor}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{plan.schedule}</p>
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
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link href={`/courses/${plan.slug}`} className="inline-flex items-center justify-center rounded-lg border border-cyan-300/30 bg-slate-950/60 px-4 py-3.5 text-center text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10">View Course</Link>
                      <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-3.5 text-center text-sm font-bold text-black transition hover:bg-emerald-300"><MessageCircle size={16} /> WhatsApp</ExternalLink>
                      {course ? <SyllabusDownloadButton course={course} /> : null}
                    </div>
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
