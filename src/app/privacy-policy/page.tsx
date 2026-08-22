import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Privacy Policy — SkaleNest",
  description: "Learn how SkaleNest collects, uses, and safeguards your personal and business information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Top Header */}
      <header className="border-b border-border/80 bg-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gold hover:text-gold-bright transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <section className="border-b border-border/60 bg-card/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono text-gold mb-4">
            <Shield size={13} />
            <span>Legal Documentation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Privacy Policy
          </h1>
          <p className="mt-4 font-body text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            At SkaleNest, we respect your privacy and are committed to protecting the personal and business information you share with us.
          </p>
          <div className="mt-6 font-mono text-xs text-text-secondary">
            Last Updated: August 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-invert max-w-none space-y-10 font-body text-text-secondary leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              1. Information We Collect
            </h2>
            <p>
              When you interact with our website, request a free growth audit, or engage our digital marketing and web design services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-text-primary">Personal & Contact Information:</strong> Name, email address, phone number, WhatsApp contact details, and business name.
              </li>
              <li>
                <strong className="text-text-primary">Business Data:</strong> Website URL, Instagram handle, industry category, current marketing challenges, and project goals.
              </li>
              <li>
                <strong className="text-text-primary">Technical & Usage Data:</strong> IP address, browser type, device information, operating system, and pages visited on our website via standard analytics tools.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect solely for legitimate business purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Conducting your requested free digital growth audit and preparing customized improvement roadmaps.</li>
              <li>Communicating with you regarding your enquiries, project proposals, and scheduling consultations via email, phone, or WhatsApp.</li>
              <li>Delivering contracted services such as website development, local SEO optimization, social media content, and WhatsApp automation.</li>
              <li>Improving our website performance, user experience, and service offerings.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              3. WhatsApp & Direct Communication
            </h2>
            <p>
              When you initiate contact or opt in to receive communications through WhatsApp, you agree to receive project updates, audit reports, and service enquiries from the SkaleNest team. You may opt out of promotional messages at any time by replying &quot;STOP&quot;.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              4. Data Protection & Sharing
            </h2>
            <p>
              We do not sell, rent, trade, or monetize your personal or business information to third parties. We may share necessary data with trusted service providers (such as hosting infrastructure, email delivery, and form processors like Formspree) strictly to facilitate our operations. All partners adhere to industry-standard data security standards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              5. Cookies & Analytics
            </h2>
            <p>
              Our website may use standard cookies and analytics tools to understand traffic patterns and optimize user experience. You can choose to disable cookies through your individual browser settings without affecting core site usability.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request the deletion of your personal data held by SkaleNest. To exercise these rights or raise any privacy-related inquiries, please contact us directly at <span className="text-gold">skalenest@gmail.com</span>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-t border-border/60 pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              7. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="rounded-2xl border border-border/80 bg-card p-5 text-sm space-y-1.5 font-mono">
              <p><strong className="text-text-primary font-body">SkaleNest Digital Agency</strong></p>
              <p>Founder: Hashir Arshad</p>
              <p>Email: <a href="mailto:skalenest@gmail.com" className="text-gold hover:underline">skalenest@gmail.com</a></p>
              <p>WhatsApp: +91 74399 80010</p>
              <p>Location: Kolkata, West Bengal, India</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-bg py-8 text-center text-xs font-body text-text-secondary">
        <p>&copy; {new Date().getFullYear()} SkaleNest. All rights reserved. Kolkata, India.</p>
      </footer>
    </div>
  );
}
