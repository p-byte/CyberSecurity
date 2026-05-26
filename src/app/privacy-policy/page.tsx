import type { Metadata } from "next";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Privacy Policy", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" description="How Cyber security Academy handles learner enquiries and course communication data." />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-5 leading-8 text-slate-300">
            <p>We collect contact details submitted through enquiry forms, WhatsApp, Telegram, or email to respond to course questions and admissions requests.</p>
            <p>We do not sell learner data. Access is limited to authorized academy staff and service providers needed for course communication.</p>
            <p>You may request correction or deletion of your contact information by emailing the academy contact address.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
