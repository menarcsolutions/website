import type { Metadata } from "next";
import TrustBar from "@/components/sections/TrustBar";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Contact from "@/components/sections/Contact";
import { ArrowRight, CheckCircle2, Shield, Zap, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Menarc Solutions — Premium Web Development & AI Agency",
  description:
    "Learn about Menarc Solutions, India's premier AI-powered business systems, workflow automation, and custom web development agency. Headquartered in Chennai.",
  keywords: [
    "About Menarc Solutions",
    "Web Development Company Chennai",
    "AI Agency India",
    "Top Software Development Company Chennai",
    "Enterprise Digital Solutions",
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Hero Section */}
      <section className="container-custom py-16 md:py-24 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-8 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Our Genesis & Vision</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.08] text-[#1d1d1f]">
            Engineering <span className="gradient-titanium-gold">Cinematic</span> Digital Infrastructure for Modern Enterprises.
          </h1>
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-12 max-w-3xl mx-auto tracking-tight font-normal">
            Menarc Solutions bridges the gap between high-end aesthetic design and uncompromising technical performance. We build intelligent digital systems, workflow automations, and scalable web platforms that drive tangible revenue growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 transition-all duration-300 flex items-center gap-2 tracking-tight shadow-xl hover:shadow-2xl"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] hover:bg-[#f5f5f7]/80 transition-all duration-300 tracking-tight text-[#1d1d1f] font-medium shadow-md"
            >
              Explore Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Core Values Bento Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">The Menarc Engineering Standard.</h2>
          <p className="text-[#86868b] text-base md:text-lg tracking-tight">We reject generic templates and bloated legacy architectures. Every platform we build adheres to four foundational pillars of digital excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="w-6 h-6 text-[#1d1d1f]" />,
              title: "60FPS Cinematic Performance",
              desc: "Hardware-accelerated animations, optimized Next.js server-side rendering, and zero layout shift guarantee an ultra-smooth experience on every device.",
            },
            {
              icon: <Shield className="w-6 h-6 text-[#1d1d1f]" />,
              title: "Enterprise Cyber Security",
              desc: "Bank-grade SSL encryption, strict Content-Security-Policies, secure JWT authentication, and automated threat mitigation protect your business data.",
            },
            {
              icon: <CheckCircle2 className="w-6 h-6 text-[#1d1d1f]" />,
              title: "AI & GEO Optimized Architecture",
              desc: "Native structured data, rich entity graphs, and LLM-readable endpoints ensure your brand ranks prominently across Google, ChatGPT, and Perplexity.",
            },
            {
              icon: <Award className="w-6 h-6 text-[#1d1d1f]" />,
              title: "Revenue-Driven Scalability",
              desc: "From initial startup MVPs to high-throughput enterprise ecosystems, our platforms are engineered to scale seamlessly alongside your business growth.",
            },
          ].map((value, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 p-4 rounded-2xl bg-white border border-[#d2d2d7]/60 inline-block group-hover:bg-black/5 transition-colors shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">{value.title}</h3>
              <p className="text-[#86868b] leading-relaxed text-sm tracking-tight">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Ecosystem */}
      <TechEcosystem />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
