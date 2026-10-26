import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-22 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-card/90 text-accent shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-accent/30"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
