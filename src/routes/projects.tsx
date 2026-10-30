import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Flame,
  Globe,
  Megaphone,
  Mic,
  Music,
  Palette,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import bgProjects from "@/assets/bg-projects.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Our Projects & Portfolio — RCG Media | Web, Ads Agency, Branding & Video" },
      {
        name: "description",
        content:
          "Explore selected case studies from RCG Media — Web & Mobile Development, High-ROAS Meta & Google Ads Campaigns, Brand Identity, Commercial Ad Films, Podcast Studio, and Music Releases.",
      },
      { property: "og:title", content: "Our Projects & Portfolio — RCG Media" },
      {
        property: "og:description",
        content:
          "Real results across Web Apps, Ads Agency Campaigns, Branding, Ad Films, and Music Productions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const filterCategories = [
  "All Projects",
  "Web & Mobile Development",
  "Ads Agency & Performance",
  "Branding & Identity",
  "Commercial Ad Films",
  "Podcast Studio",
  "Music Productions",
  "Women Empowerment",
] as const;

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero
        image={bgProjects}
        label="Our Portfolio"
        title="Projects That Deliver"
        highlight="Measurable Growth"
        subtitle="Explore our comprehensive portfolio across Web & Mobile Development, High-ROAS Meta & Google Ads Agency Campaigns, Cinema-Grade Ad Films, Boduppal Studio Podcasts, and Music Productions."
      />

      {/* Highlights Summary Bar */}
      <section className="border-b border-border bg-card/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <span className="gold-text font-display text-2xl font-bold">Client Case Studies</span>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Proven impact across businesses, founders, creators, and brands.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-accent">
              <TrendingUp className="inline h-3.5 w-3.5 mr-1" /> High-ROAS Meta & Google Ads
            </span>
            <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-foreground">
              <Globe className="inline h-3.5 w-3.5 mr-1 text-primary" /> Web & Mobile Apps
            </span>
            <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-foreground">
              <Video className="inline h-3.5 w-3.5 mr-1 text-accent" /> Cinema 4K Direction
            </span>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground hover:bg-card/90"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-border/80 bg-gradient-to-br from-card via-card/95 to-background transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10">
                {/* Visual Header with Overlay & Result Pill */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1000}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

                  {/* Category Pill on top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-primary/40 bg-background/85 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Result Metric on top-right */}
                  {project.metric && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/90 px-3.5 py-1 text-[10px] font-bold text-accent-foreground shadow-md backdrop-blur-md">
                        <Flame className="h-3 w-3 fill-current" />
                        {project.metric}
                      </span>
                    </div>
                  )}

                  {/* Client Tag at Bottom Left */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground/90 backdrop-blur-sm bg-black/40 px-3 py-1 rounded-full border border-white/10">
                      Client: {project.client}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold text-accent-foreground hover:bg-accent transition-colors"
                      >
                        Live Link <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                      Scope & Deliverables:
                    </p>
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      {project.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-foreground/85">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span className="font-medium truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
                    >
                      Enquire for Similar Project
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                      >
                        View Project <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-muted-foreground font-medium">
                        RCG Production
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <Reveal>
          <div className="mt-20 overflow-hidden rounded-4xl border border-accent/30 bg-gradient-to-r from-card via-card/95 to-background p-8 sm:p-14 text-center shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Start Your Journey
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-foreground">
              Have a Project in Mind? <span className="gold-text italic">Let's Build It.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              From web applications and Meta/Google ad campaigns to full branding, commercial ad
              films, and podcast recordings at our Boduppal studio — we are ready to bring your vision
              to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-xs font-bold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/918074551596?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-4 text-xs font-semibold text-foreground transition-all hover:border-[#25D366] hover:text-[#25D366]"
              >
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
