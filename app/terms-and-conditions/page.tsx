import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Menarc Solutions",
  description:
    "Terms and Conditions of service for Menarc Solutions. Detailed engagement terms, milestone schedules, intellectual property rights, and confidentiality agreements.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white text-[#1d1d1f] select-none relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#1d1d1f]">Terms & Conditions</h1>
        <p className="text-[#86868b] text-sm mb-12 pb-6 border-b border-[#d2d2d7]/60 tracking-tight">
          Last Updated: May 16, 2026 | Menarc Solutions (`menarc.in`)
        </p>

        <div className="space-y-8 text-[#1d1d1f] leading-relaxed text-sm tracking-tight">
          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">1. Agreement to Terms</h2>
            <p className="text-[#86868b]">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;Client&quot;), and Menarc Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the `https://menarc.in` website as well as any web development, UI/UX design, SEO, or automation services contracted with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">2. Scope of Services & Deliverables</h2>
            <p className="text-[#86868b]">
              Menarc Solutions provides bespoke digital architecture, software engineering, and consulting services. The specific scope of work, technical deliverables, milestone schedules, and investment totals will be defined explicitly in a formal Statement of Work (SOW) or project proposal executed between both parties prior to project initiation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">3. Payment Terms & Milestone Billing</h2>
            <p className="text-[#86868b]">Unless specified otherwise in a custom SOW, our standard billing schedule is structured as follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#86868b]">
              <li><strong className="text-[#1d1d1f]">50% Advance Deposit:</strong> Required to initiate UI/UX design, technical discovery, and cloud environment provisioning.</li>
              <li><strong className="text-[#1d1d1f]">25% Staging Milestone:</strong> Due upon delivery of the interactive staging environment and client approval of core CMS functionality.</li>
              <li><strong className="text-[#1d1d1f]">25% Final Deployment:</strong> Due immediately prior to production Vercel/Cloudflare deployment, DNS migration, and administrative handover.</li>
            </ul>
            <p className="text-xs text-[#86868b] pt-1 italic">Note: All invoices are payable within 7 business days. Late payments may incur a service fee or delay project timelines.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">4. Intellectual Property Rights</h2>
            <p className="text-[#86868b]">
              Upon receipt of full and final payment, Menarc Solutions assigns all custom source code, UI/UX design assets (Figma files), and custom graphic assets created specifically for the project to the Client. Menarc Solutions retains the right to display the completed project within our digital portfolio and case studies unless an explicit Non-Disclosure Agreement (NDA) prohibits public disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">5. Client Responsibilities</h2>
            <p className="text-[#86868b]">
              The Client agrees to provide timely feedback, necessary brand assets, API credentials, and domain access required to execute the contracted work. Project delays resulting from Client unresponsiveness exceeding 14 business days may result in project archiving and reactivation fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">6. Warranties & Limitation of Liability</h2>
            <p className="text-[#86868b]">
              We warrant that all custom software will be delivered in accordance with the agreed technical specifications and will function substantially on modern web browsers. In no event shall Menarc Solutions be liable for indirect, consequential, or punitive damages arising from server outages, third-party API deprecations, or unauthorized security breaches beyond our direct control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">7. Governing Law & Jurisdiction</h2>
            <p className="text-[#86868b]">
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of or relating to these Terms or contracted services shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">8. Contact Information</h2>
            <p className="text-[#86868b]">For official legal notices or inquiries regarding these Terms, please contact:</p>
            <p className="text-[#86868b] pt-2">
              <strong className="text-[#1d1d1f]">Menarc Solutions Legal Dept.</strong><br />
              Email: contact@menarc.in<br />
              Phone: +91 75502 55420
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
