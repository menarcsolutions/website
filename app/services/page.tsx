import type { Metadata } from "next";
import ServicesSection from "@/components/sections/Services";
import ContactSection from "@/components/sections/Contact";
import { SEO_SERVICES, SEO_UI_UX, SEO_SEO_SERVICES, SEO_AUTOMATION, SEO_CLOUD, SEO_SECURITY } from "@/lib/seo-config";
import Link from "next/link";
import { ArrowRight, Layers, Layout, Search, Cpu, Cloud, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Menarc Solutions — Premium Web & AI Agency",
  description:
    "Explore the complete suite of digital services by Menarc Solutions: premium website development, UI/UX design, SEO optimization, AI workflow automation, and cloud security.",
  keywords: [
    "Menarc Services",
    "Web Development Services India",
    "AI Automation Services Chennai",
    "UI UX Design Agency",
    "Technical SEO Company",
  ],
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">End-to-End Digital Engineering</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Architecting <span className="gradient-titanium-gold">High-Performance</span> Business Ecosystems
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            We deliver uncompromising engineering quality across six core practice areas. From cinematic frontend interfaces to resilient automated workflows, explore our complete capabilities below.
          </p>
        </div>
      </section>

      {/* Main Interactive Services Section */}
      <ServicesSection />

      {/* Master Taxonomy Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Complete Service Directory</h2>
          <p className="text-[#86868b] text-sm tracking-tight max-w-xl mx-auto">Explore our granular technical capabilities and industry-specific development solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web Development */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Layers className="w-6 h-6 text-menarc-gold" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Web Development</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Bespoke Next.js, React, and full-stack web platforms engineered for maximum conversion and speed.
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-[#1d1d1f] hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* UI/UX & Branding */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Layout className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">UI/UX & Branding</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Immersive design systems, Figma interactive prototypes, and premium corporate branding overhauls.
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_UI_UX.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/ui-ux-design/${item.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-purple-600 hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SEO & Performance */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">SEO & Performance</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Technical structured data, Core Web Vitals optimization, and Generative Engine Optimization (GEO).
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_SEO_SERVICES.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/seo-services/${item.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-blue-600 hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">AI & Automation</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Resilient n8n workflow pipelines, WhatsApp automation engines, and custom AI chatbot integrations.
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_AUTOMATION.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/automation-services/${item.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-green-600 hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cloud Deployment */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Cloud className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Cloud & Hosting</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Vercel Edge distribution, Cloudflare CDN setup, DNS management, and scalable database architectures.
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_CLOUD.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/cloud-services/${item.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-cyan-600 hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cyber Security */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white border border-[#d2d2d7]/60 group-hover:scale-110 transition-transform shadow-sm">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Cyber Security</h3>
              </div>
              <p className="text-sm text-[#86868b] mb-6 leading-relaxed tracking-tight">
                Bank-grade SSL integration, secure JWT authentication systems, automated backups, and threat monitoring.
              </p>
              <ul className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#d2d2d7]/60 scrollbar-track-transparent">
                {SEO_SECURITY.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/cyber-security/${item.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#d2d2d7]/40 hover:bg-red-600 hover:text-white transition-all text-xs text-[#1d1d1f] hover:font-semibold group/link shadow-sm"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
