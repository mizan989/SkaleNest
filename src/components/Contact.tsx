"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Mail, MessageCircle, Instagram, Linkedin, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpavapk";

const NEED_OPTIONS = [
  "Website Design & Development",
  "Digital Marketing",
  "Both",
  "Not Sure Yet",
] as const;

type NeedOption = typeof NEED_OPTIONS[number];
type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormDataState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const serviceSelectRef = useRef<HTMLSelectElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  // Pre-fill service from event or URL hash if coming from Services CTA
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && NEED_OPTIONS.includes(customEvent.detail as NeedOption)) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail }));
        setFieldErrors((prev) => ({ ...prev, service: undefined }));
      }
    };

    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("service=")) {
        const match = hash.match(/service=([^&]+)/);
        if (match) {
          const decoded = decodeURIComponent(match[1]);
          if (NEED_OPTIONS.includes(decoded as NeedOption)) {
            setFormData((prev) => ({ ...prev, service: decoded }));
          }
        }
      }
    }

    window.addEventListener("skalenest:select-service", handleSelectService);
    return () => {
      window.removeEventListener("skalenest:select-service", handleSelectService);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing/selecting
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@company.com).";
    }

    if (!formData.service || !NEED_OPTIONS.includes(formData.service as NeedOption)) {
      errors.service = "Please select what you need.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please provide details about your project.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please provide at least 10 characters describing your project.";
    }

    return errors;
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent duplicate submission while already submitting
    if (status === "submitting") return;

    // Field-level validation check
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Focus first invalid field
      if (errors.name) {
        nameInputRef.current?.focus();
      } else if (errors.email) {
        emailInputRef.current?.focus();
      } else if (errors.service) {
        serviceSelectRef.current?.focus();
      } else if (errors.message) {
        messageInputRef.current?.focus();
      }
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData();
    data.append("name", formData.name.trim());
    data.append("email", formData.email.trim());
    data.append("service", formData.service);
    data.append("message", formData.message.trim());
    data.append("_subject", `New SkaleNest Project Enquiry from ${formData.name.trim()}`);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFieldErrors({});
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
                className="group flex items-center gap-3.5 rounded-xl border border-[#E5E3DC] bg-white p-3 sm:p-3.5 transition-all hover:border-[#C9A45C] hover:shadow-soft focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
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
                className="group flex items-center gap-3.5 rounded-xl border border-[#E5E3DC] bg-white p-3 sm:p-3.5 transition-all hover:border-[#15803D]/60 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-[#15803D]"
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
                  className="group flex items-center gap-2.5 rounded-xl border border-[#E5E3DC] bg-white p-2.5 sm:p-3 transition-all hover:border-[#C9A45C] hover:shadow-soft focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
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
                  className="group flex items-center gap-2.5 rounded-xl border border-[#E5E3DC] bg-white p-2.5 sm:p-3 transition-all hover:border-[#C9A45C] hover:shadow-soft focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
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
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#E5E3DC] bg-[#F7F6F2] px-5 py-2 text-xs font-semibold text-[#171715] hover:border-[#171715] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A45C]"
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
                    ref={nameInputRef}
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={status === "submitting"}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "form-name-error" : undefined}
                    className={`w-full rounded-xl border bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:bg-white disabled:opacity-60 ${
                      fieldErrors.name
                        ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                        : "border-[#E5E3DC] focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="form-name-error" role="alert" className="text-xs text-[#DC2626] font-medium mt-0.5">
                      {fieldErrors.name}
                    </p>
                  )}
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
                    ref={emailInputRef}
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    disabled={status === "submitting"}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "form-email-error" : undefined}
                    className={`w-full rounded-xl border bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:bg-white disabled:opacity-60 ${
                      fieldErrors.email
                        ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                        : "border-[#E5E3DC] focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="form-email-error" role="alert" className="text-xs text-[#DC2626] font-medium mt-0.5">
                      {fieldErrors.email}
                    </p>
                  )}
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
                    ref={serviceSelectRef}
                    id="form-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    aria-invalid={!!fieldErrors.service}
                    aria-describedby={fieldErrors.service ? "form-service-error" : undefined}
                    className={`w-full rounded-xl border bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] outline-none transition-all focus:bg-white disabled:opacity-60 cursor-pointer ${
                      fieldErrors.service
                        ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                        : "border-[#E5E3DC] focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
                    }`}
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
                  {fieldErrors.service && (
                    <p id="form-service-error" role="alert" className="text-xs text-[#DC2626] font-medium mt-0.5">
                      {fieldErrors.service}
                    </p>
                  )}
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
                    ref={messageInputRef}
                    id="form-message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "form-message-error" : undefined}
                    placeholder="Provide a brief overview of your business, goals, and what you are looking to achieve..."
                    className={`w-full resize-none rounded-xl border bg-[#F7F6F2]/50 px-3.5 py-2.5 sm:py-3 font-body text-sm text-[#171715] placeholder:text-[#8C8D87] outline-none transition-all focus:bg-white disabled:opacity-60 ${
                      fieldErrors.message
                        ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                        : "border-[#E5E3DC] focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="form-message-error" role="alert" className="text-xs text-[#DC2626] font-medium mt-0.5">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Global Error message */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-[#DC2626]/30 bg-[#DC2626]/5 p-3 text-xs text-[#DC2626]"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{errorMessage || "Submission error. Please check your details and try again."}</span>
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
