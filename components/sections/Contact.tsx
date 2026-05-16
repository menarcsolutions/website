"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp Consultation",
    value: "+91 75502 55420",
    desc: "Fastest response — reply within 30 mins",
    href: "https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27d%20like%20to%20discuss%20a%20project.",
    cta: "Chat Now",
    color: "#25D366",
  },
  {
    icon: Phone,
    label: "Direct Line 1",
    value: "+91 75502 55420",
    desc: "Mon–Sat, 9 AM – 7 PM IST",
    href: "tel:+917550255420",
    cta: "Call Now",
    color: "#3B82F6",
  },
  {
    icon: Phone,
    label: "Direct Line 2",
    value: "+91 63838 22500",
    desc: "Mon–Sat, 9 AM – 7 PM IST",
    href: "tel:+916383822500",
    cta: "Call Now",
    color: "#3B82F6",
  },
  {
    icon: Mail,
    label: "Enterprise Email",
    value: "contact@menarc.in",
    desc: "For detailed project inquiries & RFPs",
    href: "mailto:contact@menarc.in",
    cta: "Send Email",
    color: "#EF4444",
  },
];

const services = [
  "Premium Business Website",
  "Ecommerce Platform",
  "Automation System",
  "CRM Integration",
  "Business Dashboard",
  "SEO Optimization",
  "WhatsApp System",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Menarc,%0A%0AName: ${encodeURIComponent(formData.name)}%0ABusiness: ${encodeURIComponent(formData.business)}%0APhone: ${encodeURIComponent(formData.phone)}%0AService: ${encodeURIComponent(formData.service)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/917550255420?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-[#f5f5f7] relative overflow-hidden select-none pt-20 md:pt-28">
      {/* Elegant Top SVG Curve Transition from Industries */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none bg-white">
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

      {/* Subtle Apple ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-black/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tighter gradient-titanium-gold">
            Let&apos;s Build Your Business System.
          </h2>
          <p className="text-[#86868b] text-lg max-w-xl mx-auto tracking-tight font-normal">
            Book a free consultation — we&apos;ll map out exactly what systems will help your business scale most effectively.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Cards */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl mb-6 tracking-tight text-[#1d1d1f]">
                Reach Us Directly
              </h3>
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={`${card.label}-${card.value}`}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative bg-white border border-[#d2d2d7]/60 hover:border-[#d2d2d7] rounded-3xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 group-hover:bg-black/5 flex items-center justify-center flex-shrink-0 transition-colors duration-300 relative z-10 shadow-sm">
                      <Icon 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d1d1f]" 
                        strokeWidth={1.75} 
                      />
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <p className="text-[#86868b] text-[10px] sm:text-[11px] font-bold mb-0.5 sm:mb-1 uppercase tracking-wider">{card.label}</p>
                      <p className="text-[#1d1d1f] font-bold text-[13px] sm:text-base md:text-lg whitespace-nowrap tracking-tight group-hover:gradient-titanium-gold transition-colors duration-300">{card.value}</p>
                      <p className="text-[#86868b] text-[11px] sm:text-xs mt-0.5 tracking-tight">{card.desc}</p>
                    </div>
                    <span className="hidden sm:flex text-xs font-semibold text-[#1d1d1f] items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 relative z-10">
                      {card.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="bg-white border border-[#d2d2d7]/60 rounded-3xl p-8 md:p-12 relative overflow-hidden h-full shadow-lg">
              <h3 className="font-bold text-2xl mb-8 relative z-10 tracking-tight text-[#1d1d1f]">
                Book a Free Consultation
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center h-[400px] relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2 shadow-inner">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-[#1d1d1f] font-bold text-2xl tracking-tight">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-[#86868b] text-base max-w-sm tracking-tight">
                    Your detailed message has been prepared. Please press send in WhatsApp to complete your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#86868b] text-[11px] mb-2 font-bold tracking-wider uppercase">
                        Your Name <span className="text-[#1d1d1f]">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border ${focusedField === 'name' ? 'border-[#1d1d1f] bg-white' : 'border-[#d2d2d7]/60 bg-white/60'}`}>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] px-5 py-4 text-sm focus:outline-none tracking-tight"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#86868b] text-[11px] mb-2 font-bold tracking-wider uppercase">
                        Business Name <span className="text-[#1d1d1f]">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border ${focusedField === 'business' ? 'border-[#1d1d1f] bg-white' : 'border-[#d2d2d7]/60 bg-white/60'}`}>
                        <input
                          type="text"
                          required
                          value={formData.business}
                          onFocus={() => setFocusedField('business')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          placeholder="Your Company"
                          className="w-full bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] px-5 py-4 text-sm focus:outline-none tracking-tight"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#86868b] text-[11px] mb-2 font-bold tracking-wider uppercase">
                      Phone Number <span className="text-[#1d1d1f]">*</span>
                    </label>
                    <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border ${focusedField === 'phone' ? 'border-[#1d1d1f] bg-white' : 'border-[#d2d2d7]/60 bg-white/60'}`}>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone Number"
                        className="w-full bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] px-5 py-4 text-sm focus:outline-none tracking-tight"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#86868b] text-[11px] mb-2 font-bold tracking-wider uppercase">
                      Service You Need
                    </label>
                    <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border ${focusedField === 'service' ? 'border-[#1d1d1f] bg-white' : 'border-[#d2d2d7]/60 bg-white/60'}`}>
                      <select
                        value={formData.service}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] px-5 py-4 text-sm focus:outline-none appearance-none cursor-pointer tracking-tight"
                      >
                        <option value="" className="bg-white text-[#86868b]">
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-white text-[#1d1d1f]">
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#86868b]" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#86868b] text-[11px] mb-2 font-bold tracking-wider uppercase">
                      Tell Us About Your Business
                    </label>
                    <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden border ${focusedField === 'message' ? 'border-[#1d1d1f] bg-white' : 'border-[#d2d2d7]/60 bg-white/60'}`}>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your business..."
                        className="w-full bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] px-5 py-4 text-sm focus:outline-none resize-none tracking-tight"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-full font-semibold bg-[#1d1d1f] text-white hover:bg-[#1d1d1f]/90 active:scale-[0.98] transition-all duration-300 text-sm md:text-base group/submit shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover/submit:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[#86868b] text-xs text-center font-medium mt-1 tracking-tight">
                    This will securely open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
