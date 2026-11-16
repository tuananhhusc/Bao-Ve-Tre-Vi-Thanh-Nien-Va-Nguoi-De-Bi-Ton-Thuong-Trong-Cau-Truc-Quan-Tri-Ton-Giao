"use client";

import { useState, useEffect, useCallback } from "react";
import { List, X, ChevronRight, Bookmark, ArrowUp } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { FontSizeControl } from "./FontSizeControl";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleScrollSpy = useCallback(() => {
    const headings = items
      .map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }))
      .filter((h) => h.el !== null);

    const scrollPos = window.scrollY + 140;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading.el && heading.el.offsetTop <= scrollPos) {
        setActiveId(heading.id);
        return;
      }
    }

    if (headings.length > 0) {
      setActiveId(headings[0].id);
    }
  }, [items]);

  useEffect(() => {
    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [handleScrollSpy]);

  // Close mobile drawer on Escape key (a11y)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  // Lock body scroll when mobile drawer is open to prevent background scrolling
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tocList = (
    <ul className="space-y-1 font-[family-name:var(--font-lora)]">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              aria-current={isActive ? "location" : undefined}
              className={`w-full text-left py-1.5 px-2.5 rounded transition-all text-xs sm:text-sm flex items-start gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-cardinal focus-visible:ring-inset focus:outline-hidden ${
                item.level === 3 ? "pl-6 text-[0.82rem] opacity-90" : "font-semibold"
              } ${
                isActive
                  ? "bg-cardinal/10 text-cardinal font-bold border-l-2 border-cardinal"
                  : "text-charcoal-light hover:text-cardinal hover:bg-parchment-dark/60"
              }`}
            >
              {item.level === 3 ? (
                <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gold-dark" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 shrink-0" />
              )}
              <span className="leading-snug">{item.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. STICKY LEFT SIDEBAR (Desktop Screens: lg & xl)
      ───────────────────────────────────────────────────────────── */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 py-2 no-print">
        <div className="pb-4 mb-4 border-b border-gold/40 flex items-center justify-between">
          <div>
            <span className="text-[0.68rem] uppercase tracking-widest text-gold-dark font-sans font-semibold block">
              Điều hướng bài viết
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-base font-bold text-navy flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-cardinal" />
              Mục Lục Chuyên Khảo
            </h2>
          </div>

          {/* Quick font sizer & Theme Toggle in sidebar header */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle className="scale-90" />
            <FontSizeControl />
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <nav aria-label="Mục lục thanh bên">{tocList}</nav>

        {/* Sidebar Footer info */}
        <div className="mt-6 pt-4 border-t border-border-light text-[0.75rem] text-warm-gray font-serif italic text-center">
          Tỉnh Dòng Tên Việt Nam · Báo Cáo Chuyên Sâu
        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          2. MOBILE / TABLET FLOATING BUTTON & DRAWER (< lg)
      ───────────────────────────────────────────────────────────── */}
      <div className="contents lg:hidden no-print">
        {/* Floating buttons in bottom-right with iPhone safe area */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pb-[env(safe-area-inset-bottom,0px)]">
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-parchment-dark/95 border border-gold/40 text-navy shadow-md flex items-center justify-center hover:bg-parchment-dark transition-transform active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-cardinal focus:outline-hidden"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-parchment shadow-xl shadow-navy/30 hover:bg-navy-light transition-all border border-gold/40 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus:outline-hidden"
            aria-label="Mở mục lục chuyên khảo"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-toc-drawer"
          >
            <Bookmark className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium font-serif">Mục lục</span>
            <List className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile slide-over drawer backdrop */}
        <div
          className={`fixed inset-0 z-50 bg-navy/40 backdrop-blur-xs transition-opacity duration-300 ${
            isMobileOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
          }`}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile slide-over drawer panel */}
        <div
          id="mobile-toc-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Bảng mục lục chuyên khảo"
          className={`fixed top-0 left-0 bottom-0 z-50 w-[85vw] max-w-xs bg-parchment border-r border-gold/40 shadow-2xl flex flex-col transition-all duration-300 ease-out ${
            isMobileOpen
              ? "translate-x-0 opacity-100 pointer-events-auto visible"
              : "-translate-x-full opacity-0 pointer-events-none invisible"
          }`}
        >
          <div className="p-4 sm:p-5 border-b border-border-light flex items-center justify-between bg-parchment-dark/40">
            <div>
              <span className="text-[0.65rem] uppercase tracking-widest text-gold-dark font-sans font-semibold">
                Điều hướng tài liệu
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-navy">
                Mục Lục Chuyên Khảo
              </h2>
            </div>
            <div className="flex items-center gap-1.5">
              <FontSizeControl showIcon={false} />
              <ThemeToggle className="scale-90" />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-parchment-dark/80 text-charcoal hover:text-cardinal hover:bg-parchment-dark flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-cardinal focus:outline-hidden"
                aria-label="Đóng mục lục"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">{tocList}</nav>
        </div>
      </div>
    </>
  );
}
