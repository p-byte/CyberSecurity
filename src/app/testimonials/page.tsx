import type { Metadata } from "next";
import { Star } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { testimonials } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Testimonials", path: "/testimonials" });

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Learners building practical cybersecurity confidence" description="Student feedback from SOC, cloud security, and bug bounty learning paths." />
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[20%] right-[20%] size-[280px] bg-cyan-500/5 blur-[85px]" />
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="relative rounded-xl border border-cyan-300/10 bg-slate-900/30 p-6 backdrop-blur hover:border-cyan-300/25 transition group overflow-hidden">
                <div className="absolute -right-4 -bottom-4 size-14 rounded-full bg-cyan-400/5 blur-lg pointer-events-none" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={17} />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-300 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="font-bold text-white group-hover:text-cyan-350 transition duration-200">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Start building your own cybersecurity outcomes" description="Join mentor-led practical training for SOC, VAPT, ethical hacking, and bug bounty skills." />
    </>
  );
}
