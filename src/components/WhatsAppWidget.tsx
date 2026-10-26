import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const whatsappUrl =
    "https://wa.me/919989886369?text=Hello%20RCG%20Media,%20I%20would%20like%20to%20enquire%20about%20your%20services.";

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RCG Media on WhatsApp"
        className="relative flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-[#25D366]/60"
      >
        {/* Subtle breathing ripple glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        <MessageCircle className="relative h-5 w-5 fill-white stroke-none" />
        <span className="relative text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
