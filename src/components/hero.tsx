"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send, Terminal, Shield } from "lucide-react";
import { siteConfig, trainer } from "@/content/site";
import { EnrollmentLink } from "./enrollment-link";
import { ExternalLink } from "./external-link";

const terminalLines = [
  "$ nmap -sC -sV academy.local",
  "22/tcp open  ssh     OpenSSH 9.2p1",
  "80/tcp open  http    Nginx (Cyber Academy Platform)",
  "$ burp --engagement --ethics --learn",
  "[+] engagement verified: ethical learning sandbox",
  "[+] status: cadet ready for deployment",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-300/10 py-8 lg:py-0">
      {/* Decorative ambient blur spheres */}
      <div className="ambient-glow absolute right-[10%] top-[10%] size-[360px] bg-cyan-500/20" />
      <div className="ambient-glow absolute left-[5%] bottom-[15%] size-[280px] bg-emerald-500/10" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.12),transparent_35%),linear-gradient(135deg,rgba(6,182,212,0.06),transparent_40%)]" />
      <div className="cyber-grid absolute inset-0 opacity-30" />
      
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="z-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-cyan-200 backdrop-blur-md">
            <Shield size={14} className="text-cyan-300" />
            <span>Real-World SOC & Offensive Security Labs</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build Your Career
            <br /><span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400 bg-clip-text text-transparent">With Industry Experts</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Industry-Oriented Cybersecurity Training With Real-World Practical Labs
          </p>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            Choose practical Cybersecurity or Full Stack Developer training with mentor support, guided labs and portfolio-ready projects. Connect with{" "}
            <span className="font-semibold text-slate-200">{trainer.name}</span>, {trainer.role.toLowerCase()} at CyberVSI.
          </p>
          
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-6 py-3.5 font-bold text-black shadow-[0_0_25px_rgba(34,211,238,0.35)] transition duration-200 hover:bg-cyan-200 hover:scale-[1.02] active:scale-98">
              Enroll Now <ArrowRight size={18} />
            </EnrollmentLink>
            <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded border border-cyan-300/35 bg-white/[0.02] px-6 py-3.5 font-semibold text-cyan-100 transition duration-200 hover:bg-cyan-300/10 hover:border-cyan-300/60 hover:scale-[1.02] active:scale-98">
              <MessageCircle size={18} className="text-emerald-400" /> Join WhatsApp
            </ExternalLink>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 group">
              <Send size={16} /> Contact Trainer
              <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/curriculum" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 group">
              View Syllabus
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </motion.div>

        {/* Interactive Typewriter Terminal Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.75, ease: "easeOut" }}
          className="z-10 rounded-xl border border-cyan-300/20 bg-slate-950/75 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md"
        >
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-cyan-300 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm tracking-wide text-slate-300">academy-terminal-v2.sh</span>
            </div>
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/60" />
              <span className="size-2.5 rounded-full bg-yellow-500/60" />
              <span className="size-2.5 rounded-full bg-green-500/60" />
            </div>
          </div>
          <div className="font-mono text-xs sm:text-sm leading-7 text-cyan-100/90 min-h-[180px]">
            {terminalLines.map((line, index) => {
              const isCommand = line.startsWith("$");
              const isVerified = line.startsWith("[+]");
              return (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + index * 0.32, duration: 0.25 }}
                  className={`typing-line ${
                    isCommand ? "text-cyan-200" : isVerified ? "text-emerald-400 font-semibold" : "text-slate-400 pl-4"
                  }`}
                >
                  {line}
                </motion.p>
              );
            })}
            <div className="flex items-center gap-1 mt-2 pl-1">
              <span className="text-cyan-300">$</span>
              <span className="terminal-cursor inline-block h-4 w-2 bg-cyan-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple internal icon to replace Lucide chevron if not imported
function ChevronRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
