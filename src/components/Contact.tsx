"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Instagram, Linkedin, CheckCircle2, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import SpotlightCard from "./SpotlightCard";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpavapk";

const CHALLENGE_OPTIONS = [
  "Need more leads",
  "Need better social media",
  "Need a new website",
  "Need more Google visibility",
  "Need better ads",
  "Other",
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
    <section id="contact" className="relative border-b border-border bg-bg-secondary/70 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Ready to Get More Customers?
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-text-secondary">
              Tell us about your business. We&apos;ll identify the biggest opportunities and show you what we&apos;d improve with a free audit.
            </p>

            <div className="mt-8 flex flex-col gap-3.5">
              <a
                href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I'd%20like%20to%20get%20a%20free%20growth%20audit%20for%20my%20business"
                className="group flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-4 font-body text-sm text-text-primary transition-all hover:border-emerald-500/60 hover:bg-emerald-500/10 shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 transition-transform group-hover:scale-110">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-emerald-400 font-semibold block">Instant Response</span>
                  <span className="font-display font-medium">WhatsApp Us: +91 74399 80010</span>
                </div>
              </a>

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
                  className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-gold/40 bg-card p-10 text-center shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-text-primary">
                    Audit Request Received!
                  </h3>
                  <p className="mt-3 max-w-md font-body text-sm text-text-secondary leading-relaxed">
                    Thank you! We are reviewing your digital presence. We will send your custom growth audit and improvement roadmap within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/917439980010?text=Hi%20SkaleNest,%20I%20just%20submitted%20the%20audit%20form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 font-body text-sm font-semibold text-gold hover:border-gold hover:bg-gold/20 transition-all"
                  >
                    <span>Message Us On WhatsApp</span>
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SpotlightCard className="border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-xl rounded-3xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New SkaleNest Website Growth Audit Request"
                      />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full Name" name="full_name" placeholder="John Doe" required />
                        <Field label="Business Name" name="business_name" placeholder="Acme Clinic" required />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
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

                      <Field
                        label="Business Category / Industry"
                        name="business_type"
                        placeholder="e.g. Restaurant, Dental Clinic, Salon, Gym"
                        required
                      />

                      {/* Biggest Challenge Selection */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-xs font-medium text-text-secondary">
                          What&apos;s your biggest challenge? *
                        </label>
                        <select
                          name="biggest_challenge"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-border/80 bg-bg/90 px-4 py-3 font-body text-sm text-text-primary outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/50"
                        >
                          <option value="" disabled className="bg-bg text-text-secondary">
                            Select your biggest challenge
                          </option>
                          {CHALLENGE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-bg text-text-primary">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-body text-xs font-medium text-text-secondary">
                          Tell us about your business & goals (Optional)
                        </label>
                        <textarea
                          name="goals"
                          rows={3}
                          placeholder="What would you like to achieve in the next 3-6 months?"
                          className="w-full resize-none rounded-xl border border-border/80 bg-bg/90 px-4 py-3 font-body text-sm text-text-primary outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/50"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Website (Optional)" name="website" placeholder="https://..." required={false} />
                        <Field label="Instagram (Optional)" name="instagram" placeholder="@handle" required={false} />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold text-bg transition-all hover:bg-gold-bright disabled:opacity-60 shadow-lg"
                      >
                        {status === "submitting" ? (
                          <span>Analyzing & Submitting...</span>
                        ) : (
                          <>
                            <span>Get My Free Growth Audit</span>
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
