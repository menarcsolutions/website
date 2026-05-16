import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Menarc Solutions",
  description:
    "Privacy Policy for Menarc Solutions. Learn how we collect, use, and protect your personal and business data across our web platforms and automation services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-white text-[#1d1d1f] select-none relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.04)_0%,_transparent_60%)]" />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#1d1d1f]">Privacy Policy</h1>
        <p className="text-[#86868b] text-sm mb-12 pb-6 border-b border-[#d2d2d7]/60 tracking-tight">
          Last Updated: May 16, 2026 | Menarc Solutions (`menarc.in`)
        </p>

        <div className="space-y-8 text-[#1d1d1f] leading-relaxed text-sm tracking-tight">
          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">1. Introduction</h2>
            <p className="text-[#86868b]">
              Menarc Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website `https://menarc.in`, engage our web development services, or interact with our automation systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">2. Information We Collect</h2>
            <p className="text-[#86868b]">We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#86868b]">
              <li><strong className="text-[#1d1d1f]">Personal Identification Information:</strong> Name, email address, phone number, company name, and job title when you submit inquiry forms or request consultations.</li>
              <li><strong className="text-[#1d1d1f]">Technical & Usage Data:</strong> IP address, browser type, operating system, referring URLs, and interaction metrics gathered via automated cookies and Vercel Analytics.</li>
              <li><strong className="text-[#1d1d1f]">Project & Business Data:</strong> Specifications, credentials, and API keys shared securely under NDA for the sole purpose of executing contracted development work.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">3. How We Use Your Information</h2>
            <p className="text-[#86868b]">We use the collected information for the following commercial purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#86868b]">
              <li>To provide, operate, and maintain our web platforms and custom software solutions.</li>
              <li>To communicate with you regarding project updates, proposals, and customer support inquiries.</li>
              <li>To improve our website UI/UX, evaluate marketing campaigns, and optimize Core Web Vitals performance.</li>
              <li>To process secure milestone payments and manage Annual Maintenance Contracts (AMC).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">4. Data Sharing & Disclosure</h2>
            <p className="text-[#86868b]">
              We do not sell, rent, or trade your personal information to third parties. We may share necessary data with trusted third-party cloud infrastructure providers (e.g., Vercel, Cloudflare, AWS) strictly for hosting and security mitigation purposes. All third-party providers are bound by strict contractual confidentiality obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">5. Data Security</h2>
            <p className="text-[#86868b]">
              We employ industry-standard security measures, including SSL/TLS encryption, secure JWT authentication, and strict Content-Security-Policies, to protect your data from unauthorized access or alteration. However, no internet transmission is 100% secure, and we cannot guarantee absolute electronic security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold gradient-titanium-gold tracking-tight">6. Contact Us</h2>
            <p className="text-[#86868b]">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our Data Protection Officer at:
            </p>
            <p className="text-[#86868b] pt-2">
              <strong className="text-[#1d1d1f]">Email:</strong> contact@menarc.in<br />
              <strong className="text-[#1d1d1f]">Phone:</strong> +91 75502 55420<br />
              <strong className="text-[#1d1d1f]">Address:</strong> Menarc Solutions, Chennai, Tamil Nadu, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
