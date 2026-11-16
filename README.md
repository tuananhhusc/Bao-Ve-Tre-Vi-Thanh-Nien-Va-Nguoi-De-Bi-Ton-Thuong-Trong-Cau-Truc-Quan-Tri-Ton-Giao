# Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn (Safeguarding) Trong Giáo Hội

> **Chuyên khảo mục vụ, pháp lý và xã hội học tôn giáo**  
> **Cơ quan chủ quản:** Tỉnh Dòng Tên Việt Nam (*Societas Iesu · Provincia Vietnamensis*)  
> **Chủ đề:** Bảo vệ trẻ vị thành niên và người dễ bị tổn thương trong cấu trúc quản trị tôn giáo

---

## 📌 Giới Thiệu

Đây là ứng dụng web chuyên dụng phục vụ việc đọc tài liệu học thuật dài (*Long-form Academic Reader*), trình bày toàn văn công trình nghiên cứu chuyên sâu về việc thiết lập, vận hành và nội tâm hóa chính sách bảo vệ an toàn (*Safeguarding*) trong các sứ vụ của Tỉnh Dòng Tên Việt Nam.

Trang web được thiết kế theo phong cách kết hợp giữa tính **Hàn lâm Học thuật** trang trọng và nét thiêng liêng, cổ điển của truyền thống **Công giáo** (nền Giấy ngà, điểm nhấn Đỏ đô Cardinal, Xanh Navy và Vàng kim).

---

## ✨ Tính Năng Nổi Bật

1. **Giao Diện Đọc Học Thuật Tối Ưu**:
   - Typography chuẩn công thái học: Tiêu đề `Playfair Display`, nội dung `Lora` serif với độ dài dòng và khoảng cách dòng thoáng đãng (*leading-relaxed*).
   - Chữ cái mở đầu phóng to (*Drop Caps*) phong cách bản thảo cổ điển.
   - Khối trích dẫn Kinh Thánh và Huấn quyền (*QuoteBlock*) với viền đỏ đô trang trọng.
2. **Thanh Mục Lục Cố Định & Bám Vị Trí (Sticky Scroll-Spy TOC)**:
   - Thanh điều hướng chuyên khảo bên trái luôn ghim cố định trên màn hình Desktop, tự động nhận diện và làm nổi bật chương mục đang đọc.
   - Hỗ trợ đổi cỡ chữ tức thì (A- 15px, A 18px, A+ 20px).
   - Tự động co gọn thành ngăn kéo trượt (*Drawer*) trên điện thoại di động với nút đóng mở cảm ứng chuẩn 44×44px và khóa cuộn nền.
3. **Chế Độ Đọc Đêm & Ánh Nến (Dark / Candlelight Mode)**:
   - Chuyển đổi mượt mà giữa chế độ Giấy ngà (*Parchment*) ban ngày và chế độ Ánh nến than chì (*Warm Dark*) ban đêm giúp giảm mỏi mắt.
   - Tự động lưu lựa chọn vào `localStorage`.
4. **Ghi Nhớ Vị Trí Đang Đọc (Reading Resume Toast)**:
   - Tự động lưu vị trí cuộn trang. Khi độc giả quay lại, hệ thống hiển thị thông báo góc dưới kèm 1 nút bấm cuộn mượt đến đúng vị trí đọc dở.
5. **Trực Quan Hóa Quy Trình Bằng Sơ Đồ Tương Tác (Chương VII)**:
   - Mô hình hóa 4 giai đoạn tiếp nhận, điều tra và phục hồi nạn nhân theo Tự sắc *Vos Estis Lux Mundi 2023* và Quy chế Dòng Tên.
   - Nhấp chọn từng giai đoạn để xem Thẩm quyền thực thi, Thời hạn, Biện pháp khẩn cấp và Căn cứ Giáo luật.
6. **Hộp Điểm Cốt Lõi (Key Takeaways)**:
   - Tóm tắt luận điểm then chốt ở đầu các chương quan trọng với biểu tượng La bàn và viền chỉ vàng kim.
7. **Hệ Thống 41 Chú Thích Học Thuật (Academic Citations)**:
   - Chỉ số trên dạng badge nổi bật với tooltip học thuật xem trước nguồn trích dẫn khi di chuột.
   - Nhấp chuột cuộn mượt đến mục tham khảo tương ứng kèm hiệu ứng nhấp nháy sáng (*:target highlight*).
8. **Chuẩn SEO & Open Graph Chuyên Nghiệp**:
   - Tự động sinh ảnh bìa Open Graph 1200×630px mang phong cách bìa sách cổ điển khi chia sẻ qua Zalo, Facebook, iMessage.
   - Tích hợp dữ liệu có cấu trúc Schema.org (`ScholarlyArticle` và `Organization`).

---

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Export).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4.
* **Ngôn ngữ:** TypeScript.
* **Typography:** Google Fonts (`Playfair_Display`, `Lora` qua `next/font/google`).
* **Icons:** [Lucide React](https://lucide.dev/).
* **Deployment:** GitHub Pages (tự động hóa qua GitHub Actions).

---

## 🚀 Cài Đặt & Chạy Cục Bộ (Local Development)

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm run dev

# 3. Mở trình duyệt truy cập
http://localhost:3000
```

---

## 📦 Xuất Bản Tĩnh & Triển Khai (Static Build & GitHub Pages)

```bash
# Biên dịch dự án thành các tệp HTML tĩnh trong thư mục ./out
npm run build
```

Hệ thống được cấu hình sẵn GitHub Actions workflow tại `.github/workflows/deploy.yml` để tự động biên dịch và triển khai lên **GitHub Pages** mỗi khi có thay đổi được đẩy lên nhánh `main` hoặc `master`.

---

## 📜 Bản Quyền & Trích Dẫn

© Bản quyền thuộc về **Tỉnh Dòng Tên Việt Nam** (*Societas Iesu · Provincia Vietnamensis*).  
Mọi trích dẫn nghiên cứu học thuật vui lòng dẫn nguồn theo quy chuẩn:
> *Tỉnh Dòng Tên Việt Nam. (2024). Báo Cáo Nghiên Cứu Chuyên Sâu Về Xây Dựng Văn Hóa An Toàn (Safeguarding) Trong Giáo Hội.*
