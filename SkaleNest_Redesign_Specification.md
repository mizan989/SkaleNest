# SkaleNest Website Redesign — Complete Implementation Specification

> **Purpose:** This document is the single source of truth for redesigning the existing SkaleNest website. Follow it together with the supplied SkaleNest logo and the separate Antigravity prompt.
>
> **Priority:** Build a polished, trustworthy, minimal agency website with no unnecessary content or features. Do not invent business history, clients, results, testimonials, team members, or credentials.

---

## 1. Project Overview

**Brand:** SkaleNest  
**Business:** Digital marketing agency that also provides website design and development.  
**Primary objective:** Help a visitor quickly understand what SkaleNest offers, feel confident enough to enquire, and submit a contact form.  
**Secondary objectives:** Communicate a clear process, provide essential business information, and present a consistent premium brand.

### Core services

1. **Website Design & Development**
   - Landing pages through complete websites.
   - Frontend implementation.
   - Backend and database integration where required.
   - Deployment.
2. **Digital Marketing**
   - Present as a service category without claiming specific specialisms, guaranteed results, or capabilities that have not been confirmed.

Do not imply that SkaleNest has a large team, long operating history, established client base, or proven results. Do not mention that the agency is currently operated by one person. Present the brand professionally without fabricating facts.

---

## 2. Non-Negotiable Decisions

- Do **not** include a projects, portfolio, case studies, or concept-project section at this stage.
- Do **not** include a founder section.
- Do not create fake testimonials, ratings, client logos, statistics, awards, partner badges, or performance claims.
- Do not add a newsletter, blog, pricing table, booking widget, chat widget, or other feature unless it is already necessary and functional.
- Do not add sections merely to make the page longer.
- Every element must help explain the service, establish legitimate trust, or help the visitor contact the agency.
- Use the supplied new logo. Do not redesign, recolor, distort, crop, or replace it. Preserve its aspect ratio and transparent outside area. Check its actual colors and use those as the source for the restrained accent palette.
- Use only locally stored fonts. No Google Fonts, remote font CSS, or runtime font downloads.
- Use **Lenis** for smooth scrolling. Reuse and refine an existing implementation if present; do not install a second scrolling library.
- Keep the website responsive and accessible.
- Keep the existing framework, routing, deployment setup, integrations, and working features unless a change is necessary and explicitly justified. Inspect the repository before editing.
- Do not claim that an action, test, integration, or deployment succeeded unless it was actually verified.

---

## 3. Design Direction

### Visual character

Minimal, premium, modern, confident, and calm. The design should feel carefully art-directed rather than template-like. Avoid visual noise.

### Color system

Use the existing website colors as a starting point if they are already established, and derive the restrained gold accent from the supplied logo. Do not introduce unrelated colors.

Suggested semantic tokens (adjust values only after inspecting the logo and current site; keep the palette restrained):

| Token | Suggested value | Use |
|---|---|---|
| `--color-background` | `#F7F6F2` | Warm off-white page background |
| `--color-surface` | `#FFFFFF` | Form/card surfaces where needed |
| `--color-text` | `#171715` | Primary text |
| `--color-muted` | `#6F706B` | Supporting text |
| `--color-border` | `#E5E3DC` | Fine dividers and borders |
| `--color-accent` | Sample from supplied logo | Muted gold accent, sparingly |
| `--color-accent-contrast` | Dark neutral | Text on accent, if needed |
| `--color-error` | Accessible dark red | Form errors |
| `--color-success` | Accessible dark green | Form success |

Requirements:
- Verify contrast for text, controls, and focus indicators.
- Do not use gold for large blocks of body text or large background areas.
- Avoid heavy navy/gold overload, neon, excessive gradients, glow, glassmorphism, and decorative floating objects.
- Use a consistent spacing scale and a small, consistent radius scale.
- Borders should be subtle but visible. Shadows should be soft and used only to clarify hierarchy.

### Typography and local font setup

- Inspect the supplied logo and current site before choosing the final type pairing.
- Use a refined, highly readable sans-serif family for body/UI and, only if it suits the brand, a restrained display face for headings.
- All font files must live in the repository, preferably under `public/fonts/` or the project’s established local-font directory.
- Use the framework’s local font mechanism (for Next.js, `next/font/local`) and define explicit weights/styles.
- Prefer `.woff2`; include only the weights actually used.
- Do not reference Google Fonts, Adobe Fonts, remote CSS font imports, or third-party font CDNs.
- Avoid synthetic bold/italic where real files are available.
- Define typography tokens for body, small text, labels, headings, and display headings.
- Verify no external font requests occur at runtime.

