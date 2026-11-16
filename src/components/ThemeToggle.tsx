"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("reading-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("reading-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-border-light/60 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1 rounded-full border border-border-light text-navy hover:text-cardinal hover:border-gold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-cardinal focus:outline-hidden active:scale-95 ${className}`}
      title={theme === "light" ? "Chuyển sang chế độ đọc đêm (Ánh nến)" : "Chuyển sang chế độ ban ngày (Giấy ngà)"}
      aria-label={theme === "light" ? "Chuyển sang chế độ đọc đêm" : "Chuyển sang chế độ đọc ngày"}
    >
      {theme === "light" ? (
        <>
          <Moon className="w-4 h-4 text-navy transition-transform duration-200" strokeWidth={1.8} />
          {showLabel && <span className="text-xs font-sans font-medium hidden sm:inline">Chế độ đêm</span>}
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-gold transition-transform duration-200" strokeWidth={1.8} />
          {showLabel && <span className="text-xs font-sans font-medium text-gold hidden sm:inline">Ánh nến</span>}
        </>
      )}
    </button>
  );
}
