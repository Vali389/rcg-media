import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  image,
  label,
  title,
  highlight,
  subtitle,
}: {
  image: string;
  label: string;
  title: string;
  highlight?: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      {/* Background Image positioned to show right side clearly */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="animate-slide-zoom absolute inset-0 h-full w-full object-cover object-right brightness-95"
      />
      {/* Dark gradient on the left for text readability, fading to transparent on the right */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />

      {/* Left-aligned content container matching homepage pattern */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {label}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              {title} {highlight && <span className="gold-text italic">{highlight}</span>}
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              >
                Our 9 Services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
