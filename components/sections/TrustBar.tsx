"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Rocket, Clock, Settings, TrendingUp, Cpu, Search } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Revenue Driven",
    desc: "Systems architected to directly impact your bottom line and operational efficiency.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    desc: "Production-ready enterprise platforms delivered in weeks, not months.",
  },
  {
    icon: Settings,
    title: "Production Ready",
    desc: "Scalable, tested, and highly secure cloud infrastructure from day one.",
  },
  {
    icon: Rocket,
    title: "High ROI Focus",
    desc: "Every feature saves time, captures leads, or reduces operational costs.",
  },
  {
    icon: Cpu,
    title: "Automated Core",
    desc: "Workflows and AI automation are baked natively into every system.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Perfect Lighthouse scores and technical AI search discoverability built right in.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f5f5f7] relative overflow-hidden select-none pb-16 md:pb-24 lg:pb-32">
      {/* Elegant Top SVG Curve Transition from Hero */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg
          className="relative block w-full h-12 md:h-20 text-[#f5f5f7]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Subtle Apple ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 pt-12 md:pt-16 lg:pt-20">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
            Why Menarc
          </p>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tighter gradient-titanium-gold">
            Not Just Another Agency.
          </h2>
          <p className="text-[#86868b] text-lg max-w-lg mx-auto tracking-tight font-normal">
            We engineer high-performance systems that transform how you operate and scale.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <motion.div
                  className="group relative h-full bg-white/80 backdrop-blur-md border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 rounded-3xl p-8 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  {/* 1. Ultra-fine Architectural Dot Grid inside Card */}
                  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* 2. Hidden Ambient Living Mesh Spheres (Concept 2) */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#c5a059]/0 group-hover:bg-[#c5a059]/20 blur-[40px] group-hover:scale-150 transition-all duration-700 ease-out pointer-events-none z-0" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#64748B]/0 group-hover:bg-[#64748B]/20 blur-[40px] group-hover:scale-150 transition-all duration-700 ease-out pointer-events-none z-0" />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#d2d2d7]/60 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#c5a059]/40 group-hover:bg-[#c5a059]/10 transition-all duration-500 group-hover:scale-105">
                      <Icon 
                        className="w-6 h-6 text-[#1d1d1f] group-hover:text-[#c5a059] transition-colors duration-500" 
                        strokeWidth={1.75} 
                      />
                    </div>
                    <h3 className="font-bold text-[#1d1d1f] text-xl mb-3 tracking-tight group-hover:gradient-titanium-gold transition-all duration-500">
                      {pillar.title}
                    </h3>
                    <p className="text-[#86868b] text-sm leading-relaxed tracking-tight group-hover:text-[#1d1d1f]/80 transition-colors duration-500">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
