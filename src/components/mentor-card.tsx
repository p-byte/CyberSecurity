"use client";

import { motion } from "framer-motion";
import { Share2, ShieldCheck } from "lucide-react";
import type { MentorProfile } from "@/content/site";
import { ExternalLink } from "./external-link";

export function MentorCard({ mentor, index }: { mentor: MentorProfile; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group rounded border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-14 place-items-center rounded border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
          <ShieldCheck size={28} />
        </div>
        {"linkedin" in mentor && mentor.linkedin ? (
          <ExternalLink href={mentor.linkedin} aria-label={`${mentor.name} LinkedIn`} className="grid size-10 place-items-center rounded border border-white/10 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200">
            <Share2 size={18} />
          </ExternalLink>
        ) : null}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{mentor.name}</h3>
      <p className="mt-1 text-cyan-100">{mentor.role}</p>
      <div className="mt-4 grid gap-2">
        {mentor.experience.map((item) => (
          <p key={item} className="text-sm text-slate-400">{item}</p>
        ))}
      </div>
      <p className="mt-5 leading-7 text-slate-300">{mentor.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {mentor.specialties.map((specialty) => (
          <span key={specialty} className="rounded border border-cyan-300/20 bg-black/40 px-3 py-1 text-xs text-cyan-100">
            {specialty}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function MentorGrid({ mentors }: { mentors: MentorProfile[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {mentors.map((mentor, index) => (
        <MentorCard key={mentor.name} mentor={mentor} index={index} />
      ))}
    </div>
  );
}
