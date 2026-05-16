import type { Metadata } from "next";
import ContactSection from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight, FileText, Download, Database, FileCode2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Resources & Blueprints | Menarc Solutions",
  description:
    "Download free engineering whitepapers, Next.js architecture blueprints, AI automation checklists, and API documentation by Menarc Solutions.",
  keywords: [
    "Menarc Resources",
    "Next.js Architecture Blueprint",
    "AI Automation Checklist",
    "Web Development Whitepaper",
    "Free Tech Resources Chennai",
  ],
};

const resources = [
  {
    title: "Next.js 15 Enterprise Architecture Blueprint",
    category: "Architecture Blueprint",
    format: "PDF & GitHub Starter",
    desc: "A production-grade architectural guide covering folder structures, server-side state hydration, secure JWT middleware, and Lighthouse 100/100 LCP optimization.",
    slug: "nextjs-enterprise-architecture-blueprint",
    icon: <FileCode2 className="w-6 h-6 text-[#1d1d1f]" />,
    featured: true,
  },
  {
    title: "n8n & WhatsApp AI Automation Checklist",
    category: "Automation Framework",
    format: "Interactive PDF",
    desc: "A comprehensive 25-point checklist for verifying webhook security, idempotency keys, error-handling queues, and WhatsApp Cloud API rate limits.",
    slug: "n8n-whatsapp-automation-checklist",
    icon: <Database className="w-6 h-6 text-[#1d1d1f]" />,
    featured: false,
  },
  {
    title: "Generative Engine Optimization (GEO) Starter Kit",
    category: "AI Search & SEO",
    format: "Markdown & JSON-LD Templates",
    desc: "Plug-and-play templates for building `llms.txt`, `robots.ts` AI exclusions, and Knowledge Graph `sameAs` entity anchoring for enterprise brands.",
    slug: "geo-ai-search-starter-kit",
    icon: <FileText className="w-6 h-6 text-[#1d1d1f]" />,
    featured: false,
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Open Source & Enterprise Assets</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Engineering <span className="gradient-titanium-gold">Resources</span> & Blueprints.
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            Accelerate your development workflows with our production-tested architectural blueprints, automation checklists, and whitepapers.
          </p>
        </div>
      </section>

      {/* Resources Bento Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#f5f5f7] border ${
                res.featured ? "border-2 border-[#1d1d1f] shadow-xl scale-105 z-10 hover:-translate-y-1" : "border-[#d2d2d7]/60 hover:border-[#d2d2d7] hover:-translate-y-1 shadow-lg"
              } transition-all duration-300 flex flex-col justify-between group relative`}
            >
              {res.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#1d1d1f] text-white font-bold text-[10px] tracking-wider uppercase shadow-md">
                  Featured Blueprint
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1d1d1f] px-3 py-1 rounded-full border border-[#1d1d1f] shadow-sm">
                    {res.category}
                  </span>
                  <div className="p-3 rounded-2xl bg-white border border-[#d2d2d7]/60 group-hover:bg-black/5 transition-colors shadow-sm">
                    {res.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">
                  {res.title}
                </h3>

                <p className="text-sm text-[#86868b] leading-relaxed mb-8 tracking-tight">
                  {res.desc}
                </p>

                {/* Format */}
                <div className="flex items-center gap-2 text-xs text-[#86868b] mb-8 pb-8 border-b border-[#d2d2d7]/60 font-medium tracking-tight">
                  <Download className="w-4 h-4 text-[#1d1d1f]" />
                  <span>Format: {res.format}</span>
                </div>
              </div>

              <Link
                href={`/resources/${res.slug}`}
                className="w-full py-4 rounded-full bg-white border border-[#d2d2d7]/60 hover:bg-[#1d1d1f] hover:text-white font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-tight shadow-sm"
              >
                <span>Access Resource</span> <ArrowRight className="w-4 h-4" />
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
