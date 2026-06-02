import { ArrowRight, MessageCircle, Info } from "lucide-react";
import { siteConfig } from "@/content/site";
import { EnrollmentLink } from "./enrollment-link";
import { ExternalLink } from "./external-link";

export function CTASection({
  title = "Ready to start cybersecurity training with mentors?",
  description = "Enroll for industry-oriented SOC, VAPT, ethical hacking, and bug bounty training with real-world practical labs.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Subtle bottom glow */}
      <div className="ambient-glow absolute bottom-[-40%] left-[30%] size-[320px] bg-cyan-500/10 blur-[80px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-12 shadow-xl shadow-black/40 backdrop-blur-md overflow-hidden sm:px-12 sm:py-16 md:px-16">
          
          {/* Cybernetic grid inside panel */}
          <div className="cyber-grid absolute inset-0 opacity-15 pointer-events-none" />
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                <Info size={12} className="text-cyan-300" />
                <span>Immediate Enrollment Advisory</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-350">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
              <EnrollmentLink className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-cyan-300 px-6 py-3.5 font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.28)] hover:bg-cyan-200 hover:scale-[1.02] active:scale-98 transition duration-200">
                Enroll Now <ArrowRight size={18} />
              </EnrollmentLink>
              <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-cyan-300/35 bg-slate-950/60 px-6 py-3.5 font-semibold text-cyan-100 hover:bg-cyan-300/10 hover:border-cyan-300/60 hover:scale-[1.02] active:scale-98 transition duration-200">
                <MessageCircle size={18} className="text-emerald-400" /> WhatsApp Admission
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
