import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { EnrollmentLink } from "./enrollment-link";
import { ExternalLink } from "./external-link";

export function CTASection({
  title = "Ready to start cybersecurity training with mentors?",
  description = "Enroll for industry-oriented SOC, VAPT, ethical hacking, and bug bounty training with real-world practical labs.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-cyan-300/10 bg-cyan-300/[0.04] py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Talk to Mentor</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{title}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <EnrollmentLink className="inline-flex items-center justify-center gap-2 rounded bg-cyan-300 px-5 py-3 font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.28)] hover:bg-cyan-200">
            Enroll Now <ArrowRight size={18} />
          </EnrollmentLink>
          <ExternalLink href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded border border-cyan-300/40 bg-black/40 px-5 py-3 font-semibold text-cyan-100 hover:bg-cyan-300/10">
            <MessageCircle size={18} /> Join WhatsApp
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
