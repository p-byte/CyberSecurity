import type { Metadata } from "next";
import { ArrowRight, Mail, MessageCircle, Send, Share2, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { EnrollmentLink } from "@/components/enrollment-link";
import { ExternalLink } from "@/components/external-link";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { siteConfig, trainer } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Choose your program, complete the CyberVSI enrollment form, or connect directly with the academy team.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with our security experts"
        description="Select one of four career programs, complete the secure enrollment form, or connect directly with the academy team."
      />
      
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[25%] left-[25%] size-[280px] bg-cyan-500/5 blur-[85px]" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            
            <div className="space-y-6">
              <div className="rounded-2xl border border-cyan-300/15 bg-slate-900/40 p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-cyan-300" />
                  <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Choose your path</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Four programs. One clear next step.</h2>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-lg border border-cyan-300/10 bg-slate-950/50 p-4">
                    <p className="font-bold text-white">Cybersecurity Program</p>
                    <p className="mt-1 text-sm text-slate-400">SOC, VAPT, SIEM, cloud security and ethical hacking labs.</p>
                  </div>
                  <div className="rounded-lg border border-cyan-300/10 bg-slate-950/50 p-4">
                    <p className="font-bold text-white">Full Stack Developer Program</p>
                    <p className="mt-1 text-sm text-slate-400">JavaScript, Node.js, PostgreSQL, React, deployment and capstone delivery.</p>
                  </div>
                  <div className="rounded-lg border border-cyan-300/10 bg-slate-950/50 p-4">
                    <p className="font-bold text-white">Dynamics 365 & Power Platform Program</p>
                    <p className="mt-1 text-sm text-slate-400">Power Apps, Power Automate, Power BI, D365 Sales, Customer Service, and Finance & Operations.</p>
                  </div>
                  <div className="rounded-lg border border-cyan-300/10 bg-slate-950/50 p-4">
                    <p className="font-bold text-white">Cloud & DevSecOps Program</p>
                    <p className="mt-1 text-sm text-slate-400">Cloud foundations, IAM, secure CI/CD, containers, monitoring, and infrastructure as code.</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">Choose your preferred program in the enrollment form so the admissions team can route your request correctly.</p>
                <EnrollmentLink className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-black shadow-md shadow-cyan-950 transition hover:bg-cyan-200 active:scale-98">
                  Open Enrollment Form <ArrowRight size={16} />
                </EnrollmentLink>
              </div>
            </div>

            {/* Right Column: Enrollment & social links */}
            <div className="space-y-6">
              
              {/* Enrollment panel */}
              <div className="rounded-2xl border border-cyan-300/10 bg-slate-900/40 p-6 backdrop-blur-md hover:border-cyan-300/25 transition duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-cyan-300" />
                  <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Direct Registry</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">CyberVSI Enrollment Form</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Complete the admissions form directly on CyberVSI. We will review your enrollment and match you with the next batch schedule.
                </p>
                <EnrollmentLink className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-black shadow-md shadow-cyan-950 transition hover:bg-cyan-200 active:scale-98">
                  Open Enrollment Form <ArrowRight size={16} />
                </EnrollmentLink>
              </div>

              {/* Social Channels list */}
              <div className="grid gap-3">
                {[
                  { label: "WhatsApp Chat", value: siteConfig.phone, href: siteConfig.whatsapp, icon: MessageCircle, color: "text-emerald-450 bg-emerald-400/5 hover:border-emerald-300/30" },
                  { label: "Telegram Support", value: "Join academy channel", href: siteConfig.telegram, icon: Send, color: "text-cyan-455 bg-cyan-300/5 hover:border-cyan-300/30" },
                  { label: "Email Inquiry", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail, color: "text-slate-350 bg-white/5 hover:border-slate-300/20", mail: true },
                  { label: "Trainer LinkedIn", value: trainer.name, href: siteConfig.linkedin, icon: Share2, color: "text-blue-450 bg-blue-400/5 hover:border-blue-300/30" },
                  { label: "Instagram", value: "@cybervsi", href: siteConfig.instagram, icon: Share2, color: "text-pink-300 bg-pink-400/5 hover:border-pink-300/30" },
                ].filter(({ href }) => Boolean(href)).map(({ label, value, href, icon: Icon, mail, color }) => {
                  const baseClass = `flex items-center gap-4 rounded-xl border border-white/5 bg-slate-900/40 p-4 transition duration-250 ${color}`;
                  const innerContent = (
                    <>
                      <span className="grid size-11 place-items-center rounded-lg border border-white/5 bg-slate-950 text-cyan-300 shrink-0">
                        <Icon size={18} />
                      </span>
                      <div>
                        <span className="block font-bold text-white text-sm">{label}</span>
                        <span className="text-xs text-slate-400 font-medium mt-0.5 block">{value}</span>
                      </div>
                    </>
                  );

                  return mail ? (
                    <a key={label} href={href} className={baseClass}>
                      {innerContent}
                    </a>
                  ) : (
                    <ExternalLink key={label} href={href} className={baseClass}>
                      {innerContent}
                    </ExternalLink>
                  );
                })}
              </div>
            </div>
            
          </div>
        </Container>
      </Section>
      
      <CTASection title="Talk to a mentor about the right path" description="Submit the CyberVSI enrollment form with your chosen program, then message the academy team for batch and learning guidance." />
    </>
  );
}
