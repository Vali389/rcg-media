import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import bgContact from "@/assets/bg-contact.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact RCG Media — Start Your Project" },
      {
        name: "description",
        content:
          "Get in touch with RCG Media — digital marketing, branding, websites, apps, video and song production. Book a free consultation today.",
      },
      { property: "og:title", content: "Contact RCG Media — Start Your Project" },
      {
        property: "og:description",
        content: "Tell us about your brand and goals — we reply with a plan and an honest quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const CONTACT_EMAIL = "hello@rcgmedia.in";

const channels = [
  {
    icon: Mail,
    title: "Email Us",
    line1: CONTACT_EMAIL,
    line2: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Channel",
    line1: "Join our broadcast list",
    line2: "Daily tips & behind-the-scenes",
  },
  {
    icon: Instagram,
    title: "Instagram",
    line1: "@rcgmedia",
    line2: "Our latest reels & work",
  },
  {
    icon: Clock,
    title: "Working Hours",
    line1: "Mon – Sat, 10 AM – 7 PM",
    line2: "Consultations by appointment",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const service = data.get("service");
    const message = data.get("message");
    const subject = encodeURIComponent(`Project enquiry — ${service} (${name})`);
    const body = encodeURIComponent(
      `Hi RCG Media,\n\nName: ${name}\nPhone: ${data.get("phone")}\nEmail: ${data.get(
        "email",
      )}\nService: ${service}\n\n${message}\n`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-hidden transition-all focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <>
      <PageHero
        image={bgContact}
        label="Contact"
        title="Let's Build Something"
        highlight="Extraordinary"
        subtitle="Tell us about your brand and goals — we will reply with a plan, a timeline and an honest quote."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                Reach Us
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                Talk to <span className="gold-text italic">Our Team</span>
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Pick whichever channel suits you — or send the form and we will get back to you
                within one working day.
              </p>
            </Reveal>
            <div className="mt-10 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.line1}</p>
                      <p className="text-xs text-muted-foreground/80">{c.line2}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={300}>
                <div className="flex items-start gap-4 rounded-2xl border border-accent/40 bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Studio Location</h3>
                    <p className="text-sm font-medium text-accent">Boduppal, Hyderabad</p>
                    <p className="text-xs text-muted-foreground">
                      Telangana, India • Studio shoots & podcast recording by appointment
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Global & Remote Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Digital marketing, branding & web projects delivered for clients worldwide.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={150} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-border bg-card p-8 sm:p-10"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Request a Free Consultation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details — this opens your email app with everything pre-filled.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Your Name
                  </label>
                  <input id="name" name="name" required placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 ..." className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Service Needed
                  </label>
                  <select id="service" name="service" className={inputClass} defaultValue={services[0]!.title}>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Goals, timeline, budget range — anything that helps us prepare."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-xl shadow-accent/25 transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
              >
                {sent ? "Opening your email app..." : "Send Enquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {sent && (
                <p className="mt-4 text-sm text-primary">
                  Your email draft is ready — just press send in your mail app.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
