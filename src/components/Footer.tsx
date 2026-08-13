import Logo from "./Logo";

const FOOTER_LINKS = {
  Services: [
    { label: "Local Search", href: "#services" },
    { label: "Short-Form Content", href: "#services" },
    { label: "WhatsApp Automation", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "Instagram", href: "https://instagram.com/skalenest" },
    { label: "LinkedIn", href: "https://linkedin.com/company/skalenest" },
    { label: "WhatsApp", href: "https://wa.me/00000000000" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-bg py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-body text-sm text-text-secondary">
              Where Businesses Grow.
            </p>
            <p className="mt-3 max-w-[240px] font-body text-sm leading-relaxed text-text-secondary">
              Digital Growth Infrastructure for Modern Local Businesses.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs uppercase tracking-widest2 text-text-secondary">
                {heading}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} SkaleNest. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="font-body text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
