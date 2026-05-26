import type { Metadata } from "next";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Terms & Conditions", path: "/terms-and-conditions" });

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms & Conditions" description="Training terms for ethical, legal, and responsible cybersecurity learning." />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-5 leading-8 text-slate-300">
            <p>Course materials are provided for lawful education, authorized testing, and defensive improvement only.</p>
            <p>Learners must not test systems without written permission. Misuse of training methods can lead to removal from the program.</p>
            <p>Fees, schedules, and enterprise arrangements are confirmed during enrolment communication.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