If the repository already contains suitable licensed local fonts, use them. Do not silently download fonts. If no font files exist, choose a system-font stack or clearly document the exact locally supplied font files needed; do not leave broken font paths.

---

## 4. Information Architecture and Page Sections

Build a focused single-page agency website unless the existing architecture clearly requires otherwise. Keep section order logical and navigation concise.

### A. Header / Navigation

- Use the supplied logo, with a suitable accessible brand label.
- Keep the header clean, responsive, and visually consistent with the page.
- Desktop navigation should link only to sections that exist, for example: Services, Process, About, Contact.
- Do not include a Portfolio/Work link.
- Include one clear contact CTA if it fits the existing design.
- Mobile navigation must be keyboard accessible, have correct expanded state, close after navigation, and not trap users unexpectedly.
- Sticky behavior is optional; if retained, ensure it does not consume excessive vertical space or cover anchor headings.
- Use a subtle border or background treatment when appropriate; avoid a bulky header.

### B. Hero

Purpose: immediately communicate what SkaleNest does and give the visitor a next step.

- One clear headline, not a stack of competing slogans.
- Supporting copy should state that SkaleNest provides website design/development and digital marketing.
- One primary CTA linking to the contact section/form.
- A secondary CTA is optional only if it has a useful destination, such as Services.
- Do not claim guaranteed growth, revenue, rankings, or outcomes.
- Avoid generic, inflated claims such as “world-class”, “industry-leading”, or “the #1 agency”.
- Visual treatment should be distinctive but restrained. Use the logo or a purposeful brand visual only if it supports the message; do not add random abstract decoration.

### C. Services

Include exactly the two confirmed service categories unless the owner later supplies more detail.

**Website Design & Development**
- Explain that work can range from landing pages to complete websites.
- Mention frontend, backend, database integration, and deployment where relevant.
- Do not promise every technology or feature by default.

**Digital Marketing**
- Describe the category clearly but broadly.
- Do not invent a list of specialisms, channels, deliverables, or guarantees.
- If exact sub-services are not supplied, do not add them as confirmed offerings.

Cards may be used if they improve scanability. Cards must not become oversized decorative blocks.

### D. Process

A concise, realistic process section may explain how an enquiry moves forward. Use only steps SkaleNest can actually follow. Suggested neutral sequence:

1. **Understand** — discuss the business, goals, and requirements.
2. **Plan** — define scope, approach, and expected deliverables.
3. **Create** — carry out the agreed website or marketing work.
4. **Review & Handover** — review the work and agree on delivery/next steps.

Do not imply a guaranteed timeline or outcome. Do not add invented client quotes or project examples.

### E. About / Brand Introduction

- A short brand-level explanation of SkaleNest’s approach and purpose.
- Do not add a founder profile or founder photo.
- Do not state team size, years of experience, client count, or past results unless verified and explicitly supplied.
- Keep it brief; avoid repeating the hero and service descriptions.

### F. Contact / Formspree Form

This is a primary conversion section. It should be welcoming, clear, and quick to complete.

**Layout**
- Desktop: two-column layout where practical. One side has a concise heading and explanatory sentence; the other contains the form.
- Mobile: stack cleanly in one column.
- The form should feel native to the website, not like a third-party embed.
- Do not repeat a large CTA block if the form itself is already the CTA.

**Fields**
1. Name — required.
2. Email — required; validate as email.
3. What do you need? — required dropdown with:
   - Website Design & Development
   - Digital Marketing
   - Both
   - Not Sure Yet
4. Tell us about your project — required textarea with a helpful, non-intrusive placeholder.

Do not ask for phone number, budget, company size, or other unnecessary information at this stage.

**Form behavior**
- Preserve and use the actual existing Formspree endpoint/configuration. Inspect the repository to find it; do not invent or replace it.
- Never expose private credentials or secrets in client code.
- Preserve Formspree spam protection or existing honeypot/anti-spam configuration.
- Show clear loading, success, and error states.
- Prevent accidental duplicate submissions while a request is pending.
- On success, show a concise inline confirmation; do not redirect to an unrelated page.
- On failure, keep entered values and show a useful retry message.
- Ensure labels are visible and programmatically associated with controls; do not rely on placeholders as labels.
- Provide accessible validation, focus states, and error announcements.
- Ensure the form works with keyboard and mobile devices.
- Do not claim a message was sent until Formspree confirms success.

**Visual details**
- Use existing brand colors.
- Subtle border and restrained surface contrast.
- Clear labels above controls.
- Consistent field heights and spacing.
- A clear submit button with a small arrow/micro-interaction if appropriate.
- Focus state must be visible and accessible.

