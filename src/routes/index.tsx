import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Heart,
  HeartHandshake,
  Layers,
  MapPin,
  Megaphone,
  Mic,
  Palette,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import bgHome1 from "@/assets/bg-home-1.png";
import bgHome2 from "@/assets/bg-home-2.png";
import bgHome3 from "@/assets/bg-home-3.png";
import anushaFounder from "@/assets/anusha-founder.jpg";
import { projects, services, stats } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { OurSongsShowcase } from "@/components/OurSongsShowcase";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "RCG Media — A–Z Business Growth & Digital Marketing Partner | Led by Anusha Sathapathy",
      },
      {
        name: "description",
        content:
          "RCG Media brings business strategy and creative media together — branding, websites, video production, digital marketing, podcasts, and influencer & celebrity collaborations.",
      },
      {
        property: "og:title",
        content: "RCG Media — Capture. Create. Connect. | One Partner. Multiple Solutions.",
      },
      {
        property: "og:description",
        content:
          "Your A–Z business growth and digital marketing partner in Boduppal, Hyderabad and worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const slides = [
  {
    image: bgHome1,
    eyebrow: "Business Growth & Brand Strategy",
    title: "We Build Brands That",
    highlight: "Demand Attention",
    subtitle:
      "Bringing business strategy and creative media together — branding, websites, and campaigns that establish identity and build lasting customer trust.",
  },
  {
    image: bgHome2,
    eyebrow: "A–Z Video & Media Production",
    title: "Stories Shot, Cut &",
    highlight: "Shipped Cinematic",
    subtitle:
      "Professional reels, corporate films, commercial ad shoots, and song production with high-end cinema equipment — end to end.",
  },
  {
    image: bgHome3,
    eyebrow: "Podcast & Creator Studio • Boduppal, Hyderabad",
    title: "Broadcast Quality",
    highlight: "Studio & Content",
    subtitle:
      "State-of-the-art podcast recording, founder interviews, and personal branding in our dedicated Boduppal, Hyderabad studio facility.",
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setActive((a) => (a + dir + slides.length) % slides.length);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide absolute inset-0 ${i === active ? "active" : ""}`}
          aria-hidden={i !== active}
        >
          <img
            src={slide.image}
            alt=""
            className="animate-slide-zoom h-full w-full object-cover object-right"
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
          {/* Subtle gradient: dark on left for text readability, clear & transparent on right so subject is crisp and visible */}
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30" />
        </div>
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {slides.map(
            (slide, i) =>
              i === active && (
                <div key={i}>
                  <span className="animate-float-soft inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                    {slide.title}{" "}
                    <span className="gold-text italic">{slide.highlight}</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    {slide.subtitle}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:brightness-110"
                    >
                      Get a Free Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
                    >
                      Explore Our 9 Services
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ),
          )}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="ml-2 flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-linear-to-r from-primary to-accent"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeWords = [
  "Capture",
  "Create",
  "Connect",
  "Brand Identity",
  "Website Design",
  "A–Z Video Production",
  "Digital Marketing",
  "Influencer Collaborations",
  "Celebrity Promotions",
  "Podcast Studio Boduppal",
  "Advertising Solutions",
  "Song Production",
  "WayTo Women Walk",
];

function MarqueeStrip() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden border-y border-border bg-card/60 py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-medium tracking-wide text-foreground/80">
              {word}
            </span>
            <span className="h-2 w-2 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Zigzag({
  image,
  eyebrow,
  title,
  highlight,
  paragraphs,
  bullets,
  badgeText,
  badgeSubtext,
  reverse = false,
  cta,
}: {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  bullets: string[];
  badgeText?: string;
  badgeSubtext?: string;
  reverse?: boolean;
  cta?: { to: string; label: string };
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-primary/25 via-transparent to-accent/25 blur-xl" />
            <img
              src={image}
              alt={title}
              loading="lazy"
              width={1200}
              height={900}
              className="relative aspect-4/3 w-full rounded-3xl border border-border object-cover object-top shadow-2xl shadow-black/50"
            />
            {badgeText && (
              <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur">
                <p className="gold-text font-display text-2xl font-bold">{badgeText}</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {badgeSubtext || "of excellence"}
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {title} <span className="gold-text italic">{highlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            {paragraphs.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          {cta && (
            <Reveal delay={280}>
              <Link
                to={cta.to}
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center">
              <p className="gold-text font-display text-4xl font-bold sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Auto-Scrolling Testimonials Component (3 in a Row)
const testimonials = [
  {
    quote:
      "RCG Media took our business idea from scratch — built our brand identity, produced our commercial reels, and structured our online marketing. Truly an A–Z partner.",
    name: "Rajesh Varma",
    role: "Retail & E-commerce Founder",
    initials: "RV",
    rating: 5,
  },
  {
    quote:
      "Recording our executive interview podcast at the RCG Media Boduppal studio was seamless. Cinema-grade multi-cam setup and broadcast audio quality.",
    name: "Dr. Priyamvada",
    role: "Healthcare Professional & Speaker",
    initials: "DP",
    rating: 5,
  },
  {
    quote:
      "Anusha's business analysis background makes all the difference. She doesn't just produce beautiful video content; she designs campaigns that convert leads into revenue.",
    name: "Sandeep K.",
    role: "Tech Startup Founder",
    initials: "SK",
    rating: 5,
  },
  {
    quote:
      "The celebrity endorsement and social launch film they handled generated over 500,000 organic views in week one. Flawless planning and cinema-grade execution.",
    name: "Meenakshi Sundaram",
    role: "Lifestyle & Apparel Brand Director",
    initials: "MS",
    rating: 5,
  },
  {
    quote:
      "Anusha's personal mentorship and RCG Media's digital strategy helped us launch our fashion label and reach thousands of customers online. Authentic women empowerment in action.",
    name: "Kavitha Reddy",
    role: "Women Entrepreneur & Fashion Founder",
    initials: "KR",
    rating: 5,
  },
  {
    quote:
      "Collaborating with GalGal Music and RCG Media on our song release was incredible. The visual storytelling, cinema shoot, and digital distribution gave our track massive reach.",
    name: "Sumanth Rao",
    role: "Independent Music Artist & Creator",
    initials: "SR",
    rating: 5,
  },
];

function AutoScrollTestimonials() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalPages = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const go = (dir: number) => {
    setPage((prev) => (prev + dir + totalPages) % totalPages);
  };

  const currentGroup = testimonials.slice(page * 3, page * 3 + 3);

  return (
    <section className="border-y border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Client Feedback
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              What Clients Say <span className="gold-text italic">About Working With Us</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Real results from entrepreneurs, founders, and artists who partner with RCG Media.
            </p>
          </div>
        </Reveal>

        {/* 3-in-a-Row Testimonials Showcase */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-500">
            {currentGroup.map((t, idx) => (
              <div
                key={t.name + idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/95 to-background p-7 sm:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div>
                  {/* Top Row: 5 Stars + Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent" />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 text-accent/30 group-hover:text-accent/60 transition-colors" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="mt-6 font-display text-base leading-relaxed text-foreground/90 italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Row: Avatar, Name & Role */}
                <div className="mt-8 flex items-center gap-3.5 border-t border-border/70 pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-accent/20 to-primary/20 text-xs font-bold text-accent shadow-sm">
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="truncate text-xs font-medium text-accent">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:scale-105"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:scale-105"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Attractive "Why RCG Media" Cards (Numbers Removed as requested)
const whyRcgFeatures = [
  {
    icon: Layers,
    title: "A–Z Under One Roof",
    description:
      "Branding, websites, cinema ad films, reels, influencer marketing, celebrity promos, and dedicated studio podcast recording — no more juggling fragmented vendors.",
    highlights: ["Complete brand ecosystem", "Consistent visual voice", "Unified team coordination"],
  },
  {
    icon: TrendingUp,
    title: "Business Strategy First",
    description:
      "Led by a business development professional & analyst, ensuring creative media translates into real customer trust, market positioning, and revenue growth.",
    highlights: ["Data-backed campaigns", "Market opportunity mapping", "Measurable ROI tracking"],
  },
  {
    icon: Mic,
    title: "Dedicated Studio in Hyderabad",
    description:
      "State-of-the-art podcast and video shoot studio located in Boduppal, Hyderabad with multi-cam 4K, Shure SM7B broadcast mics, and acoustic wooden soundproofing.",
    highlights: ["Multi-cam 4K recording", "Shure SM7B broadcast audio", "Fast post-production"],
  },
  {
    icon: ShieldCheck,
    title: "Client Commitment & Trust",
    description:
      "Transparent execution, continuous performance reporting, and dedicated strategic partnership designed to build lasting brand equity.",
    highlights: ["Transparent delivery", "Continuous reporting", "Dedicated strategic partner"],
  },
];

function Home() {
  return (
    <>
      <HeroCarousel />
      <MarqueeStrip />

      {/* Our Commitment Section (Requested by User) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              <HeartHandshake className="h-3.5 w-3.5 text-accent" />
              Our Commitment
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              One Partner. Multiple Solutions.{" "}
              <span className="gold-text italic">Endless Possibilities.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              RCG Media is built around a simple idea: Every business deserves the right identity,
              the right content, the right marketing strategy, and the right visibility. Our commitment
              is to simplify your growth journey by bringing business strategy and creative media
              together on one integrated platform.
            </p>
          </div>
        </Reveal>

        {/* 4 Pillars of Commitment Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Palette,
              title: "Strategic Brand Identity",
              description:
                "From initial idea to professional identity — logos, company profiles, and positioning that build lasting customer trust.",
            },
            {
              icon: Video,
              title: "Cinema-Grade Content",
              description:
                "Transforming business ideas into engaging visual stories — viral reels, commercial ad films, and studio podcast productions.",
            },
            {
              icon: TrendingUp,
              title: "Multi-Channel Growth",
              description:
                "Data-backed digital marketing, targeted social media ads, curated influencer partnerships, and celebrity endorsements.",
            },
            {
              icon: ShieldCheck,
              title: "Client Commitment & Trust",
              description:
                "Driving entrepreneurship, fostering customer credibility, and delivering transparent, measurable results for every partner.",
            },
          ].map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 80}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    RCG Guarantee
                  </span>
                  <Check className="h-4 w-4 text-accent" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Full Commitment Statement Banner */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-3xl border border-accent/30 bg-gradient-to-r from-card via-card/90 to-background p-8 sm:p-12 text-center shadow-xl">
            <p className="font-display text-xl sm:text-2xl font-bold italic text-foreground max-w-3xl mx-auto leading-relaxed">
              "From Business Ideas to Brand Identity. From Content Creation to Digital Marketing.
              From Promotions to Growth Opportunities. At RCG Media, we help you bring your brand
              vision to life."
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:scale-105"
              >
                Explore All 9 Services
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Read Founder's Story in About Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <StatsStrip />

      {/* Services Grid (Certigo Laboratories Reference Card Style) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Our 9 Core Practices
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Services Built for <span className="gold-text italic">Every Stage of Growth</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Explore our comprehensive service spectrum — every card is designed to deliver
              end-to-end impact from initial concept to digital dominance.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <Link
                to="/services"
                hash={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/15"
              >
                {/* Top Image Banner with Floating Icon and Overlaid Title */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-black/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay to make text pop */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                  {/* Top-left Icon Badge */}
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-black/40 backdrop-blur-md">
                    <service.icon className="h-5 w-5" />
                  </div>

                  {/* Title overlayed at bottom of image */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-display text-xl font-bold text-foreground drop-shadow-md group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body (Certigo Reference Structure) */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Category Eyebrow */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                    {service.category}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tag Pill Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.items.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border/70 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80 transition-colors group-hover:border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Navigation Link */}
                  <div className="mt-auto pt-6 border-t border-border/60">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Explore Service
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ads Agency & Performance Marketing Section (Core Revenue Engine) */}
      <section className="relative border-y border-border bg-gradient-to-b from-card via-card/90 to-background py-20 lg:py-28 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-red-300">
                <Megaphone className="h-3.5 w-3.5 text-accent" />
                Ads Agency & Growth Engine
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                High-ROAS Advertising on{" "}
                <span className="gold-text italic">Meta & Google Ads</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As a performance marketing and advertising agency, our primary focus is helping businesses
                scale revenue. We engineer high-converting campaigns across Meta (Facebook & Instagram),
                Google Search, and YouTube that turn ad spend into predictable customer acquisition.
              </p>
            </div>
          </Reveal>

          {/* 3 Core Ads Pillars */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Reveal delay={80}>
              <div className="group h-full rounded-3xl border border-border/80 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600/20 to-purple-600/20 text-blue-400">
                  <Megaphone className="h-6 w-6" />
                </div>
                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-wider text-accent">
                  Instagram & Facebook
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  Meta Performance Ads
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Laser-targeted lead funnels, viral promotional reels, carousel catalogues, and
                  automated WhatsApp click-to-chat ads designed to convert active social scrollers into
                  paying customers.
                </p>
                <div className="mt-6 border-t border-border/60 pt-4 space-y-2 text-xs text-foreground/85">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> Custom Lookalike Audiences
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> High-Converting Video Hooks
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> WhatsApp Direct Lead Gen
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="group h-full rounded-3xl border border-accent/50 bg-card p-8 shadow-xl shadow-accent/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-green-600/20 to-yellow-600/20 text-green-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-wider text-accent">
                  Search & YouTube
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  Google & YouTube Ads
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Capture high-intent customer search queries the exact moment they need your service.
                  Combined with YouTube in-stream commercial ads and local Google Maps discovery campaigns.
                </p>
                <div className="mt-6 border-t border-border/60 pt-4 space-y-2 text-xs text-foreground/85">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> High-Intent Keyword Targeting
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> YouTube Bumper & Video Ads
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> Local Maps Footfall Campaigns
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="group h-full rounded-3xl border border-border/80 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-amber-600/20 to-accent/20 text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-wider text-accent">
                  Tracking & Optimization
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  ROAS & Conversion Funnels
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Meta Conversions API, Google Tag Manager, server-side tracking, and continuous A/B
                  testing of ad creative variations to lower cost per lead and maximize your return on ad spend.
                </p>
                <div className="mt-6 border-t border-border/60 pt-4 space-y-2 text-xs text-foreground/85">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> Server-Side Conversion API
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> A/B Ad Creative Testing
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-accent" /> Transparent Weekly ROAS Reports
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Action Callout Banner */}
          <Reveal delay={280}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-accent/40 bg-accent/10 p-6 sm:p-8">
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-foreground">
                  Ready to turn ad spend into scalable revenue?
                </p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Book a free media audit — our strategists will analyze your ad account and recommend a winning growth roadmap.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-accent px-6 py-3 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/25 hover:brightness-110 transition-all"
                >
                  Start Ads Campaign
                </Link>
                <a
                  href="https://wa.me/918074551596?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20Meta%20and%20Google%20Ads."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold text-foreground hover:border-[#25D366] hover:text-[#25D366] transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Songs & Music Productions Section (GalGal Music @galgalmusic16) */}
      <OurSongsShowcase />

      {/* Boduppal, Hyderabad Studio Highlight Section */}
      <section className="border-y border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                  <Mic className="h-3.5 w-3.5" />
                  Studio In Boduppal, Hyderabad
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Professional Podcast & <span className="gold-text italic">Studio Services</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  RCG Media provides a professional content creation environment in Boduppal,
                  Hyderabad, for entrepreneurs, businesses, professionals, and creators.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Whether you want to launch a video podcast, share your entrepreneurial journey,
                  record high-definition reels, or conduct expert interviews — our studio provides
                  multi-camera recording, Shure SM7B broadcast microphones, cinematic lighting, and
                  end-to-end post-production.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="font-display text-lg font-bold text-accent">Podcast Recording</p>
                    <p className="text-xs text-muted-foreground">Multi-mic & acoustic soundproofing</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="font-display text-lg font-bold text-primary">Founder Interviews</p>
                    <p className="text-xs text-muted-foreground">Cinematic 4K cameras & lighting</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="font-display text-lg font-bold text-foreground">Reels & Shorts</p>
                    <p className="text-xs text-muted-foreground">High-engagement vertical content</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="font-display text-lg font-bold text-accent">Post-Production</p>
                    <p className="text-xs text-muted-foreground">Color grading, audio & shorts</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Book Studio in Boduppal
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-4xl bg-linear-to-tr from-accent/25 via-primary/20 to-transparent blur-2xl" />
                  <img
                    src={bgHome3}
                    alt="RCG Media Podcast Studio in Boduppal Hyderabad"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="relative rounded-3xl border border-border object-cover shadow-2xl shadow-black/50"
                  />
                  <div className="absolute -bottom-5 right-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur">
                    <p className="gold-text font-display text-lg font-bold">Studio Facility</p>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Boduppal, Hyderabad
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Second Zigzag: Creative Media & Ad Film Production */}
      <Zigzag
        image={bgHome2}
        eyebrow="Creative Production & Ad Films"
        title="Lights, Camera,"
        highlight="Real Business Impact"
        badgeText="Cinema 4K"
        badgeSubtext="Studio Standard"
        reverse
        paragraphs={[
          "Our production team shoots, edits, and delivers content that stops the scroll — reels, ad films, music videos, and full song production with professional camera rigs, lighting, and sound.",
          "Whether you are launching a product, planning celebrity brand endorsements, or running a 30-day social media campaign, we manage scripting, shooting, editing, and publishing from start to finish.",
        ]}
        bullets={[
          "Professional reels & short-form video",
          "Corporate videos & brand films",
          "Creative advertising videos & ad films",
          "Song production & music videos",
          "Celebrity promotions & endorsements",
          "Scriptwriting & concept development",
        ]}
        cta={{ to: "/services", label: "See all video & creative services" }}
      />



      {/* Selected Work / Projects */}
      <section className="border-y border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                  Selected Work
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Projects We Are <span className="gold-text italic">Proud Of</span>
                </h2>
              </div>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <Link
                  to="/projects"
                  className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why RCG Media — Highly Attractive, Numbers Removed (Requested by User) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              The RCG Advantage
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Why Partner With <span className="gold-text italic">RCG Media</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Strategic acumen, cinema-grade production, and dedicated studio facilities engineered to build lasting brand equity.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyRcgFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border/80 bg-gradient-to-b from-card via-card/90 to-background p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/15">
                  {/* Glowing Icon Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 via-accent/20 to-transparent text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-accent group-hover:shadow-lg group-hover:shadow-accent/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>

                  {/* Gradient underline accent */}
                  <div className="mt-3 h-0.5 w-10 rounded-full bg-linear-to-r from-primary to-accent transition-all duration-500 group-hover:w-16" />

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Mini Feature Highlights */}
                  <div className="mt-auto pt-6 border-t border-border/60">
                    <ul className="space-y-1.5 text-[11px] text-foreground/80">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-accent shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Auto-Scrolling Testimonials (Requested by User) */}
      <AutoScrollTestimonials />

      {/* Final Call to Action */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-accent/30 bg-linear-to-br from-accent/15 via-card to-primary/10 p-10 text-center sm:p-16">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Ready to grow? <span className="gold-text italic">Let's create together.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                RCG Media — One Partner. Multiple Solutions. Endless Possibilities. Tell us about
                your brand and goals, and let's craft a winning roadmap.
              </p>
              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
