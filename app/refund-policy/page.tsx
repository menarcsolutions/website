import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Menarc Solutions",
  description:
    "Refund and Cancellation Policy for Menarc Solutions. Detailed terms regarding advance deposits, milestone payments, and AMC subscription cancellations.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-white text-[#1d1d1f] select-none relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#1d1d1f]">Refund & Cancellation Policy</h1>
        <p className="text-[#86868b] text-sm mb-12 pb-6 border-b border-[#d2d2d7]/60 tracking-tight">
          Last Updated: May 16, 2026 | Menarc Solutions (`menarc.in`)
        </p>

        <div className="space-y-8 text-[#1d1d1f] leading-relaxed text-sm tracking-tight">
          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">1. General Policy & Philosophy</h2>
            <p className="text-[#86868b]">
              At Menarc Solutions, we invest significant senior engineering hours, architectural planning, and custom UI/UX design into every project from day one. Because our services represent bespoke, non-recoverable intellectual labor, our refund terms are structured to be fair, transparent, and protective of both parties&apos; time and resources.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">2. Advance Deposits & Initial Stages</h2>
            <p className="text-[#86868b]">
              The initial 50% advance deposit required to secure your project slot and initiate technical discovery is <strong className="text-[#1d1d1f]">non-refundable</strong> once UI/UX wireframing or cloud environment provisioning has commenced. If a cancellation request is submitted in writing within 48 hours of payment—and no technical discovery or design work has begun—a full refund (minus applicable payment gateway processing fees) will be issued.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">3. Milestone Payments & Mid-Project Cancellations</h2>
            <p className="text-[#86868b]">
              Once a project milestone (e.g., Staging Delivery) has been completed and approved by the Client, the associated milestone payment becomes non-refundable. If the Client chooses to cancel or terminate the project prior to final deployment, Menarc Solutions will package and deliver all completed source code and design assets created up to the date of cancellation, provided all outstanding billable hours are settled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">4. Annual Maintenance Contracts (AMC) & Retainers</h2>
            <p className="text-[#86868b]">
              Monthly or annual retainer packages (AMC, managed cloud hosting, ongoing SEO support) can be cancelled at any time with a 30-day written notice. Unused months on an annual upfront AMC subscription will be refunded on a pro-rata basis, calculating the used months at the standard monthly billing rate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">5. Third-Party Costs</h2>
            <p className="text-[#86868b]">
              Any payments made directly or on your behalf to third-party services (e.g., domain registration, SSL certificates, Vercel enterprise seats, premium stock media licenses, cloud database instances) are strictly non-refundable and are subject to the terms of the respective third-party vendors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">6. How to Request a Cancellation</h2>
            <p className="text-[#86868b]">
              All cancellation and refund requests must be submitted formally in writing to our billing department. Verbal cancellations will not be accepted.
            </p>
            <p className="text-[#86868b] pt-2">
              <strong className="text-[#1d1d1f]">Email:</strong> contact@menarc.in<br />
              <strong className="text-[#1d1d1f]">Phone:</strong> +91 75502 55420<br />
              <strong className="text-[#1d1d1f]">Subject Line:</strong> Project Cancellation Request — [Your Company Name]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
