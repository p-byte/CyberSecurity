"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send, Terminal } from "lucide-react";
import { siteConfig } from "@/content/site";
import { EnrollmentLink } from "./enrollment-link";
import { ExternalLink } from "./external-link";

const terminalLines = [
  "$ nmap -sV academy.local",
  "22/tcp open ssh",
  "80/tcp open cyber-training",
  "$ burp --practice --ethics",
  "status: learner ready",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-300/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.20),transparent_32%),linear-gradient(135deg,rgba(6,182,212,0.12),transparent_35%)]" />
      <div className="cyber-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-200">
            Real-world SOC and offensive security training
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Learn Cybersecurity From Industry Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Industry-Oriented Cybersecurity Training With Real-World Practical Labs
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Learn from Pruthvi Krishna Chowdary, Security Engineer at Flipkart, with mentor-led SOC, VAPT,
            ethical hacking, cloud security, SIEM, and bug bounty training.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:bg-cyan-200">
              Enroll Now <ArrowRight size={18} />
            </EnrollmentLink>
            <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded border border-cyan-300/40 bg-white/[0.03] px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
              <MessageCircle size={18} /> Join WhatsApp
            </ExternalLink>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/contact" className="inline-flex items-center gap-2 text-cyan-200 hover:text-cyan-100">
              <Send size={16} /> Contact Trainer
            </Link>
            <Link href="/curriculum" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
              View Curriculum <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="rounded border border-cyan-300/20 bg-black/70 p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3 text-slate-400">
            <Terminal size={18} className="text-cyan-200" />
            <span className="text-sm">training-terminal</span>
          </div>
          <div className="font-mono text-sm leading-7 text-cyan-100 sm:text-base">
            {terminalLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 + index * 0.28 }}
                className="typing-line"
              >
                {line}
              </motion.p>
            ))}
            <span className="terminal-cursor mt-2 inline-block h-5 w-2 bg-cyan-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
