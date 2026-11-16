import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ReadingResume } from "@/components/ReadingResume";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#121622" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://safeguarding.dongten.net"),
  title: {
    default: "Báo Cáo Nghiên Cứu: Xây Dựng Văn Hóa An Toàn Trong Giáo Hội",
    template: "%s | Tỉnh Dòng Tên Việt Nam",
  },
  description:
    "Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam Về Bảo Vệ Trẻ Vị Thành Niên Và Người Dễ Bị Tổn Thương Trong Cấu Trúc Quản Trị Tôn Giáo.",
  keywords: [
    "Văn hóa an toàn",
    "Safeguarding",
    "Bảo vệ trẻ vị thành niên",
    "Người dễ bị tổn thương",
    "Tỉnh Dòng Tên Việt Nam",
    "Giáo hội Công giáo",
    "Giáo luật",
    "Vos Estis Lux Mundi",
    "Luật Trẻ em 2016",
    "Mục vụ giới trẻ",
  ],
  authors: [{ name: "Tỉnh Dòng Tên Việt Nam", url: "https://dongten.net" }],
  creator: "Tỉnh Dòng Tên Việt Nam",
  publisher: "Tỉnh Dòng Tên Việt Nam - Societas Iesu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "article",
    locale: "vi_VN",
    url: "/",
    siteName: "Tỉnh Dòng Tên Việt Nam - Dòng Tên",
    title: "Báo Cáo Nghiên Cứu: Xây Dựng Văn Hóa An Toàn Trong Giáo Hội",
    description:
      "Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam Về Bảo Vệ Trẻ Vị Thành Niên Và Người Dễ Bị Tổn Thương.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Báo Cáo Nghiên Cứu Xây Dựng Văn Hóa An Toàn - Tỉnh Dòng Tên Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Báo Cáo Nghiên Cứu: Xây Dựng Văn Hóa An Toàn Trong Giáo Hội",
    description:
      "Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dongten.net/#organization",
      "name": "Tỉnh Dòng Tên Việt Nam",
      "alternateName": "Societas Iesu - Provincia Vietnamensis",
      "url": "https://dongten.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dongten.net/wp-content/uploads/2020/09/cropped-logo-dong-ten.png",
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://safeguarding.dongten.net/#article",
      "headline": "Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam",
      "name": "Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn Trong Giáo Hội",
      "description":
        "Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam Về Bảo Vệ Trẻ Vị Thành Niên Và Người Dễ Bị Tổn Thương Trong Cấu Trúc Quản Trị Tôn Giáo.",
      "inLanguage": "vi",
      "author": {
        "@id": "https://dongten.net/#organization",
      },
      "publisher": {
        "@id": "https://dongten.net/#organization",
      },
      "datePublished": "2024-01-15T08:00:00+07:00",
      "dateModified": "2024-03-01T08:00:00+07:00",
      "genre": "Nghiên cứu Thần học, Giáo luật học và Xã hội học Tôn giáo",
      "keywords": [
        "Văn hóa an toàn",
        "Safeguarding",
        "Bảo vệ trẻ vị thành niên",
        "Người dễ bị tổn thương",
        "Tỉnh Dòng Tên Việt Nam",
        "Giáo luật Công giáo",
        "Vos Estis Lux Mundi",
        "Luật Trẻ em 2016",
      ],
      "about": [
        {
          "@type": "Thing",
          "name": "Văn hóa an toàn trong Giáo hội Công giáo",
        },
        {
          "@type": "Thing",
          "name": "Quy chế bảo vệ trẻ em của Tỉnh Dòng Tên Việt Nam",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${lora.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-parchment text-charcoal font-[family-name:var(--font-lora)]">
        <ReadingProgress />
        <ReadingResume />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
