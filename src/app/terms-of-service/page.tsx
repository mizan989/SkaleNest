import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Terms and Conditions — SkaleNest",
  description: "Review the terms and conditions governing client engagements, website development, and digital marketing services with SkaleNest.",
};

export default function TermsOfServicePage() {
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
            <FileText size={13} />
            <span>Client Agreement</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Terms & Conditions
          </h1>
          <p className="mt-4 font-body text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            Please review these terms and conditions carefully before engaging SkaleNest for web development, local SEO, advertising, and marketing automation services.
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<span className="text-gold">skalenest.com</span>), requesting an audit, or entering into an agreement with SkaleNest (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you (&quot;Client&quot; or &quot;User&quot;) agree to be bound by these Terms and Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              2. Scope of Services
            </h2>
            <p>
              SkaleNest provides digital marketing and technology services, including custom website creation, Google Business Profile and Local SEO optimization, short-form video and social media content production, Meta/Google ad management, and WhatsApp CRM automation.
            </p>
            <p className="text-sm">
              Specific project deliverables, timelines, and milestones will be detailed in individual proposals or client service agreements agreed upon prior to project initiation.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              3. Client Responsibilities
            </h2>
            <p>To ensure successful project execution and timely delivery, the Client agrees to:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Provide required assets (logos, images, brand guidelines, product/service details, and business verification info) in a timely manner.</li>
              <li>Provide timely feedback and approvals during review phases.</li>
              <li>Ensure all materials and content provided to SkaleNest do not infringe upon any third-party intellectual property or copyright.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              4. Payment & Invoicing
            </h2>
            <p>
              Payment terms, schedules, and milestones are outlined in the client proposal. Website development projects generally require an initial deposit prior to kickoff, with the balance due upon final review and deployment. Ongoing retainers (SEO, Ads, Content) are billed on a monthly cycle.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              5. Intellectual Property & Ownership
            </h2>
            <p>
              Upon full receipt of payment, the Client receives full ownership of the final delivered website codebase, custom graphics, and copy created specifically for their project. SkaleNest retains the right to display the completed work in its portfolio, case studies, and marketing materials unless a specific non-disclosure agreement (NDA) has been executed.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              6. Performance & Results Disclaimer
            </h2>
            <p>
              While SkaleNest applies industry-leading strategies and proven optimization practices, third-party platform algorithms (such as Google Search ranking factors and Meta ad delivery algorithms) are dynamic and outside our direct control. We do not guarantee specific numerical revenue amounts, though we commit to rigorous tracking, ongoing optimization, and transparent reporting.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, SkaleNest shall not be liable for any indirect, incidental, or consequential damages resulting from third-party platform downtime, ad account suspensions by external platforms, or business interruptions.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              8. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Kolkata, West Bengal, India.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-t border-border/60 pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-text-primary">
              9. Contact Information
            </h2>
            <p>For questions regarding these Terms & Conditions, please contact:</p>
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
