"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
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

const categories = [
  {
    id: "web",
    label: "Web Platforms",
    icon: Globe,
    color: "gold",
    services: [
      {
        slug: "corporate-websites",
        icon: Globe,
        title: "Corporate Websites",
        desc: "Cinematic, fast-loading, SEO-optimized sites that position your brand as an industry leader.",
        benefits: ["95+ Lighthouse Score", "Mobile-First Design", "SEO Ready"],
        details: {
          overview: "Our corporate web platforms are engineered to serve as the ultimate digital storefront for enterprise brands. Built on Next.js and React, we eliminate bloated WordPress legacy code to deliver sub-second page loads, cinematic visual hierarchy, and bank-grade security.",
          features: [
            { title: "Cinematic UI/UX Design", desc: "Bespoke Apple-inspired bento grid layouts and fluid micro-animations." },
            { title: "Sub-Second Page Loads", desc: "Advanced server-side rendering (SSR) and edge caching for 95+ Lighthouse scores." },
            { title: "Enterprise CMS Integration", desc: "Headless CMS architecture allowing marketing teams to update content seamlessly." },
            { title: "Bank-Grade Security", desc: "Strict Content Security Policies, DDoS mitigation, and secure headers." }
          ],
          deliverables: ["Fully responsive Next.js codebase", "Custom Figma design system", "Technical SEO & Core Web Vitals certification"]
        }
      },
      {
        slug: "ecommerce-platforms",
        icon: ShoppingCart,
        title: "Ecommerce Platforms",
        desc: "High-conversion storefronts with inventory sync and automated order workflows.",
        benefits: ["Payment Integration", "Auto Order Flows", "Inventory Sync"],
        details: {
          overview: "We architect high-performance ecommerce platforms designed to maximize average order value (AOV) and eliminate cart abandonment. By decoupling the frontend interface from the backend commerce engine, we deliver lightning-fast product discovery and seamless checkout experiences.",
          features: [
            { title: "Lightning-Fast Catalog Search", desc: "Instantaneous filtering and algorithmic product recommendations." },
            { title: "Automated Checkout Workflows", desc: "Frictionless one-click payment gateway integrations (Razorpay, Stripe, UPI)." },
            { title: "Real-Time Inventory Sync", desc: "Live ERP and warehouse stock synchronization to prevent overselling." },
            { title: "WhatsApp Order Notifications", desc: "Automated instant confirmation and tracking updates sent directly to customers." }
          ],
          deliverables: ["Custom headless commerce storefront", "Automated payment & shipping webhook integrations", "Comprehensive analytics dashboard"]
        }
      },
      {
        slug: "booking-systems",
        icon: Calendar,
        title: "Booking Systems",
        desc: "Smart booking with calendar sync and automated WhatsApp confirmations.",
        benefits: ["Auto Confirmations", "Calendar Sync", "WhatsApp Alerts"],
        details: {
          overview: "Transform your service business with an intelligent, fully automated booking architecture. Our custom scheduling platforms eliminate manual back-and-forth by syncing real-time availability across calendars while managing deposits, reminders, and follow-ups autonomously.",
          features: [
            { title: "Multi-Timezone Calendar Sync", desc: "Bi-directional Google Calendar and Outlook synchronization with zero double-booking." },
            { title: "Automated WhatsApp Reminders", desc: "Instant booking confirmations, 24-hour reminders, and cancellation workflows." },
            { title: "Custom Intake & Deposit Forms", desc: "Secure upfront payment capture and qualification questionnaires during booking." },
            { title: "Dynamic Staff Allocation", desc: "Intelligent round-robin or skill-based routing for team availability." }
          ],
          deliverables: ["Embeddable or standalone booking web app", "WhatsApp & Email automated reminder sequences", "Admin scheduling management portal"]
        }
      },
      {
        slug: "business-dashboards",
        icon: BarChart3,
        title: "Business Dashboards",
        desc: "Real-time analytics dashboards for complete visibility into revenue and metrics.",
        benefits: ["Real-time Data", "Custom KPIs", "Team Access"],
        details: {
          overview: "Gain absolute operational clarity with bespoke business intelligence dashboards. We consolidate disconnected data streams from your CRM, financial software, and marketing channels into a single, lightning-fast executive interface.",
          features: [
            { title: "Real-Time Metric Aggregation", desc: "Live API connectors pulling revenue, traffic, and sales pipeline data instantly." },
            { title: "Interactive Visualizations", desc: "Beautiful, interactive charts and bento grid KPI summaries for quick decision-making." },
            { title: "Role-Based Access Control (RBAC)", desc: "Granular security permissions for executives, managers, and external stakeholders." },
            { title: "Automated Report Exporting", desc: "Scheduled PDF and CSV report generation delivered via email or WhatsApp." }
          ],
          deliverables: ["Secure React/Next.js executive dashboard", "Custom API integration middleware", "Automated scheduled reporting engine"]
        }
      },
      {
        slug: "custom-web-applications",
        icon: Database,
        title: "Custom Web Applications",
        desc: "Custom SaaS platforms, customer portals, and internal tool suites built on React and serverless backends.",
        benefits: ["Zero License Fees", "Full Ownership", "Extreme Scalability"],
        details: {
          overview: "When off-the-shelf software packages run out of runway, you need custom application engineering. We build high-performance SaaS platforms, client portals, internal tool suites, and automated web apps built on Next.js, Node.js, and serverless database clusters.",
          features: [
            { title: "React & Next.js Frontends", desc: "Modern, component-driven interfaces that render instantly." },
            { title: "Serverless Database Clusters", desc: "Highly available databases (Supabase, PostgreSQL) that scale automatically." },
            { title: "Secure User Authentication", desc: "Enterprise SSO, OAuth, and multi-factor authentication setup." },
            { title: "Comprehensive API Integration", desc: "Custom webhooks and middleware bridging internal modules." }
          ],
          deliverables: ["Handover of full GitHub repo", "Isolated cloud database setup", "Deployment to Vercel/AWS"]
        }
      },
      {
        slug: "landing-pages",
        icon: Zap,
        title: "Landing Pages",
        desc: "High-converting sales funnels, lead generation layouts, and A/B testable campaign pages.",
        benefits: ["Conversion Optimized", "Sub-Second Loading", "CRM Integration"],
        details: {
          overview: "Stop throwing ad budget at a generic homepage that confuses visitors. We design high-converting, single-purpose landing pages and multi-step sales funnels tailored to specific advertising campaigns.",
          features: [
            { title: "Distraction-Free Layouts", desc: "No main menu links or external escapes. Designed to get the form submission." },
            { title: "Sub-Second Edge Rendering", desc: "Static HTML pages deployed to global servers right next to the user." },
            { title: "A/B Testing Infrastructure", desc: "Compare different headers or buttons automatically with clean metrics." },
            { title: "Secure Form Capture Sync", desc: "Encrypted data transmission directly into CRM systems." }
          ],
          deliverables: ["Optimized static landing page", "UTM lead capture setup", "Automated A/B routing rules"]
        }
      }
    ],
  },
  {
    id: "automation",
    label: "Automation Systems",
    icon: Workflow,
    color: "white",
    services: [
      {
        slug: "lead-management",
        icon: Bot,
        title: "Lead Management",
        desc: "Automatically capture, qualify, route, and follow up on every lead seamlessly.",
        benefits: ["Auto CRM Entry", "Smart Routing", "Follow-up Sequences"],
        details: {
          overview: "Stop losing valuable prospects to delayed follow-ups. Our automated lead management systems capture inquiries from Facebook, Google Ads, and web forms, qualifying them instantly via AI and routing them to the right sales representative within seconds.",
          features: [
            { title: "Omnichannel Lead Capture", desc: "Instant webhook ingestion from Meta Ads, Google Lead Forms, and landing pages." },
            { title: "AI-Powered Qualification", desc: "Automated scoring and categorization based on budget, timeline, and company size." },
            { title: "Instant Sales Routing", desc: "Intelligent lead assignment to sales reps via WhatsApp and CRM notification." },
            { title: "Zero-Drop Follow-Up Workflows", desc: "Autonomous 7-day nurturing sequences for unresponsive prospects." }
          ],
          deliverables: ["Configured n8n/Make automation workflows", "CRM lead pipeline integration", "Custom sales notification setup"]
        }
      },
      {
        slug: "whatsapp-workflows",
        icon: MessageSquare,
        title: "WhatsApp Workflows",
        desc: "Automated WhatsApp flows for follow-ups, reminders, and support.",
        benefits: ["Auto Responses", "Bulk Messaging", "Workflow Triggers"],
        details: {
          overview: "Leverage the world's most popular messaging channel with enterprise-grade WhatsApp automation. We build interactive, AI-driven conversational workflows that handle customer support, send appointment reminders, and process re-orders completely hands-free.",
          features: [
            { title: "Interactive Button Menus", desc: "Rich messaging templates with quick-reply buttons and clickable catalog links." },
            { title: "AI Conversational Support", desc: "NLP-powered chatbots capable of answering FAQs and resolving level-1 tickets." },
            { title: "Automated Event Triggers", desc: "Instant messages triggered by abandoned carts, payment failures, or shipping updates." },
            { title: "Seamless Human Handoff", desc: "Intelligent escalation to live support agents when complex queries arise." }
          ],
          deliverables: ["Official WhatsApp Business API integration", "Custom conversational flowcharts & templates", "Agent live-chat dashboard setup"]
        }
      },
      {
        slug: "email-sequences",
        icon: Mail,
        title: "Email Sequences",
        desc: "Behavior-triggered email sequences for onboarding, upsells, and retention.",
        benefits: ["Drip Sequences", "Behavior Triggers", "A/B Testing Ready"],
        details: {
          overview: "Maximize customer lifetime value with hyper-personalized, behavior-driven email automation. We design and implement sophisticated drip campaigns that react to how users interact with your software or ecommerce store.",
          features: [
            { title: "Behavioral Trigger Rules", desc: "Emails dispatched based on specific user actions, milestones, or inactivity." },
            { title: "Dynamic Content Personalization", desc: "Customized subject lines, product recommendations, and pricing tiers per recipient." },
            { title: "Advanced A/B Split Testing", desc: "Automated testing of subject lines and call-to-actions to ensure peak open rates." },
            { title: "Impeccable Sender Reputation", desc: "Strict SPF/DKIM/DMARC authentication protocols ensuring 99% inbox placement." }
          ],
          deliverables: ["Configured email automation platform (Klaviyo/ActiveCampaign)", "Beautiful, responsive HTML email templates", "Authentication & deliverability audit"]
        }
      },
      {
        slug: "inquiry-automation",
        icon: Users,
        title: "Inquiry Automation",
        desc: "Route and respond to inquiries instantly using AI across all channels.",
        benefits: ["Instant Response", "Smart Routing", "CRM Sync"],
        details: {
          overview: "Deliver lightning-fast customer service 24/7 without expanding your support payroll. Our AI inquiry automation ingests incoming questions across web chat, email, and social media, providing accurate, context-aware responses instantly.",
          features: [
            { title: "Context-Aware AI Responses", desc: "Trained on your specific company documentation, pricing models, and policy manuals." },
            { title: "Multi-Channel Ingestion", desc: "Unified processing of Instagram DMs, website live chat, and support emails." },
            { title: "Automated Ticket Categorization", desc: "Instant tagging by urgency, department, and sentiment analysis." },
            { title: "Spam & Solicit Filtering", desc: "Intelligent deflection of promotional emails and unqualified solicitations." }
          ],
          deliverables: ["Custom-trained AI knowledge base integration", "Multi-channel webhook routing architecture", "Analytics dashboard for deflection rates"]
        }
      },
      {
        slug: "crm-integrations",
        icon: Database,
        title: "CRM Integrations",
        desc: "Connect your CRM to web, WhatsApp, and email for a unified customer view.",
        benefits: ["Unified Data", "Pipeline Automation", "Team Alerts"],
        details: {
          overview: "Eliminate data silos and manual data entry by establishing a perfectly synchronized digital ecosystem. We connect HubSpot, Salesforce, Zoho, or custom CRMs directly to your frontend platforms, communication channels, and financial software.",
          features: [
            { title: "Bi-Directional Data Synchronization", desc: "Real-time updates ensuring customer records match perfectly across all platforms." },
            { title: "Custom Pipeline Automation", desc: "Deals and deal stages updated automatically based on client interactions." },
            { title: "Automated Activity Logging", desc: "Every WhatsApp chat, email sent, and website visit logged instantly to the contact record." },
            { title: "Legacy System Bridging", desc: "Custom API wrappers connecting modern cloud tools with legacy on-premise databases." }
          ],
          deliverables: ["Custom API middleware & webhook infrastructure", "Comprehensive field mapping documentation", "Automated error logging & retry mechanisms"]
        }
      },
      {
        slug: "internal-tasks",
        icon: Wrench,
        title: "Internal Tasks",
        desc: "Automate internal approvals, report generation, and team notifications.",
        benefits: ["Task Routing", "Approval Flows", "Auto Reports"],
        details: {
          overview: "Supercharge your team's productivity by automating repetitive administrative overhead. We architect custom internal workflows that handle leave approvals, expense routing, daily KPI summaries, and inter-departmental handoffs autonomously.",
          features: [
            { title: "Multi-Stage Approval Workflows", desc: "Automated routing of purchase orders and contracts to designated managers via Slack/WhatsApp." },
            { title: "Autonomous Report Generation", desc: "Daily, weekly, or monthly executive summaries compiled and distributed automatically." },
            { title: "Smart Team Notifications", desc: "Targeted alerts for high-priority client events, server anomalies, or big deal closures." },
            { title: "Standard Operating Procedure (SOP) Enforcement", desc: "Step-by-step automated checklists ensuring flawless task execution." }
          ],
          deliverables: ["Custom internal workflow engine setup", "Slack/Teams/WhatsApp notification bots", "Managerial approval dashboard"]
        }
      }
    ]
  },
  {
    id: "growth",
    label: "Growth Solutions",
    icon: TrendingUp,
    color: "gold",
    services: [
      {
        slug: "seo-optimization",
        icon: Search,
        title: "SEO Optimization",
        desc: "Technical and content SEO that drives targeted organic traffic from day one.",
        benefits: ["Local SEO", "Schema Markup", "Content Strategy"],
        details: {
          overview: "Dominate search engine results pages (SERPs) with our holistic, AI-era search engine optimization. We combine deep technical foundation fixes with programmatic architectures and Generative Engine Optimization (GEO) to capture high-intent organic traffic.",
          features: [
            { title: "Generative Engine Optimization (GEO)", desc: "Structuring content specifically to be cited by AI search engines like ChatGPT, Perplexity, and Gemini." },
            { title: "Advanced Technical SEO", desc: "Flawless site architecture, optimized robots.txt, dynamic XML sitemaps, and canonical tags." },
            { title: "Rich JSON-LD Schema Markup", desc: "Comprehensive structured data for local business, services, FAQs, and breadcrumbs." },
            { title: "Programmatic Landing Pages", desc: "Scalable, high-quality dynamic route generation targeting hyper-specific service keywords." }
          ],
          deliverables: ["Complete technical SEO codebase overhaul", "Advanced JSON-LD schema implementation", "Programmatic keyword matrix & architecture"]
        }
      },
      {
        slug: "speed-optimization",
        icon: Zap,
        title: "Speed Optimization",
        desc: "Achieve perfect Lighthouse scores with advanced caching and edge delivery.",
        benefits: ["Core Web Vitals", "CDN Setup", "Image Optimization"],
        details: {
          overview: "Page speed is directly correlated with conversion rates and search rankings. We perform rigorous performance engineering on your web application to ensure instantaneous rendering, zero cumulative layout shift (CLS), and flawless Core Web Vitals.",
          features: [
            { title: "Perfect Core Web Vitals", desc: "Optimized LCP, FID, and CLS metrics ensuring maximum search engine preference." },
            { title: "Advanced Edge Caching", desc: "Serving static assets and pre-rendered pages directly from global CDN edge nodes." },
            { title: "Next-Gen Image & Video Optimization", desc: "Automated conversion to WebP/AVIF formats with explicit sizing and lazy loading." },
            { title: "JavaScript Bundle Optimization", desc: "Aggressive code splitting, tree shaking, and elimination of render-blocking scripts." }
          ],
          deliverables: ["95+ Google Lighthouse performance guarantee", "Optimized Next.js/React bundle configuration", "Global CDN & edge caching setup"]
        }
      },
      {
        slug: "analytics-tracking",
        icon: BarChart3,
        title: "Analytics Tracking",
        desc: "GA4, Search Console, and custom dashboards to track real conversions.",
        benefits: ["GA4 Setup", "Conversion Tracking", "Custom Reports"],
        details: {
          overview: "Make data-driven decisions with absolute confidence through enterprise-grade analytics tracking. We implement robust, privacy-compliant tracking architectures that attribute every lead, sale, and micro-conversion to its exact marketing source.",
          features: [
            { title: "Advanced GA4 & GTM Architecture", desc: "Clean, organized container setups with custom event triggers and data layers." },
            { title: "Precise Conversion Attribution", desc: "Accurate tracking of form submissions, WhatsApp clicks, phone calls, and purchases." },
            { title: "Server-Side Tracking", desc: "Bypassing ad blockers and browser privacy restrictions for 100% accurate data capture." },
            { title: "Custom Conversion Funnels", desc: "Visualizing user drop-off points across complex multi-step onboarding flows." }
          ],
          deliverables: ["Configured Google Tag Manager & GA4 properties", "Server-side tracking container setup", "Executive conversion attribution dashboard"]
        }
      },
      {
        slug: "managed-hosting",
        icon: Wrench,
        title: "Managed Hosting",
        desc: "Secure cloud hosting, uptime monitoring, and ongoing platform maintenance.",
        benefits: ["99.9% Uptime", "Security Updates", "Monthly Reports"],
        details: {
          overview: "Enjoy complete peace of mind with our enterprise managed cloud hosting and ongoing maintenance retainers. We provide high-availability infrastructure management, continuous security patching, and dedicated engineering support.",
          features: [
            { title: "99.9% Uptime Guarantee", desc: "Enterprise cloud deployment on Vercel, AWS, or Cloudflare with automated failover." },
            { title: "Continuous Security Patching", desc: "Proactive monitoring and updating of core dependencies, frameworks, and plugins." },
            { title: "24/7 Automated Uptime Monitoring", desc: "Instant engineering alerts triggered the second an anomaly or latency spike occurs." },
            { title: "Daily Automated Backups", desc: "Complete off-site database and codebase snapshots with one-click restoration." }
          ],
          deliverables: ["Enterprise cloud infrastructure provisioning", "24/7 monitoring & incident response setup", "Monthly executive performance & security reports"]
        }
      },
    ],
  },
];

