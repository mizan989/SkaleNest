"use client";

import { useState, FormEvent } from "react";
import { Mail, MessageCircle, Instagram, Linkedin, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpavapk";

const NEED_OPTIONS = [
  "Website Design & Development",
  "Digital Marketing",
  "Both",
  "Not Sure Yet",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Controlled form state to preserve values upon error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("service", formData.service);
    data.append("message", formData.message);
    data.append("_subject", `New SkaleNest Project Enquiry from ${formData.name}`);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        const result = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          result?.errors?.[0]?.message ||
            "Unable to submit enquiry at this time. Please check your details and try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please check your internet connection or reach out via email directly."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center border-t border-[#E5E3DC] py-20 sm:py-24 lg:py-0 lg:min-h-screen lg:min-h-[100dvh] overflow-hidden"
    >
      {/* Animated Ambient Background */}
      <AnimatedBackground variant="contact" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full my-auto lg:py-16 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Context & Contact Details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DC] bg-white px-3 py-1 text-xs font-mono text-[#6F706B] shadow-soft mb-3 sm:mb-4">
              <span>Start an Enquiry</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171715] leading-[1.15]">
              Let&apos;s discuss your project.
            </h2>
            <p className="mt-3 sm:mt-4 font-body text-sm sm:text-base text-[#6F706B] leading-relaxed">
              Tell us about what you need. We review every enquiry personally and respond promptly with practical recommendations and clear next steps.
            </p>

            {/* Verified Contact Routes */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:gap-3">
              <a
                href="mailto:skalenest@gmail.com"
                className="group flex items-center gap-3.5 rounded-xl border border-[#E5E3DC] bg-white p-3 sm:p-3.5 transition-all hover:border-[#C9A45C] hover:shadow-soft"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F7F6F2] text-[#C9A45C] transition-colors group-hover:bg-[#C9A45C]/15">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[#8C8D87]">Direct Email</span>
                  <span className="font-body text-sm font-medium text-[#171715]">skalenest@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-[#E5E3DC] bg-white p-3 sm:p-3.5 transition-all hover:border-[#15803D]/60 hover:shadow-soft"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#15803D]/10 text-[#15803D] transition-colors group-hover:bg-[#15803D]/20">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[#15803D]">WhatsApp Direct</span>
                  <span className="font-body text-sm font-medium text-[#171715]">+91 74399 80010</span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 mt-0.5">
                <a
                  href="https://instagram.com/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-xl border border-[#E5E3DC] bg-white p-2.5 sm:p-3 transition-all hover:border-[#C9A45C] hover:shadow-soft"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F6F2] text-[#C9A45C]">
                    <Instagram size={15} />
                  </div>
                  <span className="font-body text-xs font-medium text-[#171715]">@skalenest</span>
                </a>

                <a
                  href="https://linkedin.com/company/skalenest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-xl border border-[#E5E3DC] bg-white p-2.5 sm:p-3 transition-all hover:border-[#C9A45C] hover:shadow-soft"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F7F6F2] text-[#C9A45C]">
                    <Linkedin size={15} />
                  </div>
                  <span className="font-body text-xs font-medium text-[#171715]">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Native Formspree Form */}
          <div className="rounded-2xl border border-[#E5E3DC] bg-white p-6 sm:p-8 lg:p-7 xl:p-8 shadow-soft">
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="py-10 flex flex-col items-center justify-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#15803D]/10 text-[#15803D] mb-5">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#171715]">
                  Enquiry Received
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm text-[#6F706B] leading-relaxed">
                  Thank you for reaching out to SkaleNest. We have received your message and will review your project requirements promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#E5E3DC] bg-[#F7F6F2] px-5 py-2 text-xs font-semibold text-[#171715] hover:border-[#171715] transition-colors"
                >
                  <span>Submit another enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Spam protection honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                {/* Field 1: Name */}
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label
                    htmlFor="form-name"
                    className="font-body text-xs font-medium text-[#171715]"
                  >
                    Name <span className="text-[#DC2626]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl border border-[#E5E3DC] bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:border-[#C9A45C] focus:bg-white focus:ring-2 focus:ring-[#C9A45C]/20 disabled:opacity-60"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label
                    htmlFor="form-email"
                    className="font-body text-xs font-medium text-[#171715]"
                  >
                    Email <span className="text-[#DC2626]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl border border-[#E5E3DC] bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:border-[#C9A45C] focus:bg-white focus:ring-2 focus:ring-[#C9A45C]/20 disabled:opacity-60"
                  />
                </div>

                {/* Field 3: What do you need? */}
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label
                    htmlFor="form-service"
                    className="font-body text-xs font-medium text-[#171715]"
                  >
                    What do you need? <span className="text-[#DC2626]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full rounded-xl border border-[#E5E3DC] bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] outline-none transition-all focus:border-[#C9A45C] focus:bg-white focus:ring-2 focus:ring-[#C9A45C]/20 disabled:opacity-60 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {NEED_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 4: Tell us about your project */}
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label
                    htmlFor="form-message"
                    className="font-body text-xs font-medium text-[#171715]"
                  >
                    Tell us about your project <span className="text-[#DC2626]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="Provide a brief overview of your business, goals, and what you are looking to achieve..."
                    className="w-full resize-none rounded-xl border border-[#E5E3DC] bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:border-[#C9A45C] focus:bg-white focus:ring-2 focus:ring-[#C9A45C]/20 disabled:opacity-60"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-[#DC2626]/30 bg-[#DC2626]/5 p-3 text-xs text-[#DC2626]"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{errorMessage || "Submission error. Please try again."}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#171715] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#C9A45C] hover:text-[#171715] disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
