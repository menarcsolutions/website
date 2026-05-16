import type { Metadata } from "next";
import IndustriesSection from "@/components/sections/Industries";
import ContactSection from "@/components/sections/Contact";
import { SEO_INDUSTRIES } from "@/lib/seo-config";
import Link from "next/link";
import { ArrowRight, Building2, Briefcase, Rocket, Dumbbell, Utensils, Home as HomeIcon, GraduationCap, Stethoscope, ShoppingCart, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Menarc Solutions",
  description:
    "Explore the industry-specific digital solutions by Menarc Solutions. Tailored web platforms and automation systems for startups, enterprises, gyms, real estate, and healthcare.",
  keywords: [
    "Industries Menarc Solutions",
    "Web Development for Startups",
    "Gym Website Development Cost",
    "Real Estate Web Design India",
    "Healthcare Automation Systems",
  ],
};

const industryIcons: Record<string, React.ReactNode> = {
  "solutions-for-startups": <Rocket className="w-6 h-6 text-menarc-gold" />,
  "solutions-for-small-businesses": <Briefcase className="w-6 h-6 text-blue-600" />,
  "solutions-for-enterprises": <Building2 className="w-6 h-6 text-purple-600" />,
  "solutions-for-gyms": <Dumbbell className="w-6 h-6 text-red-600" />,
  "solutions-for-restaurants": <Utensils className="w-6 h-6 text-yellow-600" />,
  "solutions-for-real-estate": <HomeIcon className="w-6 h-6 text-green-600" />,
  "solutions-for-education": <GraduationCap className="w-6 h-6 text-cyan-600" />,
  "solutions-for-healthcare": <Stethoscope className="w-6 h-6 text-pink-600" />,
  "solutions-for-ecommerce": <ShoppingCart className="w-6 h-6 text-orange-600" />,
  "solutions-for-agencies": <Monitor className="w-6 h-6 text-teal-600" />,
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 pb-16 bg-white text-[#1d1d1f] select-none">
      {/* Header Banner */}
      <section className="container-custom py-16 border-b border-[#d2d2d7]/60 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-menarc-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Tailored Domain Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.08] text-[#1d1d1f]">
            Architecting Solutions For <span className="gradient-titanium-gold">Every Vertical</span>
          </h1>
          <p className="text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight font-normal">
            Different industries require distinct digital architectures. We combine deep domain expertise with cutting-edge engineering to build platforms that solve your specific operational challenges.
          </p>
        </div>
      </section>

      {/* Main Interactive Industries Section */}
      <IndustriesSection />

      {/* Master Taxonomy Grid Section */}
      <section className="container-custom py-20 border-b border-[#d2d2d7]/60 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-[#1d1d1f]">Explore Industry Specifics</h2>
          <p className="text-[#86868b] text-sm tracking-tight max-w-xl mx-auto">Click into any vertical below to discover our custom software architectures, case studies, and ROI metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SEO_INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="p-4 rounded-2xl bg-white border border-[#d2d2d7]/60 w-fit mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {industryIcons[industry.slug] || <Building2 className="w-6 h-6 text-menarc-gold" />}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#1d1d1f] group-hover:gradient-titanium-gold transition-all">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed mb-6 tracking-tight">
                  Bespoke digital storefronts, automated lead management systems, and high-performance cloud architectures tailored for your sector.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] group-hover:translate-x-1 transition-transform w-fit">
                <span>Explore Solutions & Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
