import type { Metadata } from "next";
import { ArrowRight, Mail, MessageCircle, Send, Share2, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { EnrollmentLink } from "@/components/enrollment-link";
import { ExternalLink } from "@/components/external-link";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";
import { siteConfig, trainer } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Enroll in Cyber security Academy courses via our quick inquiry lead form or official Google Form registration sheet.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with our security experts"
        description="Share your training goals through our secure inquiry form, submit the official Google Form registry, or connect immediately via our social networks."
      />
      
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[25%] left-[25%] size-[280px] bg-cyan-500/5 blur-[85px]" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            
            {/* Left Column: Stateful lead capture form */}
            <InquiryForm />

            {/* Right Column: Google Form fallback & social links */}
            <div className="space-y-6">
              
              {/* Google Form panel */}
              <div className="rounded-2xl border border-cyan-300/10 bg-slate-900/40 p-6 backdrop-blur-md hover:border-cyan-300/25 transition duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-cyan-300" />
                  <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Direct Registry</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Official Google Form Enrollment</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Prefer direct registration? Fill out our official admissions form. We will review your enrollment and match you with the next batch schedule.
                </p>
                <EnrollmentLink className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-black shadow-md shadow-cyan-950 transition hover:bg-cyan-200 active:scale-98">
                  Open Google Form <ArrowRight size={16} />
                </EnrollmentLink>
              </div>

              {/* Social Channels list */}
              <div className="grid gap-3">
                {[
                  { label: "WhatsApp Chat", value: siteConfig.phone, href: siteConfig.whatsapp, icon: MessageCircle, color: "text-emerald-450 bg-emerald-400/5 hover:border-emerald-300/30" },
                  { label: "Telegram Support", value: "Join academy channel", href: siteConfig.telegram, icon: Send, color: "text-cyan-455 bg-cyan-300/5 hover:border-cyan-300/30" },
                  { label: "Email Inquiry", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail, color: "text-slate-350 bg-white/5 hover:border-slate-300/20", mail: true },
                  { label: "Trainer LinkedIn", value: trainer.name, href: siteConfig.linkedin, icon: Share2, color: "text-blue-450 bg-blue-400/5 hover:border-blue-300/30" },
                ].map(({ label, value, href, icon: Icon, mail, color }) => {
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
      
      <CTASection title="Looking for batch customization?" description="Submit our inquiry form first with your requirements, then drop our mentors a text to schedule an enterprise consultation." />
    </>
  );
}
