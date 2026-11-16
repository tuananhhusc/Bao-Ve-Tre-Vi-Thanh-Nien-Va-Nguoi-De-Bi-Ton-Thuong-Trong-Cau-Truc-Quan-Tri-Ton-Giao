import { Cross, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-parchment/80 no-print">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-cardinal via-gold to-cardinal" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Cross ornament */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold/40" />
            <Cross className="w-6 h-6 text-gold" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gold/40" />
          </div>

          {/* Latin motto */}
          <p className="font-[family-name:var(--font-playfair)] text-gold italic text-lg">
            &ldquo;Ad Maiorem Dei Gloriam&rdquo;
          </p>
          <p className="text-sm text-parchment/50 font-serif">
            Vì Vinh Danh Lớn Lao Hơn Của Thiên Chúa
          </p>

          {/* Info */}
          <div className="pt-4 border-t border-parchment/10 space-y-3 font-serif">
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              Báo cáo nghiên cứu chuyên sâu về xây dựng Văn hóa An toàn
              trong các sứ vụ của Tỉnh Dòng Tên Việt Nam về bảo vệ trẻ vị thành niên
              và người dễ bị tổn thương.
            </p>
            <p className="text-xs text-parchment/40 flex items-center justify-center gap-1 font-sans">
              Thiết kế với <Heart className="w-3 h-3 text-cardinal-light inline" /> cho sự an toàn của mọi người
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
