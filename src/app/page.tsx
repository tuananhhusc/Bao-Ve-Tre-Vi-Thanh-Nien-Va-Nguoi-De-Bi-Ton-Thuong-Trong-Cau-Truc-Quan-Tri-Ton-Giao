import { TableOfContents, type TocItem } from "@/components/TableOfContents";
import { ArticleContent } from "@/components/ArticleContent";

const tocItems: TocItem[] = [
  { id: "section-1", title: "I. Bối Cảnh Lịch Sử & Chuyển Dịch Hệ Hình", level: 2 },
  { id: "section-2", title: "II. Nền Tảng Thần Học & Linh Đạo Inhaxiô", level: 2 },
  { id: "section-2-1", title: "Hiện Thân Lòng Thương Xót & Không Gian An Toàn", level: 3 },
  { id: "section-2-2", title: "Linh Đạo Inhaxiô & Lời Kêu Gọi Canh Tân", level: 3 },
  { id: "section-3", title: "III. Khung Pháp Lý Dân Sự & Giáo Luật", level: 2 },
  { id: "section-3-1", title: "Luật Trẻ Em Việt Nam Năm 2016", level: 3 },
  { id: "section-3-2", title: "Khung Giáo Luật & Vos Estis Lux Mundi", level: 3 },
  { id: "section-3-3", title: "Bảng Đối Chiếu Tiêu Chuẩn Bảo Vệ", level: 3 },
  { id: "section-4", title: "IV. Kiến Tạo Không Gian An Toàn & Ranh Giới", level: 2 },
  { id: "section-4-1", title: "Người Trưởng Thành Dễ Bị Tổn Thương", level: 3 },
  { id: "section-4-2", title: "Quy Tắc Hai Người Trưởng Thành", level: 3 },
  { id: "section-5", title: "V. Phá Vỡ Chu Trình Thao Túng Tâm Lý", level: 2 },
  { id: "section-6", title: "VI. Thách Thức Trong Không Gian Mạng", level: 2 },
  { id: "section-7", title: "VII. Cơ Chế Tiếp Nhận Cáo Buộc & Giải Trình", level: 2 },
  { id: "section-7-1", title: "Hệ Thống Tiếp Nhận Thông Tin Minh Bạch", level: 3 },
  { id: "section-7-2", title: "Quản Trị Quá Trình Điều Tra & Bí Mật Công Vụ", level: 3 },
  { id: "section-7-3", title: "Lắng Nghe & Phục Hồi Nạn Nhân", level: 3 },
  { id: "section-8", title: "VIII. Hội Nhập Văn Hóa & Rào Cản Á Đông", level: 2 },
  { id: "section-8-1", title: "Huấn Luyện Liên Tục Trong Đào Tạo Tu Sĩ", level: 3 },
  { id: "section-8-2", title: "Đối Mặt Rào Cản Văn Hóa Á Đông", level: 3 },
  { id: "section-9", title: "IX. Kết Luận: Phục Hồi Căn Tính Ngôn Sứ", level: 2 },
  { id: "references", title: "X. Danh Mục 41 Tài Liệu Tham Khảo", level: 2 },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16">
        <div className="block lg:flex lg:gap-10 xl:gap-14 lg:items-start lg:justify-center w-full">
          {/* Thanh mục lục cố định bên trái trên desktop */}
          <TableOfContents items={tocItems} />

          {/* Vùng bài đọc chính toàn màn hình trên mobile với khoảng đệm an toàn cuối trang */}
          <main className="w-full flex-1 min-w-0 max-w-full lg:max-w-3xl xl:max-w-4xl pb-24 lg:pb-0">
            <ArticleContent />
          </main>
        </div>
      </div>
    </div>
  );
}
