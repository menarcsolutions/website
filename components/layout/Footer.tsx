import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white transition-colors duration-300 relative select-none">
      {/* Elegant Top SVG Curve */}
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

      <div className="container-custom py-16 pt-8 relative z-10">
        {/* Middle Section: Brand & Core Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 pt-16 border-b border-[#d2d2d7]/60">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.webp"
                  alt="Menarc Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-[#1d1d1f]">
                Menarc
              </span>
            </Link>
            <p className="text-[#86868b] text-sm leading-relaxed max-w-sm mb-8 tracking-tight">
              Menarc Solutions builds intelligent digital systems, workflow automations, and scalable infrastructure for modern businesses, startups, and growing brands across India.
            </p>
            <div className="flex flex-col gap-4">
              <a
                 href="tel:+917550255420"
                className="flex items-center gap-3 text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group tracking-tight"
              >
                <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                +91 75502 55420
              </a>
              <a
                href="tel:+916383822500"
                className="flex items-center gap-3 text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group tracking-tight"
              >
                <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                +91 63838 22500
              </a>
              <a
                href="mailto:contact@menarc.in"
                className="flex items-center gap-3 text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group tracking-tight"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                contact@menarc.in
              </a>
              <a
                href="https://wa.me/917550255420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group tracking-tight"
              >
                <MessageCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                WhatsApp Consultation
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h3 className="gradient-titanium-gold font-bold text-xs mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Services", href: "/#services" },
                { label: "Industries", href: "/#industries" },
                { label: "Tech Stack", href: "/#tech-ecosystem" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] hover:translate-x-1 transition-all duration-300 inline-block tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h3 className="gradient-titanium-gold font-bold text-xs mb-6 uppercase tracking-wider">
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Corporate Websites", href: "/services/corporate-websites" },
                { label: "Ecommerce Platforms", href: "/services/ecommerce-platforms" },
                { label: "Custom Web Apps", href: "/services/custom-web-applications" },
                { label: "WhatsApp Workflows", href: "/services/whatsapp-workflows" },
                { label: "Lead Management", href: "/services/lead-management" },
                { label: "SEO Optimization", href: "/services/seo-optimization" },
                { label: "Speed Optimization", href: "/services/speed-optimization" },
                { label: "Managed Hosting", href: "/services/managed-hosting" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] hover:translate-x-1 transition-all duration-300 inline-block tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="gradient-titanium-gold font-bold text-xs mb-6 uppercase tracking-wider">
              Legal & Trust
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Sitemap XML", href: "/sitemap.xml" },
                { label: "AI Documentation", href: "/llms.txt" },
                { label: "Master Knowledge Base", href: "/llms-full.txt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#86868b] hover:text-[#1d1d1f] hover:translate-x-1 transition-all duration-300 inline-block tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#86868b] tracking-tight">
          <p>
            © {new Date().getFullYear()} Menarc Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>AI-Powered Business Systems</span>
            <span>·</span>
            <span>Premium Web Architecture</span>
            <span>·</span>
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
