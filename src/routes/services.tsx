import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import bgServices from "@/assets/bg-services.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Our Services — RCG Media | A–Z Business Growth & Digital Marketing" },
      {
        name: "description",
        content:
          "Explore RCG Media's 9 core services: Business Branding, Website Design, A-Z Video Production, Digital Marketing, Influencer Collaborations, Celebrity Promotions, Podcast Studio in Boduppal Hyderabad, Advertising and Music Production.",
      },
      { property: "og:title", content: "Our Services — RCG Media" },
      {
        property: "og:description",
        content:
          "Nine integrated services under one roof — branding, websites, videos, digital marketing, podcasts, influencer and celebrity collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Services() {
  return (
    <>
      <PageHero
        image={bgServices}
        label="RCG Media Services"
        title="Your A–Z Business Growth &"
        highlight="Digital Marketing Partner"
        subtitle="Every business deserves the right identity, the right content, the right marketing strategy, and the right visibility — brought together on one integrated platform."
      />

      {/* Overview Banner */}
      <section className="border-b border-border bg-card/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <span className="gold-text font-display text-2xl font-bold">9 Core Practices</span>
            <p className="text-sm text-muted-foreground">
              Comprehensive brand-building and promotional solutions under one roof.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-xs font-semibold text-accent">
            <MapPin className="h-4 w-4" />
            <span>Studio in Boduppal, Hyderabad + Pan-India & Global Reach</span>
          </div>
        </div>
      </section>

      {/* Alternating Zigzag Services Showcase (Right-Left & Left-Right) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Comprehensive Solutions
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              From Initial Idea to <span className="gold-text italic">Market Dominance</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Whether you are a startup founder, entrepreneur, small business owner, established
              company, professional, artist, or personal brand, RCG Media can support your journey.
            </p>
          </div>
        </Reveal>

        {/* 9 Services in Alternating Zigzag Order */}
        <div className="mt-16 space-y-12 lg:space-y-16">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={service.id} delay={60}>
                <div
                  id={service.id}
                  className="group relative scroll-mt-28 overflow-hidden rounded-4xl border border-border/80 bg-gradient-to-br from-card via-card/95 to-background p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 transition-all duration-500 hover:border-accent/60 hover:shadow-accent/5"
                >
                  {/* Subtle background ambient glow for each card */}
                  <div
                    className={`pointer-events-none absolute -inset-20 rounded-full bg-accent/5 blur-3xl transition-opacity duration-700 group-hover:bg-accent/10 ${
                      isEven ? "-left-20" : "-right-20"
                    }`}
                  />

                  <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                    {/* Visual Column: Left on even (0, 2, 4...), Right on odd (1, 3, 5...) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } order-1`}
                    >
                      <div className="group/img relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-border/80 bg-black/50 shadow-2xl shadow-black/60">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          width={1000}
                          height={625}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                        {/* Top-left Floating Icon Badge */}
                        <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-xl shadow-black/50 backdrop-blur-md">
                          <service.icon className="h-6 w-6" />
                        </div>

                        {/* Bottom Tag Bar */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="rounded-full border border-primary/40 bg-background/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-md">
                            Practice 0{i + 1}
                          </span>
                          <span className="rounded-full border border-border bg-background/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
                            RCG Studio Quality
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column: Right on even (0, 2, 4...), Left on odd (1, 3, 5...) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } order-2`}
                    >
                      {/* Eyebrow & Index */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                          <Sparkles className="h-3 w-3" />
                          {service.category}
                        </span>
                        <span className="text-sm font-bold text-muted-foreground/60">
                          0{i + 1} / 09
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-2 text-sm font-semibold italic text-primary/95">
                        "{service.tagline}"
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Included Capabilities List */}
                      <div className="mt-6 border-t border-border/60 pt-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Included Capabilities & Deliverables:
                        </p>
                        <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 rounded-lg border border-border/40 bg-secondary/30 px-3 py-2 text-xs text-foreground/90 transition-colors hover:border-accent/40"
                            >
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                                <Check className="h-2.5 w-2.5" />
                              </span>
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                          to="/contact"
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
                        >
                          Enquire for {service.title.split("&")[0]?.trim()}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                        <Link
                          to="/projects"
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3.5 text-xs font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
                        >
                          View Related Portfolio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-accent/30 bg-gradient-to-br from-accent/15 via-card to-primary/10 p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Ready to launch or scale? <span className="gold-text italic">Let's talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Book a free consultation — we will assess your business goals, target audience, and
              recommend the ideal marketing and media roadmap.
            </p>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
