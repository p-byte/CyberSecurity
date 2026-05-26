import type { LucideIcon } from "lucide-react";

export function ModuleCard({ title, summary, icon: Icon }: { title: string; summary: string; icon: LucideIcon }) {
  return (
    <article className="rounded border border-cyan-300/10 bg-white/[0.035] p-5 backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
      <Icon className="mb-4 text-cyan-200" size={26} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>
    </article>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-cyan-300/10 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.16),transparent_34%)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
