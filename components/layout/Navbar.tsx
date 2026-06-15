"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Tech Stack", href: "#tech-ecosystem" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isSubPage = pathname !== "/";

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (isSubPage) {
        window.location.href = `/${href}`;
        return;
      }
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          const offset = 70;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/60 transition-all duration-300">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image 
                src="/logo.webp" 
                alt="Menarc Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-[#1d1d1f]">
              Menarc
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {isSubPage && (
              <li>
                <Link
                  href="/"
                  className="text-[#86868b] hover:text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition-all duration-200 tracking-tight"
                >
                  Home
                </Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-[#86868b] hover:text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition-all duration-200 tracking-tight block"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#86868b] hover:text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition-all duration-200 tracking-tight"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27m%20interested%20in%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#1d1d1f]/90 transition-all duration-300 tracking-tight shadow-lg"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="p-2 rounded-lg text-[#86868b] hover:text-[#1d1d1f] hover:bg-black/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-[#f5f5f7]/95 backdrop-blur-2xl border-t border-[#d2d2d7]/60 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {isSubPage && (
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-left px-4 py-3 text-[#1d1d1f] hover:text-menarc-gold text-sm font-medium transition-all duration-200 rounded-xl hover:bg-black/5 tracking-tight block"
                >
                  Home
                </Link>
              )}
              {navLinks.map((link, i) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-left px-4 py-3 text-[#1d1d1f] hover:text-menarc-gold text-sm font-medium transition-all duration-200 rounded-xl hover:bg-black/5 tracking-tight block"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 text-[#1d1d1f] hover:text-menarc-gold text-sm font-medium transition-all duration-200 rounded-xl hover:bg-black/5 tracking-tight"
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
              <a
                href="https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27m%20interested%20in%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 active:scale-[0.98] transition-all duration-300 text-sm tracking-tight shadow-xl"
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
