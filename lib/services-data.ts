export interface ServiceDetail {
  slug: string;
  title: string;
  category: "web" | "automation" | "growth";
  categoryLabel: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  overview: string;
  ownerBenefits: string[];
  valueMetrics: { label: string; value: string; desc: string }[];
  features: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  pexelsQueries: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "corporate-websites": {
    slug: "corporate-websites",
    title: "Corporate Websites",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "corporate website development services",
    secondaryKeywords: [
      "corporate website design company",
      "custom corporate website",
      "business website development",
      "professional website design"
    ],
    overview: "Our corporate web platforms are engineered to serve as the ultimate digital storefront for enterprise brands. Built on Next.js and React, we eliminate bloated WordPress legacy code to deliver sub-second page loads, cinematic visual hierarchy, and bank-grade security. A corporate site shouldn't just look pretty. It should establish market authority, load in under 500ms, and convert high-value prospects into active leads completely hands-free.",
    ownerBenefits: [
      "Eliminate expensive monthly legacy hosting fees and constant plugin update headaches.",
      "Get a 100/100 Google PageSpeed score to significantly boost organic search rankings.",
      "Protect your brand from cybersecurity exploits with serverless, database-free architecture.",
      "Manage updates easily using a custom, lightweight headless CMS built for marketing teams."
    ],
    valueMetrics: [
      { label: "Page Load Speed", value: "Under 500ms", desc: "Serverless edge delivery guarantees instant rendering." },
      { label: "Bounce Rate Reduction", value: "-40%", desc: "Faster load times keep mobile visitors on your site." },
      { label: "Lead Conversion Increase", value: "+28%", desc: "Engineered call-to-actions built for Apple-style UX." }
    ],
    features: [
      { title: "Bespoke Bento Grid Layouts", desc: "Fluid, responsive design structures inspired by modern Apple styling." },
      { title: "Static Generation (SSG)", desc: "Pages pre-rendered at build time for optimal performance and SEO crawlability." },
      { title: "Headless Content Management", desc: "Easily update text, case studies, and blog posts without touching the codebase." },
      { title: "Bank-Grade Security Headers", desc: "Configured with strict CSP, CORS, and DDoS protection at the network edge." }
    ],
    faqs: [
      {
        question: "Why should my company choose a custom Next.js site over WordPress?",
        answer: "WordPress sites rely on databases and bloated plugins, which slow down load times and open security vulnerabilities. Our Next.js platforms are static and database-free, making them load instantly, rank higher on Google, and immune to standard database hacks."
      },
      {
        question: "How long does a corporate website project take to complete?",
        answer: "A standard corporate platform takes 3 to 5 weeks from initial design architecture to final hosting deployment. We provide regular prototypes throughout the process to ensure alignment."
      },
      {
        question: "Will our marketing team be able to add blog posts and update pages?",
        answer: "Yes. We integrate a headless CMS (like Sanity or local Markdown engines) that lets your team update content as easily as typing a document, without risk of breaking the code layout."
      }
    ],
    pexelsQueries: ["corporate office", "modern tech workplace", "coding screen"]
  },
  "ecommerce-platforms": {
    slug: "ecommerce-platforms",
    title: "Ecommerce Platforms",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "ecommerce website development services",
    secondaryKeywords: [
      "ecommerce storefront design",
      "custom ecommerce platforms",
      "shopify website design company",
      "online store development"
    ],
    overview: "We architect high-performance ecommerce storefronts designed to maximize average order value (AOV) and eliminate cart abandonment. By decoupling the frontend user interface from the backend commerce engine, we deliver lightning-fast product discovery and frictionless checkouts that don't crash under seasonal traffic spikes. It is the differences between having a slow online shop and a scalable digital retail pipeline.",
    ownerBenefits: [
      "Stop losing sales to slow catalogue load times and clunky mobile checkout forms.",
      "Automate inventory updates across multiple channels to prevent painful overselling.",
      "Reduce customer support load with automated tracking alerts via WhatsApp APIs.",
      "Integrate local payment gateways (Razorpay, Stripe, UPI) with zero checkout friction."
    ],
    valueMetrics: [
      { label: "Checkout Completion", value: "+32%", desc: "One-click UPI checkouts eliminate payment friction." },
      { label: "Catalogue Query Speed", value: "Instant", desc: "Search and filter products without page refreshes." },
      { label: "Automated Orders", value: "100%", desc: "No manual data entry required from cart to shipping." }
    ],
    features: [
      { title: "Headless Commerce Architecture", desc: "Decoupled frontend for instant loading and custom visual layouts." },
      { title: "Algorithmic Recommendations", desc: "Show relevant upsells and related items automatically at checkout." },
      { title: "Real-Time ERP & Inventory Sync", desc: "Automatic stock matching between warehouse records and storefront catalog." },
      { title: "WhatsApp Order Shipping Notifications", desc: "Automatic dispatch of tracking numbers and confirmations directly to WhatsApp." }
    ],
    faqs: [
      {
        question: "Which platform is better for my store: Shopify or custom headless commerce?",
        answer: "If you are starting out, Shopify is highly cost-effective. But if you have high volume, custom product configurations, or need sub-second load speeds to beat competitors, a custom headless platform (Next.js frontend + Shopify/Node.js backend) is the standard."
      },
      {
        question: "How do you handle local Indian payment options like UPI?",
        answer: "We integrate Razorpay or PayU gateways directly into the checkout, optimizing the flow for mobile screens. This allows customers to pay via GPay, PhonePe, or net banking in under 15 seconds."
      },
      {
        question: "Can this system sync with our physical retail store's inventory?",
        answer: "Yes. We build custom API sync modules that connect your physical POS system (like Zoho Books or local ERPs) to the online storefront."
      }
    ],
    pexelsQueries: ["ecommerce warehouse", "online shopping checkout", "delivering parcel pack"]
  },
  "booking-systems": {
    slug: "booking-systems",
    title: "Booking Systems",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "appointment booking system development",
    secondaryKeywords: [
      "online booking platform design",
      "custom scheduling systems",
      "salon booking web application",
      "medical appointment portal"
    ],
    overview: "Transform your service business with an intelligent, fully automated booking architecture. Our custom scheduling platforms eliminate manual back-and-forth by syncing real-time availability across calendars while managing deposits, reminders, and follow-ups autonomously. Ideal for clinics, fitness studios, consulting firms, and service agencies in Chennai looking to automate appointment management.",
    ownerBenefits: [
      "Save hours of administrative work by letting clients book and manage their own slots.",
      "Reduce appointment no-shows to near-zero with automated WhatsApp reminders.",
      "Secure upfront deposits during booking to eliminate last-minute cancellations.",
      "Organize staff schedules automatically based on availability and specialty filters."
    ],
    valueMetrics: [
      { label: "No-Show Rate Drop", value: "-85%", desc: "Automated WhatsApp and SMS reminders keep clients alert." },
      { label: "Admin Time Saved", value: "12 hrs/week", desc: "Eliminates phone coordination for appointment slots." },
      { label: "Upfront Cash Flow", value: "+40%", desc: "Intake deposits collected automatically during booking." }
    ],
    features: [
      { title: "Real-Time Calendar Sync", desc: "Bi-directional integration with Google Calendar, Outlook, and Apple Calendar." },
      { title: "Secure Payment Collection", desc: "Capture consultation deposits or full payments during the booking step." },
      { title: "Custom Intake Questionnaires", desc: "Qualify clients and gather requirements automatically before the meeting." },
      { title: "Staff Shift Management", desc: "Role-based dashboards for trainers, doctors, or consultants to manage their shifts." }
    ],
    faqs: [
      {
        question: "Can the booking system handle multiple staff members with different schedules?",
        answer: "Yes. The system automatically routes bookings based on individual staff schedules, specialties, and vacation days, ensuring no double-booking occurs."
      },
      {
        question: "How are payment deposits handled for cancellations?",
        answer: "We configure custom cancellation window rules. If a client cancels within 24 hours, the system can automatically retain the deposit or issue a credit note."
      },
      {
        question: "Does the system support group booking for classes or events?",
        answer: "Absolutely. We build slots that accommodate multiple seats per session (e.g., spin classes or seminars), displaying remaining availability in real-time."
      }
    ],
    pexelsQueries: ["calendar appointment book", "reception desk booking", "doctor scheduling patients"]
  },
  "business-dashboards": {
    slug: "business-dashboards",
    title: "Business Dashboards",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "custom business dashboard development",
    secondaryKeywords: [
      "real-time analytics dashboards",
      "executive KPI tracking systems",
      "business intelligence portals",
      "saas analytics design"
    ],
    overview: "Gain absolute operational clarity with bespoke business intelligence dashboards. We consolidate disconnected data streams from your CRM, financial software, inventory databases, and marketing channels into a single, lightning-fast executive interface. Stop logging into six different tools every morning just to find out if your business is profitable today.",
    ownerBenefits: [
      "Get a single source of truth for revenue, sales pipelines, and active customer support metrics.",
      "Monitor operational efficiency with live metrics updated automatically via secure API bridges.",
      "Secure company data with granular, role-based access permissions for employees.",
      "Export reports instantly to PDF or CSV for board meetings or financial audits."
    ],
    valueMetrics: [
      { label: "Time to KPI Visibility", value: "Instant", desc: "No manual compilation of excel sheets required." },
      { label: "Data Accuracy", value: "100%", desc: "Direct API integration removes human error margins." },
      { label: "Decision Velocity", value: "3x Faster", desc: "Consolidated charts show visual trends immediately." }
    ],
    features: [
      { title: "Multi-Source API Integration", desc: "Connects HubSpot, Tally, Google Ads, and custom DBs into one screen." },
      { title: "Bento Grid Visual Layout", desc: "Stunning Apple-inspired grid dashboard displaying key metrics at a glance." },
      { title: "Granular RBAC Security", desc: "Control who sees what data (e.g. sales reps vs finance managers)." },
      { title: "Automated Report Dispatch", desc: "Schedule daily WhatsApp summaries or weekly email briefs to executives." }
    ],
    faqs: [
      {
        question: "Can you connect our legacy offline accounting data to the dashboard?",
        answer: "Yes. We build custom API connectors or secure upload folder triggers that read local database exports and sync them safely to your secure dashboard database."
      },
      {
        question: "Is our financial data safe in a custom web dashboard?",
        answer: "Absolutely. We implement end-to-end encryption, multi-factor authentication (MFA), and host the dashboard on secure serverless environments with isolated database clusters."
      },
      {
        question: "Can we build interactive charts to filter data by custom date ranges?",
        answer: "Yes. The dashboard features advanced client-side filtering, allowing you to slice data by date, department, product line, or salesperson instantly."
      }
    ],
    pexelsQueries: ["financial analytics screen", "business chart dashboard", "pointing at statistics presentation"]
  },
  "custom-web-applications": {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "custom web application development",
    secondaryKeywords: [
      "web app design company",
      "saas platform development",
      "portal website development",
      "professional web application"
    ],
    overview: "When standard website builders and off-the-shelf software packages run out of runway, you need custom application engineering. We build high-performance SaaS platforms, client portals, internal tool suites, and automated web apps built on Next.js, Node.js, and serverless database clusters. Engineered for high concurrent traffic, flawless API scaling, and absolute operational security.",
    ownerBenefits: [
      "Own your software assets fully with zero recurring license costs per user seat.",
      "Build exact workflow layouts tailored to your operations instead of bending to rigid templates.",
      "Scale from 100 to 100,000 concurrent users without database query bottlenecks.",
      "Integrate complex API pipelines, database structures, and third-party SaaS tools easily."
    ],
    valueMetrics: [
      { label: "License Costs", value: "₹0 Recurring", desc: "You own the custom codebase and database cluster." },
      { label: "Process Automation", value: "90%", desc: "Custom features replace manual offline tracking workflows." },
      { label: "Response Latency", value: "Under 200ms", desc: "Engineered database schemas built for extreme speed." }
    ],
    features: [
      { title: "React & Next.js Frontends", desc: "Modern, component-driven interfaces that render instantly." },
      { title: "Serverless Database Clusters", desc: "Highly available databases (Supabase, PostgreSQL) that scale automatically." },
      { title: "Secure User Authentication", desc: "Enterprise SSO, OAuth, and multi-factor authentication setup." },
      { title: "Comprehensive API Integration", desc: "Custom webhooks and middleware bridging internal modules with external services." }
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer: "A website is informational (brochures, blog posts, pages). A web application is interactive and task-driven (user dashboards, editing files, inventory tracking, payment flows) requiring user accounts and database state management."
      },
      {
        question: "Who owns the code for a custom web application?",
        answer: "You do. Upon project completion, we hand over full ownership of the GitHub repository, clean code documentation, and hosting configuration files. There are no licensing lock-ins."
      },
      {
        question: "How do you handle maintenance and feature scaling?",
        answer: "We write clean, modular TypeScript code following standard MVC/Clean architecture. Any standard developer can scale it, or you can retain our engineering team for monthly upgrades."
      }
    ],
    pexelsQueries: ["software developer laptop", "coding dynamic interface", "wireframe design app"]
  },
  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Pages & Campaign Funnels",
    category: "web",
    categoryLabel: "Web Platforms",
    primaryKeyword: "high-conversion landing page design",
    secondaryKeywords: [
      "landing page optimization services",
      "custom landing pages",
      "sales funnel development",
      "lead generation website"
    ],
    overview: "Stop throwing ad budget at a generic homepage that confuses visitors. We design high-converting, single-purpose landing pages and multi-step sales funnels tailored to specific advertising campaigns. Built for instant mobile loading, crystal-clear bento visuals, and distraction-free lead capture form layouts that maximize conversion rates.",
    ownerBenefits: [
      "Increase ad campaign ROI by guiding traffic to a single, hyper-targeted CTA.",
      "Secure sub-second loading speeds on mobile networks to prevent click bounces.",
      "Set up automatic A/B test variations to identify the highest-converting copy.",
      "Sync captured lead data instantly with your CRM or sales WhatsApp alerts."
    ],
    valueMetrics: [
      { label: "Conversion Rate Increase", value: "+45% Avg", desc: "Distraction-free layouts out-convert homepages." },
      { label: "Mobile Bounce Rate", value: "Under 15%", desc: "Page loads instantly even on weak 4G networks." },
      { label: "Cost Per Lead (CPL)", value: "-30% Drop", desc: "Higher conversion rate reduces ad acquisition costs." }
    ],
    features: [
      { title: "Distraction-Free Layouts", desc: "No main menu links or external escapes. Designed to get the form submission." },
      { title: "Sub-Second Edge Rendering", desc: "Static HTML pages deployed to global servers right next to the user." },
      { title: "A/B Testing Infrastructure", desc: "Compare different headers, imagery, or buttons automatically with clean metrics." },
      { title: "Secure Form Capture Sync", desc: "Encrypted data transmission directly into CRM systems and sales Slack channels." }
    ],
    faqs: [
      {
        question: "Why can't I just send ad traffic to my main website homepage?",
        answer: "Homepages have too many options (About, Services, Blogs, social links). When visitors have multiple choices, they get distracted and leave. A landing page has exactly one goal: get the lead."
      },
      {
        question: "How do you optimize landing pages for mobile loading speeds?",
        answer: "We write custom React code, compile it into static HTML, and compress all image assets under 100 KB. We avoid bulky page-builder scripts that drag down PageSpeed scores."
      },
      {
        question: "Can we link the landing page forms directly to our WhatsApp?",
        answer: "Yes. We configure forms to send an instant lead alert to your sales team's WhatsApp while automatically opening a chat link for the customer."
      }
    ],
    pexelsQueries: ["website conversion funnel", "person typing phone lead", "business presentation stats"]
  },
  "lead-management": {
    slug: "lead-management",
    title: "Lead Management Automation",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "automated lead management system",
    secondaryKeywords: [
      "CRM lead routing automation",
      "lead qualification workflows",
      "sales pipeline automation",
      "inbound lead routing"
    ],
    overview: "Every minute a lead sits untouched reduces conversion odds by 50%. Our automated lead management systems capture inquiries from Facebook, Google Ads, and landing pages, qualifying them instantly via AI and routing them to the right sales representative within seconds. Keep your sales pipeline flowing with zero manual entry errors.",
    ownerBenefits: [
      "Increase close rates by connecting with prospects within 5 minutes of inquiry.",
      "Eliminate manual data entry chores for your sales team with automated CRM sync.",
      "Ensure fair lead distribution among your reps via automated round-robin routing.",
      "Track exact campaign source ROI directly inside your deal pipelines."
    ],
    valueMetrics: [
      { label: "Response Time", value: "Under 60s", desc: "Leads qualified and assigned instantly via webhook." },
      { label: "CRM Sync Accuracy", value: "100%", desc: "Zero manual copying errors between ads and database." },
      { label: "Conversion Rate", value: "+24%", desc: "Fast follow-ups keep prospects from finding competitors." }
    ],
    features: [
      { title: "Omnichannel Hook Capture", desc: "Instant capture from Meta Ads, Google Forms, web chat, and emails." },
      { title: "AI-Powered Qualification", desc: "Qualify leads based on custom budget, timeline, and company size fields." },
      { title: "Round-Robin Lead Assignment", desc: "Distribute leads evenly or based on specialist availability metrics." },
      { title: "Instant Sales WhatsApp Alerts", desc: "Rep receives lead details, source, and click-to-call link on WhatsApp immediately." }
    ],
    faqs: [
      {
        question: "What platforms can you ingest leads from?",
        answer: "We connect Facebook Ads, Instagram DMs, Google Lead Forms, LinkedIn Lead Gen Forms, and custom landing page forms using secure webhook pipelines."
      },
      {
        question: "How does the AI lead qualification work?",
        answer: "When a lead comes in, our automated agent reads the form answers and cross-references them with your business rules to score the lead before assignment."
      },
      {
        question: "Can we route specific leads to specific specialists?",
        answer: "Yes. We build custom conditional logic (e.g. routing leads from Chennai to Chennai reps, and leads matching 'enterprise' to senior account managers)."
      }
    ],
    pexelsQueries: ["sales manager phone", "team office meeting pipeline", "crm interface screen"]
  },
  "whatsapp-workflows": {
    slug: "whatsapp-workflows",
    title: "WhatsApp Automation Workflows",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "whatsapp api automation workflows",
    secondaryKeywords: [
      "automated whatsapp reminders",
      "whatsapp customer support chatbot",
      "official whatsapp api integration",
      "bulk whatsapp messaging"
    ],
    overview: "Meet your customers where they are active. We integrate the official WhatsApp Business API to build interactive, AI-driven conversational workflows. The system automatically handles customer FAQs, sends class and appointment reminders, schedules bookings, and coordinates order shipping updates hands-free.",
    ownerBenefits: [
      "Achieve 98% open rates compared to standard 20% email open rates.",
      "Reduce customer support response times to zero with instant AI-driven answers.",
      "Recover lost revenue automatically with abandoned cart WhatsApp workflows.",
      "Send bulk promotional updates safely without getting your number banned."
    ],
    valueMetrics: [
      { label: "Open Rate", value: "98%", desc: "WhatsApp beats email and SMS open rates combined." },
      { label: "Cart Recovery", value: "+18%", desc: "Friendly recovery reminders sent directly to cart drop-offs." },
      { label: "Support Resolution", value: "70%", desc: "FAQs resolved automatically without human agents." }
    ],
    features: [
      { title: "Official API Access Setup", desc: "Secure Green Badge registration and template approval with Meta." },
      { title: "Interactive Button Menus", desc: "Frictionless navigation options allowing users to book or buy in-app." },
      { title: "Intelligent Human Handoff", desc: "System escalates to a live agent dashboard when complex questions arise." },
      { title: "Dynamic Webhook Triggers", desc: "Dispatch alerts automatically on payment success, shipping, or booking updates." }
    ],
    faqs: [
      {
        question: "Is there a risk of our WhatsApp number getting banned?",
        answer: "No. We build integrations using the official WhatsApp Cloud API and comply with Meta's template approval rules. This keeps your number fully verified and secure."
      },
      {
        question: "Can we manage customer chats from a shared inbox?",
        answer: "Yes. We set up shared team inbox tools (like Chatwoot or Zoho CRM) so multiple agents can answer chats from the same official number."
      },
      {
        question: "Can the system send media like PDF catalogs or invoices?",
        answer: "Yes. The API supports rich media templates, allowing the bot to send images, brochures, and dynamic invoice PDFs automatically."
      }
    ],
    pexelsQueries: ["smartphone screen chat", "customer support typing", "office notifications tablet"]
  },
  "email-sequences": {
    slug: "email-sequences",
    title: "Email Sequence Automation",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "automated email sequences",
    secondaryKeywords: [
      "behavior triggered email flows",
      "customer onboarding email drip",
      "email marketing automation platform",
      "email deliverability optimization"
    ],
    overview: "Maximize customer lifetime value with hyper-personalized, behavior-driven email automation. We design and implement automated drip campaigns that react to how users interact with your software, web platforms, or e-commerce stores. Welcome, nurture, upsell, and retain customers on autopilot.",
    ownerBenefits: [
      "Drive recurring sales with automated post-purchase upsell campaigns.",
      "Ensure high delivery rates by configuring strict DNS domain authentication.",
      "Save time by automating customer welcome and training onboarding cycles.",
      "React immediately to customer inactivity with win-back re-engagement flows."
    ],
    valueMetrics: [
      { label: "Inbox Delivery Rate", value: "99%", desc: "Strict SPF, DKIM, and DMARC settings ensure inbox landing." },
      { label: "Automated Revenue Share", value: "25%", desc: "Percentage of store revenue driven by automated flows." },
      { label: "Onboarding Completion", value: "+30%", desc: "Nurture emails guide users to complete setup." }
    ],
    features: [
      { title: "Behavioral Trigger Rules", desc: "Emails sent based on page visits, purchase milestones, or abandonment." },
      { title: "Dynamic Personalization", desc: "Tailor product recommendations and pricing tiers automatically per contact." },
      { title: "Automated A/B Testing", desc: "Split-test subject lines and body layouts to maximize conversion rates." },
      { title: "Platform Setup & Migration", desc: "Full configuration of Klaviyo, ActiveCampaign, MailerLite, or custom SMTPs." }
    ],
    faqs: [
      {
        question: "Why do our emails end up in the Spam folder?",
        answer: "This is usually caused by poor domain authentication or sender reputation. We implement strict DKIM, SPF, and DMARC configuration records in your DNS to verify your domain authenticity with Gmail and Outlook."
      },
      {
        question: "What is the standard frequency for automated sequences?",
        answer: "We follow engagement-based pacing. Welcome flows send over 7 days, whereas abandonment flows trigger within 1 hour to capture active intent."
      },
      {
        question: "Can you design custom HTML email layouts that fit our branding?",
        answer: "Yes. We design responsive, clean templates matching your brand guidelines that render perfectly on both dark mode viewports and mobile screens."
      }
    ],
    pexelsQueries: ["email inbox screen", "typing laptop keyboard", "digital marketing analytics"]
  },
  "inquiry-automation": {
    slug: "inquiry-automation",
    title: "AI Inquiry Automation",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "ai inquiry automation systems",
    secondaryKeywords: [
      "automated customer support chatbot",
      "conversational ai ticket routing",
      "website live chat automation",
      "omnichannel support workflows"
    ],
    overview: "Deliver lightning-fast customer service 24/7 without expanding your support payroll. Our AI inquiry automation ingests incoming questions across web chat, email, and social media, providing accurate, context-aware responses instantly based on your business manuals and documentation.",
    ownerBenefits: [
      "Provide instant answers to customer queries at 2 AM without human staff.",
      "Reduce support ticket backlogs by resolving standard questions automatically.",
      "Filter out spam and sales pitches before they land in your sales inbox.",
      "Maintain a consistent, professional brand tone across all chat channels."
    ],
    valueMetrics: [
      { label: "Resolution Speed", value: "Instant", desc: "AI responds in under 3 seconds on all active channels." },
      { label: "Ticket Deflection", value: "70%+", desc: "Standard FAQs answered without requiring staff support." },
      { label: "Support Cost reduction", value: "-60%", desc: "Reduces need for large customer service teams." }
    ],
    features: [
      { title: "Custom Knowledge Base Sync", desc: "Train AI on your company pricing, refund policies, and catalog details." },
      { title: "Omnichannel Support Ingestion", desc: "Process questions from Instagram, WhatsApp, web chat, and email." },
      { title: "Intent & Sentiment Analysis", desc: "Determine customer urgency and mood automatically for smart escalation." },
      { title: "Secure Data Integration", desc: "Safe customer lookup sync with order tracking and account databases." }
    ],
    faqs: [
      {
        question: "How do you make sure the AI chatbot doesn't make things up?",
        answer: "We implement Retrieval-Augmented Generation (RAG) and strict prompt guarding. The AI only uses facts from your approved documentation, declining to answer unrelated queries."
      },
      {
        question: "What happens if the customer wants to speak with a human?",
        answer: "The chatbot detects complex queries or specific triggers (like 'agent' or 'help') and transfers the chat to a live support dashboard, alerting your team."
      },
      {
        question: "Is this system compliant with customer data privacy laws?",
        answer: "Yes. We configure data scrubbing pipelines to prevent sensitive details (like credit card numbers or passwords) from being processed by external LLM servers."
      }
    ],
    pexelsQueries: ["robotic virtual assistant", "customer service headset", "ai chip server hardware"]
  },
  "crm-integrations": {
    slug: "crm-integrations",
    title: "CRM Integration & Sync",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "custom crm integration services",
    secondaryKeywords: [
      "hubspot API integration",
      "zoho crm automation",
      "salesforce database sync",
      "real time lead sync"
    ],
    overview: "Eliminate data silos and manual data entry by establishing a perfectly synchronized digital ecosystem. We connect HubSpot, Salesforce, Zoho, or custom CRMs directly to your frontend platforms, communication channels, and financial software. Ensure your sales team always has a 360-degree view of client activity.",
    ownerBenefits: [
      "Keep customer contact data synchronized in real-time across all software.",
      "Automate invoice generation by connecting CRM deal closures to accounting tools.",
      "Give your sales team full context of previous WhatsApp and email chats.",
      "Track customer interactions automatically to identify high-value upsell triggers."
    ],
    valueMetrics: [
      { label: "Manual Data Entry", value: "₹0 Cost", desc: "Automation replaces hours of copying deal data." },
      { label: "Data Consistency", value: "100%", desc: "Eliminates mismatched client records across systems." },
      { label: "Deal Closure Speed", value: "+30%", desc: "Automated billing and contract triggers close deals faster." }
    ],
    features: [
      { title: "Bi-Directional API Bridges", desc: "Updates in one system reflect instantly across all connected databases." },
      { title: "Deal Stage Automations", desc: "Deals move automatically when invoices are paid or contracts are signed." },
      { title: "Legacy System Sync", desc: "Custom database connectors linking cloud platforms with local database servers." },
      { title: "Activity Logging Workflows", desc: "Web visits, form submissions, and support chats logged directly under client profile." }
    ],
    faqs: [
      {
        question: "Which CRM should we choose: Zoho, HubSpot, or Salesforce?",
        answer: "Zoho is highly cost-effective for Indian businesses. HubSpot offers premium sales usability and marketing flows. Salesforce is suited for enterprise customization. We integrate and automate all three."
      },
      {
        question: "Can we connect our CRM to our accounting software (like Tally or Zoho Books)?",
        answer: "Yes. We build webhook pipelines that trigger invoice creation in your accounting software as soon as a deal is marked 'Closed Won' in your CRM."
      },
      {
        question: "How do you handle API limits and sync errors?",
        answer: "We build custom middleware with automated retry queues and error notification alerts. If an API rate limit is hit, the sync pauses and retries safely without losing data."
      }
    ],
    pexelsQueries: ["sales team database", "office screen charts", "modern network hardware"]
  },
  "internal-tasks": {
    slug: "internal-tasks",
    title: "Internal Process Automation",
    category: "automation",
    categoryLabel: "Automation Systems",
    primaryKeyword: "internal process automation workflows",
    secondaryKeywords: [
      "custom approval workflows",
      "reporting automation tools",
      "employee onboarding automation",
      "operations workflow engine"
    ],
    overview: "Supercharge your team's productivity by automating repetitive administrative overhead. We architect custom internal workflows that handle leave approvals, expense routing, daily KPI summaries, and inter-departmental handoffs autonomously. Stop wasting management hours coordinating routines.",
    ownerBenefits: [
      "Save management hours by automating task assignments and approval pipelines.",
      "Ensure team alignment with automated daily KPI digests sent to Slack or WhatsApp.",
      "Speed up employee onboarding with automated asset assignment checklists.",
      "Prevent compliance errors by enforcing standardized digital review gates."
    ],
    valueMetrics: [
      { label: "Admin Time Saved", value: "15 hrs/week", desc: "Automation handles repetitive scheduling and notifications." },
      { label: "Task Execution Speed", value: "2x Faster", desc: "Automated assignments prevent project bottlenecks." },
      { label: "Error Rate", value: "Near-Zero", desc: "Standard operating procedures enforced by code." }
    ],
    features: [
      { title: "Custom Approval Routing", desc: "Route expense claims or purchase orders to managers via Slack or WhatsApp." },
      { title: "Automated Report Aggregation", desc: "Fetch metrics from active tools and compile daily briefs automatically." },
      { title: "Standardized Checklists", desc: "Create automated tasks when projects reach specific pipeline stages." },
      { title: "Team Notification Bots", desc: "Alert specific channels immediately on high-priority client actions." }
    ],
    faqs: [
      {
        question: "Can we use Slack or MS Teams to approve expense requests?",
        answer: "Yes. We build interactive bots that post approval cards (with 'Approve' and 'Reject' buttons) directly in Slack or Teams, updating databases instantly."
      },
      {
        question: "How do you handle complex multi-manager approval flows?",
        answer: "We define structured logic trees. For example, requests under ₹50,000 go to team leads, while larger amounts route automatically to department directors."
      },
      {
        question: "Can we automate employee onboarding checklists?",
        answer: "Absolutely. When a new hire is added, the system automatically creates their accounts, sends training guides, and schedules introductory tasks."
      }
    ],
    pexelsQueries: ["business process flow", "office work coordination", "typing office desk board"]
  },
  "seo-optimization": {
    slug: "seo-optimization",
    title: "SEO & GEO Optimization",
    category: "growth",
    categoryLabel: "Growth Solutions",
    primaryKeyword: "generative engine optimization services",
    secondaryKeywords: [
      "technical SEO company chennai",
      "schema markup implementation",
      "programmatic SEO architecture",
      "search engine optimization"
    ],
    overview: "Dominate search engine results pages (SERPs) with our holistic, AI-era search engine optimization. We combine deep technical foundation fixes with programmatic architectures and Generative Engine Optimization (GEO) to capture high-intent organic traffic and secure citations in AI answers.",
    ownerBenefits: [
      "Secure traffic from AI search engines like ChatGPT, Perplexity, and Gemini.",
      "Drive consistent, unpaid customer leads with top local search rankings.",
      "Enhance website search indexing through custom JSON-LD schema layouts.",
      "Target hundreds of local search terms using programmatic landing page generation."
    ],
    valueMetrics: [
      { label: "Organic Search Traffic", value: "+120%", desc: "Crawl-optimized code improves search engine crawl rate." },
      { label: "AI Citation Shares", value: "3x Increase", desc: "GEO-optimized formatting secures AI-generated answers." },
      { label: "Core Web Vitals Pass", value: "100%", desc: "Fast-loading static architecture pleases Google search algorithms." }
    ],
    features: [
      { title: "Generative Engine Optimization (GEO)", desc: "Structuring site copy to ensure your brand is cited by AI answers." },
      { title: "Technical Code Audits", desc: "Perfect canonical headers, crawl paths, robots.txt, and sitemap XML setups." },
      { title: "Bespoke JSON-LD Schema", desc: "Rich structured data schemas for LocalBusiness, FAQPage, and Services." },
      { title: "Programmatic Location Landing Pages", desc: "Pre-rendered, highly optimized pages targeting location keywords at scale." }
    ],
    faqs: [
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "GEO is the practice of optimizing your site content so that AI search engines (like Perplexity, ChatGPT Search, and Google Gemini) pull and cite your business when answering user questions."
      },
      {
        question: "How long does it take to see rankings improve?",
        answer: "Technical crawl improvements and schema updates can reflect in 2 to 4 weeks. High-intent keyword rankings usually build over 3 to 6 months of active indexing."
      },
      {
        question: "Do you configure local Google Map optimization?",
        answer: "Yes. We coordinate your Google Business Profile setup, link it with local business schema on your website, and optimize for local map packs."
      }
    ],
    pexelsQueries: ["google search ranking", "organic traffic charts", "analytics keyword research"]
  },
  "speed-optimization": {
    slug: "speed-optimization",
    title: "Speed & Performance Engineering",
    category: "growth",
    categoryLabel: "Growth Solutions",
    primaryKeyword: "website speed optimization services",
    secondaryKeywords: [
      "google core web vitals pass",
      "cdn edge caching setup",
      "page speed optimization company",
      "website loading speed engineering"
    ],
    overview: "Page speed is directly correlated with conversion rates and search rankings. A 1-second delay in page load times costs up to 10% in conversions. We perform rigorous performance engineering on your web application to ensure instantaneous rendering, zero layout shift (CLS), and perfect Core Web Vitals.",
    ownerBenefits: [
      "Prevent customer bounce rates caused by slow-loading mobile pages.",
      "Boost Google SEO rankings by scoring 95+ on official Lighthouse audits.",
      "Reduce server bandwidth and database costs using advanced static caching.",
      "Deliver a premium, snappy user experience that outshines competitors."
    ],
    valueMetrics: [
      { label: "Lighthouse Performance Score", value: "95+/100", desc: "Optimized script rendering and code bundle splits." },
      { label: "Mobile Page Load Speed", value: "Under 1s", desc: "Pre-rendered pages deployed to global edge CDNs." },
      { label: "Conversion Rate Increase", value: "+15%", desc: "Instant checkout experience reduces purchase drop-offs." }
    ],
    features: [
      { title: "JavaScript Bundle Splitting", desc: "Code splitting and tree-shaking to eliminate render-blocking scripts." },
      { title: "Edge Caching & CDN Routing", desc: "Deploying pages to Cloudflare or Vercel edge networks right next to users." },
      { title: "Modern Image Formats (WebP/AVIF)", desc: "Automated responsive resizing and next-gen compression of visual assets." },
      { title: "Cumulative Layout Shift (CLS) Fixes", desc: "Explicit image dimensions and font preloading to prevent page jumps." }
    ],
    faqs: [
      {
        question: "Why is our PageSpeed score low even though our internet is fast?",
        answer: "Low scores are usually caused by bloated third-party scripts, uncompressed images, unoptimized CSS, or slow server response times (TTFB) from database queries."
      },
      {
        question: "Do you guarantee a 95+ score on mobile?",
        answer: "Yes. For our custom Next.js builds, we guarantee 95+ scores on desktop and mobile viewports. For legacy WordPress sites, we clean and optimize to reach the highest possible score."
      },
      {
        question: "Will optimizing speed break our visual effects?",
        answer: "No. We optimize the asset loading sequence, meaning we load critical CSS and text first, and defer complex animations until the page is fully interactive."
      }
    ],
    pexelsQueries: ["speed performance meter", "fast loading technology network", "accelerating coding code"]
  },
  "analytics-tracking": {
    slug: "analytics-tracking",
    title: "Analytics & Conversion Attribution",
    category: "growth",
    categoryLabel: "Growth Solutions",
    primaryKeyword: "google analytics 4 integration services",
    secondaryKeywords: [
      "conversion attribution setup",
      "server side tagging tracking",
      "google tag manager configuration",
      "lead tracking dashboards"
    ],
    overview: "Stop guessing which marketing channels bring in customers. We implement robust, privacy-compliant tracking architectures that attribute every lead, sale, and micro-conversion to its exact marketing source (Google Ads, Facebook, SEO, or referral links) with absolute precision.",
    ownerBenefits: [
      "Know exactly which marketing campaigns generate phone calls and form leads.",
      "Bypass browser privacy shields using secure server-side tracking pipelines.",
      "Reduce conversion tracking errors to make accurate budget decisions.",
      "Identify client drop-off bottlenecks across your checkout funnels."
    ],
    valueMetrics: [
      { label: "Attribution Accuracy", value: "100%", desc: "Direct server-side sync prevents ad blocker data loss." },
      { label: "Marketing Cost Savings", value: "20%-35%", desc: "Eliminating ad spend on campaigns that don't convert." },
      { label: "Lead Tracking Resolution", value: "Real-Time", desc: "Leads matched to their click source instantly." }
    ],
    features: [
      { title: "GTM & GA4 Orchestration", desc: "Clean container structure tracking form sends, video views, and calls." },
      { title: "Server-Side Tagging Configuration", desc: "Run analytics triggers on your custom subdomain to bypass browser blocks." },
      { title: "UTM Parameter Attributions", desc: "Capture and map click sources directly to CRM lead records." },
      { title: "Funnel Analysis Visualizations", desc: "Custom dashboards highlighting exact stages where users leave your site." }
    ],
    faqs: [
      {
        question: "What is server-side tracking and why do we need it?",
        answer: "Standard tracking runs in the user's browser, which is easily blocked by ad blockers or Apple iOS privacy updates. Server-side tracking sends data from your server directly to Google/Meta, bypassing browser blocks."
      },
      {
        question: "Can you track phone calls and WhatsApp click leads?",
        answer: "Yes. We configure custom click event triggers on all phone links and WhatsApp buttons to match click sources with active conversions."
      },
      {
        question: "How do you ensure GDPR and local privacy compliance?",
        answer: "We set up data anonymization gates that strip personally identifiable information (PII) before sending data to analytical servers, ensuring strict compliance."
      }
    ],
    pexelsQueries: ["marketing analytics graphs", "pointing at data screen", "conversion tracking code"]
  },
  "managed-hosting": {
    slug: "managed-hosting",
    title: "Managed Cloud & Retainers",
    category: "growth",
    categoryLabel: "Growth Solutions",
    primaryKeyword: "managed cloud hosting retainers",
    secondaryKeywords: [
      "uptime monitoring support services",
      "codebase maintenance backup retainers",
      "high availability web hosting",
      "monthly page health checks"
    ],
    overview: "Enjoy complete peace of mind with our enterprise managed cloud hosting and codebase maintenance retainers. We provide high-availability cloud hosting, proactive security updates, daily automated backups, and direct developer support to keep your web platforms running flawlessly.",
    ownerBenefits: [
      "Sleep easy with a 99.9% website uptime guarantee backed by serverless hosting.",
      "Get instant support responses from real developers, not call centers.",
      "Keep your software secure with automated security patch management.",
      "Restore your website instantly in case of issues using automated daily backups."
    ],
    valueMetrics: [
      { label: "Uptime SLA Guarantee", value: "99.9%", desc: "High-availability edge architecture with failover protection." },
      { label: "Support Response Time", value: "Under 2 hours", desc: "Direct contact line to our lead engineering team." },
      { label: "Backup Retention", value: "30 Days", desc: "Encrypted codebase and database snapshots stored off-site." }
    ],
    features: [
      { title: "Serverless Edge Deployment", desc: "Hosting on global CDN clusters (Vercel, AWS, Cloudflare) for peak speed." },
      { title: "24/7 Automated Monitoring", desc: "Instant alerts triggered on server downtime or query latency spikes." },
      { title: "Automated Daily Backups", desc: "Encrypted daily snapshots of codebases and databases stored securely." },
      { title: "Security Patch Retainers", desc: "Proactive monthly updates of all dependencies to prevent exploits." }
    ],
    faqs: [
      {
        question: "Where will our custom website or web app be hosted?",
        answer: "We deploy static next.js platforms to Vercel or Cloudflare's serverless edge networks. For custom backend systems, we configure AWS, Google Cloud, or secure VPS setups."
      },
      {
        question: "What happens if our website goes down?",
        answer: "Our automated monitoring runs ping checks every 60 seconds. If a downtime event occurs, our developers receive a high-priority alert and respond immediately."
      },
      {
        question: "Do you include content updates in your monthly retainer?",
        answer: "Yes. Our standard retainers include dedicated hours every month for minor text updates, banner changes, and general maintenance tasks."
      }
    ],
    pexelsQueries: ["server hosting racks", "cloud security database", "monitors server control room"]
  }
};
