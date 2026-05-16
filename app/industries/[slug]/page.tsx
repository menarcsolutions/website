import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_INDUSTRIES } from "@/lib/seo-config";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Award } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEO_INDUSTRIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = SEO_INDUSTRIES.find((s) => s.slug === slug);
  if (!industry) return {};

  const title = `${industry.title} | Menarc Solutions`;
  const description = `Premium digital ${industry.title.toLowerCase()} by Menarc Solutions. We engineer bespoke web platforms, automated lead management systems, and scalable cloud architectures.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://menarc.in/industries/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://menarc.in/industries/${slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = SEO_INDUSTRIES.find((s) => s.slug === slug);
  if (!industry) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

      {/* Premium Minimalistic Hero Banner */}
      <section className="container-custom py-16 md:py-24 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Tailored Domain Expertise</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.08]">
            <span className="block text-[#1d1d1f] mb-2">Bespoke Digital</span>
            <span className="block gradient-titanium-gold">
              {industry.title}.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-12 max-w-3xl mx-auto tracking-tight font-normal">
            We deliver uncompromising digital architecture for your sector. Combining deep industry understanding with ultra-fast Next.js performance and automated n8n workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?industry=${slug}`}
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 transition-all duration-300 flex items-center gap-2 text-sm tracking-tight shadow-xl"
            >
              Request Industry Architecture <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] hover:bg-[#f5f5f7]/80 transition-all duration-300 text-sm tracking-tight text-[#1d1d1f] shadow-md"
            >
              Explore Tailored Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="relative z-20">
        <TrustBar />
      </div>

      {/* Value Proposition Bento Grid */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Why Choose Menarc For Your Vertical?</h2>
          <p className="text-[#86868b] text-sm tracking-tight">We reject generic cross-industry templates. Every architecture is engineered to solve the specific operational bottlenecks of your sector.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Sector-Specific Workflows",
              desc: "From gym membership portals to real estate lead qualification pipelines, we build custom business logic tailored to your exact needs.",
            },
            {
              icon: <Shield className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Enterprise Compliance & Security",
              desc: "Bank-grade data protection, strict NDA agreements, and secure cloud environments ensure your proprietary business data remains safe.",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-[#1d1d1f]" />,
              title: "High-Converting Storefronts",
              desc: "Cinematic UI/UX design engineered specifically to establish instant brand authority and maximize lead generation.",
            },
            {
              icon: <Award className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Dedicated AMC Retainers",
              desc: "Continuous 99.99% uptime monitoring, priority bug fixes, and weekly off-site backups ensure your digital ecosystem runs flawlessly.",
            },
          ].map((val, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 p-4 rounded-2xl bg-white inline-block group-hover:bg-black/5 border border-[#d2d2d7]/60 transition-colors shadow-sm">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">{val.title}</h3>
              <p className="text-[#86868b] leading-relaxed text-sm tracking-tight">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Core Sections */}
      <div className="relative z-20">
        <Services />
        <TechEcosystem />
        <Industries />
        <Contact />
      </div>
    </div>
  );
}
