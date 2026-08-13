"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

// TODO: Replace with your real Formspree form ID before launch.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpavapk";

const SERVICE_OPTIONS = [
  "Local SEO / Google Maps",
  "Short-form Content",
  "WhatsApp Automation",
  "Paid Advertising",
  "Complete Digital Growth",
  "Something Else",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative border-b border-border bg-bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Let&apos;s grow your business.
            </h2>
            <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-text-secondary">
              Tell us a little about your business and what you&apos;re
              trying to achieve. We&apos;ll review your requirements and get
              back to you.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:skalenest@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                <Mail size={16} className="text-gold" />
                skalenest@gmail.com
              </a>
              <a
                href="https://wa.me/917439980010"
                className="flex items-center gap-3 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                target="_blank"
              >
                <MessageCircle size={16} className="text-gold" />
                WhatsApp Us
              </a>
              <a
                href="https://instagram.com/skalenest"
                className="flex items-center gap-3 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                target="_blank"
              >
                <Instagram size={16} className="text-gold" />
                @skalenest
              </a>
              {/* <a
                href="https://linkedin.com/company/skalenest"
                className="flex items-center gap-3 font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                target="_blank"
              >
                <Linkedin size={16} className="text-gold" />
                SkaleNest on LinkedIn
              </a> */}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {status === "success" ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-gold/30 bg-card p-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.08]">
                  <ArrowUpRight size={22} className="text-gold" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-text-primary">
                  Thanks! Your enquiry has been received.
                </h3>
                <p className="mt-2 font-body text-text-secondary">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 lg:p-10"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New SkaleNest Website Enquiry"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="full_name" required />
                  <Field label="Business Name" name="business_name" required />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />
                  <Field
                    label="Phone / WhatsApp Number"
                    name="phone"
                    type="tel"
                    required
                  />
                </div>

                <Field label="Business Type" name="business_type" required />

                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-medium text-text-secondary">
                    What do you need help with? *
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-gold"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-medium text-text-secondary">
                    Tell us about your business / goals *
                  </label>
                  <textarea
                    name="goals"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Website" name="website" required={false} />
                  <Field label="Instagram" name="instagram" required={false} />
                  <Field
                    label="Monthly Marketing Budget"
                    name="budget"
                    required={false}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-bg transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Get Your Free Growth Audit"}
                  {status !== "submitting" && (
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center font-body text-sm text-red-400">
                    Something went wrong. Please try again or email us
                    directly.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-body text-xs font-medium text-text-secondary"
      >
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-bg px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
