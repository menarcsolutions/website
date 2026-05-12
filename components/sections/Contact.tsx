"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 75502 55420",
    desc: "Fastest response — reply within 30 mins",
    href: "https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27d%20like%20to%20discuss%20a%20project.",
    cta: "Chat Now",
    color: "#25D366", // WhatsApp Green
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 75502 55420",
    desc: "Mon–Sat, 9 AM – 7 PM IST",
    href: "tel:+917550255420",
    cta: "Call Now",
    color: "#3B82F6", // Blue
  },
  {
    icon: Phone,
    label: "Phone 2",
    value: "+91 63838 22500",
    desc: "Mon–Sat, 9 AM – 7 PM IST",
    href: "tel:+916383822500",
    cta: "Call Now",
    color: "#3B82F6", // Blue
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@menarc.in",
    desc: "For detailed project inquiries",
    href: "mailto:contact@menarc.in",
    cta: "Send Email",
    color: "#EF4444", // Red
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
    <section id="contact" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-menarc-gold/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-menarc-gold text-sm font-bold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight">
            <span style={{ color: '#D4AF37' }}>Let&apos;s Build</span> <span className="text-white">Your Business System</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto font-bold">
            Book a free consultation — we&apos;ll map out exactly what systems will
            help your business scale most effectively.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Cards */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-3xl mb-6 uppercase tracking-tight" style={{ color: '#D4AF37' }}>
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
                    className="group relative bg-[#0A0A0A] border border-white/5 hover:border-menarc-gold/40 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 overflow-hidden shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-menarc-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300 relative z-10">
                      <Icon 
                        className="w-5 h-5 transition-all duration-300" 
                        style={{ color: card.color }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <p className="text-menarc-gold text-xs font-black mb-1 uppercase tracking-wider">{card.label}</p>
                      <p className="text-white font-black text-sm md:text-lg truncate group-hover:text-menarc-gold transition-colors duration-300">{card.value}</p>
                      <p className="text-white/70 text-xs mt-1 font-bold">{card.desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-menarc-gold flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 relative z-10">
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
            <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden h-full shadow-2xl">
              {/* Form subtle glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-menarc-gold/5 blur-[100px] pointer-events-none" />

              <h3 className="font-display font-bold text-3xl mb-8 relative z-10 uppercase tracking-tight" style={{ color: '#D4AF37' }}>
                Book a Free Consultation
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center h-[400px] relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-display font-bold text-2xl">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-white/60 text-base max-w-sm">
                    Your detailed message has been prepared. Please press send in WhatsApp to complete your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-menarc-gold text-xs mb-2 font-black tracking-wide uppercase">
                        Your Name <span className="text-white">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 rounded-xl overflow-hidden border ${focusedField === 'name' ? 'border-menarc-gold shadow-[0_0_0_1px_rgba(212,175,55,1)]' : 'border-white/10'}`}>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-white/5 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-menarc-gold text-xs mb-2 font-black tracking-wide uppercase">
                        Business Name <span className="text-white">*</span>
                      </label>
                      <div className={`relative transition-all duration-300 rounded-xl overflow-hidden border ${focusedField === 'business' ? 'border-menarc-gold shadow-[0_0_0_1px_rgba(212,175,55,1)]' : 'border-white/10'}`}>
                        <input
                          type="text"
                          required
                          value={formData.business}
                          onFocus={() => setFocusedField('business')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          placeholder="Your Company"
                          className="w-full bg-white/5 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-menarc-gold text-xs mb-2 font-black tracking-wide uppercase">
                      Phone Number <span className="text-white">*</span>
                    </label>
                    <div className={`relative transition-all duration-300 rounded-xl overflow-hidden border ${focusedField === 'phone' ? 'border-menarc-gold shadow-[0_0_0_1px_rgba(212,175,55,1)]' : 'border-white/10'}`}>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone Number"
                        className="w-full bg-white/5 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-menarc-gold text-xs mb-2 font-black tracking-wide uppercase">
                      Service You Need
                    </label>
                    <div className={`relative transition-all duration-300 rounded-xl overflow-hidden border ${focusedField === 'service' ? 'border-menarc-gold shadow-[0_0_0_1px_rgba(212,175,55,1)]' : 'border-white/10'}`}>
                      <select
                        value={formData.service}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0A0A0A] text-white">
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0A0A0A] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-menarc-gold text-xs mb-2 font-black tracking-wide uppercase">
                      Tell Us About Your Business
                    </label>
                    <div className={`relative transition-all duration-300 rounded-xl overflow-hidden border ${focusedField === 'message' ? 'border-menarc-gold shadow-[0_0_0_1px_rgba(212,175,55,1)]' : 'border-white/10'}`}>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your business..."
                        className="w-full bg-white/5 text-white placeholder:text-white/20 px-5 py-4 text-sm focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: '#D4AF37', color: '#050505' }}
                    className="w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-xl font-bold hover:bg-yellow-500 active:scale-[0.98] transition-all duration-300 text-sm md:text-base group/submit shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover/submit:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-white/40 text-xs text-center font-bold mt-1">
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
