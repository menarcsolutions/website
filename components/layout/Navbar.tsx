"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Tech Stack", href: "#tech-ecosystem" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image 
                src="/logo.webp" 
                alt="Menarc Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
              Menarc
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/90 hover:text-white text-base font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA & Theme */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27m%20interested%20in%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 text-sm font-bold text-menarc-gold rounded-xl overflow-hidden group bg-menarc-gold/20 border border-menarc-gold/50 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-menarc-gold/10 group-hover:bg-menarc-gold/20 transition-colors" />
              <span className="relative flex items-center gap-1.5">
                Book Consultation
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="p-2 rounded-lg text-menarc-gray hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-t border-white/5 overflow-hidden bg-menarc-dark/95"
          >
            <div className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-white/90 hover:text-menarc-gold text-base font-medium transition-all duration-200 rounded-xl hover:bg-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27m%20interested%20in%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                  className="w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-xl font-bold hover:bg-yellow-500 active:scale-[0.98] transition-all duration-300 text-sm md:text-base group/submit shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Book Consultation
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
