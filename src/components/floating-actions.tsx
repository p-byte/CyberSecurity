import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { EnrollmentLink } from "./enrollment-link";
import { ExternalLink } from "./external-link";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <EnrollmentLink className="inline-flex items-center gap-2 rounded bg-cyan-300 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:bg-cyan-200">
        Enroll <ArrowRight size={16} />
      </EnrollmentLink>
      <ExternalLink href={siteConfig.whatsapp} aria-label="Chat on WhatsApp" className="grid size-12 place-items-center rounded-full border border-emerald-300/40 bg-emerald-400 text-black shadow-[0_0_28px_rgba(52,211,153,0.35)] transition hover:bg-emerald-300">
        <MessageCircle size={22} />
      </ExternalLink>
    </div>
  );
}
