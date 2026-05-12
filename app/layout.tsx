import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://menarc.in"),
  title: {
    default: "Menarc | AI-Powered Business Systems & Automation Agency",
    template: "%s | Menarc",
  },
  description:
    "Menarc builds intelligent digital systems, workflow automations, and scalable infrastructure for modern businesses. Premium web platforms, CRM systems, and AI-driven automation solutions.",
  keywords: [
    "Menarc",
    "Menarc Solutions",
    "AI Solutions Chennai",
    "AI Solutions Tamil Nadu",
    "Automation Company Chennai",
    "Workflow Automation Tamil Nadu",
    "CRM Solutions Chennai",
    "Business Automation Services",
    "AI Startup Chennai",
    "AI Companies Tamil Nadu",
    "Automation Agency Chennai",
    "AI Workflow Chennai",
    "Business Intelligence Systems",
    "Digital Infrastructure Agency",
  ],
  authors: [{ name: "Menarc", url: "https://menarc.in" }],
  creator: "Menarc",
  publisher: "Menarc",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://menarc.in",
    siteName: "Menarc | AI & Automation Agency",
    title: "Menarc | AI-Powered Business Systems & Automation Agency",
    description:
      "Premium AI-powered business systems, workflow automation, and scalable digital infrastructure for modern businesses in Chennai and across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Menarc — AI-Powered Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menarc | AI-Powered Business Systems & Automation",
    description:
      "Premium digital systems, workflow automation, and AI-powered business infrastructure.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://menarc.in",
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://menarc.in/#organization",
        "name": "Menarc",
        "url": "https://menarc.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://menarc.in/logo.svg",
          "width": "512",
          "height": "512"
        },
        "description": "AI-Powered Business Systems, Workflow Automation & Digital Infrastructure Agency.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-75502-55420",
          "contactType": "customer service"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://menarc.in/#localbusiness",
        "name": "Menarc",
        "image": "https://menarc.in/logo.svg",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.0827",
          "longitude": "80.2707"
        },
        "url": "https://menarc.in",
        "telephone": "+917550255420",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AI Business Systems & Automation",
        "provider": { "@id": "https://menarc.in/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "City", "name": "Madurai" },
          { "@type": "City", "name": "Trichy" },
          { "@type": "City", "name": "Salem" },
          { "@type": "City", "name": "Tiruppur" },
          { "@type": "City", "name": "Erode" },
          { "@type": "City", "name": "Vellore" }
        ],
        "description": "Premium workflow automation, CRM integration, and AI-powered digital infrastructure."
      }
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-[#050505] text-white font-body antialiased transition-colors duration-300">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
