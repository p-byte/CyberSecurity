import Link from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type EnrollmentLinkProps = PropsWithChildren<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "onClick" | "aria-label">>;

export function EnrollmentLink({ children, ...props }: EnrollmentLinkProps) {
  return (
    <Link href="/enroll" {...props}>
      {children}
    </Link>
  );
}
