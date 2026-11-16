"use client";

import { useState } from "react";
import {
  ShieldAlert,
  FileSearch,
  Send,
  HeartHandshake,
  ChevronDown,
  Clock,
  UserCheck,
  Scale,
  Sparkles,
} from "lucide-react";

interface StepDetail {
  id: number;
  badge: string;
  title: string;
  shortDesc: string;
  icon: typeof ShieldAlert;
  authority: string;
  timeframe: string;
  keyAction: string;
  canonicalBasis: string;
}

const steps: StepDetail[] = [
  {
    id: 1,
    badge: "Giai đoạn 1",
    title: "Tiếp Nhận & Bảo Vệ Khẩn Cấp",
    shortDesc:
      "Tiếp nhận thông tin tố cáo qua các kênh bảo mật, thiết lập hàng rào bảo vệ tức thời cho nạn nhân.",
    icon: ShieldAlert,
    authority: "Thụ ủy chuyên trách và Ban tiếp nhận của Tỉnh Dòng Tên Việt Nam.",
    timeframe: "Phản hồi xác nhận trong vòng 24 đến 48 giờ kể từ khi nhận tin.",
    keyAction:
      "Cách ly người bị cáo buộc khỏi các hoạt động tiếp xúc với trẻ em hoặc người dễ bị tổn thương. Đây là biện pháp hành chính phòng ngừa tạm thời nhằm bảo vệ tuyệt đối sự an toàn của nạn nhân, không phải là lời tuyên án tội phạm.",
    canonicalBasis: "Tự sắc Vos Estis Lux Mundi năm 2023 Điều 2 đến Điều 5.",
  },
  {
    id: 2,
    badge: "Giai đoạn 2",
    title: "Thẩm Tra Sơ Bộ",
    shortDesc:
      "Thu thập chứng cứ khách quan, lắng nghe các bên với sự hỗ trợ của chuyên gia tâm lý độc lập.",
    icon: FileSearch,
    authority: "Ban điều tra độc lập phối hợp cùng chuyên gia pháp lý và tâm lý.",
    timeframe: "Hoàn tất bản tường trình sơ bộ trong thời hạn không quá 90 ngày.",
    keyAction:
      "Tôn trọng nghiêm ngặt nguyên tắc bí mật công vụ để bảo vệ danh dự của tất cả các bên. Tiến hành lắng nghe nạn nhân với thái độ đồng cảm, tôn trọng, không chất vấn mang tính phán xét.",
    canonicalBasis: "Bộ Giáo luật hiện hành Điều 1717 và Quy chế Dòng Tên.",
  },
  {
    id: 3,
    badge: "Giai đoạn 3",
    title: "Báo Cáo Tòa Thánh & Cơ Quan Dân Sự",
    shortDesc:
      "Đệ trình hồ sơ lên Bộ Giáo lý Đức tin tại Rôma và chuyển giao thông tin cho cơ quan tư pháp quốc gia.",
    icon: Send,
    authority: "Bề trên Giám tỉnh Tỉnh Dòng Tên Việt Nam.",
    timeframe: "Gửi báo cáo ngay sau khi kết thúc cuộc thẩm tra sơ bộ.",
    keyAction:
      "Đệ trình bản tường trình và toàn bộ chứng cứ lên Tòa Thánh để xin ý kiến chỉ đạo. Đồng thời, chủ động hợp tác toàn diện và minh bạch với cơ quan điều tra công an và cơ quan bảo vệ trẻ em có thẩm quyền tại Việt Nam.",
    canonicalBasis: "Tự sắc Vos Estis Lux Mundi Điều 13 và Luật Trẻ em Việt Nam 2016.",
  },
  {
    id: 4,
    badge: "Giai đoạn 4",
    title: "Tiến Trình Tư Pháp & Phục Hồi",
    shortDesc:
      "Thực thi chế tài giáo luật nghiêm minh, đồng thời cam kết đồng hành trị liệu phục hồi lâu dài cho nạn nhân.",
    icon: HeartHandshake,
    authority: "Tòa án Giáo hội có thẩm quyền và Ban Đồng hành Mục vụ.",
    timeframe: "Theo quy trình tố tụng tư pháp và kéo dài suốt đời đối với công tác phục hồi.",
    keyAction:
      "Áp dụng các chế tài nghiêm khắc đối với người phạm tội nếu được chứng minh có tội (huyền chức, cấm thi hành thừa tác vụ hoặc sa thải khỏi dòng). Tỉnh Dòng chịu trách nhiệm chi trả toàn bộ chi phí chăm sóc y tế, trị liệu tâm lý và đồng hành thiêng liêng giúp nạn nhân chữa lành vết thương.",
    canonicalBasis: "Bộ Giáo luật Điều 1395 và Huấn thị bảo vệ an toàn của Dòng Tên.",
  },
];

