import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Radio,
  RotateCcw,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import bgContact from "@/assets/bg-contact.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RCG Media — Start Your Project" },
      {
        name: "description",
        content:
          "Get in touch with RCG Media — digital marketing, branding, websites, apps, video and song production. WhatsApp: +91 80745 51596. Book a free consultation today.",
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
  component: Contact,
});

const CONTACT_EMAIL = "rcgmedia123@gmail.com";

const channels = [
  {
    icon: Phone,
    title: "Direct WhatsApp & Call",
    line1: "+91 80745 51596",
    line2: "Quick project enquiry & consultation",
    href: "https://wa.me/918074551596?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services.",
    highlight: true,
  },
  {
    icon: Radio,
    title: "Official WhatsApp Channel",
    line1: "Follow RCG Media Channel",
    line2: "Updates, creator tips & media releases",
    href: "https://whatsapp.com/channel/0029VbESwYD2UPBBPGg5Hq0T",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Email Us",
    line1: CONTACT_EMAIL,
    line2: "We reply within 24 hours",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Instagram,
    title: "Instagram",
    line1: "@rcgmedia",
    line2: "Our latest reels & work",
    href: "https://instagram.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    line1: "Mon – Sat, 10 AM – 7 PM",
    line2: "Consultations by appointment",
  },
];

const WHATSAPP_PHONE = "918074551596";
const WHATSAPP_DISPLAY = "+91 80745 51596";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    service: services[0]?.title ?? "Business Branding & Brand Development",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [emailFallbackUrl, setEmailFallbackUrl] = useState("");

  const validate = (): boolean => {
    const errs: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    // Phone validation (at least 10 digits)
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (digitsOnly.length < 10) {
      errs.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    // Service validation
    if (!formData.service.trim()) {
      errs.service = "Please select a service.";
    }

    // Message validation
    if (!formData.message.trim()) {
      errs.message = "Please describe your project or enquiry.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters so we can understand your goals.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Form Incomplete", {
        description: "Please fill in all required fields marked in red.",
      });
      return;
    }

    setIsSubmitting(true);

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const service = formData.service.trim();
    const message = formData.message.trim();

    // Construct formatted WhatsApp message
    const waText = [
      "🌟 *New Project Consultation Enquiry — RCG Media*",
      "",
      `👤 *Name:* ${name}`,
      `📱 *Phone:* ${phone}`,
      `📧 *Email:* ${email}`,
      `🎯 *Service Needed:* ${service}`,
      "",
      "📝 *Project Details:*",
      message,
      "",
      "---",
      "_Sent via RCG Media website (rcgmedia.in)_",
    ].join("\n");

    const targetWaUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
    setWhatsappUrl(targetWaUrl);

    // Prepare mailto fallback
    const subject = encodeURIComponent(`Project enquiry — ${service} (${name})`);
    const emailBody = encodeURIComponent(
      `Hi RCG Media,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${message}\n`,
    );
    setEmailFallbackUrl(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${emailBody}`);

    // Show toast notification
    toast.success("Validation passed! Connecting to WhatsApp...", {
      description: `Sending enquiry details for ${name} to RCG Media WhatsApp (+91 80745 51596).`,
      duration: 5000,
    });

    // Open WhatsApp
    window.open(targetWaUrl, "_blank");

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: services[0]?.title ?? "Business Branding & Brand Development",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
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
              {channels.map((c, i) => {
                const CardWrapper = c.href ? "a" : "div";
                const wrapperProps = c.href
                  ? {
                      href: c.href,
                      target: c.href.startsWith("http") ? "_blank" : undefined,
                      rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined,
                    }
                  : {};

                return (
                  <Reveal key={c.title} delay={i * 80}>
                    <CardWrapper
                      {...wrapperProps}
                      className={cn(
                        "group flex items-start justify-between gap-4 rounded-2xl border bg-card p-5 transition-all duration-300",
                        c.highlight
                          ? "border-[#25D366]/40 hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/10"
                          : "border-border hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5",
                        c.href && "cursor-pointer hover:-translate-y-0.5",
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                            c.highlight
                              ? "bg-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white"
                              : "bg-linear-to-br from-primary/20 to-accent/20 text-primary group-hover:text-accent",
                          )}
                        >
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {c.title}
                          </h3>
                          <p className={cn("text-sm", c.highlight ? "font-semibold text-[#25D366]" : "text-muted-foreground")}>
                            {c.line1}
                          </p>
                          <p className="text-xs text-muted-foreground/80">{c.line2}</p>
                        </div>
                      </div>
                      {c.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                      )}
                    </CardWrapper>
                  </Reveal>
                );
              })}
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
            {isSubmitted ? (
              <div className="rounded-4xl border border-[#25D366]/40 bg-card p-8 sm:p-10 shadow-2xl shadow-[#25D366]/10 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/20 text-[#25D366]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#25D366]">
                      Enquiry Ready
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Details Sent to WhatsApp!
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/30 p-5 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong className="text-foreground">Phone:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong className="text-foreground">Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong className="text-foreground">Service:</strong> {formData.service}
                  </p>
                  <p className="line-clamp-2">
                    <strong className="text-foreground">Message:</strong> {formData.message}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Your consultation request was formatted and opened in WhatsApp ({WHATSAPP_DISPLAY}). If WhatsApp did not open automatically, click the button below:
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="h-4 w-4 fill-white stroke-none" />
                    Open WhatsApp Chat ({WHATSAPP_DISPLAY})
                  </a>

                  {emailFallbackUrl && (
                    <a
                      href={emailFallbackUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-3.5 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      Also Send via Email
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto py-2 cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-4xl border border-border bg-card p-8 sm:p-10 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-3.5 w-3.5 fill-[#25D366] stroke-none" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
                    Instant WhatsApp Enquiry
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  Request a Free Consultation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in your details — we validate the information and instantly connect you with our team on WhatsApp ({WHATSAPP_DISPLAY}).
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Full name (e.g. Rahul Sharma)"
                      className={cn(
                        inputClass,
                        errors.name && "border-destructive focus:border-destructive focus:ring-destructive/30",
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 80745 51596"
                      className={cn(
                        inputClass,
                        errors.phone && "border-destructive focus:border-destructive focus:ring-destructive/30",
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className={cn(
                        inputClass,
                        errors.email && "border-destructive focus:border-destructive focus:ring-destructive/30",
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Service Needed <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className={cn(
                        inputClass,
                        errors.service && "border-destructive focus:border-destructive focus:ring-destructive/30",
                      )}
                    >
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Consultation & Other">Something else</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Tell Us About Your Project <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Goals, timeline, target audience, budget range — anything that helps us prepare your roadmap."
                      className={cn(
                        inputClass,
                        "resize-none",
                        errors.message && "border-destructive focus:border-destructive focus:ring-destructive/30",
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#20ba59] disabled:opacity-70 sm:w-auto cursor-pointer"
                  >
                    <MessageCircle className="h-4.5 w-4.5 fill-white stroke-none" />
                    <span>{isSubmitting ? "Connecting..." : "Send Details to WhatsApp"}</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Connects directly to {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
