import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import { faqData } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Web Development Company Chennai | Best Website Development Services",
  description: "Looking for a web development company in Chennai? Menarc Solutions builds custom websites, ecommerce stores, business websites, landing pages, and web applications designed to generate leads and grow your business.",
  alternates: {
    canonical: "https://www.menarc.in",
  },
  openGraph: {
    title: "Web Development Company Chennai | Best Website Development Services",
    description: "Looking for a web development company in Chennai? Menarc Solutions builds custom websites, ecommerce stores, business websites, landing pages, and web applications designed to generate leads and grow your business.",
    url: "https://www.menarc.in",
    type: "website",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://menarc.in"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero
        title={
          <>
            <span className="block text-[#1d1d1f]">Intelligent Web</span>
            <span className="block text-[#1d1d1f]">Systems For</span>
            <span className="block gradient-titanium-gold pb-2 whitespace-nowrap">
              Modern Businesses.
            </span>
          </>
        }
        subtitle="We build premium web platforms, workflow automations, and CRM systems engineered for uncompromising performance and scalability."
        badge="Web Development Company in Chennai"
      />
      <TrustBar />
      <Services />
      <TechEcosystem />
      <Industries />
      <Contact />
      <FAQ />
    </>
  );
}
