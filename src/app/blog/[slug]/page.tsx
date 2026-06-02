import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, Calendar, User, Clock, ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { blogPosts } from "@/content/site";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";

type BlogParams = {
  slug: string;
};

// 1. Generate static paths for Next.js prerendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate dynamic SEO metadata
export async function generateMetadata({ params }: { params: Promise<BlogParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return createMetadata({ title: "Article Not Found", path: "/blog" });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<BlogParams> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="relative overflow-hidden border-b border-cyan-300/10 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_35%)] py-12">
        <div className="ambient-glow absolute top-0 right-0 size-[320px] bg-cyan-500/5 blur-[80px]" />
        <div className="cyber-grid absolute inset-0 opacity-15" />
        
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 group mb-6 transition"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition" /> Back to Blog
            </Link>

            {/* Category Tag */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-2xs font-extrabold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-cyan-300" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-cyan-300" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-cyan-300" />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content Area */}
      <Section className="relative overflow-hidden">
        <div className="ambient-glow absolute bottom-[10%] left-[10%] size-[240px] bg-cyan-500/5 blur-[80px]" />
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Body text styled carefully with high-end margins */}
            <article className="prose prose-invert max-w-none text-slate-300 text-base leading-8 space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Style headings or bullet points nicely if they start with markdown syntax
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-white tracking-tight pt-4 text-cyan-300">
                      {paragraph.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith("*")) {
                  return (
                    <ul key={index} className="list-disc pl-5 space-y-2 text-slate-350">
                      {paragraph.split("\n").map((li, liIdx) => (
                        <li key={liIdx}>
                          {li.replace("*", "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index}>
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Interactive Discuss Tag/Section */}
            <div className="mt-12 rounded-xl border border-cyan-300/10 bg-slate-900/40 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/5 text-cyan-300">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Discuss this topic with mentors</h4>
                  <p className="text-xs text-slate-405 mt-0.5">Have questions regarding the lab or workflows described?</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs font-semibold text-slate-400">Join our learning networks to get detailed guidance.</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 group"
                >
                  Message Academy <ArrowRight size={14} className="group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
