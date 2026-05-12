"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Globe,
  Workflow,
  TrendingUp,
  ShoppingCart,
  Calendar,
  Users,
  BarChart3,
  Wrench,
  MessageSquare,
  Mail,
  Database,
  Bot,
  Search,
  Zap,
  X,
  ArrowRight,
} from "lucide-react";
import { DestinationCard } from "@/components/ui/card-21";

const themeColors = [
  "150 50% 25%",  // Lush Green
  "250 50% 30%",  // Twilight Purple
  "200 50% 30%",  // Deep Blue
  "45 70% 35%",   // Golden Brown
  "340 50% 30%",  // Wine Red
  "180 50% 25%",  // Dark Teal
];

const categories = [
  {
    id: "web",
    label: "Web Platforms",
    icon: Globe,
    color: "gold",
    services: [
      {
        icon: Globe,
        title: "Corporate Websites",
        desc: "Cinematic, fast-loading, SEO-optimized sites that position your brand as an industry leader.",
        benefits: ["95+ Lighthouse Score", "Mobile-First Design", "SEO Ready"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        flag: "🏢",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce Platforms",
        desc: "High-conversion storefronts with inventory sync and automated order workflows.",
        benefits: ["Payment Integration", "Auto Order Flows", "Inventory Sync"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        flag: "🛒",
      },
      {
        icon: Calendar,
        title: "Booking Systems",
        desc: "Smart booking with calendar sync and automated WhatsApp confirmations.",
        benefits: ["Auto Confirmations", "Calendar Sync", "WhatsApp Alerts"],
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
        flag: "📅",
      },
      {
        icon: BarChart3,
        title: "Business Dashboards",
        desc: "Real-time analytics dashboards for complete visibility into revenue and metrics.",
        benefits: ["Real-time Data", "Custom KPIs", "Team Access"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        flag: "📊",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation Systems",
    icon: Workflow,
    color: "white",
    services: [
      {
        icon: Bot,
        title: "Lead Management",
        desc: "Automatically capture, qualify, route, and follow up on every lead seamlessly.",
        benefits: ["Auto CRM Entry", "Smart Routing", "Follow-up Sequences"],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        flag: "⚡",
      },
      {
        icon: MessageSquare,
        title: "WhatsApp Workflows",
        desc: "Automated WhatsApp flows for follow-ups, reminders, and support.",
        benefits: ["Auto Responses", "Bulk Messaging", "Workflow Triggers"],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
        flag: "💬",
      },
      {
        icon: Mail,
        title: "Email Sequences",
        desc: "Behavior-triggered email sequences for onboarding, upsells, and retention.",
        benefits: ["Drip Sequences", "Behavior Triggers", "A/B Testing Ready"],
        image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop",
        flag: "📧",
      },
      {
        icon: Users,
        title: "Inquiry Automation",
        desc: "Route and respond to inquiries instantly using AI across all channels.",
        benefits: ["Instant Response", "Smart Routing", "CRM Sync"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        flag: "🤖",
      },
      {
        icon: Database,
        title: "CRM Integrations",
        desc: "Connect your CRM to web, WhatsApp, and email for a unified customer view.",
        benefits: ["Unified Data", "Pipeline Automation", "Team Alerts"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        flag: "🔗",
      },
      {
        icon: Wrench,
        title: "Internal Tasks",
        desc: "Automate internal approvals, report generation, and team notifications.",
        benefits: ["Task Routing", "Approval Flows", "Auto Reports"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
        flag: "🛠️",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth Solutions",
    icon: TrendingUp,
    color: "gold",
    services: [
      {
        icon: Search,
        title: "SEO Optimization",
        desc: "Technical and content SEO that drives targeted organic traffic from day one.",
        benefits: ["Local SEO", "Schema Markup", "Content Strategy"],
        image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=2070&auto=format&fit=crop",
        flag: "📈",
      },
      {
        icon: Zap,
        title: "Speed Optimization",
        desc: "Achieve perfect Lighthouse scores with advanced caching and edge delivery.",
        benefits: ["Core Web Vitals", "CDN Setup", "Image Optimization"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        flag: "🚀",
      },
      {
        icon: BarChart3,
        title: "Analytics Tracking",
        desc: "GA4, Search Console, and custom dashboards to track real conversions.",
        benefits: ["GA4 Setup", "Conversion Tracking", "Custom Reports"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        flag: "👁️",
      },
      {
        icon: Wrench,
        title: "Managed Hosting",
        desc: "Secure cloud hosting, uptime monitoring, and ongoing platform maintenance.",
        benefits: ["99.9% Uptime", "Security Updates", "Monthly Reports"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        flag: "☁️",
      },
    ],
  },
];

const getShaderConfig = (index: number) => {
  const configs = [
    {
      proportion: 0.3,
      softness: 0.8,
      distortion: 0.15,
      swirl: 0.6,
      swirlIterations: 8,
      shape: "checks" as const,
      shapeScale: 0.08,
      colors: ["#D4AF37", "#000000", "#D4AF37", "#000000"],
    },
    {
      proportion: 0.4,
      softness: 1.2,
      distortion: 0.2,
      swirl: 0.9,
      swirlIterations: 12,
      shape: "dots" as const,
      shapeScale: 0.12,
      colors: ["#D4AF37", "#000000", "#D4AF37", "#000000"],
    },
    {
      proportion: 0.35,
      softness: 0.9,
      distortion: 0.18,
      swirl: 0.7,
      swirlIterations: 10,
      shape: "checks" as const,
      shapeScale: 0.1,
      colors: ["#D4AF37", "#000000", "#D4AF37", "#000000"],
    },
    {
      proportion: 0.45,
      softness: 1.1,
      distortion: 0.22,
      swirl: 0.8,
      swirlIterations: 15,
      shape: "dots" as const,
      shapeScale: 0.09,
      colors: ["#D4AF37", "#000000", "#D4AF37", "#000000"],
    },
  ];
  return configs[index % configs.length];
};

const colorMap = {
  gold: {
    tab: "border-menarc-gold text-menarc-gold bg-menarc-gold/10",
    tabInactive: "border-transparent text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5",
    badge: "bg-menarc-gold/10 text-menarc-gold",
  },
  white: {
    tab: "border-white text-white bg-white/10",
    tabInactive: "border-transparent text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5",
    badge: "bg-white/10 text-white",
  },
};

type ServiceModalProps = {
  service: (typeof categories)[0]["services"][0];
  color: string;
  onClose: () => void;
};

function ServiceModal({ service, color, onClose }: ServiceModalProps) {
  const Icon = service.icon;
  const c = colorMap[color as keyof typeof colorMap];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={18} />
        </button>
        <div className="w-14 h-14 rounded-2xl bg-menarc-gold/10 border border-menarc-gold/20 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-menarc-gold" strokeWidth={1.75} />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">{service.title}</h3>
        <p className="text-white/70 leading-relaxed mb-8 text-lg">{service.desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {service.benefits.map((b) => (
             <span key={b} className={`px-4 py-2 rounded-full text-sm font-semibold ${c.badge}`}>
              ✓ {b}
            </span>
          ))}
        </div>
        <a
          href={`https://wa.me/917550255420?text=Hi%20Menarc%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-[#050505] bg-white hover:bg-gray-200 transition-colors"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </motion.div>
  );
}
export default function Services() {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedService, setSelectedService] = useState<null | {
    service: (typeof categories)[0]["services"][0];
    color: string;
  }>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#050505]">
      {/* Optimized Premium Background: Using a cinematic radial gradient instead of heavy shaders for butter-smooth scrolling */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,_#D4AF37_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_0%_50%,_#D4AF37_0%,_transparent_40%)]" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_100%_50%,_#D4AF37_0%,_transparent_40%)]" />


      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-menarc-gold text-sm font-bold tracking-widest uppercase mb-3">
            What We Build
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight" style={{ color: '#D4AF37' }}>
            Services That Drive Results
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            From premium web platforms to full automation systems — every solution is built for measurable impact and scale.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = activeTab === cat.id;
              const catColor = colorMap[cat.color as keyof typeof colorMap];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold border transition-all duration-300 ${
                    isActive ? catColor.tab : catColor.tabInactive
                  }`}
                >
                  <CatIcon className="w-5 h-5" strokeWidth={2} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>


        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
          >
            {activeCategory.services.map((service, i) => {
              const themeColor = themeColors[i % themeColors.length];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="h-[220px] md:h-[280px]"
                >
                  <DestinationCard
                    imageUrl={service.image}
                    location={service.title}
                    flag={service.flag}
                    stats={service.desc}
                    href="#"
                    themeColor={themeColor}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedService({ service, color: activeCategory.color });
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService.service}
            color={selectedService.color}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
