import type { LucideIcon } from "lucide-react";

export function ModuleCard({ title, summary, icon: Icon }: { title: string; summary: string; icon: LucideIcon }) {
  return (
    <article className="group relative rounded-xl border border-cyan-300/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04] hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] overflow-hidden">
      {/* Decorative top-right highlight */}
      <div className="absolute -right-6 -top-6 size-16 rounded-full bg-cyan-400/5 blur-xl group-hover:bg-cyan-400/10 transition-all duration-300" />
      
      <div className="inline-flex items-center justify-center rounded-lg border border-cyan-300/10 bg-cyan-300/5 p-2.5 text-cyan-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 group-hover:text-cyan-200 transition duration-300">
        <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-200 transition-colors duration-250">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400 group-hover:text-slate-350 transition-colors duration-250">{summary}</p>
    </article>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-cyan-300/10 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.12),transparent_38%)] py-16 sm:py-20">
      <div className="ambient-glow absolute top-[-20%] right-[-10%] size-[400px] bg-cyan-500/10 blur-[100px]" />
      <div className="cyber-grid absolute inset-0 opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
