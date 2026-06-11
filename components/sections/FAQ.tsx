"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronDown } from "lucide-react";
import { faqData, FAQItem } from "@/lib/faq-data";

interface FAQProps {
  customFaqs?: FAQItem[];
}

export default function FAQ({ customFaqs }: FAQProps) {
  const currentFaqData = customFaqs || faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const index = currentFaqData.findIndex((item) => item.id === hash);
        if (index !== -1) {
          setOpenIndex(index);
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              const yOffset = -120;
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 300);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentFaqData]);

  return (
    <section
      id="faq"
      className="section-padding bg-white relative overflow-hidden select-none pt-20 md:pt-28 pb-24"
    >
      {/* Elegant Top SVG Curve Transition from Contact */}
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

      {/* Ambient Apple Textures */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c5a059]/12 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tighter gradient-titanium-gold">
            Everything You Need To Know.
          </h2>
          <p className="text-[#86868b] text-lg max-w-xl mx-auto tracking-tight font-normal">
            Clear, transparent answers about our engineering capabilities, workflows, pricing, and long-term business support.
          </p>
        </AnimatedSection>

        {/* Minimal & Premium 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {currentFaqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection
                key={faq.id}
                delay={index * 0.03}
                className="w-full"
              >
                <div
                  id={faq.id}
                  className={`group bg-[#f5f5f7] border transition-all duration-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 ${
                    isOpen ? "border-[#1d1d1f] bg-white" : "border-[#d2d2d7]/60 hover:border-[#d2d2d7]"
                  }`}
                >
                  <button
                    onClick={() => toggleOpen(index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none transition-all duration-300"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-[#1d1d1f] tracking-tight leading-snug pt-0.5 group-hover:text-[#c5a059] transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1d1d1f] text-white" : "bg-white text-[#86868b] group-hover:text-[#1d1d1f] border border-[#d2d2d7]/60 shadow-sm"
                    }`}>
                      <ChevronDown className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-[#d2d2d7]/40">
                          <p className="text-[#86868b] text-base leading-relaxed tracking-tight font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
