"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
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
    <div ref={containerRef} className="min-h-[100svh] bg-[#050505] relative overflow-hidden">
      {/* Optimized Cinematic Background: Using layered gradients for a premium feel without GPU lag */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,_#D4AF37_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_70%,_#D4AF37_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_#FFFFFF_0%,_transparent_40%)]" />
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080808] to-transparent z-10" />

      <main className="absolute inset-0 flex items-center z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full px-6 pt-16 pointer-events-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block font-black text-white drop-shadow-2xl">Intelligent Digital</span>
              <span className="block font-light text-white/80 italic">Systems For</span>
              <motion.span
                className="block font-medium text-white/90 tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #D4AF37 30%, #FFFFFF 70%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Modern Businesses
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light text-white/70 mb-10 leading-normal max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We build premium web platforms, workflow automations, and CRM systems that scale.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={handleExploreServices}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 cursor-pointer backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
              <motion.button
                onClick={handleBookConsultation}
                className="px-8 py-4 rounded-full bg-menarc-gold/20 border border-menarc-gold/50 text-menarc-gold font-bold text-sm transition-all duration-300 hover:bg-menarc-gold/30 hover:border-menarc-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-pointer backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
