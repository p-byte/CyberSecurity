import type { Metadata } from "next";
import { PaymentDetails } from "@/components/payment-details";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Payment Details", path: "/payment", description: "Official CyberVSI bank transfer and UPI payment details." });

export default function PaymentPage() {
  return <><PageHero eyebrow="CyberVSI Admissions" title="Complete your program payment" description="Use the official bank details or scan a UPI QR code after confirming your enrollment with the CyberVSI admissions team." /><Section><Container><PaymentDetails /></Container></Section></>;
}
