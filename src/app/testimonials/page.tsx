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
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded border border-cyan-300/10 bg-white/[0.035] p-6">
                <Star className="text-cyan-200" />
                <p className="mt-5 leading-7 text-slate-300">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-6 font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Start building your own cybersecurity outcomes" description="Join mentor-led practical training for SOC, VAPT, ethical hacking, and bug bounty skills." />
    </>
  );
}
