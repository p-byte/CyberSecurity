import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { EnrollmentLink } from "@/components/enrollment-link";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { pricingPlans } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Pricing", path: "/pricing" });

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Choose the training path that matches your goal" description="Start with foundations, go deep into professional labs, or train an enterprise team with custom scenarios." />
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`rounded border p-6 ${plan.featured ? "border-cyan-300 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.16)]" : "border-cyan-300/10 bg-white/[0.035]"}`}>
                <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-3 text-4xl font-semibold text-cyan-200">{plan.price}</p>
                <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>
                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 shrink-0 text-cyan-200" size={17} /> {feature}
                    </li>
                  ))}
                </ul>
                <EnrollmentLink className="mt-8 inline-flex w-full justify-center rounded bg-cyan-300 px-4 py-3 font-semibold text-black">Enroll Now</EnrollmentLink>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Talk to Mentor before enrolling" description="Get guidance on whether Beginner, Professional, or Enterprise training fits your current cybersecurity level." />
    </>
  );
}
