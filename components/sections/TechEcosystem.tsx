"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SiRazorpay } from "react-icons/si";

// SVGs with forced white/brand colors for dark theme
const logos = {
  Nextjs: (
    <svg viewBox="0 0 180 180" className="w-8 h-8 fill-white">
      <path fillRule="evenodd" clipRule="evenodd" d="M90 180c49.706 0 90-40.294 90-90S139.706 0 90 0 0 40.294 0 90s40.294 90 90 90Zm41.218-49.882-62.863-84.526H52.5v91.802h14.545V61.168l53.966 73.189c4.354-2.671 8.243-5.908 11.536-9.624h-1.33ZM127.5 55.594h-14.545v68.812H127.5V55.594Z" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#38bdf8]">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3ECF8E]">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.05.061a.396.396 0 0 0 .307.63h9.363v8.958a.396.396 0 0 0 .716.233l9.081-12.261.05-.061a.396.396 0 0 0-.308-.63Z" />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.0192 19.818a5.9847 5.9847 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.735-7.0968zM8.7505 6.1573a4.062 4.062 0 0 1 4.3532-1.589l.0967-.0327v3.014L9.083 9.9248A4.053 4.053 0 0 1 8.7505 6.1573zM7.253 17.8427a4.062 4.062 0 0 1-4.3532 1.589l-.0967.0327v-3.014l4.1174-2.3752A4.053 4.053 0 0 1 7.253 17.8427zM20.2173 13.9168a4.053 4.053 0 0 1-2.062 3.5225l-2.6105-1.5072V10.686L19.662 8.31a4.062 4.062 0 0 1 .5553 5.6068zM3.7827 10.0832a4.053 4.053 0 0 1 2.062-3.5225l2.6105 1.5072v5.2461l-4.1174 2.376a4.062 4.062 0 0 1-.5553-5.6068zM15.2495 17.8427a4.062 4.062 0 0 1-4.3532 1.589l-.0967.0327v-3.014l4.1174-2.3752A4.053 4.053 0 0 1 15.2495 17.8427zM16.747 6.1573a4.062 4.062 0 0 1 4.3532-1.589l.0967-.0327v3.014L16.917 9.9248A4.053 4.053 0 0 1 16.747 6.1573zM12.0001 13.1633l-2.6105-1.5072.0001-3.0143 2.6104-1.5072 2.6105 1.5072v3.0143L12.0001 13.1633z" />
    </svg>
  ),
  Zapier: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF4A00]">
      <path d="M11.666 22.023l8.777-12.87h-5.992l2.42-7.175-9.351 11.23h5.922l-1.776 8.815z" />
    </svg>
  ),
  Make: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#6D00CC]">
      <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-4.091c4.368 0 7.909-3.541 7.909-7.909S16.368 4.091 12 4.091 4.091 7.632 4.091 12 7.632 19.909 12 19.909zm-2.045-4.773a1.364 1.364 0 1 1 0-2.727 1.364 1.364 0 0 1 0 2.727zm4.09 0a1.364 1.364 0 1 1 0-2.727 1.364 1.364 0 0 1 0 2.727z" />
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#EA4B71]">
      <path d="M16 2.05v5.71c0 1.25-.97 2.27-2.19 2.33a2.3 2.3 0 0 1-2.4-2.14V2.05H5.7v10c0 4.14 3.2 7.55 7.23 7.85A7.83 7.83 0 0 0 21.3 12V2.05H16z" />
    </svg>
  ),
  Gemini: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4285F4]">
      <path d="M23.63 10.976c-3.111-1.077-5.59-3.556-6.666-6.667-.53-1.53-.53-1.53-1.061 0-1.077 3.11-3.555 5.59-6.666 6.666-1.53.53-1.53.53 0 1.06 3.11 1.077 5.59 3.556 6.667 6.667.53 1.53.53 1.53 1.06 0 1.077-3.111 3.556-5.59 6.666-6.667.53-.53.53-.53 0-1.06zM8.344 19.06c-1.636-.566-2.94-1.87-3.506-3.506-.278-.804-.278-.804-.557 0-.566 1.636-1.87 2.94-3.506 3.506-.804.278-.804.278 0 .557 1.636.566 2.94 1.87 3.506 3.506.278.804.278.804.557 0 .566-1.636 1.87-2.94 3.506-3.506.804-.278.804-.278 0-.557z" />
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#635BFF]">
      <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-12.836-3.136c-.495.148-.799.467-.799.882 0 .445.452.704 1.107.868l2.12.518c2.091.503 3.167 1.488 3.167 2.955 0 1.89-1.688 3.135-4.225 3.135-1.921 0-3.649-.665-5.074-1.78l1.391-2.428c1.378.963 2.651 1.438 3.655 1.438.741 0 1.258-.297 1.258-.785 0-.422-.407-.638-1.258-.845l-2.121-.504c-1.733-.422-2.984-1.422-2.984-2.955 0-1.852 1.689-3.076 4.108-3.076 1.763 0 3.32.548 4.654 1.437l-1.377 2.37c-1.126-.74-2.222-1.096-3.618-1.096-.289 0-.549.03-.799.148z" />
    </svg>
  ),
};

