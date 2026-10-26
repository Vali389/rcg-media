import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  MapPin,
  Mic,
  Music,
  Sparkles,
  Users,
} from "lucide-react";
import bgAbout from "@/assets/bg-about.png";
import bgAboutImg1 from "@/assets/bg-about-img-1.png";
import hero3 from "@/assets/hero-3.jpg";
import anushaFounder from "@/assets/anusha-founder.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { founderInfo, stats } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Anusha Sathapathy & RCG Media — Founder, Vision & Journey" },
      {
        name: "description",
        content:
          "Meet Anusha Sathapathy — Entrepreneur, Business Development Professional, Media Producer, Brand Growth Strategist and Women Empowerment Advocate behind RCG Media.",
      },
      { property: "og:title", content: "About Anusha Sathapathy — Founder of RCG Media" },
      {
        property: "og:description",
        content:
          "Building Brands. Creating Opportunities. Empowering Women Through Digital Media. Discover the journey behind RCG Media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const credentials = [
  "Entrepreneur & Founder of RCG Media",
  "Business Development Professional & BDM",
  "Business Analysis & Market Growth Strategist",
  "Media & Creative Content Producer",
  "Digital Marketing & Brand Positioning Specialist",
  "Women Empowerment Advocate & Digital Mahila Development Officer",
  "Song & Music Video Production Planner",
  "Classical Dancer & Creative Storyteller",
];

const pillars = [
  {
    icon: Briefcase,
    title: "Business Analysis & BDM",
    description:
      "Deep understanding of business operations, customer engagement, brand positioning, and measurable market opportunities.",
  },
  {
    icon: Sparkles,
    title: "Creative Media Production",
    description:
      "Transforming business ideas into cinematic reels, ads, corporate films, and songs that build trust and stop the scroll.",
  },
  {
    icon: Users,
    title: "Integrated One-Stop Solutions",
    description:
      "From branding and web design to influencer marketing, celebrity promos, and dedicated podcast recording under one roof.",
  },
  {
    icon: Heart,
    title: "Social Impact & Empowerment",
    description:
      "Empowering women entrepreneurs and aspiring professionals through the WayTo Women Walk initiative and digital community building.",
  },
];

