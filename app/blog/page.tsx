import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Insights, Web Design & Automation Blog | Menarc",
  description:
    "Get honest pricing breakdowns, design trends, and operations automation guides for businesses in Chennai and India from Marco D'Agostino.",
  alternates: {
    canonical: "https://menarc.in/blog",
  },
};

export default function BlogListingPage() {
  const posts = getBlogPosts();

  // Categories list for reference
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  // Hero custom elements
  const heroTitle = (
    <>
      <span className="block text-[#1d1d1f]">Honest Tech</span>
      <span className="block text-[#1d1d1f]">Insights & Guides.</span>
    </>
  );

  const heroSubtitle =
    "No corporate fluff, no buzzwords. Just honest advice on website development costs, workflows, and automating your small business pipelines.";

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <>
      <Hero 
        title={heroTitle} 
        subtitle={heroSubtitle} 
        badge="Menarc Solutions Blog" 
        bgImage="https://images.pexels.com/photos/8972786/pexels-photo-8972786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />

      <section className="bg-white py-16 md:py-24 relative z-20">
        <div className="container-custom px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#86868b] mb-12">
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
            <span className="text-[#d2d2d7]/80 select-none">·</span>
            <span className="text-[#1d1d1f] font-medium">Blog</span>
          </nav>

          {/* Categories bar */}
          <div className="flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-[#d2d2d7]/30">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mr-4">
              Topics:
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#1d1d1f] text-white text-xs font-medium cursor-default">
              All Articles
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/40 text-[#86868b] text-xs font-medium transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7]/60">
              <p className="text-sm text-[#86868b] tracking-tight">
                No blog posts found. Check back soon.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-20">
                  <h3 className="gradient-titanium-gold font-bold text-xs uppercase tracking-wider mb-6">
                    Featured Article
                  </h3>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group"
                  >
                    <div className="lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7]/50 shadow-md">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-[#86868b] mb-4">
                        <span className="px-3 py-1 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-full font-medium text-[#1d1d1f]">
                          {featuredPost.category}
                        </span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-[#1d1d1f] tracking-tighter mb-4 leading-tight group-hover:text-menarc-gold transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-sm text-[#86868b] leading-relaxed mb-6 tracking-tight">
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-menarc-gold/10 flex items-center justify-center border border-menarc-gold/20 font-bold text-[#c5a059] text-xs">
                          MD
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1d1d1f]">
                            {featuredPost.author}
                          </p>
                          <p className="text-[10px] text-[#86868b]">
                            Prahran Plumber & Web Dev
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Grid Posts */}
              {gridPosts.length > 0 && (
                <div>
                  <h3 className="gradient-titanium-gold font-bold text-xs uppercase tracking-wider mb-8 border-t border-[#d2d2d7]/30 pt-12">
                    Latest Publications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex flex-col group"
                      >
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#f5f5f7] border border-[#d2d2d7]/50 shadow-sm mb-6">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                          />
                        </div>
                        <div className="flex items-center gap-3 text-xs text-[#86868b] mb-3">
                          <span className="font-medium text-[#1d1d1f]">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3 leading-snug group-hover:text-menarc-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#86868b] leading-relaxed mb-4 line-clamp-3 tracking-tight">
                          {post.description}
                        </p>
                        <span className="text-xs font-semibold text-blue-600 hover:text-blue-500 mt-auto inline-flex items-center gap-1">
                          Read Article →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
