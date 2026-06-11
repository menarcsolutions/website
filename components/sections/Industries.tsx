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
  { icon: Building2, label: "Real Estate & Property", color: "#3B82F6" },
  { icon: HardHat, label: "Construction Companies", color: "#F59E0B" },
  { icon: Palette, label: "Interior Design Studios", color: "#EC4899" },
  { icon: Factory, label: "Manufacturing Industries", color: "#94A3B8" },
  { icon: Ship, label: "Export & Import Businesses", color: "#0EA5E9" },
  { icon: Truck, label: "Logistics & Transport", color: "#8B5CF6" },
  { icon: GraduationCap, label: "Educational Institutions", color: "#10B981" },
  { icon: Plane, label: "Travel & Tourism", color: "#06B6D4" },
  { icon: PartyPopper, label: "Event Management", color: "#F43F5E" },
  { icon: Briefcase, label: "Corporate Services", color: "#64748B" },
  { icon: Package, label: "Wholesale & Distribution", color: "#D97706" },
  { icon: Car, label: "Automobile & Service Centers", color: "#EF4444" },
  { icon: ShoppingBag, label: "Retail & Ecommerce", color: "#8B5CF6" },
  { icon: Hotel, label: "Hospitality & Resorts", color: "#14B8A6" },
  { icon: PenTool, label: "Architecture & Engineering", color: "#6366F1" },
];

const row1 = industries.slice(0, 8);
const row2 = industries.slice(8, 15);

function MarqueeRow({ items, reverse = false }: { items: typeof industries, reverse?: boolean }) {
  return (
    <div className="flex overflow-visible group select-none relative mb-6 py-4">
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className={`flex w-max min-w-full ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {[...items, ...items].map((industry, i) => {
          const Icon = industry.icon;
          return (
            <div
              key={`${industry.label}-${i}`}
              title={`Automation for ${industry.label}`}
              className="flex-shrink-0 w-56 md:w-72 mx-3 bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] rounded-3xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 group/item shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-white group-hover/item:bg-black/5 border border-[#d2d2d7]/60 flex items-center justify-center transition-colors shadow-sm">
                <Icon className="w-6 h-6 transition-transform group-hover/item:scale-110" style={{ color: industry.color }} strokeWidth={2} />
              </div>
              <p className="text-[#1d1d1f] group-hover/item:text-menarc-gold text-sm font-semibold tracking-tight leading-snug transition-colors">
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
      className="py-24 relative overflow-hidden bg-white select-none"
    >
      {/* Elegant Top SVG Curve Transition from TechEcosystem */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none bg-[#f5f5f7]">
        <svg
          className="relative block w-full h-12 md:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.08)_0%,_transparent_65%)]" />

      <div className="container-custom relative z-10 mb-16">
        <AnimatedSection className="text-center">
          <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
            Industries We Serve
          </p>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tighter gradient-titanium-gold">
            Built For Diverse Sectors.
          </h2>
          <p className="text-[#86868b] text-lg max-w-lg mx-auto tracking-tight font-normal">
            From manufacturing to real estate, we build automated infrastructure tailored to your specific business model.
          </p>
        </AnimatedSection>
      </div>

      {/* MOBILE VIEW: Cupertino Bento Grid (md:hidden) */}
      <div className="container-custom relative z-10 md:hidden mb-12">
        <div className="grid grid-cols-2 gap-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={`${industry.label}-mobile-${i}`}
                title={`Automation for ${industry.label}`}
                className="group relative bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 rounded-2xl p-4 flex flex-col items-start gap-3 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#c5a059]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />
                
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-white group-hover:bg-black/5 border border-[#d2d2d7]/60 flex items-center justify-center transition-colors shadow-2xs relative z-10">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: industry.color }} strokeWidth={2} />
                </div>
                <p className="text-[#1d1d1f] group-hover:text-menarc-gold text-xs font-semibold tracking-tight leading-snug transition-colors relative z-10">
                  {industry.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP VIEW: Smooth Marquee (hidden md:block) */}
      <div className="w-full relative z-10 hidden md:block">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection delay={0.2} className="mt-12 md:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 shadow-md">
            <Globe className="w-4 h-4 text-menarc-gold" />
            <span className="text-[#86868b] text-xs font-semibold tracking-tight">
              Serving businesses across <span className="text-[#1d1d1f]">the Globe</span>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
