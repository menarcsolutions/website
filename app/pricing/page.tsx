import type { Metadata } from "next";
import { Check, Shield, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Tailored Pricing & AMC Packages | Menarc Solutions",
  description:
    "Customized pricing for premium website development, SEO optimization, AI workflow automation, and AMC support packages. Pricing based on your specific requirements, features, and timeline.",
  keywords: [
    "Menarc Solutions Pricing",
    "Custom Website Development Cost",
    "Tailored SEO Packages Chennai",
    "AI Automation Custom Quote",
    "Website Maintenance AMC Retainer",
  ],
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Value-Driven Custom Investment</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Tailored Pricing Based On Your <span className="gradient-titanium-gold">Exact Requirements.</span>
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            We reject rigid, one-size-fits-all price tags. Every digital system, web platform, and automation pipeline we engineer is priced transparently based entirely on your specific feature requirements, technical scope, and delivery timeline.
          </p>
        </div>
      </section>

      {/* Pricing Bento Matrix Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package 1 */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between relative group shadow-lg hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1d1d1f] bg-white px-3 py-1 rounded-full border border-[#d2d2d7]/60 mb-3 inline-block shadow-sm">
                  Startup & Local Businesses
                </span>
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">Growth Storefronts</h3>
                <p className="text-sm text-[#86868b] tracking-tight">High-impact cinematic digital storefronts to establish instant credibility.</p>
              </div>

              <div className="mb-8 pb-8 border-b border-[#d2d2d7]/60">
                <span className="text-2xl font-bold text-[#1d1d1f] block mb-1 tracking-tight">Custom Quote</span>
                <span className="text-xs text-[#86868b] tracking-tight">Based on design complexity & timeline</span>
              </div>

              <ul className="flex flex-col gap-4 mb-8 text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Custom Cinematic UI/UX Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Flawless Mobile-First Responsiveness</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">WhatsApp Direct Chat Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Foundational On-Page & Technical SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Vercel / Cloudflare Edge Deployment</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact?package=growth"
              className="w-full py-4 rounded-full bg-white border border-[#d2d2d7]/60 hover:bg-[#1d1d1f] hover:text-white font-semibold text-center transition-all duration-300 block text-sm tracking-tight shadow-sm"
            >
              Request Tailored Quote
            </Link>
          </div>

          {/* Package 2 - Featured */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border-2 border-[#1d1d1f] hover:border-menarc-gold transition-all duration-300 flex flex-col justify-between relative group shadow-xl scale-105 z-10 hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1d1d1f] text-white font-bold text-xs tracking-wider uppercase shadow-md">
              Most Popular / Corporate
            </div>

            <div>
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#1d1d1f] px-3 py-1 rounded-full border border-[#1d1d1f] mb-3 inline-block shadow-sm">
                  Growing Brands & Agencies
                </span>
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">Corporate Ecosystems</h3>
                <p className="text-sm text-[#86868b] tracking-tight">Comprehensive multi-page digital platforms engineered for lead generation.</p>
              </div>

              <div className="mb-8 pb-8 border-b border-[#d2d2d7]/60">
                <span className="text-2xl font-bold text-[#1d1d1f] block mb-1 tracking-tight">Tailored Investment</span>
                <span className="text-xs text-[#86868b] tracking-tight">Based on page count & CMS features</span>
              </div>

              <ul className="flex flex-col gap-4 mb-8 text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Custom Multi-Page Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Headless CMS Integration (Sanity/Strapi)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Advanced Technical & Local SEO Setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Core Web Vitals Guarantee (100/100 LCP)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Custom Lead Management Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Dedicated Milestone-Based Delivery</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact?package=corporate"
              className="w-full py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 text-center transition-all duration-300 block text-sm tracking-tight shadow-md"
            >
              Get Consultation & Pricing
            </Link>
          </div>

          {/* Package 3 */}
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between relative group shadow-lg hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1d1d1f] bg-white px-3 py-1 rounded-full border border-[#d2d2d7]/60 mb-3 inline-block shadow-sm">
                  Enterprise & E-Commerce
                </span>
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">E-Commerce & SaaS</h3>
                <p className="text-sm text-[#86868b] tracking-tight">Full-scale web applications with custom business logic and automated workflows.</p>
              </div>

              <div className="mb-8 pb-8 border-b border-[#d2d2d7]/60">
                <span className="text-2xl font-bold text-[#1d1d1f] block mb-1 tracking-tight">Custom Scope</span>
                <span className="text-xs text-[#86868b] tracking-tight">Based on database & API integrations</span>
              </div>

              <ul className="flex flex-col gap-4 mb-8 text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Full-Stack Next.js / React Web Application</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Secure Payment Gateway Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Automated n8n / WhatsApp Workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Scalable Database Architecture (MySQL/NoSQL)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">AI Chatbot & CRM Synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1d1d1f] shrink-0" />
                  <span className="tracking-tight">Priority Enterprise Support & SLAs</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact?package=enterprise"
              className="w-full py-4 rounded-full bg-white border border-[#d2d2d7]/60 hover:bg-[#1d1d1f] hover:text-white font-semibold text-center transition-all duration-300 block text-sm tracking-tight shadow-sm"
            >
              Request Enterprise Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* AMC / Maintenance Bento Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-4xl mx-auto bg-[#f5f5f7] border border-[#d2d2d7]/60 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#1d1d1f]" />
              <span className="text-xs uppercase tracking-wider text-[#1d1d1f] font-bold">Annual Maintenance Contract (AMC)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-[#1d1d1f]">Protect & Optimize Your Digital Investment.</h2>
            <p className="text-[#86868b] text-sm leading-relaxed max-w-xl tracking-tight">
              Our managed hosting and security retainers ensure continuous 99.9% uptime, automated weekly off-site backups, continuous Core Web Vitals monitoring, and priority bug fixes. Retainer fees are tailored to your infrastructure scale.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact?package=amc"
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 transition-all duration-300 inline-flex items-center gap-2 text-sm tracking-tight shadow-md"
            >
              Explore AMC Retainers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Bento Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Frequently Asked Questions.</h2>
            <p className="text-[#86868b] text-base md:text-lg tracking-tight">Everything you need to know about our custom pricing, deliverables, and engagement terms.</p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                q: "How exactly is the pricing calculated for my project?",
                a: "During our initial discovery call, we analyze your exact feature checklist, design complexity, third-party API requirements, and expected delivery timeline. We then provide a fixed, transparent proposal with zero hidden costs.",
              },
              {
                q: "What are the payment terms for custom website projects?",
                a: "We operate on a transparent milestone-based schedule: 50% advance deposit to initiate design and architecture, 25% upon staging delivery and CMS approval, and 25% prior to final production deployment and domain handover.",
              },
              {
                q: "Are there any recurring monthly fees after deployment?",
                a: "No mandatory recurring fees exist for standalone web development. You only pay for third-party hosting/domain renewals (e.g., Vercel, Cloudflare) unless you choose to enroll in our dedicated AMC support retainer.",
              },
              {
                q: "How long does it take to deliver a completed website?",
                a: "Growth storefronts are typically deployed within 2 weeks. Corporate ecosystems average 3–4 weeks, while complex E-Commerce and SaaS platforms require 6–8 weeks depending on feedback and iteration cycles.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all shadow-md">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-[#1d1d1f] tracking-tight">
                  <HelpCircle className="w-5 h-5 shrink-0 text-[#86868b]" /> {faq.q}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed pl-8 tracking-tight">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
