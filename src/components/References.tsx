import { citations } from "@/data/citations";
import { ExternalLink, BookMarked } from "lucide-react";

export function References() {
  return (
    <section id="references" className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t-2 border-gold/40 scroll-mt-24 w-full overflow-hidden">
      <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
        <BookMarked className="w-5 h-5 sm:w-6 sm:h-6 text-cardinal shrink-0" strokeWidth={1.75} />
        <h2 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl font-bold text-navy">
          <span className="text-cardinal mr-2">X.</span>
          Danh Mục Tài Liệu Tham Khảo
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-warm-gray mb-6 sm:mb-8 font-sans">
        Danh mục tổng hợp 41 nguồn văn kiện Tòa Thánh, Tông thư, Luật pháp quốc gia và các nghiên cứu chuyên khảo được trích dẫn trong báo cáo:
      </p>

      <ol className="space-y-3 sm:space-y-4 font-[family-name:var(--font-lora)] w-full">
        {citations.map((cite) => (
          <li
            key={cite.id}
            id={`ref-${cite.id}`}
            className="flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-sm md:text-base leading-relaxed group scroll-mt-28 p-1.5 sm:p-2 rounded transition-colors duration-200 hover:bg-parchment-dark/50 w-full min-w-0"
          >
            <span className="academic-citation not-italic font-bold font-serif shrink-0 mt-0.5 select-none text-[0.7rem] sm:text-[0.75rem]">
              [{cite.id}]
            </span>
            <span className="text-charcoal-light flex-1 min-w-0 break-words">
              <span className="font-medium text-navy">{cite.title}</span>.{" "}
              <a
                href={cite.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mở liên kết tham khảo ngoài: ${cite.title} (mở trong tab mới)`}
                className="text-navy-light hover:text-cardinal transition-colors inline break-all text-[0.72rem] sm:text-xs font-sans underline underline-offset-2 decoration-navy-light/40 hover:decoration-cardinal/60 cursor-pointer focus-visible:ring-1 focus-visible:ring-cardinal focus:outline-hidden rounded-xs"
              >
                <span>
                  {cite.url.length > 55
                    ? cite.url.substring(0, 55) + "..."
                    : cite.url}
                </span>
                <ExternalLink className="w-3 h-3 inline-block ml-1 opacity-60 group-hover:opacity-100 align-baseline" />
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
