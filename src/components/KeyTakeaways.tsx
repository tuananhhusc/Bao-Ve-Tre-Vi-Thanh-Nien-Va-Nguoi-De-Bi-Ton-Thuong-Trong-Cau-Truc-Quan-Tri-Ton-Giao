import { Compass, CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  title: string;
  points: string[];
}

export function KeyTakeaways({ title, points }: KeyTakeawaysProps) {
  return (
    <div className="my-6 sm:my-8 p-4 sm:p-6 rounded-md bg-parchment-dark/35 border-l-4 border-gold border-y border-r border-border-light/70 shadow-xs transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-cardinal shrink-0" strokeWidth={1.8} />
        <h4 className="font-[family-name:var(--font-playfair)] text-sm sm:text-base font-bold text-navy tracking-wide">
          {title}
        </h4>
      </div>

      <ul className="space-y-2.5 sm:space-y-3 font-[family-name:var(--font-lora)] text-xs sm:text-sm md:text-[0.95rem] text-charcoal">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2.5 leading-relaxed">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark mt-1 shrink-0" strokeWidth={2} />
            <span className="flex-1 text-justify">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
