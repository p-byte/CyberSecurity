import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return <section className={`py-11 sm:py-14 ${className}`}>{children}</section>;
}
