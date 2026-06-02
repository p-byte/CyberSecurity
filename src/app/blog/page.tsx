import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Sparkles } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { blogPosts } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description: "Practical articles, threat analysis guides, and lab walk-throughs written by our security instructors.",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Cybersecurity notes from the academy"
        description="Practical articles and lab tutorials written by our security practitioners to help you move from theory to portfolio-ready skills."
      />
      
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute top-[20%] right-[20%] size-[280px] bg-cyan-500/5 blur-[85px]" />
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-cyan-300/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.02] hover:shadow-[0_8px_30px_rgba(34,211,238,0.05)] overflow-hidden"
              >
                {/* Decorative glow panel inside card */}
                <div className="absolute -right-6 -bottom-6 size-14 rounded-full bg-cyan-400/5 blur-xl pointer-events-none" />
                
                <div>
                  {/* Category and date row */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 text-xs font-semibold">
                    <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wider text-cyan-200">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar size={13} className="text-cyan-300" />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-200 transition duration-200 tracking-tight leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer read time & redirection link */}
                <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-cyan-300" />
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 group/link transition"
                  >
                    Read Article <ChevronRight size={14} className="group-hover/link:translate-x-0.5 transition" />
                  </Link>
                </div>

              </article>
            ))}
          </div>
        </Container>
      </Section>
      
      <CTASection title="Turn cybersecurity theory into practical labs" description="Move from reading articles to guided offensive environments, defensive log correlation, and direct mentor reviews." />
    </>
  );
}
