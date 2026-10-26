import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import bgProjects from "@/assets/bg-projects.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — RCG Media" },
      {
        name: "description",
        content:
          "Selected work by RCG Media — branding systems, song production, celebrity events, websites, influencer campaigns and ad films.",
      },
      { property: "og:title", content: "Projects — RCG Media" },
      {
        property: "og:description",
        content: "Branding, music, events, websites and campaigns — selected RCG Media work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Projects() {
  return (
    <>
      <PageHero
        image={bgProjects}
        label="Our Work"
        title="Projects That Speak"
        highlight="Louder Than Words"
        subtitle="A selection of branding systems, productions and campaigns crafted end to end by the RCG Media studio."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/50">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                    {project.category}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Like what you see? Your project could be next.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
