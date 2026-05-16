import type { Metadata } from "next";
import ContactSection from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight, Award, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | Menarc Solutions",
  description:
    "Explore the premium web development portfolio and case studies by Menarc Solutions. High-performance Next.js platforms, UI/UX overhauls, and automation systems.",
  keywords: [
    "Menarc Portfolio",
    "Best Website Development Case Studies",
    "Next.js Performance Case Study",
    "UI UX Design Portfolio India",
    "Gym Website Success Story",
  ],
};

const caseStudies = [
  {
    title: "Coz Fitness — Premium Gym SaaS Platform",
    category: "Gym & Fitness",
    metrics: ["100/100 Core Web Vitals", "60FPS Video Playback", "250% Lead Conversion"],
    desc: "Complete UI/UX overhaul and full-stack development of a high-end fitness platform featuring dynamic pricing matrices, BMI/BMR calculators, and automated WhatsApp lead syncing.",
    slug: "coz-fitness-platform",
    featured: true,
  },
  {
    title: "Enterprise Workflow Automation Pipeline",
    category: "AI & Automation",
    metrics: ["n8n Multi-Stage Sync", "0.01s Webhook Latency", "₹12L Annual Savings"],
    desc: "Architected a resilient, automated n8n pipeline connecting custom webhooks, CRM instances, and WhatsApp messaging engines for a top-tier Indian enterprise.",
    slug: "enterprise-workflow-automation",
    featured: false,
  },
  {
    title: "Cinematic Corporate Architecture Redesign",
    category: "Corporate & Tech",
    metrics: ["Shader Elimination", "100ms Page Load", "99.99% Edge Uptime"],
    desc: "Transformative frontend migration from legacy monolithic code to a lightning-fast, Vercel-deployed Next.js App Router ecosystem with curated Apple-inspired branding.",
    slug: "cinematic-corporate-redesign",
    featured: false,
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Proof of Performance</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Case Studies In <span className="gradient-titanium-gold">Digital Excellence.</span>
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            We measure our success entirely by the performance, speed, and revenue growth of our clients. Explore our featured architectural transformations below.
          </p>
        </div>
      </section>

      {/* Case Studies Bento Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#f5f5f7] border ${
                project.featured ? "border-2 border-[#1d1d1f] shadow-xl scale-105 z-10 hover:-translate-y-1" : "border-[#d2d2d7]/60 hover:border-[#d2d2d7] hover:-translate-y-1 shadow-lg"
              } transition-all duration-300 flex flex-col justify-between group relative`}
            >
              {project.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-[#1d1d1f] text-white font-bold text-[10px] tracking-wider uppercase shadow-md">
                  Featured Case Study
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1d1d1f] px-3 py-1 rounded-full border border-[#1d1d1f] shadow-sm">
                    {project.category}
                  </span>
                  <Award className="w-5 h-5 text-[#1d1d1f]" />
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">
                  {project.title}
                </h3>

                <p className="text-sm text-[#86868b] leading-relaxed mb-8 tracking-tight">
                  {project.desc}
                </p>

                {/* Metrics */}
                <div className="space-y-2.5 mb-8 pb-8 border-b border-[#d2d2d7]/60">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2.5 text-xs text-[#1d1d1f] font-semibold tracking-tight">
                      <Zap className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="w-full py-4 rounded-full bg-white border border-[#d2d2d7]/60 hover:bg-[#1d1d1f] hover:text-white font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-tight shadow-sm"
              >
                <span>Read Full Case Study</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 text-center max-w-4xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shadow-md">
            <span className="text-4xl font-black text-[#1d1d1f] block mb-2 tracking-tighter">100/100</span>
            <span className="text-xs text-[#86868b] uppercase tracking-wider font-bold">Lighthouse Performance</span>
          </div>
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shadow-md">
            <span className="text-4xl font-black text-[#1d1d1f] block mb-2 tracking-tighter">&lt; 0.5s</span>
            <span className="text-xs text-[#86868b] uppercase tracking-wider font-bold">Average First Load (LCP)</span>
          </div>
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shadow-md">
            <span className="text-4xl font-black text-[#1d1d1f] block mb-2 tracking-tighter">99.99%</span>
            <span className="text-xs text-[#86868b] uppercase tracking-wider font-bold">Verified Edge Uptime</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
