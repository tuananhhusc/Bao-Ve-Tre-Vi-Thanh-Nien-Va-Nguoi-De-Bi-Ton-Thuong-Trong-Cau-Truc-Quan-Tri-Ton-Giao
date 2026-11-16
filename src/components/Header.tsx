"use client";

import { Cross, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 no-print transition-all duration-300 w-full ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-parchment border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 w-full">
          {/* Logo / Cross Icon */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cardinal/10 shrink-0">
              <Cross className="w-4 h-4 sm:w-5 sm:h-5 text-cardinal" strokeWidth={1.8} />
            </div>
            <div className="block">
              <p className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-semibold text-navy tracking-wide leading-tight">
                Tỉnh Dòng Tên Việt Nam
              </p>
              <p className="text-[0.65rem] sm:text-xs text-warm-gray leading-tight">
                Societas Iesu, Provincia Vietnamensis
              </p>
            </div>
          </div>

          {/* Center Title (visible on scroll on desktop) */}
          <div className="hidden lg:block text-center flex-1 px-4">
            <h1
              className={`font-[family-name:var(--font-playfair)] text-cardinal transition-all duration-300 ${
                scrolled ? "text-sm font-semibold opacity-100" : "text-base font-medium opacity-0"
              }`}
            >
              Báo Cáo Nghiên Cứu Chuyên Sâu Về Văn Hóa An Toàn
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-warm-gray shrink-0">
            <ThemeToggle showLabel={false} />
            <div className="hidden sm:flex items-center gap-1.5 pl-2 sm:border-l border-border-light">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cardinal" />
              <span className="text-[0.68rem] sm:text-xs font-medium font-sans">Chuyên khảo</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