type ServiceModalProps = never;

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");
  const router = useRouter();

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden bg-white select-none">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none bg-[#f5f5f7]">
        <svg
          className="relative block w-full h-12 md:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.08)_0%,_transparent_55%)]" />

      <div className="container-custom relative z-10 pt-8 md:pt-12">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#86868b] text-xs font-semibold tracking-widest uppercase mb-3">
            Practice Areas
          </p>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tighter gradient-titanium-gold">
            Services That Drive Results.
          </h2>
          <p className="text-[#86868b] text-lg max-w-2xl mx-auto leading-relaxed tracking-tight">
            From premium web platforms to full automation systems — every solution is architected for measurable impact and enterprise scale.
          </p>
        </AnimatedSection>

        {/* Apple Pill Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold border transition-all duration-300 tracking-tight ${isActive ? "bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-lg scale-105" : "bg-[#f5f5f7] text-[#86868b] border-[#d2d2d7]/60 hover:text-[#1d1d1f] hover:border-[#d2d2d7]"
                    }`}
                >
                  <CatIcon className="w-4 h-4" strokeWidth={2} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => router.push(`/services/${service.slug}`)}
                  className="bg-[#f5f5f7] border border-[#d2d2d7]/60 hover:border-[#d2d2d7] rounded-3xl p-8 flex flex-col justify-between cursor-pointer group transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c5a059]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#d2d2d7]/60 flex items-center justify-center group-hover:bg-black/5 transition-colors shadow-sm inline-flex">
                        <Icon className="w-6 h-6 text-[#1d1d1f]" strokeWidth={1.75} />
                      </div>
                    </div>

                    <h3 className="font-bold text-2xl text-[#1d1d1f] mb-3 tracking-tight group-hover:gradient-titanium-gold transition-all">
                      {service.title}
                    </h3>

                    <p className="text-[#86868b] text-sm leading-relaxed mb-6 tracking-tight">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#d2d2d7]/60 flex items-center justify-between text-xs text-[#86868b] tracking-tight font-medium relative z-10">
                    <span>{service.benefits[0]}</span>
                    <span className="text-[#1d1d1f] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
