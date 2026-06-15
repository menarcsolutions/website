import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Globe, Zap, ShieldCheck, Users, Award, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Menarc Solutions | Web Development & Automation Agency Chennai",
  description:
    "Menarc Solutions is a Chennai-based web development and automation agency. We build premium websites, workflow automations, and CRM systems engineered for modern businesses across Tamil Nadu and India.",
  alternates: {
    canonical: "https://www.menarc.in/about",
  },
  openGraph: {
    title: "About Menarc Solutions | Web Development & Automation Agency Chennai",
    description:
      "Menarc Solutions is a Chennai-based web development and automation agency. We build premium websites, workflow automations, and CRM systems engineered for modern businesses.",
    url: "https://www.menarc.in/about",
    type: "website",
    images: [
      {
        url: "/images/about/menarc-solutions-team-chennai.jpeg",
        alt: "Menarc Solutions Team — Web Development Agency Chennai",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Menarc Solutions | Web Development & Automation Agency",
    description:
      "Menarc Solutions builds premium websites, workflow automations, and CRM systems for modern businesses in Chennai and across India.",
    images: ["/images/about/menarc-solutions-team-chennai.jpeg"],
  },
};

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Award },
  { value: "100%", label: "Core Web Vitals Score", icon: TrendingUp },
  { value: "19+", label: "Cities Served Across TN", icon: MapPin },
  { value: "3x", label: "Average ROI for Clients", icon: Zap },
];

const values = [
  {
    title: "Performance First",
    desc: "Every system we build achieves sub-500ms load speeds and 100/100 Lighthouse scores. Slow websites lose customers — we don't build slow websites.",
    icon: Zap,
  },
  {
    title: "Security by Design",
    desc: "Our serverless, database-free architecture is inherently immune to 80% of common web exploits. Your business data is never a liability.",
    icon: ShieldCheck,
  },
  {
    title: "Business-Focused Engineering",
    desc: "We don't just build websites — we build digital revenue systems. Every design decision is measured against one question: does this help the client grow?",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Partnership",
    desc: "We become your extended tech team. From initial launch to scaling infrastructure, Menarc is with you at every stage of your digital journey.",
    icon: Users,
  },
];

