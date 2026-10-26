import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import logoImg from "@/assets/rcg-logo.png";
import { services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="RCG Media logo" className="h-14 w-14 rounded-full object-cover" />
              <div className="leading-none">
                <span className="gold-text font-display text-xl font-bold">RCG MEDIA</span>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  Capture · Create · Connect
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A full-service creative studio for digital marketing, branding, technology and media
              production — built to grow your business in the global market.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                {
                  icon: Youtube,
                  label: "YouTube (@galgalmusic16)",
                  href: "https://youtube.com/@galgalmusic16",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Channel",
                  href: "https://wa.me/919989886369?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services.",
                },
                { icon: Mail, label: "Email", href: "mailto:info@rcgmedia.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:border-accent hover:text-accent hover:scale-105"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-foreground">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="transition-colors hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-foreground">Get in Touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-accent">📍</span>
                <span>Boduppal, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>hello@rcgmedia.in</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
                <span>WhatsApp Channel — join us</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-accent" />
                <span>@rcgmedia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RCG Media. All rights reserved.</p>
          <p className="tracking-wide">Designed with passion — Capture · Create · Connect</p>
        </div>
      </div>
    </footer>
  );
}
