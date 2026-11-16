interface QuoteBlockProps {
  children: React.ReactNode;
  source?: string;
  reference?: string;
}

export function QuoteBlock({ children, source, reference }: QuoteBlockProps) {
  return (
    <figure className="my-10 pl-6 sm:pl-8 border-l-[3px] border-cardinal py-1">
      <blockquote className="font-[family-name:var(--font-playfair)] italic text-charcoal-light leading-relaxed text-lg sm:text-xl font-normal">
        {children}
      </blockquote>

      {(source || reference) && (
        <figcaption className="mt-3 text-sm text-warm-gray font-normal not-italic flex items-center gap-2">
          <span className="w-6 h-px bg-gold/60 inline-block" />
          {source && <cite className="not-italic font-medium text-navy">{source}</cite>}
          {reference && <span className="text-warm-gray/70">({reference})</span>}
        </figcaption>
      )}
    </figure>
  );
}