const services = [
  { title: "Custom Websites", href: "/services/corporate-websites", desc: "High-performance business websites built on Next.js." },
  { title: "Ecommerce Platforms", href: "/services/ecommerce-platforms", desc: "Headless storefronts with Razorpay & UPI integration." },
  { title: "WhatsApp Automation", href: "/services/whatsapp-workflows", desc: "Automated lead capture and follow-up via WhatsApp." },
  { title: "CRM Integrations", href: "/services/crm-integrations", desc: "Custom CRM workflows that eliminate manual data entry." },
  { title: "SEO Optimization", href: "/services/seo-optimization", desc: "Technical SEO + schema markup for Google ranking." },
  { title: "Web Applications", href: "/services/custom-web-applications", desc: "Scalable SaaS and business logic applications." },
];

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Menarc Solutions",
    "alternateName": "Menarc",
    "url": "https://www.menarc.in",
    "logo": "https://www.menarc.in/logo.webp",
    "image": "https://www.menarc.in/images/about/menarc-solutions-team-chennai.jpeg",
    "description":
      "Menarc Solutions is a Chennai-based web development and automation agency building premium websites, workflow automations, and CRM systems for modern businesses across India.",
    "foundingDate": "2023",
    "foundingLocation": "Chennai, Tamil Nadu, India",
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "City", "name": "Chennai" },
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-75502-55420",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
    },
    "sameAs": [
      "https://www.linkedin.com/company/menarc",
      "https://x.com/menarcsolutions",
      "https://github.com/menarcsolutions",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.menarc.in" },
      { "@type": "ListItem", "position": 2, "name": "About Menarc Solutions", "item": "https://www.menarc.in/about" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        title={
          <>
            <span className="block text-[#1d1d1f]">About</span>
            <span className="block gradient-titanium-gold pb-2">Menarc Solutions.</span>
          </>
        }
        subtitle="We are a Chennai-based web development and automation agency engineering premium digital systems for modern businesses across India."
        badge="Menarc Solutions • Chennai, Tamil Nadu"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#d2d2d7]/40">
        <div className="container-custom max-w-6xl px-6 mx-auto py-3">
          <nav className="flex items-center gap-2 text-xs text-[#86868b]">
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">Home</Link>
            <span className="text-[#d2d2d7]/80">·</span>
            <span className="text-[#1d1d1f] font-medium">About Menarc Solutions</span>
          </nav>
        </div>
      </div>

      {/* Who We Are */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none z-0" />

        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#1d1d1f] tracking-tighter leading-tight mb-6">
                Menarc Solutions —<br />
                <span className="gradient-titanium-gold">Built for Business Growth.</span>
              </h2>
              <p className="text-base md:text-lg text-[#86868b] leading-relaxed mb-6">
                <strong className="text-[#1d1d1f]">Menarc</strong> is a Chennai-based technology
                company specializing in premium web development, intelligent workflow automation,
                and CRM systems. We work with businesses across Tamil Nadu and India to replace
                outdated digital infrastructure with fast, secure, and scalable modern systems.
              </p>
              <p className="text-base md:text-lg text-[#86868b] leading-relaxed mb-8">
                Founded with a simple mission — to give every business access to the kind of
                digital systems that were previously only available to large enterprises — Menarc
                Solutions builds technology that is lean, powerful, and designed to generate
                measurable business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold text-sm hover:bg-[#1d1d1f]/90 transition-all duration-300 tracking-tight shadow-lg text-center"
                >
                  Work With Us
                </Link>
                <Link
                  href="/#services"
                  className="px-8 py-4 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-medium text-sm hover:bg-[#f5f5f7]/80 transition-all duration-300 tracking-tight text-center"
                >
                  Our Services →
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#d2d2d7]/40">
                <Image
                  src="/images/about/menarc-solutions-team-chennai.jpeg"
                  alt="Menarc Solutions Team — Web Development Agency Chennai"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#1d1d1f] shadow-sm">
                    📍 Chennai, Tamil Nadu
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f5f7] py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label}>
                  <div className="p-6 bg-white rounded-3xl border border-[#d2d2d7]/60 shadow-sm text-center">
                    <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-[#1d1d1f]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-[#1d1d1f] tracking-tighter mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-[#86868b] font-medium tracking-tight">{stat.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none z-0" />

        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tighter text-[#1d1d1f]">
              Digital systems that work <span className="gradient-titanium-gold">while you sleep.</span>
            </h2>
            <p className="text-[#86868b] text-base leading-relaxed">
              From fast-loading business websites to automated WhatsApp lead funnels, Menarc Solutions 
              delivers the full stack of modern digital infrastructure your business needs to compete and win.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#d2d2d7]/40">
              <Image
                src="/images/about/menarc-web-development-workspace.jpeg"
                alt="Menarc Solutions — Web Development Workspace Chennai"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {services.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group p-5 bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#c5a059]/40 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1d1d1f] mb-1 tracking-tight group-hover:gradient-titanium-gold transition-all">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#86868b] leading-relaxed">{svc.desc}</p>
                  </div>
                  <span className="ml-auto text-[#86868b] group-hover:text-[#1d1d1f] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#f5f5f7] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#64748B]/10 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              Our Principles
            </p>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tighter text-[#1d1d1f]">
              How Menarc builds differently.
            </h2>
            <p className="text-[#86868b] text-base leading-relaxed">
              We reject mediocre, template-driven digital work. Every project at Menarc is 
              built on a foundation of engineering precision and business outcomes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <AnimatedSection key={val.title}>
                  <div className="p-8 bg-white border border-[#d2d2d7]/60 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-[#1d1d1f]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#1d1d1f] mb-2 tracking-tight">{val.title}</h3>
                      <p className="text-sm text-[#86868b] leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#d2d2d7]/40 order-2 lg:order-1">
              <Image
                src="/images/about/menarc-solutions-meeting-clients.jpeg"
                alt="Menarc Solutions — Client Consultation and Project Planning"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <AnimatedSection className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#1d1d1f] tracking-tighter leading-tight mb-6">
                Engineering-led.<br />
                <span className="gradient-titanium-gold">Business-driven.</span>
              </h2>
              <p className="text-base md:text-lg text-[#86868b] leading-relaxed mb-6">
                Menarc Solutions was founded by <strong className="text-[#1d1d1f]">Muthu Kumaran V</strong>, 
                a full-stack automation architect with deep expertise in Next.js, serverless infrastructure, 
                and business process automation. The Menarc team brings together engineering, design, and 
                business strategy — ensuring every project delivers real-world results.
              </p>
              <p className="text-base text-[#86868b] leading-relaxed mb-8">
                Based in Chennai, we serve clients across Tamil Nadu — from Coimbatore and Madurai 
                to Trichy, Salem, Erode, and Vellore — as well as businesses across India.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="https://wa.me/917550255420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1d1d1f] font-semibold hover:text-[#c5a059] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 75502 55420
                </a>
                <span className="inline-flex items-center gap-2 text-[#86868b]">
                  <MapPin className="w-4 h-4" />
                  Chennai, Tamil Nadu 600040
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Image */}
      <section className="bg-[#f5f5f7] py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              Our Technology
            </p>
            <h2 className="font-bold text-3xl md:text-4xl tracking-tighter text-[#1d1d1f]">
              Built on modern, reliable infrastructure.
            </h2>
          </AnimatedSection>
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#d2d2d7]/40">
            <Image
              src="/images/about/menarc-automation-technology.jpeg"
              alt="Menarc Solutions — Business Automation Technology Platform"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-lg">
                <h3 className="text-white font-black text-2xl md:text-4xl tracking-tighter mb-3">
                  Next.js • Tailwind • Vercel
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  We use the world&apos;s best modern tech stack — serverless by design, blazing fast by default.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
