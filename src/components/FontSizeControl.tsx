"use client";

import { useFontSize, type FontSize } from "./FontSizeContext";
import { Type } from "lucide-react";

interface FontSizeControlProps {
  className?: string;
  showIcon?: boolean;
}

export function FontSizeControl({
  className = "",
  showIcon = true,
}: FontSizeControlProps) {
  const { fontSize, setFontSize } = useFontSize();

  const options: { key: FontSize; label: string; title: string; aria: string }[] = [
    {
      key: "sm",
      label: "A-",
      title: "Cỡ chữ thu nhỏ (16 pixel)",
      aria: "Cỡ chữ thu nhỏ 16 pixel",
    },
    {
      key: "base",
      label: "A",
      title: "Cỡ chữ chuẩn (18 pixel)",
      aria: "Cỡ chữ tiêu chuẩn 18 pixel",
    },
    {
      key: "lg",
      label: "A+",
      title: "Cỡ chữ phóng to (21 pixel)",
      aria: "Cỡ chữ phóng to 21 pixel",
    },
    {
      key: "xl",
      label: "A++",
      title: "Cỡ chữ cực đại (24 pixel)",
      aria: "Cỡ chữ cực đại 24 pixel",
    },
  ];

  return (
    <div
      role="group"
      aria-label="Tùy chỉnh cỡ chữ đọc bài"
      className={`inline-flex items-center border border-border-light rounded-md bg-parchment-dark/40 p-0.5 text-xs text-navy gap-0.5 shadow-2xs transition-colors ${className}`}
    >
      {showIcon && (
        <span className="hidden sm:flex items-center pl-1.5 pr-0.5 text-warm-gray" aria-hidden="true">
          <Type className="w-3.5 h-3.5" />
        </span>
      )}
      {options.map((opt) => {
        const isActive = fontSize === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => setFontSize(opt.key)}
            aria-pressed={isActive}
            aria-label={opt.aria}
            title={opt.title}
            className={`min-w-6 h-6 px-1.5 rounded flex items-center justify-center font-bold text-[0.72rem] transition-all duration-150 cursor-pointer focus-visible:ring-1 focus-visible:ring-cardinal focus:outline-hidden active:scale-95 ${
              isActive
                ? "bg-cardinal text-parchment shadow-xs font-extrabold"
                : "text-charcoal-light hover:text-cardinal hover:bg-parchment-dark/80"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
