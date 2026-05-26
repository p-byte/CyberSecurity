import type { Metadata } from "next";
import { Mail, MessageCircle, Send, Share2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { EnrollmentLink } from "@/components/enrollment-link";
import { ExternalLink } from "@/components/external-link";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { siteConfig, trainer } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to Cyber security Academy" description="Ask about batches, corporate training, curriculum fit, or the right learning path for your goals." />
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <div className="grid gap-4">
              {[
                { label: "WhatsApp", value: siteConfig.phone, href: siteConfig.whatsapp, icon: MessageCircle },
                { label: "Telegram", value: "Join course updates", href: siteConfig.telegram, icon: Send },
                { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail, mail: true },
                { label: "LinkedIn", value: trainer.name, href: siteConfig.linkedin, icon: Share2 },
              ].map(({ label, value, href, icon: Icon, mail }) => {
                const className = "flex items-center gap-4 rounded border border-cyan-300/10 bg-white/[0.035] p-5 hover:border-cyan-300/40";
                const content = (
                  <>
                    <span className="grid size-11 place-items-center rounded bg-cyan-300/10 text-cyan-200"><Icon size={20} /></span>
                    <span>
                      <span className="block font-semibold text-white">{label}</span>
                      <span className="text-sm text-slate-400">{value}</span>
                    </span>
                  </>
                );

                return mail ? (
                  <a key={label} href={href} className={className}>{content}</a>
                ) : (
                  <ExternalLink key={label} href={href} className={className}>{content}</ExternalLink>
                );
              })}
              <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black hover:bg-cyan-200">
                Google Form Enrollment
              </EnrollmentLink>
            </div>
          </div>
        </Container>
      </Section>
      <section id="google-form-placeholder" className="border-y border-cyan-300/10 bg-white/[0.02] py-14">
        <Container>
          <div className="rounded border border-cyan-300/20 bg-black/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Enrollment Form</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Google Form Enrollment</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Fill the public Google Form to share your details with Cyber security Academy. You can also contact the trainer on WhatsApp or LinkedIn for batch guidance.
            </p>
          </div>
        </Container>
      </section>
      <CTASection title="Talk to Mentor" description="Message Cyber security Academy on WhatsApp or LinkedIn for batch details, mentor guidance, and enrollment support." />
    </>
  );
}