### G. Footer

Keep it compact and purposeful.

Include:
- Supplied logo.
- One short, truthful brand line.
- Navigation links only for sections that exist.
- Service links or labels for the two confirmed service categories, if useful.
- Official business email and active social links only if supplied/verified in the project. Do not invent contact details or add dead links.
- Legal links: Privacy Policy, Terms & Conditions, and Cookie Policy only if applicable.
- Copyright line with the current year generated dynamically if the project supports it.

Do not add:
- Newsletter form.
- Fake social accounts.
- Duplicate oversized CTA.
- Unnecessary sitemap columns.
- Decorative filler content.

---

## 5. Legal Pages and Privacy

Create dedicated, responsive skeleton pages/routes for:
- Privacy Policy
- Terms & Conditions
- Cookie Policy (only if applicable based on actual site behavior)

These should share the site header/footer and typography, and include:
- Clear page title.
- Short introduction.
- Readable section hierarchy.
- Last-updated date.
- A clear route back to the main site.

**Important:** Do not fabricate legal terms, company address, registration details, data-retention periods, or claims about third-party processing. Use clearly marked TODO placeholders in source/content for facts that the owner must confirm. Do not present placeholder policy copy as finalized legal advice.

Privacy Policy must accurately reflect actual data collection and Formspree use, including what data is collected, purpose, handling/recipients, retention if known, user contact route, and relevant rights/requests. Verify current integration details rather than guessing.

Terms should distinguish website-use terms from a separate client proposal/service agreement. Do not invent commercial terms.

Cookie Policy should be included only after inspecting actual cookies, analytics, pixels, and storage. Do not claim “no cookies” without checking. If no separate policy is needed, do not create a misleading policy page; the footer can omit that link.

---

## 6. Loading Skeleton

Implement a brief, accessible loading skeleton only where it is genuinely needed.

- The skeleton should resemble the actual page structure (header, hero text blocks/buttons, and key content placeholders) rather than showing arbitrary grey bars.
- Use the site’s palette: subdued neutral surfaces and a restrained shimmer if motion is enabled.
- Avoid a full-screen branded animation, long artificial delay, or forced wait.
- Render the real page as soon as content is ready.
- Prefer skeletons for specific delayed components (such as images or asynchronously loaded sections) rather than covering an already-rendered page.
- Do not show a skeleton for content that is synchronously available or flashes too briefly to be useful.
- Respect `prefers-reduced-motion`; disable shimmer/animated movement when requested.
- Ensure skeleton placeholders are hidden from assistive technology (`aria-hidden="true"`) and do not create misleading focus targets.
- Avoid layout shift by matching final element dimensions/aspect ratios.

---

## 7. Motion and Interaction

The site should feel smooth and distinctive without becoming distracting.

### Motion principles
- Motion should explain hierarchy, state, or interaction—not exist for decoration.
- Use a small number of signature interactions, not animation on every element.
- Keep durations short and easing natural.
- No constant motion, aggressive parallax, or animation that delays access to content.
- Respect `prefers-reduced-motion` throughout.

### Approved restrained motion
- **Hero headline:** a carefully clipped/masked reveal can provide a distinctive entrance. Avoid a generic sequence of every line fading and rising.
- **Selected accent line:** a fine muted-gold line may draw in once where it has meaning.
- **Cards:** on hover, approximately 4px lift, subtle border/accent change, soft shadow, and a tiny arrow shift if present. No dramatic scaling, 3D tilt, glowing edge, or continuous animation.
- **Buttons:** subtle arrow movement or slight color transition; retain clear focus/active states.
- **FAQ:** only if an FAQ is genuinely needed; otherwise do not add one merely for animation.
- **Images:** a contained, very subtle zoom only if an image exists and the effect supports it.
- **Process line:** optional line drawing if it remains subtle and does not impair comprehension.

### Avoid
- Cursor-following glow.
- Floating decorative elements.
- 3D card tilt.
- Strong parallax.
- Full-screen preloader.
- Scroll hijacking.
- Repeated dramatic reveal animations.
- Large blur/glow effects.
- Animations that run continuously without purpose.

### Hover and touch
- Do not hide essential information behind hover.
- Ensure equivalent feedback on keyboard focus and touch.
- Disable or simplify hover movement on touch devices where appropriate.

---

## 8. Lenis Smooth Scrolling

Use Lenis as the one smooth-scroll solution.

