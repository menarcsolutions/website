"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  badge?: string;
}

export default function Hero({ title, subtitle, badge }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleBookConsultation = () => {
    window.open(
      "https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.",
      "_blank"
    );
  };

  const handleExploreServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div ref={containerRef} className="bg-white relative overflow-hidden flex items-start justify-center select-none pt-20 md:pt-24 pb-16 md:pb-24">
      {/* 1. Base White Background */}
      <div className="absolute inset-0 bg-white" />

      {/* 2. Abstract 3D Glass / Liquid Titanium Background Image Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none mix-blend-multiply overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80"
          alt="Apple Silicon Liquid Titanium Wave"
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </div>

      {/* 3. Ultra-fine Architectural Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* 4. Dynamic Framer Motion Ambient Mesh Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Menarc Gold Sphere */}
        <motion.div
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#D4AF37]/25 blur-[90px] md:blur-[120px]"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 80, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Soft Titanium Sphere */}
        <motion.div
          className="absolute top-[30%] right-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#64748B]/25 blur-[90px] md:blur-[120px]"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 5. Frosted Glassmorphism Overlay for Flawless Text Legibility */}
      <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[1px] pointer-events-none" />

      <main className="relative z-20 container-custom px-6 pointer-events-auto flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-8 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-tight text-[#86868b] uppercase">
              {badge || "AI-Powered Business Infrastructure"}
            </span>
          </motion.div>

          {/* Massive Apple Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1d1d1f] mb-8 tracking-tighter leading-[1.05] px-2 sm:px-0 break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title || (
              <>
                <span className="block text-[#1d1d1f]">Intelligent Digital</span>
                <span className="block text-[#1d1d1f]">Systems For</span>
                <span className="block gradient-titanium-gold pb-2 whitespace-nowrap">
                  Modern<span className="block md:inline"> Businesses.</span>
                </span>
              </>
            )}
          </motion.h1>

          {/* Minimalist Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-normal text-[#86868b] mb-12 leading-relaxed max-w-2xl mx-auto tracking-tight px-4 sm:px-0 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle || "We build premium web platforms, workflow automations, and CRM systems engineered for uncompromising performance and scalability."}
          </motion.p>

          {/* Apple Pill Buttons */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleBookConsultation}
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold text-sm hover:bg-[#1d1d1f]/90 transition-all duration-300 tracking-tight shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              onClick={handleExploreServices}
              className="px-8 py-4 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-medium text-sm hover:bg-[#f5f5f7]/80 transition-all duration-300 tracking-tight shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
