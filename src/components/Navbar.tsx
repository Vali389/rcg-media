import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import logoImg from "@/assets/rcg-logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="RCG Media logo"
            className={cn("rounded-full object-cover transition-all duration-500", scrolled ? "h-11 w-11" : "h-14 w-14")}
          />
          <span className="flex flex-col leading-none">
            <span className="gold-text font-display text-xl font-bold tracking-wide">RCG MEDIA</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Capture · Create · Connect
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-foreground/80 hover:text-primary",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-accent" />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/919989886369?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 transition-all hover:scale-110"
          >
            <MessageCircle className="h-5 w-5 fill-white stroke-none" />
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/919989886369?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4 fill-white stroke-none" />
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