- Inspect and reuse the existing Lenis integration if present.
- Do not install another smooth-scroll library or create duplicate Lenis instances.
- Integrate with the framework lifecycle correctly; initialize once and clean up on unmount.
- Ensure anchor links scroll to the correct section and account for any sticky header.
- Ensure navigation, back-to-top (only if present), and any scroll-linked animation work together.
- Do not hijack wheel/touch input or make scrolling feel floaty or delayed.
- Preserve normal browser behavior where appropriate.
- Provide a reduced-motion/native-scroll fallback when `prefers-reduced-motion: reduce` is active.
- Test touch scrolling on mobile and avoid interfering with browser gestures.
- Avoid unnecessary animation-frame loops or leaked event listeners.
- If Framer Motion or another animation system is present, integrate without competing scroll loops.

---

## 9. Responsive Design

Use a mobile-first approach and verify at representative viewport widths, including:
- Small phone (approximately 320–375px).
- Typical phone (approximately 390–430px).
- Tablet portrait and landscape.
- Laptop (approximately 1366px).
- Large desktop (approximately 1440px and above).

Requirements:
- No horizontal overflow.
- No clipped headings, buttons, or form controls.
- Comfortable text size and line length.
- Responsive navigation with accessible menu behavior.
- Cards stack or reflow naturally.
- Hero remains clear and balanced on narrow screens.
- Form fields are easy to tap and complete.
- Motion does not impair touch use.
- Footer columns collapse cleanly.
- Avoid fixed heights that cut off content.
- Use fluid sizing (`clamp()` where appropriate) and sensible max-widths.

---

## 10. Accessibility

Target WCAG 2.2 AA practices where practical.

- Semantic landmarks and correct heading hierarchy.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Sufficient color contrast.
- Proper form labels, descriptions, and error associations.
- Accessible mobile menu state.
- Meaningful alt text for informative images; empty alt for decorative images.
- Reduced-motion support.
- No information conveyed by color alone.
- Adequate target sizes, especially on mobile.
- Avoid auto-playing audio/video.
- Ensure animations do not cause flashing or discomfort.

---

## 11. Technical Architecture and Code Quality

**Do not assume a framework or restructure blindly. First inspect the current repository.**

### Before editing
1. Inspect the complete project structure and package scripts.
2. Identify framework, routing, styling approach, component conventions, and current entry points.
3. Locate current logo/assets and inspect their dimensions/transparency.
4. Locate existing Lenis setup and any animation libraries.
5. Locate Formspree endpoint and current submission behavior.
6. Inspect existing SEO metadata, favicon, legal routes, and responsive styles.
7. Identify working features and preserve them unless change is required.
8. Note any missing information that must remain a TODO rather than be invented.

### Architecture principles
- Follow the repository’s existing framework and conventions.
- Use reusable components for repeated UI (header, footer, buttons, form fields, service cards, legal page layout).
- Keep content/data separate from presentation where that improves maintainability.
- Use semantic HTML and typed interfaces if the project uses TypeScript.
- Avoid unnecessary dependencies.
- Do not create multiple competing design systems or duplicate components.
- Avoid giant monolithic components; split by meaningful responsibility.
- Keep CSS organized and remove obsolete styles only after confirming they are unused.
- Do not replace working infrastructure just for preference.
- Do not add backend services unless required by an existing feature.
- Keep environment variables and secrets out of source control.
- Avoid unnecessary client-side JavaScript; use server/static rendering where appropriate.
- Use stable keys and clean component lifecycle management.
- No console errors, hydration warnings, broken imports, or dead links.

### Suggested conceptual components
Adapt names and structure to the existing codebase:
- `SiteHeader`
- `MobileNavigation`
- `HeroSection`
- `ServicesSection`
- `ProcessSection`
- `AboutSection`
- `ContactSection`
- `ContactForm`
- `SiteFooter`
- `LegalPageLayout`
- `PageSkeleton` or component-level skeletons

These are conceptual suggestions, not a mandate to create a new folder structure if the current one is already sound.

---

## 12. Performance

- Optimize supplied logo and image assets without damaging quality or transparency.
- Use responsive image sizing and modern formats where appropriate.
- Reserve image dimensions to prevent layout shift.
- Lazy-load below-the-fold images where appropriate; do not lazy-load the main logo or critical hero asset unnecessarily.
- Avoid heavy animation libraries if existing tools are sufficient.
- Avoid large background videos and unnecessary third-party scripts.
- Minimize client JavaScript and avoid loading fonts remotely.
- Prevent layout shifts from fonts, images, and skeleton transitions.
- Ensure the skeleton does not delay rendering.
- Verify the page remains usable if a non-essential script fails.

---

## 13. SEO and Sharing

