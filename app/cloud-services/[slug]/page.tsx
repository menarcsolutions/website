import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_CLOUD } from "@/lib/seo-config";
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
  return SEO_CLOUD.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SEO_CLOUD.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} Agency | Menarc Solutions`;
  const description = `Premium ${service.title.toLowerCase()} by Menarc Solutions. We engineer Vercel Edge distribution, Cloudflare CDN setup, and scalable database architectures.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://menarc.in/cloud-services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://menarc.in/cloud-services/${slug}`,
    },
  };
}

export default async function CloudDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SEO_CLOUD.find((s) => s.slug === slug);
  if (!service) {
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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Cloud Infrastructure Engineering</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.08]">
            <span className="block text-[#1d1d1f] mb-2">High-Availability Hosting</span>
            <span className="block gradient-titanium-gold">
              {service.title}.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-12 max-w-3xl mx-auto tracking-tight font-normal">
            We deliver uncompromising cloud quality for your {service.title.toLowerCase()} requirements. Combining Vercel Edge distribution with enterprise Cloudflare security mitigation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?service=${slug}`}
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 transition-all duration-300 flex items-center gap-2 text-sm tracking-tight shadow-xl"
            >
              Request Cloud Migration <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Why Choose Menarc For {service.title}?</h2>
          <p className="text-[#86868b] text-sm tracking-tight">We reject unoptimized shared hosting. Every platform is deployed to global edge networks for sub-100ms latency worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Vercel Edge Distribution",
              desc: "Deploy your Next.js applications to serverless edge networks for instantaneous page hydration and zero cold starts.",
            },
            {
              icon: <Shield className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Enterprise Cloudflare CDN Setup",
              desc: "Global caching, automated DDoS mitigation, and Web Application Firewall (WAF) rules to protect your application.",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Scalable Database Architecture",
              desc: "Optimized MySQL and MongoDB connection pooling to handle millions of simultaneous queries without degradation.",
            },
            {
              icon: <Award className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Continuous 99.99% Uptime SLA",
              desc: "Automated failover, weekly off-site backups, and continuous monitoring ensure your business remains operational 24/7.",
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
