import Link from "next/link";
import { Zap, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Premium Business Websites", href: "#services" },
    { label: "Automation Systems", href: "#services" },
    { label: "CRM Integration", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Business Dashboards", href: "#services" },
  ],
  Company: [
    { label: "Industries", href: "#industries" },
    { label: "Technology", href: "#tech-ecosystem" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/logo.webp" 
                  alt="Menarc Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-menarc-gold">
                Menarc
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Menarc builds intelligent digital systems, workflow automations, and scalable
              infrastructure for modern businesses.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+917550255420"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-menarc-gold transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                +91 75502 55420
              </a>
              <a
                href="tel:+916383822500"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-menarc-gold transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                +91 63838 22500
              </a>
              <a
                href="mailto:contact@menarc.in"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-menarc-gold transition-colors group"
              >
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                contact@menarc.in
              </a>
              <a
                href="https://wa.me/917550255420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-menarc-gold font-bold text-sm mb-4 font-display uppercase tracking-wider">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-menarc-gold hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Menarc. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            AI-Powered Business Systems · India
          </p>
        </div>
      </div>
    </footer>
  );
}
