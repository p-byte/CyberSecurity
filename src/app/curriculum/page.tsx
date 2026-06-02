"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { ModuleCard, PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { curriculumModules, curriculumTracks } from "@/content/site";

export default function CurriculumPage() {
  const [activeModule, setActiveModule] = useState<number | null>(1);

  return (
    <>
      <PageHero
        eyebrow="Syllabus"
        title="12-week cybersecurity syllabus from foundations to AI-driven defense"
        description="The program is built around the IITR CYB topic workbook coverage, teaching you core networking, defensive triage, offensive exploitation verification, and AI-driven defense workflows."
      />
      
      {/* Grid Summary Cards */}
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[20%] left-[20%] size-[240px] bg-cyan-500/5 blur-[80px]" />
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumModules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Accordion Detailed Syllabus */}
      <Section className="border-y border-cyan-300/10 bg-slate-950/40 relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[-10%] right-[10%] size-[300px] bg-cyan-500/5 blur-[90px]" />
        <Container>
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={12} className="text-cyan-300" />
              <span>Full Coverage</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Module-Wise Interactive Syllabus</h2>
            <p className="mt-3 text-slate-400">Click on any module below to browse its detailed week-by-week session breakdowns.</p>
          </div>

          <div className="mt-8 grid gap-5 max-w-5xl mx-auto">
            {curriculumTracks.map((track) => {
              const isOpen = activeModule === track.module;
              return (
                <article
                  key={track.module}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-cyan-300 bg-cyan-300/[0.03] shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                      : "border-cyan-300/10 bg-slate-900/30 hover:border-cyan-300/30"
                  }`}
                >
                  {/* Accordion Toggle Trigger */}
                  <button
                    onClick={() => setActiveModule(isOpen ? null : track.module)}
                    className="flex w-full flex-col justify-between gap-4 p-6 text-left md:flex-row md:items-center hover:bg-cyan-300/[0.01] transition"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                        <Calendar size={13} />
                        <span>Module {track.module} &bull; {track.weeks}</span>
                      </div>
                      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">{track.name}</h3>
                    </div>
                    <div className="flex items-center gap-3.5 self-start md:self-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                        <BookOpen size={12} /> {track.sessions.length} session blocks
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-cyan-300 shrink-0"
                      >
                        <ChevronRight size={20} />
                      </motion.span>
                    </div>
                  </button>

                  {/* Expanded Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/5 bg-slate-950/30 px-6 py-6 sm:px-8">
                          <p className="text-base leading-7 text-slate-300 mb-6 font-medium">
                            {track.summary}
                          </p>
                          
                          <div className="grid gap-3.5 sm:grid-cols-2">
                            {track.sessions.map((session, idx) => (
                              <motion.div
                                key={session}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.04, duration: 0.25 }}
                                className="flex gap-3 rounded-lg border border-cyan-300/5 bg-slate-900/50 p-4 text-sm text-slate-300 hover:border-cyan-300/15 hover:bg-slate-900/80 transition duration-200"
                              >
                                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
                                <span className="font-semibold text-slate-200">{session}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      
      <CTASection title="Ready to follow the complete syllabus?" description="Fill the Google Form to join the next cybersecurity batch and get guidance on the right starting point." />
    </>
  );
}
