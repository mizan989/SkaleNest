import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Privacy Policy — SkaleNest",
  description: "Information on how SkaleNest collects, handles, and protects information submitted through our website.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
              This Privacy Policy explains what information SkaleNest collects through this website and how it is processed and protected.
            </p>
            <p className="mt-2 font-mono text-xs text-[#8C8D87]">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-8 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                1. Information We Collect
              </h2>
              <p>
                We only collect information that you deliberately and directly provide to us through our contact form. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong className="text-[#171715]">Name:</strong> To identify and address you in our communication.</li>
                <li><strong className="text-[#171715]">Email address:</strong> To respond to your inquiry and provide project proposals or information.</li>
                <li><strong className="text-[#171715]">Service interest:</strong> What service category (Website Design & Development, Digital Marketing, Both, or Not Sure Yet) you are inquiring about.</li>
                <li><strong className="text-[#171715]">Project description:</strong> Details you provide regarding your business requirements or goals.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                2. How Your Information Is Processed
              </h2>
              <p>
                When you submit an enquiry, the form data is securely transmitted to our form processing service provider, <strong>Formspree Inc.</strong>, which forwards the submission to our official email inbox (<span className="text-[#171715] font-medium">skalenest@gmail.com</span>).
              </p>
              <p>
                We use this information exclusively to review your project requirements, communicate with you, and prepare relevant proposals or answers. We do not sell, rent, or trade your contact information with any third-party advertisers or data brokers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                3. Cookies and Tracking Technologies
              </h2>
              <p>
                This website does not currently use tracking cookies, behavioral tracking pixels, or third-party advertising cookies. Only essential, locally served assets (such as local fonts) are used to display the website.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                4. Data Retention and Your Rights
              </h2>
              <p>
                We retain enquiry records only for as long as necessary to fulfill communication or contractual purposes related to your inquiry.
              </p>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, or ask for your contact information to be permanently deleted from our records. To exercise these rights, please email us directly at <a href="mailto:skalenest@gmail.com" className="text-[#171715] underline underline-offset-4 hover:text-[#C9A45C]">skalenest@gmail.com</a>.
              </p>
            </section>

            {/* Section 5 - Owner Confirmation Details */}
            <section className="space-y-3 border-t border-[#E5E3DC] pt-6">
              <h2 className="font-display text-xl font-bold text-[#171715]">
                5. Contact & Entity Information
              </h2>
              <p>
                For any privacy questions or requests, you can contact:
              </p>
              <div className="rounded-xl border border-[#E5E3DC] bg-[#F7F6F2] p-4 text-xs sm:text-sm font-mono space-y-1">
                <p><span className="text-[#171715] font-bold">Brand:</span> SkaleNest</p>
                <p><span className="text-[#171715] font-bold">Email:</span> skalenest@gmail.com</p>
                <p><span className="text-[#171715] font-bold">WhatsApp:</span> +91 74399 80010</p>
                <p className="text-[#8C8D87] text-xs pt-2">
                  [TODO: Owner confirmation required: Registered business entity name, official business registration number, and formal operating address if applicable.]
                </p>
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
