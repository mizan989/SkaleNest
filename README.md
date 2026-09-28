# SkaleNest — Website (skalenest.vercel.app)

"Where Businesses Grow." Digital Growth Infrastructure for Modern Local Businesses.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion, per the SkaleNest brand blueprint.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you launch — required edits

1. **Contact form (Formspree)**
   Open `src/components/Contact.tsx` and replace:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real Formspree form ID from [formspree.io](https://formspree.io).

2. **Real contact details**
   In `src/components/Contact.tsx` and `src/components/Footer.tsx`, replace the placeholder email, WhatsApp link, Instagram, and LinkedIn URLs with your real accounts.

3. **Results / case studies**
   `src/components/Results.tsx` intentionally ships with no fabricated statistics, per the brand guidelines. Once you have real client outcomes, swap in the `StatsGrid` example commented at the bottom of that file, and add real case studies (Client → Problem → Strategy → Implementation → Result).

4. **Referral terms**
   `src/components/Referral.tsx` states the 40% net-profit commission. Have this reviewed/finalized legally before publishing — the brief flags this explicitly.

5. **Privacy Policy / Terms pages**
   The footer links to `/privacy` and `/terms`, which aren't built yet (no legal content was provided). Add these as new pages in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` when ready.

6. **Analytics**
   Add Google Analytics / Search Console by inserting the tracking snippet into `src/app/layout.tsx` (e.g. via `next/script`), once you have your GA4 measurement ID.

## Project structure

```
src/
  app/
    layout.tsx       — fonts, metadata, global shell
    page.tsx          — assembles all homepage sections
    globals.css        — brand tokens, base styles
  components/
    Navbar.tsx, Hero.tsx, Problem.tsx, Services.tsx,
    Method.tsx, Process.tsx, Industries.tsx, Results.tsx,
    WhyUs.tsx, Referral.tsx, About.tsx, FAQ.tsx,
    Contact.tsx, FinalCTA.tsx, Footer.tsx
    NetworkCanvas.tsx  — signature animated node/network visual
    Reveal.tsx, Eyebrow.tsx, Logo.tsx  — shared primitives
```

## Brand tokens (Tailwind)

| Token | Hex |
|---|---|
| `bg` | `#070B14` |
| `bg-secondary` | `#0D1422` |
| `card` | `#111A2A` |
| `text-primary` | `#F5F7FA` |
| `text-secondary` | `#8994A7` |
| `gold` | `#C9A45C` |
| `border` | `#202B3D` |

Fonts: **Space Grotesk** (display/headlines), **Inter** (body), **JetBrains Mono** (eyebrows/labels — reinforces the "data infrastructure" identity).

## Deploying

This is ready for [Vercel](https://vercel.com): push to GitHub, import the repo in Vercel, and deploy — no environment variables required unless you add analytics.
