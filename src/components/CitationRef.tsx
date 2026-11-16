import { citations } from "@/data/citations";

interface CitationRefProps {
  ids: number[];
}

export function CitationRef({ ids }: CitationRefProps) {
  return (
    <>
      {ids.map((id) => {
        const citation = citations.find((c) => c.id === id);
        return (
          <a
            key={id}
            href={`#ref-${id}`}
            className="academic-citation not-italic inline-block cursor-pointer focus-visible:ring-2 focus-visible:ring-cardinal focus:outline-hidden"
            aria-label={`Xem tài liệu tham khảo số ${id}`}
          >
            <span>[{id}]</span>
            {citation && (
              <span className="citation-tooltip text-left font-normal">
                <span className="block text-gold-light font-bold text-xs mb-1 uppercase tracking-wider font-sans">
                  Tài liệu tham khảo [{id}]
                </span>
                <span className="text-parchment font-serif leading-relaxed line-clamp-3 block">
                  {citation.title}
                </span>
                <span className="block text-[0.7rem] text-parchment/60 mt-1.5 italic font-sans">
                  Nhấp để chuyển đến danh mục tài liệu
                </span>
              </span>
            )}
          </a>
        );
      })}
    </>
  );
}
