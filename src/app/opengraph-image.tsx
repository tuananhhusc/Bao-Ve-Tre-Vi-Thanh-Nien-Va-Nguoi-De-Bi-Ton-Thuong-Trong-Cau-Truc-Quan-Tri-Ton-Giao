import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Báo Cáo Nghiên Cứu: Xây Dựng Văn Hóa An Toàn Trong Giáo Hội - Tỉnh Dòng Tên Việt Nam";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F9F7F1",
          padding: "60px 80px",
          border: "16px solid #1B2A4A",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "2px solid #C5A55A",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(139, 26, 26, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8B1A1A",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              †
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#1B2A4A",
                  letterSpacing: "1px",
                }}
              >
                TỈNH DÒNG TÊN VIỆT NAM
              </span>
              <span style={{ fontSize: "14px", color: "#6B6560", fontStyle: "italic" }}>
                Societas Iesu · Provincia Vietnamensis
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(197, 165, 90, 0.18)",
              border: "1px solid #C5A55A",
              padding: "6px 16px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#8B1A1A",
              letterSpacing: "1.5px",
            }}
          >
            CHUYÊN KHẢO MỤC VỤ & PHÁP LÝ
          </div>
        </div>

        {/* Center Main Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "24px 0",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#C5A55A",
              letterSpacing: "3px",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Báo Cáo Nghiên Cứu Chuyên Sâu
          </span>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "bold",
              color: "#1B2A4A",
              lineHeight: 1.25,
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Giáo Hội
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#8B1A1A",
              fontStyle: "italic",
              marginTop: "16px",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Bảo Vệ Trẻ Vị Thành Niên Và Người Dễ Bị Tổn Thương Trong Cấu Trúc Quản Trị Tôn Giáo
          </p>
        </div>

        {/* Bottom Metadata & Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #E4DEC9",
            paddingTop: "20px",
            fontSize: "14px",
            color: "#6B6560",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>📖 Thần học · Giáo luật học · Xã hội học</span>
            <span>⚖️ Tự sắc Vos Estis Lux Mundi 2023</span>
          </div>
          <span style={{ fontWeight: "bold", color: "#8B1A1A" }}>
            Hội đồng Giám mục & Dòng Tên Việt Nam
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
