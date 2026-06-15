import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | Menarc`;
  const description = post.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.menarc.in/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.menarc.in/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["https://menarc.in/about"],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

// Inline Markdown parser to safely convert formatting to React Nodes
function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentText = text;

  // Split bold (**text**) and links ([label](url))
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const matches = currentText.split(regex);

  return matches.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#1d1d1f]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const label = linkMatch[1];
      const url = linkMatch[2];
      const isExternal = url.startsWith("http");
      return (
        <a
          key={i}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

// Block parser to parse markdown blocks into JSX React elements
function renderMarkdownContent(content: string) {
  const blocks = content.split(/\n\s*\n/);
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Headings H2
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={idx}
          className="text-2xl md:text-3xl font-black text-[#1d1d1f] mt-12 mb-6 tracking-tighter border-b border-[#d2d2d7]/30 pb-3"
        >
          {parseInline(trimmed.slice(3))}
        </h2>
      );
    }

    // Headings H3
    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={idx}
          className="text-xl font-bold text-[#1d1d1f] mt-8 mb-4 tracking-tight"
        >
          {parseInline(trimmed.slice(4))}
        </h3>
      );
    }

    // Callout / Featured snippet blockquote
    if (trimmed.startsWith("> ")) {
      // Check if starts with blockquote bold markdown
      const innerText = trimmed.slice(2);
      const isBold = innerText.startsWith("**") && innerText.endsWith("**");
      const text = isBold ? innerText.slice(2, -2) : innerText;
      return (
        <div
          key={idx}
          className="bg-[#f5f5f7] border-l-4 border-[#c5a059] p-6 md:p-8 rounded-r-3xl my-10 text-sm md:text-base text-[#1d1d1f] leading-relaxed shadow-sm font-medium tracking-tight"
        >
          {isBold ? <strong className="font-bold">{text}</strong> : text}
        </div>
      );
    }

    // Lists
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const lines = trimmed.split("\n");
      return (
        <ul key={idx} className="my-8 space-y-3">
          {lines.map((line, lIdx) => (
            <li
              key={lIdx}
              className="ml-6 list-disc text-sm md:text-base text-[#86868b] leading-relaxed tracking-tight"
            >
              {parseInline(line.replace(/^[\*\-]\s+/, ""))}
            </li>
          ))}
        </ul>
      );
    }

    // Paragraph
    return (
      <p
        key={idx}
        className="text-sm md:text-base text-[#86868b] leading-relaxed mb-6 tracking-tight"
      >
        {parseInline(trimmed)}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema Markup setup
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Lead Developer & Automation Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "Menarc Solutions",
        "url": "https://www.menarc.in"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Menarc Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.menarc.in/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.menarc.in/blog/${slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.menarc.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.menarc.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.menarc.in/blog/${slug}`
      }
    ]
  };

  const faqJsonLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Hero
        title={post.title}
        subtitle={post.description}
        badge={post.category}
        bgImage={post.image}
      />

      <article className="bg-white py-16 md:py-24 relative z-20">
        <div className="container-custom max-w-4xl px-6 mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#86868b] mb-12">
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
            <span className="text-[#d2d2d7]/80 select-none">·</span>
            <Link href="/blog" className="hover:text-[#1d1d1f] transition-colors">
              Blog
            </Link>
            <span className="text-[#d2d2d7]/80 select-none">·</span>
            <span className="text-[#1d1d1f] font-medium line-clamp-1">
              {post.title}
            </span>
          </nav>

          {/* Author info above content */}
          <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#d2d2d7]/30">
            <div className="w-12 h-12 rounded-full bg-menarc-gold/10 flex items-center justify-center border border-menarc-gold/20 font-bold text-[#c5a059] text-base shadow-sm">
              MD
            </div>
            <div>
              <p className="text-sm font-bold text-[#1d1d1f]">{post.author}</p>
              <p className="text-xs text-[#86868b]">
                Published {post.date} • {post.readTime}
              </p>
            </div>
          </div>

          {/* Render Markdown Content Blocks */}
          <div className="prose max-w-none text-[#1d1d1f] select-text">
            {renderMarkdownContent(post.content)}
          </div>

          {/* FAQs section in article if present */}
          {post.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#d2d2d7]/30">
              <h2 className="text-2xl font-black text-[#1d1d1f] tracking-tighter mb-8">
                Straight Answers (FAQ)
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7]/40 shadow-sm"
                  >
                    <h3 className="font-bold text-[#1d1d1f] text-base mb-2 tracking-tight">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[#86868b] leading-relaxed tracking-tight">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author E-E-A-T Bio Box at bottom */}
          <div className="mt-16 p-8 bg-[#f5f5f7]/60 border border-[#d2d2d7]/60 rounded-3xl flex flex-col sm:flex-row gap-6 items-start shadow-sm">
            <div className="w-16 h-16 rounded-full bg-menarc-gold/10 flex items-center justify-center border border-menarc-gold/20 font-bold text-[#c5a059] text-xl shrink-0">
              MK
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1d1d1f] mb-2">
                Written by {post.author}
              </h3>
              <p className="text-xs text-[#86868b] leading-relaxed mb-4 tracking-tight">
                Muthu Kumaran V is the founder and lead automation architect at
                Menarc Solutions. With extensive experience engineering high-performance
                web systems and automated workflow pipelines, he designs fast, static
                web infrastructure that scales seamlessly without recurring hosting
                fees or system security vulnerabilities.
              </p>
              <div className="flex gap-4 text-xs text-blue-600 font-semibold">
                <a href="https://wa.me/917550255420" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp Consultation →
                </a>
              </div>
            </div>
          </div>

          {/* Internal link suggestions to Programmatic location pages */}
          <div className="mt-16 pt-12 border-t border-[#d2d2d7]/30 text-center">
            <p className="text-xs text-[#86868b] mb-4">
              Need custom web systems or workflow automations in Tamil Nadu?
            </p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs text-blue-600 font-semibold">
              <Link href="/website-development-chennai" className="hover:underline">
                Chennai
              </Link>
              <span className="text-[#d2d2d7]/80 select-none">·</span>
              <Link href="/website-development-coimbatore" className="hover:underline">
                Coimbatore
              </Link>
              <span className="text-[#d2d2d7]/80 select-none">·</span>
              <Link href="/website-development-madurai" className="hover:underline">
                Madurai
              </Link>
              <span className="text-[#d2d2d7]/80 select-none">·</span>
              <Link href="/website-development-trichy" className="hover:underline">
                Trichy
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
