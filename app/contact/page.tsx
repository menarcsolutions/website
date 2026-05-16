import type { Metadata } from "next";
import ContactSection from "@/components/sections/Contact";
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Menarc Solutions — Get in Touch",
  description:
    "Contact Menarc Solutions for premium web development, AI workflow automation, and enterprise digital solutions. Offices in Chennai. WhatsApp consultation available.",
  keywords: [
    "Contact Menarc Solutions",
    "Web Development Consultation Chennai",
    "AI Automation Consultation",
    "Hire React Developers India",
    "Enterprise IT Consultation Chennai",
  ],
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Available For Enterprise Projects</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Let&apos;s Build Something <span className="gradient-titanium-gold">Extraordinary</span> Together
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            Whether you need a high-performance web platform, an intelligent AI automation system, or an enterprise cloud migration, our senior engineering team is ready to deliver.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold mb-1 text-lg tracking-tight text-[#1d1d1f]">Direct Phone</h3>
              <p className="text-xs text-[#86868b] mb-4 tracking-tight">Speak with our solutions architect</p>
              <a href="tel:+917550255420" className="text-sm font-bold text-[#1d1d1f] hover:text-menarc-gold transition-colors block tracking-tight">
                +91 75502 55420
              </a>
              <a href="tel:+916383822500" className="text-sm font-bold text-[#1d1d1f] hover:text-menarc-gold transition-colors block mt-1 tracking-tight">
                +91 63838 22500
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 shadow-sm">
                <Mail className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-bold mb-1 text-lg tracking-tight text-[#1d1d1f]">Email Inquiries</h3>
              <p className="text-xs text-[#86868b] mb-4 tracking-tight">Get a detailed proposal in 24 hours</p>
              <a href="mailto:contact@menarc.in" className="text-sm font-bold text-[#1d1d1f] hover:text-menarc-gold transition-colors block tracking-tight">
                contact@menarc.in
              </a>
              <a href="mailto:sales@menarc.in" className="text-sm font-bold text-[#1d1d1f] hover:text-menarc-gold transition-colors block mt-1 tracking-tight">
                sales@menarc.in
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold mb-1 text-lg tracking-tight text-[#1d1d1f]">WhatsApp Chat</h3>
              <p className="text-xs text-[#86868b] mb-4 tracking-tight">Instant consultation & live chat</p>
              <a
                href="https://wa.me/917550255420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors block tracking-tight"
              >
                Start WhatsApp Consultation ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <div className="relative z-10">
        <ContactSection />
      </div>

      {/* Office Locations / Info Grid */}
      <section className="container-custom py-16 border-t border-[#d2d2d7]/60 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shrink-0 shadow-sm">
              <MapPin className="w-6 h-6 text-menarc-gold" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-base tracking-tight text-[#1d1d1f]">Headquarters</h3>
              <p className="text-sm text-[#86868b] leading-relaxed tracking-tight">
                Menarc Solutions<br />
                Chennai, Tamil Nadu, India<br />
                Serving clients nationwide and globally.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shrink-0 shadow-sm">
              <Clock className="w-6 h-6 text-menarc-gold" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-base tracking-tight text-[#1d1d1f]">Operating Hours</h3>
              <p className="text-sm text-[#86868b] leading-relaxed tracking-tight">
                Monday – Saturday<br />
                09:00 AM – 07:00 PM (IST)<br />
                24/7 Support for AMC Clients.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-menarc-gold" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-base tracking-tight text-[#1d1d1f]">Enterprise Compliance</h3>
              <p className="text-sm text-[#86868b] leading-relaxed tracking-tight">
                Strict NDA protection, secure intellectual property transfer, and transparent milestone-based billing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