const iconConfigs = [
  { element: logos.Nextjs },
  { element: logos.Tailwind },
  { element: logos.Vercel },
  { element: logos.Supabase },
  { element: logos.OpenAI },
  { element: logos.Gemini },
  { element: logos.Zapier },
  { element: logos.Make },
  { element: logos.n8n },
  { element: logos.Stripe },
  { Icon: SiRazorpay, color: "#528FF0" }, // Lighter blue for dark bg
];

export default function TechEcosystem() {
  const orbitCount = 3;
  const [dimensions, setDimensions] = useState({ baseSize: 12, gap: 6 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setDimensions({ baseSize: 4.5, gap: 6.5 });
      } else {
        setDimensions({ baseSize: 12, gap: 6 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section
      id="tech-ecosystem"
      className="section-padding bg-[#050505] relative overflow-hidden h-auto min-h-[40rem] md:h-[50rem] flex flex-col md:flex-row items-center justify-center border-t border-white/5 py-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glowing spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-menarc-gold/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center h-full w-full gap-8 md:gap-12">
        
        {/* Left side: Heading and Text */}
        <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-16 md:mb-0 md:-mt-10">
          <AnimatedSection>
            <p className="text-menarc-gold text-sm font-bold tracking-widest uppercase mb-3">
              Technology Ecosystem
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight">
              <span style={{ color: '#D4AF37' }}>Enterprise</span> <span className="text-white">Infrastructure</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-bold">
              We build using the exact same technology stack that powers Silicon Valley's fastest-growing companies.
            </p>
          </AnimatedSection>
        </div>

        {/* Right side: Orbit animation */}
        <div className="relative w-full md:w-1/2 h-[28rem] md:h-full flex items-center justify-center overflow-visible">
          <div className="relative w-[14rem] h-[14rem] md:w-[34rem] md:h-[34rem] flex items-center justify-center">
            
            {/* Center Circle with "M" */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#2A230F] to-[#0A0A0A] border-2 border-menarc-gold shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center relative z-20">
              <span className="font-display font-black text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37]">
                M
              </span>
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const { baseSize, gap } = dimensions;
              const size = `${baseSize + gap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-dashed border-white/10"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${15 + orbitIdx * 8}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-[#111] border border-white/10 rounded-full p-2 md:p-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-menarc-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                            // Keep icons upright by spinning backwards
                            animation: `spinReverse ${15 + orbitIdx * 8}s linear infinite`,
                          }}
                        >
                          <div className="flex items-center justify-center">
                            {cfg.element ? (
                              cfg.element
                            ) : cfg.Icon ? (
                              <cfg.Icon className="w-7 h-7" style={{ color: cfg.color }} />
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
