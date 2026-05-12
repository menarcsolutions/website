"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Building2,
  HardHat,
  Palette,
  Factory,
  Ship,
  Truck,
  GraduationCap,
  Plane,
  PartyPopper,
  Briefcase,
  Package,
  Car,
  ShoppingBag,
  Hotel,
  PenTool,
  Globe
} from "lucide-react";
import Image from "next/image";

const industries = [
  { icon: Building2, label: "Real Estate & Property", color: "#3B82F6" }, // Blue
  { icon: HardHat, label: "Construction Companies", color: "#F59E0B" }, // Amber
  { icon: Palette, label: "Interior Design Studios", color: "#EC4899" }, // Pink
  { icon: Factory, label: "Manufacturing Industries", color: "#94A3B8" }, // Lighter Slate
  { icon: Ship, label: "Export & Import Businesses", color: "#0EA5E9" }, // Sky
  { icon: Truck, label: "Logistics & Transport", color: "#8B5CF6" }, // Violet
  { icon: GraduationCap, label: "Educational Institutions", color: "#10B981" }, // Emerald
  { icon: Plane, label: "Travel & Tourism", color: "#06B6D4" }, // Cyan
  { icon: PartyPopper, label: "Event Management", color: "#F43F5E" }, // Rose
  { icon: Briefcase, label: "Corporate Services", color: "#64748B" }, // Slate
  { icon: Package, label: "Wholesale & Distribution", color: "#D97706" }, // Amber
  { icon: Car, label: "Automobile & Service Centers", color: "#EF4444" }, // Red
  { icon: ShoppingBag, label: "Retail & Ecommerce", color: "#8B5CF6" }, // Violet
  { icon: Hotel, label: "Hospitality & Resorts", color: "#14B8A6" }, // Teal
  { icon: PenTool, label: "Architecture & Engineering", color: "#6366F1" }, // Indigo
];

const row1 = industries.slice(0, 8);
const row2 = industries.slice(8, 15);

const mRow1 = industries.slice(0, 4);
const mRow2 = industries.slice(4, 8);
const mRow3 = industries.slice(8, 12);
const mRow4 = industries.slice(12, 15);

function MarqueeRow({ items, reverse = false }: { items: typeof industries, reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden group select-none relative mb-6">
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
      
      <div className={`flex w-max min-w-full ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {/* Double the items for infinite scroll effect */}
        {[...items, ...items].map((industry, i) => {
          const Icon = industry.icon;
          return (
            <div
              key={`${industry.label}-${i}`}
              title={`Automation for ${industry.label}`}
              className="flex-shrink-0 w-52 md:w-64 mx-3 bg-[#0A0A0A]/70 backdrop-blur-md border border-white/5 hover:border-menarc-gold/30 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 group/item shadow-xl"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white/5 group-hover/item:bg-menarc-gold/10 border border-white/10 group-hover/item:border-menarc-gold/20 flex items-center justify-center transition-colors">
                <Icon className="w-6 h-6 transition-transform group-hover/item:scale-110" style={{ color: industry.color }} strokeWidth={2} />
              </div>
              <p className="text-white/80 group-hover/item:text-white text-sm font-semibold leading-snug transition-colors">
                {industry.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-24 relative overflow-hidden bg-[#080808]"
    >
      {/* Optimized Background Image: Using next/image for better performance and smoother scrolling */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern business infrastructure background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-menarc-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container-custom relative z-10 mb-16">
        <AnimatedSection className="text-center">
          <p className="text-menarc-gold text-sm font-bold tracking-widest uppercase mb-3">
            Industries We Serve
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight" style={{ color: '#D4AF37' }}>
            Built For Diverse Sectors
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto font-semibold">
            From manufacturing to real estate, we build automated infrastructure tailored to your specific business model.
          </p>
        </AnimatedSection>
      </div>

      <div className="w-full relative z-10 md:hidden">
        <MarqueeRow items={mRow1} />
        <MarqueeRow items={mRow2} reverse />
        <MarqueeRow items={mRow3} />
        <MarqueeRow items={mRow4} reverse />
      </div>
      <div className="w-full relative z-10 hidden md:block">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="container-custom relative z-10">
        {/* Global badge */}
        <AnimatedSection delay={0.2} className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
            <Globe className="w-5 h-5 text-menarc-gold" />
            <span className="text-white/80 text-sm font-semibold">
              Serving businesses across <span className="text-white">the Globe</span>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
