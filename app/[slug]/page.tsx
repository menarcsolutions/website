import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_LOCATIONS, SEO_SERVICES, getProgrammaticRoutes } from "@/lib/seo-config";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = getProgrammaticRoutes();
  return routes.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const routes = getProgrammaticRoutes();
  if (!routes.includes(slug)) return {};

  const serviceSlug = SEO_SERVICES.find(s => slug.startsWith(s.slug))?.title || "Business Systems";
  const locationSlug = SEO_LOCATIONS.find(l => slug.endsWith(l.slug))?.city || "Tamil Nadu";

  const title = `${serviceSlug} in ${locationSlug} | Menarc AI & Automation`;
  const description = `Premium ${serviceSlug.toLowerCase()} in ${locationSlug}. Menarc builds intelligent digital systems and workflow automations for businesses in ${locationSlug} and across Tamil Nadu.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://menarc.in/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://menarc.in/${slug}`,
    },
  };
}

export default async function ProgrammaticPage({ params }: Props) {
  const { slug } = await params;
  const routes = getProgrammaticRoutes();
  if (!routes.includes(slug)) {
    notFound();
  }

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <TechEcosystem />
      <Industries />
      <Contact />
    </>
  );
}
