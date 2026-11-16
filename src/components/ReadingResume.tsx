"use client";

import { useEffect, useState } from "react";
import { Bookmark, X, ArrowRight } from "lucide-react";

interface SavedPosition {
  id?: string;
  title?: string;
  scrollY: number;
  timestamp: number;
}

export function ReadingResume() {
  const [savedPosition, setSavedPosition] = useState<SavedPosition | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  // Check saved position on initial load
  useEffect(() => {
    try {
      const data = localStorage.getItem("safeguarding-reading-position");
      if (data) {
        const parsed = JSON.parse(data) as SavedPosition;
        // Only prompt if user was scrolled down at least 500px and position was saved in the last 14 days
        const isRecent = Date.now() - parsed.timestamp < 14 * 24 * 60 * 60 * 1000;
        if (parsed.scrollY > 500 && isRecent) {
          setSavedPosition(parsed);
          // Show after 1 second for a smooth entrance
          const timer = setTimeout(() => setShowPrompt(true), 1000);
          return () => clearTimeout(timer);
        }
      }
    } catch {
      // Ignore parsing errors
    }
  }, []);

  // Track and save reading position
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY > 300) {
          // Find current active section
          const headings = Array.from(document.querySelectorAll("h2[id], h3[id]"));
          let currentTitle = "Vị trí đang đọc";
          let currentId = "";
          for (let i = headings.length - 1; i >= 0; i--) {
            const h = headings[i] as HTMLElement;
            if (h.offsetTop <= scrollY + 160) {
              currentTitle = h.innerText.replace(/^[I|V|X]+\.\s*/, "");
              currentId = h.id;
              break;
            }
          }
          localStorage.setItem(
            "safeguarding-reading-position",
            JSON.stringify({
              id: currentId,
              title: currentTitle,
              scrollY,
              timestamp: Date.now(),
            })
          );
        }
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResume = () => {
    if (savedPosition) {
      window.scrollTo({ top: savedPosition.scrollY, behavior: "smooth" });
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt || !savedPosition) return null;

  return (
    <aside
      role="complementary"
      aria-label="Thông báo khôi phục vị trí đọc"
      className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-sm bg-parchment/95 border border-gold shadow-xl shadow-navy/15 rounded-lg p-3.5 backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 no-print text-charcoal"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 mt-0.5">
            <Bookmark className="w-4 h-4 text-gold-dark" />
          </div>
          <div>
            <span className="text-[0.68rem] uppercase tracking-wider text-gold-dark font-sans font-bold block">
              Ghi nhớ vị trí đọc
            </span>
            <p className="text-xs sm:text-sm font-serif font-medium text-navy leading-snug line-clamp-1">
              {savedPosition.title || "Tiếp tục bài báo cáo"}
            </p>
            <p className="text-[0.72rem] text-warm-gray mt-0.5">
              Chào mừng bạn trở lại ấn phẩm nghiên cứu.
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-warm-gray hover:text-cardinal transition-colors p-1 rounded cursor-pointer"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-end gap-2 pt-2 border-t border-border-light/60">
        <button
          onClick={handleDismiss}
          className="text-xs text-warm-gray hover:text-navy px-2 py-1 transition-colors cursor-pointer"
        >
          Bỏ qua
        </button>
        <button
          onClick={handleResume}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cardinal text-parchment text-xs font-medium font-sans hover:bg-cardinal-dark transition-all shadow-xs cursor-pointer active:scale-95"
        >
          <span>Tiếp tục đọc</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
