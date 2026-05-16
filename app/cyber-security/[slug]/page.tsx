import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_SECURITY } from "@/lib/seo-config";
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
  return SEO_SECURITY.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SEO_SECURITY.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} Agency | Menarc Solutions`;
  const description = `Premium ${service.title.toLowerCase()} by Menarc Solutions. We engineer bank-grade SSL integration, secure JWT authentication systems, and automated threat monitoring.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://menarc.in/cyber-security/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://menarc.in/cyber-security/${slug}`,
    },
  };
}

export default async function SecurityDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SEO_SECURITY.find((s) => s.slug === slug);
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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Enterprise Cyber Security</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.08]">
            <span className="block text-[#1d1d1f] mb-2">Bank-Grade Protection</span>
            <span className="block gradient-titanium-gold">
              {service.title}.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-12 max-w-3xl mx-auto tracking-tight font-normal">
            We deliver uncompromising security quality for your {service.title.toLowerCase()} requirements. Combining strict Content-Security-Policies with secure JWT authentication systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?service=${slug}`}
              className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-semibold hover:bg-[#1d1d1f]/90 transition-all duration-300 flex items-center gap-2 text-sm tracking-tight shadow-xl"
            >
              Request Security Audit <ArrowRight className="w-4 h-4" />
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
          <p className="text-[#86868b] text-sm tracking-tight">We reject vulnerable legacy codebases. Every platform is audited and hardened against OWASP Top 10 vulnerabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Shield className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Bank-Grade SSL & Encryption",
              desc: "End-to-end TLS 1.3 encryption protecting all data transmission between your users and database servers.",
            },
            {
              icon: <Zap className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Secure JWT Authentication",
              desc: "Stateless, cryptographically signed JSON Web Tokens with strict expiration and refresh rotation policies.",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Automated Threat Mitigation",
              desc: "Cloudflare Web Application Firewall (WAF) integration blocking malicious botnets and SQL injection attempts instantly.",
            },
            {
              icon: <Award className="w-8 h-8 text-[#1d1d1f]" />,
              title: "Weekly Off-Site Backups",
              desc: "Automated, encrypted snapshots stored in redundant geographical locations ensure total disaster recovery capabilities.",
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
