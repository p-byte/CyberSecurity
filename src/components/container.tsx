import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return <section className={`py-16 sm:py-20 ${className}`}>{children}</section>;
}
