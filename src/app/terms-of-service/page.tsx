import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Terms and Conditions — SkaleNest",
  description: "Terms governing the use of the SkaleNest website and preliminary project enquiries.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171715]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-[#E5E3DC] bg-[#F7F6F2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={30} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-[#171715] hover:text-[#C9A45C] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-[#E5E3DC] bg-white p-6 sm:p-10 shadow-soft">
          <div className="border-b border-[#E5E3DC] pb-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
              Legal Documentation
            </span>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#171715]">
              Terms and Conditions
            </h1>
            <p className="mt-3 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
              These terms govern your access to and use of this website. Commercial client engagements are governed by separate project proposals or contracts.
            </p>
            <p className="mt-2 font-mono text-xs text-[#8C8D87]">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-8 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                1. Acceptance of Website Terms
              </h2>
              <p>
                By accessing or browsing this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                2. Scope of Website Information
              </h2>
              <p>
                The information provided on this website is for general informational purposes regarding SkaleNest&apos;s website design, development, and digital marketing capabilities. Content on this site does not constitute a binding commercial offer or formal legal advice.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                3. Client Service Agreements
              </h2>
              <p>
                All professional design, software development, and digital marketing services provided by SkaleNest are subject to a separate, written proposal, statement of work, or service agreement executed between SkaleNest and the client.
              </p>
              <p>
                Specific scopes, deliverables, payment terms, schedules, intellectual property rights, and warranties are defined exclusively in those individual agreements.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                4. Intellectual Property
              </h2>
              <p>
                All brand assets, text, layouts, visual designs, and code displayed on this website are the property of SkaleNest or used with permission, and are protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                5. Limitation of Liability
              </h2>
              <p>
                SkaleNest strives to ensure that the information on this website is accurate and up to date, but makes no representations or warranties of any kind regarding its completeness or accuracy. To the extent permitted by law, SkaleNest shall not be liable for any direct or indirect damages arising out of the use of this website.
              </p>
            </section>

            {/* Section 6 - Governing Law & Contact */}
            <section className="space-y-3 border-t border-[#E5E3DC] pt-6">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                6. Governing Law & Contact
              </h2>
              <p>
                These website terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be resolved amicably or submitted to the jurisdiction of competent courts in India.
              </p>
              <div className="rounded-xl border border-[#E5E3DC] bg-[#F7F6F2] p-4 text-xs sm:text-sm font-mono space-y-1">
                <p><span className="text-[#171715] font-bold">Brand:</span> SkaleNest</p>
                <p><span className="text-[#171715] font-bold">Website:</span> https://skalenest.com</p>
                <p><span className="text-[#171715] font-bold">Contact:</span> skalenest@gmail.com</p>
                <p><span className="text-[#171715] font-bold">WhatsApp:</span> +91 74399 80010</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E3DC] bg-[#F7F6F2] py-8 text-center text-xs font-body text-[#6F706B]">
        <p>&copy; {new Date().getFullYear()} SkaleNest. All rights reserved.</p>
      </footer>
    </div>
  );
}
