"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type FontSize = "sm" | "base" | "lg" | "xl";

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

const FONT_SIZES: FontSize[] = ["sm", "base", "lg", "xl"];

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>("base");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("safeguarding-reader-font-size") as FontSize | null;
      if (saved && FONT_SIZES.includes(saved)) {
        setFontSizeState(saved);
        document.documentElement.setAttribute("data-font-size", saved);
      } else {
        const currentAttr = document.documentElement.getAttribute("data-font-size") as FontSize | null;
        if (currentAttr && FONT_SIZES.includes(currentAttr)) {
          setFontSizeState(currentAttr);
        } else {
          document.documentElement.setAttribute("data-font-size", "base");
        }
      }
    } catch {
      document.documentElement.setAttribute("data-font-size", "base");
    }
  }, []);

  const setFontSize = useCallback((size: FontSize) => {
    setFontSizeState(size);
    document.documentElement.setAttribute("data-font-size", size);
    try {
      localStorage.setItem("safeguarding-reader-font-size", size);
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSizeState((prev) => {
      const idx = FONT_SIZES.indexOf(prev);
      const next = idx < FONT_SIZES.length - 1 ? FONT_SIZES[idx + 1] : prev;
      document.documentElement.setAttribute("data-font-size", next);
      try {
        localStorage.setItem("safeguarding-reader-font-size", next);
      } catch {
        // Ignore localStorage errors
      }
      return next;
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSizeState((prev) => {
      const idx = FONT_SIZES.indexOf(prev);
      const next = idx > 0 ? FONT_SIZES[idx - 1] : prev;
      document.documentElement.setAttribute("data-font-size", next);
      try {
        localStorage.setItem("safeguarding-reader-font-size", next);
      } catch {
        // Ignore localStorage errors
      }
      return next;
    });
  }, []);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
}
