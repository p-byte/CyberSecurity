import Link from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { siteConfig } from "@/content/site";
import { ExternalLink } from "./external-link";

type EnrollmentLinkProps = PropsWithChildren<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "onClick" | "aria-label">>;

export function EnrollmentLink({ children, ...props }: EnrollmentLinkProps) {
  if (siteConfig.enrollmentForm.startsWith("https://")) {
    return (
      <ExternalLink href={siteConfig.enrollmentForm} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={siteConfig.enrollmentForm} {...props}>
      {children}
    </Link>
  );
}
