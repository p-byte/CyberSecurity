import Link from "next/link";
import { Mail, MessageCircle, Phone, Send, Share2, ShieldCheck } from "lucide-react";
import { navItems, siteConfig, trainer } from "@/content/site";
import { Container } from "./container";
import { ExternalLink } from "./external-link";

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-black py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1.1fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">{siteConfig.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">{siteConfig.description}</p>
            <div className="mt-5 rounded border border-cyan-300/10 bg-white/[0.03] p-4">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-cyan-200" size={20} />
                <div>
                  <p className="font-semibold text-white">{trainer.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{trainer.role}</p>
                  <p className="mt-1 text-sm text-slate-500">3+ years cybersecurity experience | 2+ years teaching</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Pages</h3>
            <div className="mt-3 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-200 transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Contact</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-400">
              <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center gap-2 hover:text-cyan-200">
                <Phone size={16} /> {siteConfig.phone}
              </ExternalLink>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-cyan-200">
                <Mail size={16} /> {siteConfig.email}
              </a>
              <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center gap-2 hover:text-cyan-200">
                <MessageCircle size={16} /> Join WhatsApp
              </ExternalLink>
            </div>
            <div className="mt-5 flex gap-3">
              {[
                { href: siteConfig.telegram, icon: Send, label: "Telegram" },
                { href: siteConfig.linkedin, icon: Share2, label: "LinkedIn" },
                { href: siteConfig.twitter, icon: Share2, label: "X" },
                { href: siteConfig.github, icon: Share2, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <ExternalLink
                  key={label}
                  aria-label={label}
                  href={href}
                  className="grid size-10 place-items-center rounded border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
                >
                  <Icon size={18} />
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>Copyright {new Date().getFullYear()} Cyber security Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-cyan-200">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-cyan-200">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