- Provide a unique, accurate page title and meta description for the main page.
- Use one clear H1 and logical H2/H3 hierarchy.
- Add canonical URL only if the correct production URL is known.
- Set Open Graph and social metadata using verified assets and copy.
- Use the supplied logo for appropriate brand metadata only if technically suitable.
- Add favicon/app icons only from provided brand assets or carefully derived versions; do not distort the logo.
- Use descriptive link text.
- Add structured data only when accurate and supported by real business information. Do not invent address, ratings, opening hours, or organization facts.
- Avoid keyword stuffing and unsupported SEO claims.

---

## 14. Content and Copy Rules

Tone: clear, capable, approachable, concise, and professional.

- Use plain language.
- Explain services concretely.
- Avoid empty agency jargon and inflated claims.
- Avoid guaranteed results.
- Do not invent testimonials, client names, case studies, awards, metrics, certifications, or years of experience.
- Do not say “our team” in a way that falsely implies a specific team size or structure.
- Do not mention the founder or current staffing arrangement.
- Do not include a project showcase until the owner requests it.
- Avoid repetitive CTAs and repeated paragraphs.
- Use consistent spelling and punctuation.
- Ensure all copy is proofread.

---

## 15. Trust and Conversion

Build trust through:
- Clear service descriptions.
- A transparent, understandable process.
- A working contact form.
- Real, verified contact links.
- Clear legal/privacy information based on actual practices.
- Professional, consistent design.
- Good accessibility, performance, and responsive behavior.

Do not manufacture trust signals. No fake testimonials, review stars, client logos, counters, “trusted by” strips, or fabricated results.

---

## 16. Testing and Verification Checklist

Do not mark an item complete unless it has actually been checked.

### Build and runtime
- [ ] Install/use dependencies according to the existing lockfile and package manager.
- [ ] Run the project’s available lint/typecheck/build scripts.
- [ ] Resolve all errors introduced by the redesign.
- [ ] Check browser console for errors and warnings.
- [ ] Check for hydration errors if applicable.
- [ ] Confirm all routes load directly and after refresh.

### Visual and responsive
- [ ] Inspect at phone, tablet, laptop, and desktop widths.
- [ ] Confirm no horizontal overflow.
- [ ] Confirm no overlapping/clipped content.
- [ ] Confirm all sections have consistent spacing and typography.
- [ ] Confirm the logo is not distorted and its transparent background is preserved.
- [ ] Confirm colors match the chosen tokens and logo accent.

### Interactions
- [ ] Desktop navigation links work.
- [ ] Mobile navigation opens, closes, and updates accessibility state.
- [ ] Anchor scrolling works with Lenis.
- [ ] Sticky header does not obscure section headings.
- [ ] Form validation works.
- [ ] Form loading, success, and error states work.
- [ ] Formspree endpoint is the real existing endpoint and is not fabricated.
- [ ] Buttons and links have valid destinations.
- [ ] Hover effects have keyboard/touch equivalents.
- [ ] Reduced-motion preference is respected.

### Loading skeleton
- [ ] Skeleton dimensions match actual content.
- [ ] No unnecessary artificial delay.
- [ ] No visible layout jump.
- [ ] Skeleton is hidden from assistive technology.
- [ ] Reduced-motion disables shimmer.
- [ ] It does not cover content that is already available.

### Legal and privacy
- [ ] Policy pages accurately reflect the real implementation.
- [ ] Unknown facts remain explicit TODOs.
- [ ] Cookie behavior has been inspected before deciding whether a Cookie Policy is needed.
- [ ] No placeholder legal text is represented as final legal advice.

### Final report
At completion, report:
1. What was changed.
2. Which files were created/modified.
3. Which existing functionality was preserved.
4. Which tests were actually run and their results.
5. Any unresolved issues or owner decisions still needed.
6. Any external requests still present (especially fonts, analytics, scripts).

Do not claim “fully tested” unless all relevant checks were actually performed.

---

## 17. Final Acceptance Criteria

The redesign is complete only when:

- The website clearly communicates SkaleNest’s two confirmed service categories.
- There is no project/portfolio/case-study section.
- There is no founder section.
- There are no fabricated trust signals or unsupported claims.
- The contact form uses the existing verified Formspree setup and has robust states.
- The footer is compact and contains only real, useful links.
- Legal skeleton pages exist where appropriate, with unverified content clearly marked for completion.
- A useful, non-disruptive skeleton loading treatment is implemented only where needed.
- Lenis is integrated cleanly with no competing scroll library.
- Fonts are local; no remote font fetching occurs.
- The design is responsive, accessible, performant, and consistent with the supplied logo.
- No unnecessary sections, features, dependencies, decorative clutter, or animations remain.