export function ReportingFlowchart() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const selected = steps.find((s) => s.id === activeStep) || steps[0];
  const IconComponent = selected.icon;

  return (
    <div className="my-8 sm:my-10 p-4 sm:p-6 md:p-8 rounded-lg bg-parchment-dark/40 border border-gold/50 shadow-sm transition-colors">
      {/* Title */}
      <div className="flex items-center gap-2.5 mb-2">
        <Sparkles className="w-5 h-5 text-cardinal shrink-0" strokeWidth={1.8} />
        <h4 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg md:text-xl font-bold text-navy">
          Sơ Đồ Quy Trình Tiếp Nhận, Điều Tra & Phục Hồi Nạn Nhân
        </h4>
      </div>
      <p className="text-xs sm:text-sm text-warm-gray mb-6 font-sans">
        Theo quy chuẩn Tự sắc <em>Vos Estis Lux Mundi 2023</em> và Quy chế Văn hóa An toàn của Tỉnh Dòng Tên Việt Nam (nhấp vào từng bước để xem thẩm quyền và quy chuẩn cụ thể):
      </p>

      {/* 4 Steps Navigation Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const StepIcon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3.5 rounded-md border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-cardinal focus:outline-hidden ${
                isActive
                  ? "bg-cardinal text-parchment border-cardinal-dark shadow-md"
                  : "bg-parchment/80 border-border-light text-navy hover:border-gold hover:bg-parchment"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[0.65rem] uppercase font-bold tracking-widest font-sans px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-parchment/20 text-parchment"
                        : "bg-gold/15 text-gold-dark"
                    }`}
                  >
                    {step.badge}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${
                      isActive ? "text-gold-light" : "text-cardinal"
                    }`}
                  />
                </div>
                <h5
                  className={`font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-bold leading-tight mb-1 ${
                    isActive ? "text-parchment" : "text-navy"
                  }`}
                >
                  {step.title}
                </h5>
              </div>
              <p
                className={`text-[0.7rem] line-clamp-2 mt-2 leading-relaxed ${
                  isActive ? "text-parchment/80" : "text-warm-gray"
                }`}
              >
                {step.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detailed View Card */}
      <div className="p-4 sm:p-6 rounded-md bg-parchment border border-border-light shadow-xs animate-in fade-in duration-300">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border-light">
          <div className="w-10 h-10 rounded-full bg-cardinal/10 flex items-center justify-center shrink-0">
            <IconComponent className="w-5 h-5 text-cardinal" strokeWidth={1.8} />
          </div>
          <div>
            <span className="text-[0.68rem] uppercase tracking-widest text-gold-dark font-sans font-bold block">
              Chi tiết {selected.badge}
            </span>
            <h5 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-navy leading-tight">
              {selected.title}
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans mb-4">
          <div className="flex items-start gap-2.5 p-3 rounded bg-parchment-dark/30 border border-border-light/60">
            <UserCheck className="w-4 h-4 text-cardinal shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy block mb-0.5 font-semibold">Thẩm quyền thực thi:</strong>
              <span className="text-charcoal leading-relaxed">{selected.authority}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded bg-parchment-dark/30 border border-border-light/60">
            <Clock className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy block mb-0.5 font-semibold">Thời hạn quy định:</strong>
              <span className="text-charcoal leading-relaxed">{selected.timeframe}</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded bg-parchment-dark/20 border-l-3 border-cardinal mb-3">
          <strong className="text-navy text-xs sm:text-sm block mb-1 font-sans font-semibold">
            Hành động then chốt & Biện pháp bảo vệ:
          </strong>
          <p className="text-xs sm:text-sm text-charcoal font-[family-name:var(--font-lora)] text-justify leading-relaxed">
            {selected.keyAction}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[0.72rem] text-warm-gray font-sans italic pt-2 border-t border-border-light/40">
          <Scale className="w-3.5 h-3.5 text-gold-dark shrink-0" />
          <span>Căn cứ pháp lý: {selected.canonicalBasis}</span>
        </div>
      </div>
    </div>
  );
}