function About() {
  return (
    <>
      <PageHero
        image={bgAbout}
        label="About Me & RCG Media"
        title="Building Brands. Creating Opportunities."
        highlight="Empowering People."
        subtitle="Meet Anusha Sathapathy — Entrepreneur, Business Development Professional, Media Producer, and Women Empowerment Advocate bridging business strategy and creative media."
      />

      {/* Main Founder Profile Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-tr from-accent/30 via-primary/20 to-accent/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-card shadow-2xl shadow-black/60">
                  <img
                    src={anushaFounder}
                    alt="Anusha Sathapathy — Founder of RCG Media"
                    loading="eager"
                    width={1000}
                    height={1000}
                    className="aspect-4/5 w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 inset-x-6 rounded-2xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                    <p className="font-display text-lg font-bold text-foreground">
                      Anusha Sathapathy
                    </p>
                    <p className="text-xs font-semibold text-accent">
                      Founder & Creative Director, RCG Media
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>Boduppal, Hyderabad, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                Meet The Founder
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Anusha Sathapathy
              </h2>
              <p className="mt-2 text-sm font-semibold tracking-wide text-primary">
                Entrepreneur | Business Development Professional | Media Producer | Digital Marketing & Brand Growth Strategist | Women Empowerment Advocate
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I am Anusha Sathapathy, a business development professional, media entrepreneur,
                  content producer, and women empowerment advocate with a passion for business
                  growth, creative media, digital marketing, and community development.
                </p>
                <p>
                  My professional journey combines business analysis, business development
                  management (BDM), creative production, digital content, marketing, and
                  entrepreneurship. Through my experience working in Business Analysis and Business
                  Development Management, I have developed an understanding of business
                  operations, market opportunities, customer engagement, brand positioning, and
                  growth strategies.
                </p>
                <p>
                  My entrepreneurial vision is to bring business strategy and creative media
                  together to help businesses establish their identity, reach the right audience,
                  build trust, and grow their presence in an increasingly digital world.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                  Core Expertise & Roles
                </h3>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {credentials.map((cred) => (
                    <div key={cred} className="flex items-start gap-2.5 text-xs text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Connect with Anusha
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Explore Our 9 Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RCG Media — Your A-Z Partner Section */}
      <section className="border-y border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                The Company
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                RCG Media — <span className="gold-text italic">Your A–Z Growth Partner</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                RCG Media is built around a simple idea: Every business deserves the right identity,
                the right content, the right marketing strategy, and the right visibility.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 rounded-3xl border border-border bg-secondary/30 p-8 text-center sm:p-10">
              <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                "Whether you are a startup founder, entrepreneur, small business owner, established
                company, professional, artist, or personal brand, RCG Media can support your journey
                from an initial business idea to a stronger digital presence."
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-accent font-bold">
                — Anusha Sathapathy, Founder
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WayTo Women Walk — Women Empowerment Initiative */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-pink-400">
                <Heart className="h-3.5 w-3.5" />
                Community & Social Impact
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                WayTo Women Walk —{" "}
                <span className="gold-text italic">My Women Empowerment Initiative</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Alongside my entrepreneurial journey, I am deeply passionate about women's
                  empowerment, digital visibility, confidence-building, and community development.
                </p>
                <p>
                  Through <strong>WayTo Women Walk</strong>, I focus on inspirational content,
                  women's development, motivation, business awareness, and creating platforms for
                  women to express themselves and build their identities.
                </p>
                <p>
                  I believe that women have enormous potential to lead, create businesses, develop
                  new skills, and become financially independent when they have access to knowledge,
                  opportunities, visibility, and supportive communities.
                </p>
                <p>
                  As a <strong>Digital Mahila Development Officer</strong>, I am actively involved in
                  initiatives focused on women’s development and community building. Empowerment
                  becomes truly meaningful when inspiration is combined with practical, hands-on
                  opportunities for real-world growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-xl font-bold text-accent">Digital Mahila</p>
                  <p className="text-xs text-muted-foreground">Development Officer</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-xl font-bold text-primary">Inspiration + Action</p>
                  <p className="text-xs text-muted-foreground">Practical Growth & Mentorship</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-xl font-bold text-foreground">Community</p>
                  <p className="text-xs text-muted-foreground">Women In Business Network</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <Reveal delay={100}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-tr from-pink-500/20 via-accent/20 to-primary/20 blur-2xl" />
                <img
                  src={womenEmpowerment}
                  alt="WayTo Women Walk — Women Empowerment Workshop"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="relative rounded-3xl border border-border object-cover shadow-2xl shadow-black/60"
                />
                <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur">
                  <p className="gold-text font-display text-lg font-bold">WayTo Women Walk</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Empowering Women Through Digital Media
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Creative Roots & Studio Facility in Boduppal */}
      <section className="border-y border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-accent/20 via-transparent to-primary/20 blur-xl" />
                <img
                  src={bgAboutImg1}
                  alt="RCG Media Creative Studio"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="relative rounded-3xl border border-border object-cover shadow-2xl shadow-black/50"
                />
                <div className="absolute -bottom-5 right-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur">
                  <p className="gold-text font-display text-lg font-bold">Boduppal, Hyderabad</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    State-of-the-Art Studio Facility
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                  Creative Side & Studio
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Classical Dance Roots, <span className="gold-text italic">Cinematic Vision</span>
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  My interest in creativity began in childhood with a passion for classical dance.
                  That early love for artistic expression developed into a wider interest in music,
                  performance, video production, storytelling, and digital content.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Alongside business and digital media projects, I have produced songs and creative
                  video projects. These experiences have strengthened my expertise in production
                  planning, creative coordination, visual storytelling, and promotional content.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Today, RCG Media operates a fully equipped creator and podcast studio in{" "}
                  <strong className="text-foreground">Boduppal, Hyderabad</strong> — providing
                  entrepreneurs, creators, and business leaders with high-end camera, microphone,
                  lighting, and acoustic facilities to record podcasts, interviews, and brand
                  storytelling content.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium text-foreground">
                    <Music className="h-3.5 w-3.5 text-accent" /> Classical Dance Roots
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium text-foreground">
                    <Mic className="h-3.5 w-3.5 text-accent" /> Boduppal Studio Facility
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-medium text-foreground">
                    <Lightbulb className="h-3.5 w-3.5 text-accent" /> Song & Video Production
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Our Compass
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Vision & <span className="gold-text italic">Mission</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-primary/30 bg-linear-to-br from-primary/10 via-card to-transparent p-9 shadow-xl">
              <Eye className="h-10 w-10 text-primary" />
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">My Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To build RCG Media into a trusted partner for businesses seeking integrated media
                production, digital marketing, advertising, and brand growth solutions. To help
                entrepreneurs and businesses access the creative resources and promotional
                opportunities they need to grow in a competitive market.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                At the same time, to continue using digital platforms to encourage women’s
                empowerment, support women entrepreneurs, promote talent, and build communities that
                inspire progress.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-accent/30 bg-linear-to-br from-accent/10 via-card to-transparent p-9 shadow-xl">
              <Compass className="h-10 w-10 text-accent" />
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">My Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To combine business knowledge, creative media, and digital marketing to help brands
                grow and create opportunities for people.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                For me, entrepreneurship is not just about running a business. It is about
                identifying opportunities, bringing ideas to life, creating meaningful connections,
                and helping people move closer to their goals.
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="gold-text font-display text-base font-semibold">
                  RCG Media — One Partner. Multiple Solutions. Endless Possibilities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-accent/30 bg-linear-to-br from-accent/15 via-card to-primary/10 p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Let's Bring Your Brand Vision <span className="gold-text italic">To Life</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              From business ideas to brand identity. From content creation to digital marketing.
              From promotions to growth opportunities.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                View Selected Work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
