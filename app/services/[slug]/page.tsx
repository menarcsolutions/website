import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Activity, Award, ShieldCheck, Zap } from "lucide-react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { servicesData } from "@/lib/services-data";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  const title = `${service.title} | Website Development & Automation | Menarc`;
  const description = service.overview.slice(0, 155) + "...";

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.menarc.in/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.menarc.in/services/${slug}`,
      type: "website",
      images: [
        {
          url: `/images/services/${slug}-1.jpeg`,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/images/services/${slug}-1.jpeg`],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Map icons for values grid
  const valueIcons = [Activity, Award, ShieldCheck];

  // Map FAQs with ID
  const mappedFaqs = service.faqs.map((faq, idx) => ({
    id: `faq-${slug}-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  // JSON-LD schemas
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Menarc",
      "url": "https://www.menarc.in",
      "telephone": "+917550255420",
      "priceRange": "$$",
      "image": "/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600040",
        "addressCountry": "IN"
      }
    },
    "description": service.overview,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.menarc.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.menarc.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.menarc.in/services/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        title={
          <>
            <span className="block text-[#1d1d1f]">Architecting</span>
            <span className="block gradient-titanium-gold pb-2">{service.title}.</span>
          </>
        }
        subtitle={`Premium ${service.primaryKeyword} custom-built for modern business scaling, performance, and security.`}
        badge={`${service.categoryLabel} • Enterprise Capability`}
        bgImage={`/images/services/${slug}-1.jpeg`}
      />

      <TrustBar />

      {/* Overview & ROI Metrics */}
      <section className="bg-white py-20 relative select-text z-20 overflow-hidden">
        {/* Fine Architectural Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Soft Ambient Mesh Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none z-0" />
        
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#86868b] mb-12 select-none">
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
            <span className="text-[#d2d2d7]/80 select-none">·</span>
            <Link href="/#services" className="hover:text-[#1d1d1f] transition-colors">
              Services
            </Link>
            <span className="text-[#d2d2d7]/80 select-none">·</span>
            <span className="text-[#1d1d1f] font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-sm select-none">
                <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Operational Overview
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#1d1d1f] tracking-tighter leading-tight mb-8">
                The business case for custom engineering.
              </h2>
              <p className="text-base sm:text-lg text-[#86868b] leading-relaxed mb-8">
                {service.overview}
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-[#1d1d1f] tracking-tight">Key Target Keywords:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold select-none border border-blue-100">
                    {service.primaryKeyword}
                  </span>
                  {service.secondaryKeywords.map((kw) => (
                    <span key={kw} className="px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#86868b] text-xs font-medium select-none border border-[#d2d2d7]/40">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-xs font-bold text-[#1d1d1f] uppercase tracking-widest mb-2 select-none">
                Business Value & ROI
              </h3>
              {service.valueMetrics.map((metric, idx) => {
                const MetricIcon = valueIcons[idx % valueIcons.length];
                return (
                  <div
                    key={metric.label}
                    className="p-6 bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7]/60 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#d2d2d7]/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MetricIcon className="w-5 h-5 text-[#1d1d1f]" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-display font-black text-2xl md:text-3xl text-[#1d1d1f] tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-xs font-bold text-[#86868b] uppercase tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#86868b] leading-relaxed">
                        {metric.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Owner Benefits Section */}
      <section className="bg-[#f5f5f7] py-20 relative select-text z-20 overflow-hidden">
        {/* Fine Architectural Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Soft Ambient Mesh Glow */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#64748B]/10 blur-[100px] rounded-full pointer-events-none z-0" />
        
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              Strategic Advantages
            </p>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tighter text-[#1d1d1f]">
              How it benefits the business owner.
            </h2>
            <p className="text-[#86868b] text-base leading-relaxed">
              We design digital infrastructure with the business owner in mind. Every system is built to eliminate overhead, prevent security liabilities, and protect bottom-line margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.ownerBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[#d2d2d7]/60 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1d1d1f] mb-2 tracking-tight">
                    Benefit Option 0{idx + 1}
                  </h4>
                  <p className="text-sm text-[#86868b] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Images Gallery Section */}
      <section className="bg-white py-20 relative select-text z-20 overflow-hidden">
        {/* Fine Architectural Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Soft Ambient Mesh Glow */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#c5a059]/10 blur-[80px] rounded-full pointer-events-none z-0" />
        
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              Layouts & Systems
            </p>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tighter text-[#1d1d1f]">
              Visual architecture in production.
            </h2>
            <p className="text-[#86868b] text-base leading-relaxed">
              High-resolution layouts showing the system structure, UI responsiveness, and backend dashboard reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-[#d2d2d7]/60 shadow-md bg-[#f5f5f7] group"
              >
                <Image
                  src={`/images/services/${slug}-${num}.jpeg`}
                  alt={`${service.title} layout example ${num}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white font-bold text-xs select-none">
                  Layout {num} • {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="bg-[#f5f5f7] py-20 relative select-text z-20 overflow-hidden">
        {/* Fine Architectural Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#d2d2d7_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Soft Ambient Mesh Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#64748B]/10 blur-[80px] rounded-full pointer-events-none z-0" />
        
        <div className="container-custom max-w-6xl px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
              Technical Specifications
            </p>
            <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tighter text-[#1d1d1f]">
              Core capabilities & specifications.
            </h2>
            <p className="text-[#86868b] text-base leading-relaxed">
              What goes under the hood of your custom business system. Engineered with clean codebase structures and reliable APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[#d2d2d7]/60 rounded-3xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/60 flex items-center justify-center mb-4 shadow-sm select-none">
                  <span className="font-bold text-sm text-[#1d1d1f]">0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-[#1d1d1f] mb-2 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ customFaqs={mappedFaqs} />

      <Contact />
    </>
  );
}
