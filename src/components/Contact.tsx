"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Instagram, Linkedin, CheckCircle2, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpavapk";

const SERVICE_OPTIONS = [
  "Full Digital Growth Stack (Website + SEO + Media + Automation)",
  "High-Converting Website Creation & Web Architecture",
  "Local SEO & Google Maps Dominance",
  "Short-Form Video Production & Content",
  "WhatsApp CRM & Marketing Automation",
  "Paid Local Advertising (Meta / Google)",
  "Partner / Growth Inquiry",
  "Other / Custom Request",
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
    <section id="contact" className="relative border-b border-border bg-bg-secondary/70 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Let&apos;s engineer your business growth.
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-text-secondary">
              Share a few details about your business and goals. We&apos;ll conduct an initial local search audit and get back to you within 24 hours with an actionable roadmap.
            </p>

            <div className="mt-10 flex flex-col gap-3.5">
              <a
                href="mailto:skalenest@gmail.com"
                className="group flex items-center gap-3.5 rounded-xl border border-border/70 bg-card/40 p-3.5 font-body text-sm text-text-secondary transition-all hover:border-gold/30 hover:bg-card hover:text-text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold transition-transform group-hover:scale-110">
                  <Mail size={16} />
                </div>
                <span>skalenest@gmail.com</span>
              </a>

              <a
                href="https://wa.me/917439980010"
                className="group flex items-center gap-3.5 rounded-xl border border-border/70 bg-card/40 p-3.5 font-body text-sm text-text-secondary transition-all hover:border-gold/30 hover:bg-card hover:text-text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold transition-transform group-hover:scale-110">
                  <MessageCircle size={16} />
                </div>
                <span>WhatsApp Us: +91 74399 80010</span>
              </a>

              <a
                href="https://instagram.com/skalenest"
                className="group flex items-center gap-3.5 rounded-xl border border-border/70 bg-card/40 p-3.5 font-body text-sm text-text-secondary transition-all hover:border-gold/30 hover:bg-card hover:text-text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold transition-transform group-hover:scale-110">
                  <Instagram size={16} />
                </div>
                <span>Instagram: @skalenest</span>
              </a>

              <a
                href="https://linkedin.com/company/skalenest"
                className="group flex items-center gap-3.5 rounded-xl border border-border/70 bg-card/40 p-3.5 font-body text-sm text-text-secondary transition-all hover:border-gold/30 hover:bg-card hover:text-text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold transition-transform group-hover:scale-110">
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn: SkaleNest</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[550px] flex-col items-center justify-center rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-text-primary">
                    Audit Request Received!
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm text-text-secondary leading-relaxed">
                    Thank you! Our growth team is analyzing your digital presence. We will send your custom audit and growth blueprint within 24 hours.
                  </p>
                  <p className="mt-2 font-mono text-xs text-gold">
                    Prefer immediate assistance? WhatsApp us below.
                  </p>
                  <a
                    href="https://wa.me/917439980010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 font-body text-sm font-semibold text-gold hover:border-gold hover:bg-gold/20 transition-all"
                  >
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SpotlightCard className="border-border/80 bg-card p-8 lg:p-10 shadow-xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New SkaleNest Website Growth Audit Request"
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" name="full_name" placeholder="John Doe" required />
                        <Field label="Business Name" name="business_name" placeholder="Acme Clinic" required />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                        <Field
                          label="Phone / WhatsApp"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>

                      <Field label="Business Category / Industry" name="business_type" placeholder="e.g. Dental Clinic, Restaurant, Gym" required />

                      <div className="flex flex-col gap-2">
                        <label className="font-body text-xs font-medium text-text-secondary">
                          Primary Growth Area *
                        </label>
                        <select
                          name="service"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-border/80 bg-bg/90 px-4 py-3 font-body text-sm text-text-primary outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/50"
                        >
                          <option value="" disabled className="bg-bg text-text-secondary">
                            Select primary objective
                          </option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-bg text-text-primary">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-body text-xs font-medium text-text-secondary">
                          Tell us about your business goals & current bottleneck *
                        </label>
                        <textarea
                          name="goals"
                          required
                          rows={3}
                          placeholder="What is your biggest bottleneck to acquiring more local customers right now?"
                          className="w-full resize-none rounded-xl border border-border/80 bg-bg/90 px-4 py-3 font-body text-sm text-text-primary outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/50"
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-3">
                        <Field label="Website (Optional)" name="website" placeholder="https://..." required={false} />
                        <Field label="Instagram (Optional)" name="instagram" placeholder="@handle" required={false} />
                        <Field
                          label="Monthly Budget"
                          name="budget"
                          placeholder="e.g. ₹30k - ₹75k"
                          required={false}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-bg transition-all hover:bg-gold-bright disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <span>Analyzing & Submitting...</span>
                        ) : (
                          <>
                            <span>Get Your Free Growth Audit</span>
                            <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </motion.button>

                      {status === "error" && (
                        <p className="text-center font-body text-xs text-red-400">
                          Something went wrong. Please try again or WhatsApp us directly.
                        </p>
                      )}
                    </form>
                  </SpotlightCard>
                </motion.div>
              )}
            </AnimatePresence>
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
  placeholder = "",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/80 bg-bg/90 px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/50"
      />
    </div>
  );
}
