import { useState } from "react";
import { MessageCircle, Radio, X, ExternalLink, ArrowUpRight } from "lucide-react";

const WHATSAPP_PHONE = "918074551596";
const WHATSAPP_DISPLAY = "+91 80745 51596";
const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services.`;
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbESwYD2UPBBPGg5Hq0T";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact & Channel"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl border border-border/80 bg-card/95 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
                <MessageCircle className="h-5 w-5 fill-white stroke-none" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-foreground">
                  RCG Media on WhatsApp
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Direct Chat & Official Channel
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp menu"
              className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {/* Direct Chat Card */}
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-secondary/40 p-3.5 transition-all duration-200 hover:border-[#25D366] hover:bg-secondary/70 hover:shadow-lg hover:shadow-[#25D366]/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    Direct WhatsApp Chat
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25D366]" />
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground">
                Talk directly with our team • Quick enquiries & quotes
              </p>
              <div className="mt-2.5 flex items-center justify-between rounded-xl bg-[#25D366] px-3.5 py-2 text-white font-semibold text-xs shadow-md shadow-[#25D366]/30 group-hover:bg-[#20ba59]">
                <span>Chat: {WHATSAPP_DISPLAY}</span>
                <span className="text-[11px] font-medium opacity-90">Instant Reply →</span>
              </div>
            </a>

            {/* Official WhatsApp Channel Card */}
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-secondary/40 p-3.5 transition-all duration-200 hover:border-accent hover:bg-secondary/70 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Radio className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    RCG Media Official Channel
                  </span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:scale-110 group-hover:text-accent" />
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground">
                Follow our official WhatsApp broadcast for behind-the-scenes, news & video releases.
              </p>
              <div className="mt-2.5 flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-3.5 py-2 text-accent font-semibold text-xs group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <span>Follow Official Channel</span>
                <span className="text-[11px]">Join Channel →</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle WhatsApp Contact & Channel"
        className="relative flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-[#25D366]/60 cursor-pointer"
      >
        {/* Subtle breathing ripple glow */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        )}

        <MessageCircle className="relative h-5 w-5 fill-white stroke-none" />
        <span className="relative text-xs font-bold tracking-wide">
          {isOpen ? "Close WhatsApp" : "WhatsApp"}
        </span>
      </button>
    </aside>
  );
}
