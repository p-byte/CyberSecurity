"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/content/site";
import { Container } from "./container";
import { EnrollmentLink } from "./enrollment-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white group">
            <span className="grid size-10 place-items-center overflow-hidden rounded border border-cyan-300/40 bg-white p-0.5 transition group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]">
              <Image src="/cvsi-logo.png" alt="CyberVSI logo" width={40} height={40} className="size-full object-contain" priority />
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:text-cyan-200 transition">
              CyberVSI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded px-3 py-2 text-sm font-medium transition duration-250 ${
                    isActive ? "text-cyan-200" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded bg-cyan-300/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
            <EnrollmentLink className="ml-4 rounded bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] transition hover:bg-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.55)]">
              Enroll Now
            </EnrollmentLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded border border-white/10 text-white lg:hidden hover:bg-white/5 active:scale-95 transition"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="border-t border-white/10 bg-slate-950/98 backdrop-blur-2xl lg:hidden overflow-hidden"
          >
            <Container>
              <div className="grid gap-1 py-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded px-3 py-3 text-sm font-medium transition ${
                        isActive ? "bg-cyan-300/10 text-cyan-200 border-l-2 border-cyan-300 pl-4" : "text-slate-200 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <ShieldCheck size={16} className="text-cyan-200" />}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <EnrollmentLink
                    onClick={() => setOpen(false)}
                    className="block w-full rounded bg-cyan-300 py-3.5 text-center text-sm font-semibold text-black shadow-lg shadow-cyan-950"
                  >
                    Enroll Now
                  </EnrollmentLink>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
