import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero, ModuleCard } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { curriculumModules } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Curriculum",
  path: "/curriculum",
  description: "Explore the full Cyber security Academy cybersecurity curriculum.",
});

export default function CurriculumPage() {
  return (
    <>
      <PageHero eyebrow="Curriculum" title="A complete path from networking to bug bounty reporting" description="Every module is designed around hands-on practice, safe testing, evidence capture, and remediation thinking." />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {curriculumModules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Want help choosing the right module path?" description="Talk to a mentor about SOC, VAPT, API security, SIEM, cloud security, and bug bounty learning goals." />
    </>
  );
}
