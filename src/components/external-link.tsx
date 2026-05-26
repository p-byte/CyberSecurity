import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { safeExternalHref } from "@/lib/links";

type ExternalLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>;

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} href={safeExternalHref(href)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
