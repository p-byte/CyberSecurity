import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/cards";
import { Container, Section } from "@/components/container";
import { blogPosts } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Blog", path: "/blog" });

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Cybersecurity notes from the academy" description="Practical articles for learners building defensive and offensive security skills." />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded border border-cyan-300/10 bg-white/[0.035] p-6">
                <time className="text-sm text-cyan-200">{new Date(post.date).toLocaleDateString("en-IN")}</time>
                <h2 className="mt-4 text-xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 leading-7 text-slate-400">{post.excerpt}</p>
                <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-cyan-200">Discuss this topic</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Turn cybersecurity reading into hands-on practice" description="Move from articles to guided labs, mentor feedback, and real-world security projects." />
    </>
  );
}
