import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Industries from "@/components/sections/Industries";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

interface Props {
  params: Promise<{ slug: string }>;
}

const LOCATIONS_MAP: Record<string, { city: string; cluster: string }> = {
  "chennai": { city: "Chennai", cluster: "Chennai Cluster" },
  "avadi": { city: "Avadi", cluster: "Avadi Cluster" },
  "ambattur": { city: "Ambattur", cluster: "Ambattur Cluster" },
  "pattabiram": { city: "Pattabiram", cluster: "Pattabiram Cluster" },
  "anna-nagar": { city: "Anna Nagar", cluster: "Anna Nagar Cluster" },
  "mogappair": { city: "Mogappair", cluster: "Mogappair Cluster" },
  "porur": { city: "Porur", cluster: "Porur Cluster" },
  "velachery": { city: "Velachery", cluster: "Velachery Cluster" },
  "tambaram": { city: "Tambaram", cluster: "Tambaram Cluster" },
  "omr": { city: "OMR", cluster: "OMR Cluster" },
  "sholinganallur": { city: "Sholinganallur", cluster: "Sholinganallur Cluster" },
  "coimbatore": { city: "Coimbatore", cluster: "Coimbatore" },
  "madurai": { city: "Madurai", cluster: "Madurai" },
  "trichy": { city: "Trichy", cluster: "Trichy" },
  "salem": { city: "Salem", cluster: "Salem" },
  "tiruppur": { city: "Tiruppur", cluster: "Tiruppur" },
  "erode": { city: "Erode", cluster: "Erode" },
  "hosur": { city: "Hosur", cluster: "Hosur" },
  "vellore": { city: "Vellore", cluster: "Vellore" },
};

function getLocKeyFromSlug(slug: string): string | null {
  const prefix = "website-development-";
  if (!slug.startsWith(prefix)) return null;
  const locKey = slug.slice(prefix.length);
  return LOCATIONS_MAP[locKey] ? locKey : null;
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS_MAP).map((loc) => ({
    slug: `website-development-${loc}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locKey = getLocKeyFromSlug(slug);
  if (!locKey) return {};

  const location = LOCATIONS_MAP[locKey].city;
  const primaryKeyword = `Website Development Company in ${location}`;
  
  // Dynamic Title (strictly between 50-60 characters for SEO optimal SERP CTR)
  let title = `${primaryKeyword} | Menarc Solutions`;
  if (title.length > 60 || title.length < 50) {
    title = `${primaryKeyword} | Menarc`;
  }
  
  // Dynamic Meta Description (strictly between 150-160 characters containing keyword + benefit + soft CTA)
  const description = `Looking for a top website development company in ${location}? Menarc builds premium, high-performance websites to grow your business. Contact us today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.menarc.in/website-development-${locKey}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.menarc.in/website-development-${locKey}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function getLocalFaqs(city: string) {
  return [
    {
      id: `faq-why-choose-menarc-${city.toLowerCase()}`,
      question: `Why should I choose Menarc as my website development company in ${city}?`,
      answer: `Menarc is a premier website development company in ${city} specializing in high-performance, cinematic business websites and custom workflow automation. We ensure 100/100 Core Web Vitals and tailored CRM systems to drive growth for ${city} enterprises.`
    },
    {
      id: `faq-timeline-${city.toLowerCase()}`,
      question: `How long does it take to build a business website in ${city}?`,
      answer: `Typically, a professional business website takes 2-4 weeks, depending on complexity. We follow a fixed-scope milestone delivery process, providing regular prototypes to ensure alignment.`
    },
    {
      id: `faq-seo-${city.toLowerCase()}`,
      question: `Do you provide local SEO and GEO optimization for ${city} businesses?`,
      answer: `Yes, we implement technical SEO, LocalBusiness schema markup, and Generative Engine Optimization (GEO) to help your ${city} business rank top in both Google Search and AI answer engines like ChatGPT and Perplexity.`
    },
    {
      id: `faq-automation-${city.toLowerCase()}`,
      question: `Can Menarc help automate my local business operations in ${city}?`,
      answer: `Absolutely. Beyond web design, we build custom WhatsApp, CRM, and n8n workflow automations that integrate directly with your website to streamline operations and save costs.`
    }
  ];
}

export default async function ProgrammaticServicePage({ params }: Props) {
  const { slug } = await params;
  const locKey = getLocKeyFromSlug(slug);
  if (!locKey) {
    notFound();
  }

  const locationName = LOCATIONS_MAP[locKey].city;
  const localFaqs = getLocalFaqs(locationName);

  // H1 and Text optimization containing primary keywords
  const pageTitle = (
    <>
      <span className="block text-[#1d1d1f]">Website Development</span>
      <span className="block text-[#1d1d1f]">Company In</span>
      <span className="block gradient-titanium-gold pb-2">
        {locationName}.
      </span>
    </>
  );

  const pageSubtitle = `Premium website development and automated workflow systems custom-built for businesses in ${locationName}. We design high-performance, cinematic digital experiences to accelerate your brand.`;
  const pageBadge = `Web Development & Automation • ${locationName}`;

  // Server-rendered JSON-LD schemas
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Website Development in ${locationName}`,
    "serviceType": "Website Development",
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
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "description": `Premium website development and automated workflow systems custom-built for businesses in ${locationName}.`
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
        "name": `Website Development in ${locationName}`,
        "item": `https://www.menarc.in/website-development-${locKey}`
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Server-Rendered JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero title={pageTitle} subtitle={pageSubtitle} badge={pageBadge} />
      <TrustBar />
      <Services />
      <TechEcosystem />
      <Industries />
      <Contact />
      <FAQ customFaqs={localFaqs} />
    </>
  );
}
