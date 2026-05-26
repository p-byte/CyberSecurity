"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/content/site";
import { Container } from "./container";
import { EnrollmentLink } from "./enrollment-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <span className="grid size-9 place-items-center rounded border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
              <ShieldCheck size={20} />
            </span>
            <span>Cyber security Academy</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm transition ${
                  pathname === item.href ? "bg-cyan-300/10 text-cyan-200" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <EnrollmentLink className="ml-2 rounded bg-cyan-300 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_18px_rgba(34,211,238,0.25)] hover:bg-cyan-200">
              Enroll Now
            </EnrollmentLink>
          </div>

          <button
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <Container>
            <div className="grid gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-3 text-sm text-slate-200 hover:bg-cyan-300/10"
                >
                  {item.label}
                </Link>
              ))}
              <EnrollmentLink onClick={() => setOpen(false)} className="block rounded bg-cyan-300 px-3 py-3 text-sm font-semibold text-black">
                Enroll Now
              </EnrollmentLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
