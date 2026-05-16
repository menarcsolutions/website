import React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  SEO_SERVICES,
  SEO_UI_UX,
  SEO_SEO_SERVICES,
  SEO_AUTOMATION,
  SEO_CLOUD,
  SEO_SECURITY,
  SEO_INDUSTRIES,
  SEO_TECHNOLOGIES,
  SEO_LOCATIONS,
} from "@/lib/seo-config";

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
        {/* Top Section: Minimalistic SEO Capabilities Matrix with Premium Background Textures */}
        <div className="mb-16 bg-[#f5f5f7]/80 rounded-3xl p-8 md:p-12 border border-[#d2d2d7]/60 shadow-sm relative overflow-hidden">
          {/* Master Background Textures for the Capabilities Section */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[90px] pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#64748B]/10 rounded-full blur-[90px] pointer-events-none z-0" />

          <div className="text-center mb-12 relative z-10">
            <h3 className="gradient-titanium-gold font-bold text-lg md:text-xl mb-3 uppercase tracking-wider">
              Explore Our Comprehensive Capabilities
            </h3>
            <p className="text-[#86868b] text-xs md:text-sm max-w-2xl mx-auto tracking-tight">
              Engineered for uncompromising performance, scalability, and AI discoverability across major business domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs relative z-10">
            {/* Category 1: Web Development */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>Web Development</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_SERVICES.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Services</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2: UI/UX & Branding */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>UI/UX & Branding</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_UI_UX.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/ui-ux-design/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Services</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3: SEO Optimization */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>SEO Optimization</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_SEO_SERVICES.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/seo-services/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Services</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 4: AI & Automation */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>AI & Automation</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_AUTOMATION.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/automation-services/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Services</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 5: Cloud & Cyber Security */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>Cloud & Security</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_CLOUD.slice(0, 2).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/cloud-services/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  {SEO_SECURITY.slice(0, 2).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/cyber-security/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Services</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 6: Technologies */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>Technologies</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_TECHNOLOGIES.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/technologies/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/technologies"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Tech</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 7: Industries Served */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>Industries Served</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_INDUSTRIES.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/industries/${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/industries"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Industries</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 8: Service Locations */}
            <div className="group relative flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c5a059]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col grow">
                <h4 className="font-bold text-[#1d1d1f] text-xs tracking-wide uppercase mb-4 pb-3 border-b border-[#d2d2d7]/60 flex items-center justify-between group-hover:text-[#c5a059] transition-colors">
                  <span>Service Locations</span>
                </h4>
                <ul className="flex flex-col gap-2.5 mb-6 grow">
                  {SEO_LOCATIONS.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/ai-solutions-${item.slug}`}
                        className="text-[#86868b] hover:text-[#1d1d1f] transition-colors block hover:translate-x-1 duration-200 tracking-tight"
                      >
                        {item.city}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-solutions-chennai"
                  className="text-[#1d1d1f] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-3 border-t border-[#d2d2d7]/60 uppercase tracking-wider text-[11px] group-hover:text-[#c5a059]"
                >
                  <span>Explore All Locations</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Brand & Core Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 border-t border-[#d2d2d7]/60 pt-16 border-b border-[#d2d2d7]/60">
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
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Technologies", href: "/technologies" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Tech Blog", href: "/blog" },
                { label: "Free Resources", href: "/resources" },
                { label: "Pricing & AMC", href: "/pricing" },
                { label: "Contact Us", href: "/contact" },
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
                { label: "Website Development", href: "/services" },
                { label: "UI/UX & Branding", href: "/ui-ux-design" },
                { label: "SEO & Performance", href: "/seo-services" },
                { label: "AI & Automation", href: "/automation-services" },
                { label: "Cloud & Hosting", href: "/cloud-services" },
                { label: "Cyber Security", href: "/cyber-security" },
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
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Refund Policy", href: "/refund-policy" },
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
