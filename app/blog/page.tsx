import type { Metadata } from "next";
import ContactSection from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Engineering Insights | Menarc Solutions",
  description:
    "Read the latest engineering insights, web development trends, AI workflow automation tutorials, and Core Web Vitals guides by Menarc Solutions.",
  keywords: [
    "Menarc Blog",
    "Web Development Trends 2026",
    "AI Workflow Automation Tutorial",
    "Next.js App Router Performance",
    "Technical SEO Guide",
  ],
};

const blogPosts = [
  {
    title: "Architecting Next.js 15 Applications for 100/100 Core Web Vitals",
    category: "Engineering & Speed",
    date: "May 14, 2026",
    author: "Menarc Engineering",
    readTime: "7 min read",
    desc: "A comprehensive deep-dive into server-side script injection, dynamic import optimization, and font subsetting to eliminate Cumulative Layout Shift (CLS) in production.",
    slug: "architecting-nextjs-100-core-web-vitals",
    featured: true,
  },
  {
    title: "Building Resilient n8n Automation Pipelines for Enterprise WhatsApp Sync",
    category: "AI & Automation",
    date: "May 10, 2026",
    author: "Menarc Solutions",
    readTime: "5 min read",
    desc: "Learn how to establish zero-latency webhook listeners, error-handling queues, and automated WhatsApp CRM synchronization without relying on bloated legacy middleware.",
    slug: "building-resilient-n8n-automation-pipelines",
    featured: false,
  },
  {
    title: "Generative Engine Optimization (GEO): Ranking on ChatGPT & Perplexity",
    category: "SEO & AI Search",
    date: "May 5, 2026",
    author: "Menarc SEO Team",
    readTime: "6 min read",
    desc: "Why traditional keyword stuffing is dead and how machine-readable `llms.txt` endpoints and Knowledge Graph entity anchoring dominate AI search crawlers.",
    slug: "generative-engine-optimization-geo-guide",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Engineering & Architecture Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            The Menarc <span className="gradient-titanium-gold">Engineering</span> Blog.
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            Deep technical breakdowns, architectural tutorials, and digital strategy guides written by our senior software engineers and solutions architects.
          </p>
        </div>
      </section>

      {/* Blog Posts Bento Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#f5f5f7] border ${
                post.featured ? "border-2 border-[#1d1d1f] shadow-xl scale-105 z-10 hover:-translate-y-1" : "border-[#d2d2d7]/60 hover:border-[#d2d2d7] hover:-translate-y-1 shadow-lg"
              } transition-all duration-300 flex flex-col justify-between group relative`}
            >
              {post.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#1d1d1f] text-white font-bold text-[10px] tracking-wider uppercase shadow-md">
                  Featured Article
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6 text-xs text-[#86868b]">
                  <span className="font-bold uppercase tracking-wider text-white bg-[#1d1d1f] px-3 py-1 rounded-full border border-[#1d1d1f] shadow-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-medium tracking-tight">
                    <BookOpen className="w-3.5 h-3.5 text-[#1d1d1f]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">
                  {post.title}
                </h3>

                <p className="text-sm text-[#86868b] leading-relaxed mb-8 tracking-tight">
                  {post.desc}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-xs text-[#86868b] mb-8 pb-8 border-b border-[#d2d2d7]/60 font-medium tracking-tight">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#1d1d1f]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1d1d1f]" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="w-full py-4 rounded-full bg-white border border-[#d2d2d7]/60 hover:bg-[#1d1d1f] hover:text-white font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-tight shadow-sm"
              >
                <span>Read Full Article</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
