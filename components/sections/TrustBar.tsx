"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Rocket, Clock, Settings, TrendingUp, Cpu, Search } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Revenue Driven",
    desc: "Systems built to directly impact your bottom line and efficiency.",
    color: "#10b981", // Emerald
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    desc: "Production-ready platforms delivered in weeks, not months.",
    color: "#3b82f6", // Blue
  },
  {
    icon: Settings,
    title: "Production Ready",
    desc: "Scalable, tested, and secure infrastructure from day one.",
    color: "#f59e0b", // Amber
  },
  {
    icon: Rocket,
    title: "High ROI Focus",
    desc: "Every feature saves time, captures leads, or reduces operational costs.",
    color: "#ef4444", // Red
  },
  {
    icon: Cpu,
    title: "Automated Core",
    desc: "Workflows and automation are baked natively into every system.",
    color: "#8b5cf6", // Violet
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Perfect Lighthouse scores and technical SEO built right in.",
    color: "#ec4899", // Pink
  },
];

export default function TrustBar() {
  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">
      {/* Top transition mask to blend with Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-menarc-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-menarc-gold text-sm font-bold tracking-widest uppercase mb-3">
            Why Menarc
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight" style={{ color: '#D4AF37' }}>
            Not Just Another Agency
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto font-bold">
            We engineer high-performance systems that transform how you operate.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <motion.div
                  className="group relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 shadow-2xl"
                >
                  {/* Liquid Background Blobs - Static for performance */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-menarc-gold/10 blur-[50px] rounded-full -mr-16 -mt-16 hidden md:block" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 blur-[40px] rounded-full -ml-12 -mb-12 hidden md:block" />
                  
                  {/* Static gradients for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-br from-menarc-gold/[0.05] to-transparent opacity-30 md:hidden" />
                  
                  {/* Glass Highlight Line (Refraction) */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-menarc-gold/10 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                      <Icon 
                        className="w-7 h-7 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                        style={{ color: pillar.color }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    {/* Dual Tone: Gold Header, White Description */}
                    <h3 className="font-display font-bold text-menarc-gold text-xl mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-medium">
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
