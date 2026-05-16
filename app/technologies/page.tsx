import type { Metadata } from "next";
import TechEcosystemSection from "@/components/sections/TechEcosystem";
import ContactSection from "@/components/sections/Contact";
import { SEO_TECHNOLOGIES } from "@/lib/seo-config";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Database, Cloud, FileCode2, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Technology Stack | Menarc Solutions",
  description:
    "Explore the modern technology stack utilized by Menarc Solutions: Next.js, React, Node.js, MySQL, MongoDB, Vercel, Cloudflare, and Tailwind CSS.",
  keywords: [
    "Menarc Tech Stack",
    "Next.js Development Agency India",
    "React Developers Chennai",
    "Vercel Deployment Experts",
    "Cloudflare Setup Services",
  ],
};

const techCategories: Record<string, string> = {
  "nextjs": "Frontend Framework",
  "reactjs": "UI Library",
  "javascript": "Core Language",
  "typescript": "Type-Safe Language",
  "nodejs": "Backend Runtime",
  "mysql": "Relational Database",
  "mongodb": "NoSQL Database",
  "firebase": "BaaS Platform",
  "vercel": "Cloud Deployment",
  "cloudflare": "Edge CDN & Security",
  "figma": "UI/UX Design Tool",
  "tailwind-css": "Styling Framework",
};

export default function TechnologiesPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Silicon Valley Standards</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Powered By The <span className="gradient-titanium-gold">World&apos;s Best</span> Tech Stack
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            We build exclusively on modern, cloud-native frameworks that guarantee 60FPS rendering, perfect 100/100 Core Web Vitals, and bulletproof security.
          </p>
        </div>
      </section>

      {/* Main Interactive Tech Ecosystem Section */}
      <TechEcosystemSection />

      {/* Master Taxonomy Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Granular Technology Deep-Dives</h2>
          <p className="text-[#86868b] text-sm tracking-tight max-w-xl mx-auto">Click into any technology below to explore our architectural patterns, optimization techniques, and integration workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SEO_TECHNOLOGIES.map((tech) => (
            <Link
              key={tech.slug}
              href={`/technologies/${tech.slug}`}
              className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                    <Cpu className="w-5 h-5 text-menarc-gold" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] px-3 py-1 rounded-full bg-white border border-[#d2d2d7]/60 shadow-sm">
                    {techCategories[tech.slug] || "Technology"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">
                  {tech.title}
                </h3>
                <p className="text-xs text-[#86868b] leading-relaxed mb-6 tracking-tight">
                  Explore our senior engineering capabilities, custom configurations, and deployment strategies for {tech.title}.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] group-hover:translate-x-1 transition-transform w-fit">
                <span>View Tech Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
