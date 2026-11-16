import { CitationRef } from "./CitationRef";
import { QuoteBlock } from "./QuoteBlock";
import { SectionOrnament } from "./SectionOrnament";
import { References } from "./References";
import { KeyTakeaways } from "./KeyTakeaways";
import { ReportingFlowchart } from "./ReportingFlowchart";
import { Shield, BookOpen, Clock, Calendar } from "lucide-react";

export function ArticleContent() {
  return (
    <article className="academic-reader w-full max-w-full font-[family-name:var(--font-lora)] text-charcoal overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════
          PHẦN ĐẦU BÁO CÁO (Scholarly Treatise Header)
      ══════════════════════════════════════════════════════════════ */}
      <header className="mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-border-light w-full">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cardinal/10 text-cardinal shrink-0">
            <Shield className="w-4 h-4" strokeWidth={2} />
          </div>
          <span className="text-[0.68rem] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-gold-dark uppercase font-sans">
            Báo cáo nghiên cứu chuyên sâu · Chuyên khảo mục vụ
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-navy leading-[1.25] tracking-tight mb-4 sm:mb-6">
          Xây Dựng Văn Hóa An Toàn Trong Các Sứ Vụ Của Tỉnh Dòng Tên Việt Nam
        </h1>

        <p className="font-[family-name:var(--font-playfair)] text-base sm:text-lg md:text-xl text-charcoal-light leading-relaxed italic mb-6 sm:mb-8">
          Về Bảo Vệ Trẻ Vị Thành Niên Và Người Dễ Bị Tổn Thương Trong Cấu Trúc Quản Trị Tôn Giáo
        </p>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-warm-gray pt-4 sm:pt-5 border-t border-border-light/80 font-sans">
          <span className="flex items-center gap-1.5">
            <strong className="text-navy font-semibold">Cơ quan:</strong> Tỉnh Dòng Tên Việt Nam
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark shrink-0" />
            <strong className="text-navy font-semibold">Tiếp cận:</strong> Thần học, Giáo luật học, Xã hội học
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warm-gray shrink-0" />
            <span>Khoảng 25 phút đọc</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warm-gray shrink-0" />
            <span>Cập nhật Tự sắc <em>Vos Estis Lux Mundi 2023</em></span>
          </span>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG I: BỐI CẢNH LỊCH SỬ
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-1" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">I.</span>
          Bối Cảnh Lịch Sử Và Sự Chuyển Dịch Hệ Hình Về Nhận Thức Trong Cấu Trúc Quản Trị Tôn Giáo
        </h2>

        <KeyTakeaways
          title="Điểm Cốt Lõi Của Chương I: Chuyển Dịch Hệ Hình"
          points={[
            "Chuyển từ tư duy phòng thủ thể chế nhằm bảo vệ danh tiếng sang ưu tiên tối thượng cho phẩm giá và sự an toàn của con người.",
            "Nhìn nhận nạn lạm dụng không đơn thuần là khủng hoảng truyền thông mà là sự tổn thương sâu sắc đòi hỏi cuộc hoán cải nội tâm của toàn Giáo hội.",
            "Tỉnh Dòng Tên Việt Nam chủ động nội tâm hóa chính sách bảo vệ an toàn vào trong toàn bộ mạng lưới mục vụ và giáo dục."
          ]}
        />

        <p className="drop-cap text-charcoal mb-5 sm:mb-6 text-justify">
          Trong hơn hai thập niên vừa qua, Giáo hội Công giáo Hoàn vũ đã phải đối mặt với một trong những cuộc khủng hoảng trầm trọng nhất trong lịch sử hiện đại: vấn nạn lạm dụng tình dục trẻ em và những người dễ bị tổn thương do các giáo sĩ, tu sĩ thực hiện, đi kèm với đó là sự che đậy có hệ thống từ giới lãnh đạo phẩm trật. Thực trạng đau lòng này đã phơi bày những lỗ hổng nghiêm trọng trong cấu trúc quản trị nội bộ, đồng thời thúc đẩy một sự chuyển dịch hệ hình mạnh mẽ và dứt khoát. Nhận thức của Giáo hội đã chuyển từ tư duy mang tính phòng thủ, nhằm &ldquo;bảo vệ danh tiếng của thể chế&rdquo;, sang một tư duy cốt lõi và nhân bản hơn là &ldquo;bảo vệ phẩm giá và sự an toàn của con người&rdquo;<CitationRef ids={[1]} />. Sự chuyển dịch này không chỉ được nhìn nhận như một yêu cầu bắt buộc về mặt quản trị nhân sự hay tuân thủ pháp luật dân sự, mà sâu xa hơn, nó là một tiến trình thanh luyện, một sự hoán cải nội tâm sâu xa nhằm phục hồi căn tính ngôn sứ và sứ mạng đích thực của Giáo hội giữa lòng thế giới<CitationRef ids={[1]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tại bình diện châu Á, và đặc biệt là Việt Nam, bối cảnh văn hóa xã hội mang những nét đặc thù riêng biệt. Mặc dù các vụ việc lạm dụng không được báo cáo với tần suất và quy mô bùng nổ như ở Bắc Mỹ hay châu Âu, nhưng nhận thức về các nguy cơ tiềm ẩn liên quan đến sự chênh lệch quyền lực trong cấu trúc phẩm trật tôn giáo đang ngày càng được các nhà lãnh đạo đánh giá một cách nghiêm túc và thực tế<CitationRef ids={[5]} />. Liên Hội đồng Giám mục Á châu đã chính thức thông qua các chính sách toàn diện về bảo vệ trẻ vị thành niên và người lớn dễ bị tổn thương, đặt ra nền tảng vững chắc cho các Hội đồng Giám mục quốc gia và các Dòng tu địa phương thiết lập khung pháp lý nội bộ<CitationRef ids={[6]} />. Tại Việt Nam, Hội đồng Giám mục đã từng bước phác thảo các quy chế hướng dẫn bảo vệ trẻ em, thành lập các ủy ban chuyên trách trực thuộc, và tại nhiều giáo phận như Tổng Giáo phận Sài Gòn, các Văn phòng tiếp nhận trình báo và bảo vệ trẻ vị thành niên cùng người dễ bị tổn thương đã được chính thức thiết lập và đi vào hoạt động trong đầu năm 2024<CitationRef ids={[7]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Hòa chung trong nỗ lực cấp thiết và mang tính sống còn đó của toàn thể Giáo hội, Tỉnh Dòng Tên Việt Nam, một dòng tu có truyền thống lâu đời với hàng trăm tu sĩ đang dấn thân trong các sứ vụ đa dạng từ giáo dục, mục vụ giới trẻ đến công tác xã hội, đã thiết lập, công bố và áp dụng chính sách chuyên biệt về việc xây dựng văn hóa an toàn trong mọi hoạt động<CitationRef ids={[12]} />. Chính sách này quy định rõ ràng các bộ quy tắc ứng xử, cơ chế trình báo, các tiêu chuẩn đạo đức và thiết lập những ranh giới tương quan mà mọi tu sĩ, nhân viên và tình nguyện viên phải tuyệt đối tuân thủ nhằm đảm bảo một môi trường lành mạnh, vắng bóng mọi hình thức bạo hành, bóc lột hay lạm dụng<CitationRef ids={[12]} />. Báo cáo này sẽ phân tích một cách kiệt cùng cấu trúc, nền tảng thần học, cơ chế vận hành, những đối chiếu pháp lý và hàm ý sâu xa đằng sau bộ chính sách văn hóa an toàn của Tỉnh Dòng Tên Việt Nam dưới góc độ Thần học, Giáo luật học, và Xã hội học tôn giáo.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG II: NỀN TẢNG THẦN HỌC & LINH ĐẠO INHAXIÔ
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-2" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">II.</span>
          Nền Tảng Thần Học, Giáo Huấn Và Linh Đạo Inhaxiô Trong Công Tác Bảo Vệ An Toàn
        </h2>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Việc thiết lập văn hóa an toàn không phải là một sự cấy ghép khiên cưỡng các quy định quản trị nhân sự của các tập đoàn thế tục vào môi trường tôn giáo. Trái lại, công tác an toàn bắt nguồn trực tiếp từ nguồn mạch Thần học Kitô giáo, từ chính giáo huấn của Đức Giêsu Kitô và được soi sáng qua lăng kính linh đạo đặc thù của Dòng Tên.
        </p>

        {/* 2.1 */}
        <h3 id="section-2-1" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Hiện Thân Của Lòng Thương Xót Và Sự Kiến Tạo Không Gian An Toàn
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Khái niệm bảo vệ con người được đặt nền tảng từ chính cách thức Đức Giêsu Kitô hiện diện và hành động trong lịch sử. Người là Đấng luôn kiến tạo những không gian an toàn, đón nhận những người yếu thế, chữa lành người bệnh và lắng nghe những kẻ bị loại trừ khỏi các cấu trúc xã hội và tôn giáo đương thời<CitationRef ids={[1]} />. Trong các trình thuật Tin Mừng, Đức Giêsu đã đưa ra một nguyên tắc mục vụ bất di bất dịch thông qua lời mời gọi: <em>&ldquo;Cứ để trẻ em đến với Thầy, đừng ngăn cấm chúng&rdquo;</em> (Mc 10,14)<CitationRef ids={[1]} />. Đồng thời, Người cũng đưa ra những cảnh báo vô cùng nghiêm khắc, mang tính phán xét tuyệt đối đối với những ai lạm dụng niềm tin của những người bé mọn:
        </p>

        <QuoteBlock source="Tin Mừng theo thánh Mátthêu" reference="Mt 18, 5 đến 6">
          &ldquo;Ai làm cớ cho một trong những kẻ bé mọn đang tin Thầy đây phải sa ngã, thì thà treo cối đá lớn vào cổ nó mà xô cho chìm xuống đáy biển còn hơn.&rdquo;
        </QuoteBlock>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Từ nền tảng Kinh Thánh này, việc bảo vệ con người được các nhà thần học nhìn nhận là con đường thực hành đức ái đích thực. Nó vượt ra khỏi những lời cầu nguyện hay tuyên bố từ thiện suông để tiến tới những hành động cụ thể, có tính can thiệp nhằm chăm sóc vết thương và bảo đảm sự an toàn, tựa như hình ảnh người Samari nhân hậu đã đích thân băng bó và đưa người bị nạn đến nơi an toàn<CitationRef ids={[1]} />. Công tác bảo vệ an toàn, do đó, là một yếu tố cấu thành không thể tách rời của sứ mạng loan báo Tin Mừng; bởi lẽ, một Giáo hội không thể rao giảng về tình yêu của Thiên Chúa nếu ngay trong lòng nó lại chứa đựng những tác nhân gây tổn thương sâu sắc đến thể xác và tinh thần của con người<CitationRef ids={[1]} />.
        </p>

        {/* 2.2 */}
        <h3 id="section-2-2" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Linh Đạo Inhaxiô Và Lời Kêu Gọi Canh Tân Của Đức Thánh Cha Phanxicô
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Đối với Tỉnh Dòng Tên Việt Nam, chính sách bảo vệ an toàn được nội tâm hóa sâu sắc qua lăng kính của linh đạo Inhaxiô, do Thánh Inhaxiô Loyola sáng lập. Căn tính của một tu sĩ Dòng Tên, hay một Giêsu hữu, được định hình bởi khát khao bước theo Chúa Giêsu và chiến đấu dưới cờ Thập giá vì ơn cứu độ của bản thân và tha nhân<CitationRef ids={[12]} />. Linh đạo này nhấn mạnh đến khái niệm sự chăm sóc toàn diện từng cá nhân, đòi hỏi người tu sĩ phải nhìn nhận và tôn trọng phẩm giá độc nhất của từng con người mà họ phục vụ. Lời mời gọi <em>&ldquo;nên hoàn thiện như Cha trên trời là Đấng hoàn thiện&rdquo;</em> (Mt 5,48) đòi hỏi các Giêsu hữu không ngừng phân định, hoán cải, sửa đổi chính mình, và đặc biệt cam kết dấn thân bảo vệ những người bé mọn khỏi mọi sự đe dọa<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự tương hợp giữa linh đạo chăm sóc toàn diện của Dòng Tên và định hướng bảo vệ an toàn giải thích lý do tại sao Dòng Tên không coi trọng công tác này như một biện pháp đối phó rủi ro pháp lý, mà là một sứ mạng mang tính ngôn sứ<CitationRef ids={[4]} />. Hơn nữa, Đức Giáo hoàng Phanxicô, vị Giáo hoàng đầu tiên xuất thân từ Dòng Tên, đã liên tục nhấn mạnh rằng nạn lạm dụng tình dục đã cướp đi cuộc đời của vô số người, và cách duy nhất để đương đầu với sự dữ này là coi đó như một phận vụ liên hệ đến toàn thể Dân Chúa<CitationRef ids={[12]} />. Đức Thánh Cha khẳng định việc nhìn nhận các sai phạm trong quá khứ với tâm hồn sám hối và trái tim rộng mở chính là chìa khóa để Giáo hội được canh tân từ bên trong; và mọi nỗ lực xóa bỏ tệ nạn này sẽ thất bại nếu thiếu đi sự tham gia tích cực, minh bạch của tất cả các thành phần<CitationRef ids={[12]} />.
        </p>

        <QuoteBlock source="Đức Giáo hoàng Phanxicô" reference="Giáo huấn về bảo vệ an toàn">
          &ldquo;Việc nhìn nhận các sai phạm trong quá khứ với tâm hồn sám hối và trái tim rộng mở chính là chìa khóa để Giáo hội được canh tân từ bên trong; và mọi nỗ lực xóa bỏ tệ nạn này sẽ thất bại nếu thiếu đi sự tham gia tích cực, minh bạch của tất cả các thành phần.&rdquo;
        </QuoteBlock>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG III: KHUNG PHÁP LÝ DÂN SỰ & GIÁO LUẬT
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-3" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">III.</span>
          Khung Pháp Lý Dân Sự Và Giáo Luật: Một Sự Giao Thoa Phức Tạp
        </h2>

        <KeyTakeaways
          title="Điểm Cốt Lõi Của Chương III: Chuẩn Mực Pháp Lý Kép"
          points={[
            "Tỉnh Dòng Tên chủ động nâng độ tuổi bảo vệ vị thành niên lên đủ 18 tuổi, vượt trên mức 16 tuổi của Luật Trẻ em Việt Nam 2016.",
            "Mở rộng diện bảo vệ sang người trưởng thành dễ bị tổn thương theo tinh thần Tự sắc Vos Estis Lux Mundi năm 2023.",
            "Áp dụng nguyên tắc song hành: tuân thủ nghiêm ngặt pháp luật hình sự quốc gia đồng thời thi hành kỷ luật Giáo luật nghiêm minh."
          ]}
        />

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Để một chính sách bảo vệ an toàn có hiệu lực thực thi, nó phải được neo giữ vào các bộ luật. Tỉnh Dòng Tên Việt Nam hoạt động trong một thực tại kép: một mặt phải tuân thủ nghiêm ngặt hệ thống pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, mặt khác phải phục quyền tuyệt đối trước hệ thống Giáo luật của Tòa Thánh Vatican. Sự giao thoa và đôi khi là sự song hành về tiêu chuẩn giữa hai hệ thống này đã tạo ra một bộ quy tắc ứng xử vừa chặt chẽ vừa toàn diện.
        </p>

        {/* 3.1 */}
        <h3 id="section-3-1" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Luật Trẻ Em Việt Nam Năm 2016
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Trên bình diện dân sự, Luật Trẻ em năm 2016 (Số 102/2016/QH13) là văn bản pháp lý tối cao quy định về quyền, bổn phận của trẻ em, và trách nhiệm của cơ quan, tổ chức, gia đình trong việc bảo vệ các em. Luật quy định rõ ràng rằng trẻ em có quyền sống, quyền được chăm sóc, nuôi dưỡng, và đặc biệt là quyền bất khả xâm phạm về đời sống riêng tư, bí mật cá nhân, quyền được bảo vệ dưới mọi hình thức để không bị xâm hại tình dục, bạo lực, bóc lột, bỏ rơi hay bỏ mặc<CitationRef ids={[19]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Pháp luật dân sự thiết lập một danh mục dài các hành vi bị nghiêm cấm, trong đó định nghĩa xâm hại tình dục trẻ em bao gồm việc dùng vũ lực, đe dọa, ép buộc, lôi kéo, dụ dỗ trẻ em tham gia vào các hành vi liên quan đến tình dục dưới mọi hình thức, bao gồm hiếp dâm, cưỡng dâm, dâm ô, và sử dụng trẻ em vào mục đích khiêu dâm<CitationRef ids={[19]} />. Luật Trẻ em 2016 cũng thiết lập các cấp độ bảo vệ trẻ em rất rõ ràng, bao gồm ba cấp độ: <strong>phòng ngừa</strong> (xây dựng môi trường sống an toàn, trang bị kiến thức tự bảo vệ); <strong>hỗ trợ</strong> (cung cấp tư vấn, pháp lý cho những trẻ có hoàn cảnh đặc biệt); và <strong>can thiệp</strong> (chăm sóc y tế, trị liệu tâm lý, bố trí nơi tạm trú an toàn cho trẻ đã bị xâm hại)<CitationRef ids={[19]} />. Mọi tổ chức, cá nhân, trong đó bao gồm các cơ sở tôn giáo, đều có nghĩa vụ phát hiện, thông tin, và tố giác các hành vi vi phạm pháp luật xâm hại trẻ em cho các cơ quan có thẩm quyền<CitationRef ids={[20]} />.
        </p>

        {/* 3.2 */}
        <h3 id="section-3-2" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Khung Giáo Luật Cập Nhật Và Tông Thư <em>Vos Estis Lux Mundi</em>
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Trên bình diện Giáo hội, sự ra đời của Tông thư dưới hình thức Tự sắc <em>Vos Estis Lux Mundi</em> (Các con là ánh sáng thế gian) vào năm 2019, và được Đức Thánh Cha Phanxicô ban hành bản cập nhật thường viễn vào ngày 25 tháng 3 năm 2023 (có hiệu lực từ ngày 30 tháng 4 năm 2023), đã tạo ra một cuộc cách mạng về pháp lý và thủ tục hình sự nội bộ của Giáo hội<CitationRef ids={[18]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tự sắc này áp dụng phổ quát cho toàn Giáo hội, thiết lập các tiêu chuẩn tố tụng nhằm tiếp nhận trình báo liên quan đến các giáo sĩ, thành viên các Tu hội đời sống thánh hiến, Tu đoàn tông đồ, và được mở rộng trong bản 2023 cho cả những người điều hành các hiệp hội tín hữu quốc tế<CitationRef ids={[18]} />. Văn bản định nghĩa rõ ràng các tội ác thuộc về điều răn thứ sáu của Thập giới, bao gồm việc sử dụng bạo lực, đe dọa hoặc lạm dụng quyền lực để ép buộc hành vi tình dục; thực hiện hành vi tình dục với trẻ vị thành niên hoặc người dễ bị tổn thương; và việc sản xuất, tàng trữ, phân phối các ấn phẩm khiêu dâm trẻ em<CitationRef ids={[18]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Đặc biệt, <em>Vos Estis Lux Mundi</em> nhắm thẳng vào cội rễ của sự che đậy bằng cách hình sự hóa các hành vi của những người có thẩm quyền (như Giám mục, Bề trên Dòng tu) nếu họ có hành động hoặc thiếu hành động nhằm cản trở, tránh né các cuộc điều tra dân sự hoặc giáo luật<CitationRef ids={[1]} />. Tự sắc yêu cầu mọi giáo sĩ và tu sĩ có nghĩa vụ báo cáo bắt buộc phải báo cáo khi có thông tin hoặc cơ sở hợp lý để tin rằng một tội phạm lạm dụng đã xảy ra<CitationRef ids={[26]} />. Việc thiết lập các hệ thống tiếp nhận báo cáo dễ tiếp cận, an toàn cho cộng đồng và bảo vệ người tố giác khỏi mọi sự trả thù, kỳ thị là một mệnh lệnh mang tính pháp lý<CitationRef ids={[26]} />.
        </p>

        {/* 3.3 */}
        <h3 id="section-3-3" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Đối Chiếu Và Tổng Hợp Tiêu Chuẩn Bảo Vệ
        </h3>

        <p className="text-charcoal mb-4 sm:mb-6 text-justify">
          Khi đối chiếu giữa Luật Trẻ em Việt Nam 2016 và các quy định của Giáo hội, Tỉnh Dòng Tên Việt Nam đứng trước sự khác biệt về một số định nghĩa cốt lõi, đặc biệt là độ tuổi của vị thành niên. Quyết định của Dòng Tên trong việc lựa chọn tiêu chuẩn áp dụng phản ánh cam kết bảo vệ tối đa của họ, được thể hiện rõ qua bảng so sánh dưới đây:
        </p>

        {/* Bảng đối chiếu có thanh cuộn ngang độc lập cho mobile */}
        <div className="w-full max-w-full my-6 overflow-hidden">
          <div className="text-[0.72rem] text-warm-gray italic font-sans mb-1 flex items-center justify-between sm:hidden">
            <span>← Vuốt ngang để xem toàn bộ bảng đối chiếu →</span>
          </div>
          <div className="w-full max-w-full overflow-x-auto border-t-2 border-b-2 border-gold-dark">
            <table className="report-table text-xs sm:text-sm md:text-base min-w-[560px] w-full">
              <caption className="sr-only">
                Bảng so sánh tiêu chuẩn bảo vệ trẻ vị thành niên giữa Luật Trẻ em Việt Nam 2016, Giáo luật Công giáo và Tiêu chuẩn của Dòng Tên
              </caption>
              <thead>
                <tr>
                  <th className="w-1/4">Yếu Tố Điều Chỉnh</th>
                  <th className="w-1/4">Luật Trẻ Em Việt Nam 2016</th>
                  <th className="w-1/4">Tông Thư Vos Estis Lux Mundi 2023</th>
                  <th className="w-1/4">Chính Sách Của Tỉnh Dòng Tên VN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-navy">Độ tuổi định nghĩa trẻ em, trẻ vị thành niên</td>
                  <td>Người dưới 16 tuổi<CitationRef ids={[12]} />.</td>
                  <td>Bất kỳ người nào dưới 18 tuổi, hoặc người được pháp luật tương đương hóa với vị thành niên<CitationRef ids={[18]} />.</td>
                  <td className="font-medium text-cardinal-dark">Thống nhất áp dụng tiêu chuẩn cao hơn: trẻ vị thành niên được hiểu là <strong>những người chưa tròn 18 tuổi</strong><CitationRef ids={[12]} />.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy">Đối tượng bảo vệ mở rộng</td>
                  <td>Tập trung vào trẻ em dưới 16 tuổi và các đối tượng thuộc nhóm trợ giúp xã hội<CitationRef ids={[19]} />.</td>
                  <td>Bổ sung hạng mục Người dễ bị tổn thương không phân biệt tuổi tác<CitationRef ids={[18]} />.</td>
                  <td className="font-medium text-cardinal-dark">Áp dụng đầy đủ khái niệm Người trưởng thành dễ bị tổn thương trong mọi quy tắc tiếp xúc<CitationRef ids={[12]} />.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy">Bảo mật và Quyền riêng tư</td>
                  <td>Cấm tiết lộ đời tư, bí mật cá nhân khi chưa có sự đồng ý của trẻ từ 7 tuổi và người giám hộ<CitationRef ids={[20]} />.</td>
                  <td>Bảo vệ tính bảo mật thông tin, bảo vệ danh tiếng của người tố cáo và cả người bị cáo buộc cho đến khi có phán quyết<CitationRef ids={[26]} />.</td>
                  <td className="font-medium text-cardinal-dark">Áp dụng nguyên tắc Trong suốt, Trách nhiệm, Lắng nghe, Chăm sóc; cam kết bảo mật quá trình điều tra nội bộ<CitationRef ids={[12]} />.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy">Nghĩa vụ tố giác tội phạm</td>
                  <td>Trách nhiệm phát hiện, tố giác đối với mọi công dân khi phát hiện hành vi vi phạm pháp luật<CitationRef ids={[20]} />.</td>
                  <td>Trách nhiệm trình báo mang tính bắt buộc dưới hình phạt Giáo luật đối với mọi giáo sĩ và tu sĩ<CitationRef ids={[26]} />.</td>
                  <td className="font-medium text-cardinal-dark">Thiết lập kênh báo cáo chuyên trách qua Thụ ủy Dòng Tên, khuyến khích sự minh bạch từ mọi thành viên<CitationRef ids={[12]} />.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự lựa chọn áp dụng độ tuổi 18 của Tỉnh Dòng Tên Việt Nam, thay vì dừng lại ở mức 16 tuổi theo luật dân sự, cho thấy một sự nhận thức tiến bộ về tâm lý học phát triển. Giai đoạn 16 đến 18 tuổi là thời kỳ thanh thiếu niên có nhiều biến động tâm sinh lý, và họ vẫn hoàn toàn nằm trong thế yếu trước quyền lực của người trưởng thành, đặc biệt là các giáo sĩ và tu sĩ. Bằng cách kéo dài biên độ bảo vệ, Dòng Tên đảm bảo rằng không có khoảng trống pháp lý nào bị lợi dụng trong công tác mục vụ giới trẻ<CitationRef ids={[12]} />.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG IV: KIẾN TẠO KHÔNG GIAN AN TOÀN & RANH GIỚI
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-4" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">IV.</span>
          Phân Tích Chuyên Sâu Các Nguyên Tắc Kiến Tạo Không Gian An Toàn Và Thiết Lập Ranh Giới
        </h2>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Với hơn 210 tu sĩ đang hoạt động tại Việt Nam trong các giai đoạn huấn luyện và thi hành sứ vụ đa dạng như linh hướng, giáo dục, đồng hành cùng sinh viên, di dân và người nghèo, Tỉnh Dòng Tên nhận thức rõ nguy cơ tiềm ẩn của các điểm mù trong quản lý<CitationRef ids={[16]} />. Một không gian an toàn đúng nghĩa phải hội tụ đủ bốn yếu tố: <strong>không gian vật lý an toàn</strong> (không có đe dọa, xâm phạm), <strong>tương quan an toàn</strong> (tôn trọng ranh giới), <strong>thực hành quy trình an toàn</strong>, và <strong>cơ cấu tổ chức an toàn</strong><CitationRef ids={[1]} />. Chính sách của Tỉnh Dòng Tên đã cụ thể hóa các yếu tố này thành bộ quy tắc ứng xử nghiêm ngặt áp dụng cho toàn bộ Giêsu hữu, nhân viên, và tình nguyện viên<CitationRef ids={[12]} />.
        </p>

        {/* 4.1 */}
        <h3 id="section-4-1" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Định Nghĩa Và Tầm Quan Trọng Của Người Trưởng Thành Dễ Bị Tổn Thương
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Một trong những bước tiến quan trọng nhất về mặt khái niệm của <em>Vos Estis Lux Mundi</em> 2023, được Dòng Tên Việt Nam hấp thụ hoàn toàn, là sự công nhận đối tượng người trưởng thành dễ bị tổn thương<CitationRef ids={[12]} />. Theo định nghĩa, đây là những người từ 18 tuổi trở lên nhưng đang ở trong tình trạng đau ốm, suy nhược về thể chất hoặc tinh thần, hoặc bị tước đoạt quyền tự do cá nhân, dẫn đến việc họ bị hạn chế khả năng hiểu biết, khả năng diễn tả mong muốn, hoặc không có khả năng chống lại hành vi phạm tội<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự xuất hiện của khái niệm này đánh dấu một sự trưởng thành trong nhận thức của Giáo hội về bản chất của lạm dụng tình dục: đó không chỉ là sự thỏa mãn xung năng tình dục thuần túy, mà cốt lõi của nó là <strong>sự lạm dụng quyền lực</strong> và <strong>lạm dụng lương tâm</strong><CitationRef ids={[1]} />. Trong môi trường tôn giáo phương Đông, nơi tính thứ bậc, sự thiêng liêng hóa giới tu sĩ và tinh thần “tôn sư trọng đạo” được đề cao, sự chênh lệch quyền lực giữa một tu sĩ (người đại diện cho uy quyền thần linh) và một tín hữu đang trải qua khủng hoảng tâm lý là vô cùng to lớn. Người tín hữu trong trạng thái đau buồn, cần tư vấn, hoặc phụ thuộc tài chính hoàn toàn có thể trở thành nạn nhân của khai thác tình dục. Khai thác tình dục được định nghĩa rõ ràng trong chính sách của Dòng Tên là việc ép buộc, lôi kéo tình dục do một người có quyền lực đưa ra để đổi lấy một đề nghị nào đó. Trong các tình huống này, nạn nhân có thể có vẻ như đã “đồng thuận”, nhưng thực chất họ tin rằng mình không có lựa chọn nào khác; do đó, sự “đồng thuận” này bị vô hiệu và được phân loại là một hình thức bóc lột<CitationRef ids={[12]} />.
        </p>

        {/* 4.2 */}
        <h3 id="section-4-2" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Minh Bạch Hóa Không Gian Vật Lý Và Quy Tắc Hai Người Trưởng Thành
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tính minh bạch là công cụ phòng ngừa rủi ro hiệu quả nhất. Chính sách của Dòng Tên tập trung vào việc triệt tiêu các cơ hội tương tác biệt lập trong bóng tối thông qua các quy tắc hành động bắt buộc:
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          <strong>Sự hiện diện của người thứ ba là tiêu chuẩn vàng.</strong> Chính sách bắt buộc thực hiện Quy tắc phải có hai người trưởng thành khi gặp gỡ riêng tư với trẻ vị thành niên. Không một tu sĩ hay tình nguyện viên nào được phép ở một mình với một trẻ em trong phòng kín mà không có sự hiện diện của cha mẹ các em hoặc một người trưởng thành khác<CitationRef ids={[12]} />. Quy tắc này chỉ chấp nhận một ngoại lệ rất hẹp là trong khuôn khổ tư vấn tâm lý và hướng dẫn tâm linh (nơi tính bảo mật tuyệt đối được yêu cầu). Tuy nhiên, ngay cả trong trường hợp đó, người tư vấn phải đảm bảo có một người trưởng thành khác có mặt ở khu vực lân cận để hỗ trợ hoặc quan sát<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Song song đó là <strong>quy tắc về không gian vật lý mở</strong>. Bất kỳ cuộc gặp gỡ, làm việc nào cũng phải diễn ra trong môi trường công khai, có thể nhìn thấy được. Cánh cửa phòng gặp gỡ phải được khép hờ hoặc trên cửa phải có gắn cửa sổ bằng kính trong suốt để những người bên ngoài có thể nhìn rõ ràng các hoạt động bên trong<CitationRef ids={[12]} />. Sự cô lập về mặt vật lý là điều kiện tiên quyết để hành vi lạm dụng diễn ra; do đó, việc phá vỡ sự cô lập này chính là cách thức chặt đứt cơ hội phạm tội từ trong trứng nước, đồng thời bảo vệ các tu sĩ khỏi những cáo buộc sai trái, thiếu căn cứ.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Hơn nữa, Dòng Tên yêu cầu mọi sự tham gia của trẻ vị thành niên vào các sinh hoạt mục vụ đều phải có <strong>sự đồng thuận bằng văn bản của phụ huynh hoặc người giám hộ</strong><CitationRef ids={[7]} />. Sự đồng thuận này là cơ sở pháp lý để xác nhận việc chuyển giao trách nhiệm giám hộ tạm thời, cho thấy tính chuyên nghiệp và trách nhiệm dân sự trong hoạt động tổ chức cộng đồng.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG V: PHÁ VỠ CHU TRÌNH THAO TÚNG TÂM LÝ
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-5" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">V.</span>
          Phá Vỡ Chu Trình Thao Túng Tâm Lý Và Quản Trị Cảm Xúc
        </h2>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Lạm dụng tình dục trẻ em và người dễ bị tổn thương hiếm khi là một hành động bộc phát, bạo lực đột ngột của một người lạ mặt. Xã hội học tội phạm chỉ ra rằng phần lớn các vụ lạm dụng được thực hiện bởi người quen biết, có uy tín, thông qua một quá trình thao túng tâm lý tinh vi, kéo dài nhằm bồi đắp niềm tin và phá vỡ các rào cản phòng vệ của nạn nhân. Quá trình này được gọi là <strong>thao túng tâm lý</strong><CitationRef ids={[1]} />. Bộ quy tắc ứng xử của Tỉnh Dòng Tên Việt Nam được thiết kế như những chốt chặn chi tiết nhằm cắt đứt mọi mắt xích trong chu trình thao túng này.
        </p>

        {/* Bảng chống thao túng tâm lý với cuộn ngang độc lập */}
        <div className="w-full max-w-full my-6 overflow-hidden">
          <div className="text-[0.72rem] text-warm-gray italic font-sans mb-1 flex items-center justify-between sm:hidden">
            <span>← Vuốt ngang để xem toàn bộ bảng quy tắc →</span>
          </div>
          <div className="w-full max-w-full overflow-x-auto border-t-2 border-b-2 border-gold-dark">
            <table className="report-table text-xs sm:text-sm md:text-base min-w-[540px] w-full">
              <thead>
                <tr>
                  <th className="w-2/5">Các Hành Vi Bị Nghiêm Cấm Trong Quy Tắc</th>
                  <th className="w-3/5">Chốt Chặn Tâm Lý Chống Lại Quá Trình Thao Túng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-navy"><strong>Không thảo luận lịch sử tình dục cá nhân</strong> hoặc các chủ đề mang tính gợi dục với trẻ em và người dễ bị tổn thương, trừ bối cảnh tư vấn mục vụ rất cụ thể<CitationRef ids={[12]} />.</td>
                  <td>Đây là biện pháp ngăn chặn hành vi thử nghiệm ranh giới. Kẻ lạm dụng thường dùng cách này để bình thường hóa các chủ đề tính dục, làm cho nạn nhân bớt cảnh giác và từ từ biến đổi một tương quan mục vụ thành tương quan có định hướng tình ái<CitationRef ids={[12]} />.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy"><strong>Không cung cấp rượu, thuốc lá</strong>; không tiếp cận trẻ em khi bản thân đang chịu ảnh hưởng của rượu bia<CitationRef ids={[12]} />.</td>
                  <td>Rượu bia và các chất kích thích làm suy giảm chức năng phán đoán của vỏ não, phá vỡ sự ức chế thần kinh, khiến các xung động bản năng lấn át lý trí. Việc đưa chất kích thích cho nạn nhân là phương thức làm giảm khả năng phản kháng và khả năng đánh giá tình huống của họ<CitationRef ids={[12]} />.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy"><strong>Không yêu cầu trẻ em giữ bí mật</strong> về mối tương giao hay các hoạt động chung giữa hai người<CitationRef ids={[7]} />.</td>
                  <td>Việc tạo ra một &ldquo;bí mật chung&rdquo; là công cụ kiểm soát cốt lõi. Nó nhằm mục đích cô lập nạn nhân khỏi sự bảo vệ của gia đình và cộng đồng, tạo ra một không gian tâm lý đồng lõa, khiến nạn nhân cảm thấy mình dự phần vào lỗi lầm và không dám lên tiếng.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy"><strong>Không khỏa thân, thay quần áo, tắm rửa</strong> với sự hiện diện của trẻ em, không ở chung phòng qua đêm<CitationRef ids={[12]} />.</td>
                  <td>Biện pháp này bảo vệ tính nguyên vẹn và sự riêng tư về mặt thân thể. Việc chia sẻ không gian nhạy cảm sẽ làm mờ ranh giới cá nhân, dẫn đến sự phơi nhiễm tình dục và bình thường hóa các tương tác thể xác không phù hợp.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy"><strong>Không áp dụng hình phạt kỷ luật thể xác</strong> như phát vào mông, tát, véo, đánh đập, làm nhục hay bạo hành<CitationRef ids={[12]} />.</td>
                  <td>Bạo hành thể xác và làm nhục tâm lý làm suy yếu nghiêm trọng lòng tự trọng của nạn nhân. Nó tạo ra một cơ chế sợ hãi, dẫn đến tình trạng khuất phục hoàn toàn trước quyền lực của người lớn, biến nạn nhân thành một công cụ bị động dễ bị sai khiến.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Bên cạnh các lệnh cấm, việc biểu lộ tình cảm là một yếu tố không thể thiếu trong tương quan mục vụ, nhưng nó phải được quản trị chặt chẽ. Chính sách quy định rõ các hình thức tiếp xúc được chấp nhận như: bắt tay, nắm tay dắt trẻ nhỏ đi khi cần thiết, quỳ hoặc cúi xuống ôm trẻ nhỏ (chỉ khi có sự cho phép của cha mẹ), nắm tay nhau trong lúc cầu nguyện chung, những cái ôm choàng ngắn trong các cuộc họp nhóm, hoặc vỗ nhẹ trên đầu, trên vai như một sự khích lệ<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Ngược lại, chính sách nghiêm cấm tuyệt đối mọi tiếp xúc thân thể mang tính chất kích thích, sờ mó tình dục (vào vùng nhạy cảm), hoặc các hành vi dễ gây hiểu lầm như: ôm ấp kéo dài, hôn vào miệng hay má, chạm vào vùng mông, vật lộn, cù lét, xoa bóp, hoặc cho trẻ (trên 4 tuổi) cưỡi trên lưng<CitationRef ids={[12]} />. Việc phân định rõ ràng các ranh giới này giúp người thực thi sứ vụ không bị rơi vào những vùng xám của các cử chỉ mang tính hàm hồ, bảo vệ sự trong sáng của cả nạn nhân lẫn người thi hành sứ vụ.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG VI: THÁCH THỨC TRONG KHÔNG GIAN MẠNG
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-6" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">VI.</span>
          Thách Thức Trong Không Gian Mạng Và Truyền Thông Kỷ Nguyên Số
        </h2>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự bùng nổ của không gian mạng và công nghệ số đã tạo ra một ma trận văn hóa mới, nơi Giáo hội tìm thấy những cơ hội to lớn để loan báo Tin Mừng, nhưng đồng thời cũng phải đối mặt với những hình thái rủi ro hoàn toàn mới, tinh vi và phi biên giới<CitationRef ids={[2]} />. Sự ẩn danh, khoảng cách phi vật lý, và tính lưu trữ vĩnh viễn của dữ liệu kỹ thuật số đòi hỏi Giáo hội phải đặt phẩm giá, sự an toàn và hạnh phúc của trẻ em vào vị trí trung tâm trong công tác quản trị công nghệ, đặc biệt là với sự trỗi dậy của Trí tuệ nhân tạo<CitationRef ids={[32]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Thấu hiểu những rủi ro này, Tỉnh Dòng Tên Việt Nam yêu cầu các thành viên của mình phải duy trì sự cảnh giác cao độ trong các hoạt động trực tuyến. Một trong những quy tắc nghiêm ngặt nhất là việc các tu sĩ <strong>không nên và không được phép kết bạn hoặc giao tiếp trực tuyến với trẻ vị thành niên</strong> thông qua các phương tiện truyền thông điện tử cá nhân như mạng xã hội (Facebook, Zalo), tin nhắn tức thời, tin nhắn điện thoại, hoặc thư điện tử<CitationRef ids={[12]} />. Quy định này chỉ có ngoại lệ trong trường hợp trẻ em đó là người thân trong gia đình, hoặc khi việc giao tiếp trực tuyến đó là một phần không thể tách rời của trách nhiệm chuyên môn hoặc thừa tác vụ được giao (chẳng hạn như thông báo lịch học giáo lý cho nhóm), và trong trường hợp này, các giao tiếp phải mang tính tập thể và minh bạch<CitationRef ids={[12]} />.
        </p>

        <QuoteBlock source="Quy tắc truyền thông số" reference="Chính sách Tỉnh Dòng Tên Việt Nam">
          &ldquo;Các tu sĩ không nên và không được phép kết bạn hoặc giao tiếp trực tuyến với trẻ vị thành niên thông qua các phương tiện truyền thông điện tử cá nhân. Mọi giao tiếp trực tuyến liên quan đến thừa tác vụ phải mang tính tập thể, công khai và minh bạch.&rdquo;
        </QuoteBlock>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự cẩn trọng tuyệt đối này của Dòng Tên tương thích hoàn hảo với tầm nhìn của Quỹ Nhi đồng Liên Hiệp Quốc và Bộ Quy tắc ứng xử về bảo vệ trẻ em trên môi trường mạng của Bộ Thông tin và Truyền thông Việt Nam. Các quy tắc quốc gia yêu cầu cộng đồng mạng phải ứng xử lành mạnh, phù hợp với độ tuổi trẻ em, tuyệt đối không sử dụng hình ảnh của trẻ em cho mục đích tiêu cực, và ngăn chặn các hành vi gửi thông điệp đe dọa, xúc phạm hoặc lôi kéo tình dục<CitationRef ids={[34]} />. Bằng cách cấm thiết lập các kênh quan hệ cá nhân bí mật qua không gian số, chính sách của Dòng Tên đã chặt đứt nguy cơ thao túng trực tuyến. Đây là một phương thức ngày càng phổ biến mà những kẻ lạm dụng sử dụng để tiếp cận, thu thập hình ảnh, và xây dựng một mối quan hệ tin tưởng giả tạo với trẻ vị thành niên trong không gian số mà các bậc phụ huynh hoàn toàn không hay biết<CitationRef ids={[7]} />. Sự thận trọng trong truyền thông số, do đó, là sự mở rộng hợp lý của quy tắc cửa mở vào trong không gian ảo.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG VII: CƠ CHẾ TIẾP NHẬN CÁO BUỘC & GIẢI TRÌNH
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-7" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">VII.</span>
          Cơ Chế Tiếp Nhận Cáo Buộc, Quản Trị Khủng Hoảng Và Trách Nhiệm Giải Trình
        </h2>

        <KeyTakeaways
          title="Điểm Cốt Lõi Của Chương VII: Quản Trị Minh Bạch & Khách Quan"
          points={[
            "Thiết lập kênh tiếp nhận tố cáo đa dạng, bảo vệ danh tính tuyệt đối cho nạn nhân và nhân chứng.",
            "Áp dụng biện pháp phòng ngừa khẩn cấp tức thời nhằm bảo vệ trẻ em trong suốt quá trình điều tra sơ bộ.",
            "Cam kết bồi thường, hỗ trợ y tế và đồng hành trị liệu tâm lý trọn đời cho người bị tổn thương."
          ]}
        />

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Một tuyên ngôn về văn hóa an toàn sẽ chỉ tồn tại trên những trang giấy vô tri nếu nó thiếu đi một cơ chế tiếp nhận trình báo độc lập, các biện pháp điều tra khách quan và những chế tài xử lý nghiêm minh. Quá trình thay đổi não trạng của Giáo hội đòi hỏi việc xóa bỏ triệt để tâm lý trốn tránh (cho rằng rồi mọi chuyện sẽ tự qua thôi) hay thái độ thụ động (dù sao tôi cũng chẳng làm được gì)<CitationRef ids={[1]} />.
        </p>

        {/* 7.1 */}
        <h3 id="section-7-1" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Xây Dựng Hệ Thống Tiếp Nhận Thông Tin Minh Bạch
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tỉnh Dòng Tên Việt Nam định nghĩa sự cáo buộc là lời buộc tội khẳng định một cá nhân đã có hành vi vi phạm luật hoặc chính sách của Hội dòng<CitationRef ids={[12]} />. Lạm dụng tình dục bao gồm sự xâm phạm thể lý hoặc đe dọa có tính chất tình dục, bằng vũ lực hoặc lợi dụng tình trạng không bình đẳng; đặc biệt, đối với trẻ em dưới 18 tuổi, sự đồng ý của trẻ (dù có hay không) cũng không bao giờ được xem là lý do để bào chữa<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Để xử lý các tình huống này, Dòng Tên đã thiết lập một cơ cấu rõ ràng. Các vụ việc liên quan đến sai phạm lạm dụng của các tu sĩ, linh mục Dòng Tên được báo cáo cho một ủy ban tiếp nhận với sự tham gia của các linh mục đóng vai trò là Thụ ủy và thành viên chuyên trách (ví dụ: Linh mục Anrê Phạm Văn Tú, Linh mục Phanxicô Xaviê Nguyễn Thanh Hùng, Linh mục Giuse Trần Sĩ Nghị), kèm theo số điện thoại đường dây nóng liên lạc trực tiếp<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Cơ chế của Dòng Tên hòa nhịp cùng định hướng chung của hệ thống Giáo luật. Theo hướng dẫn của Giáo hội tại Việt Nam và Tông thư <em>Vos Estis Lux Mundi</em>, nạn nhân, cha mẹ, người bảo hộ, nhân chứng hoặc bất kỳ người nào cũng có thể trình báo tội phạm lạm dụng của giáo sĩ qua nhiều phương thức: nộp văn bản đến văn phòng bảo vệ, gửi thư dán kín thông qua linh mục chánh xứ, trình báo bằng miệng trực tiếp, hoặc gọi điện thoại<CitationRef ids={[9]} />. Hệ thống cho phép các văn bản trình báo có thể nặc danh để bảo vệ người tố cáo khỏi sự sợ hãi, mặc dù việc cung cấp tên và địa chỉ liên lạc luôn được khuyến khích để tạo thuận lợi cho quá trình điều tra mở rộng<CitationRef ids={[27]} />.
        </p>

        {/* 7.2 */}
        <h3 id="section-7-2" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Quản Trị Quá Trình Điều Tra: Sự Cân Bằng Giữa Công Lý Và Bảo Vệ Danh Tiếng
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Trong quá trình điều tra và xử lý các cáo buộc, các nhà chức trách của Giáo hội, bao gồm các Bề trên địa phương và Giám đốc các công việc tông đồ, phải tuân thủ một loạt các nguyên tắc pháp lý cốt lõi:
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          <strong>Thứ nhất, tính bảo mật công vụ là yếu tố sống còn.</strong> Tất cả những người tham gia vào việc điều tra, tiếp nhận thông tin đều phải tuyên thệ giữ bí mật công vụ. Không ai được phép đưa ra những lời bình phẩm, xét xử hay kết luận về tội phạm trên các phương tiện truyền thông trước khi cơ quan có thẩm quyền của Giáo hội ban hành phán quyết chính thức<CitationRef ids={[27]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          <strong>Thứ hai, duy trì sự cân bằng giữa quyền lợi của người tố cáo và nguyên tắc suy đoán vô tội.</strong> Danh tính của người trình báo, nạn nhân và các nhân chứng phải được bảo vệ chặt chẽ để tránh mọi hành vi trả thù hay phân biệt đối xử<CitationRef ids={[26]} />. Đồng thời, người bị cáo buộc cũng phải được bảo vệ danh tiếng và sự an toàn trong suốt quá trình điều tra; họ được suy đoán là vô tội cho đến khi có những bằng chứng xác đáng khẳng định tội danh, và họ có quyền sử dụng người bảo hộ để trình bày lời bào chữa của mình<CitationRef ids={[26]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Sự cẩn trọng trong điều tra hôn phối theo Giáo luật (thiết lập hồ sơ, rao hôn phối nhiều tuần, xác nhận tình trạng tự do nhằm ngăn ngừa cưỡng ép và bảo vệ sự toàn vẹn của bí tích) là một minh chứng về khả năng quản trị hành chính nghiêm ngặt của Giáo hội trong việc theo dõi thông tin nhân thân của tín hữu<CitationRef ids={[38]} />. Khả năng quản trị hành chính tinh vi này, khi được áp dụng vào công tác bảo vệ an toàn, hoàn toàn có thể giúp Giáo hội thiết lập những hệ thống lưu trữ hồ sơ, theo dõi quá trình luân chuyển nhân sự nhằm đảm bảo không một tu sĩ hay giáo sĩ có tiền sự lạm dụng nào có thể được thuyên chuyển âm thầm từ cộng đoàn này sang cộng đoàn khác mà không bị phát hiện.
        </p>

        {/* Sơ đồ quy trình tương tác 4 giai đoạn */}
        <ReportingFlowchart />

        {/* 7.3 */}
        <h3 id="section-7-3" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Lắng Nghe Và Phục Hồi Nạn Nhân
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tất cả các cơ chế hình sự và hành chính sẽ trở nên sáo rỗng nếu vắng bóng sự cảm thương dành cho nạn nhân. Định hướng của Dòng Tên và Giáo hội nhấn mạnh rằng nạn nhân phải được đón nhận, lắng nghe và đồng hành. Họ cần được cung cấp các trợ giúp về mặt tinh thần, cũng như hỗ trợ trị liệu tâm lý và y tế tùy theo từng hoàn cảnh cụ thể<CitationRef ids={[1]} />. Sự chữa lành thực sự cho cơ thể Giáo hội sẽ không bao giờ diễn ra nếu tiếng nói đau thương của các nạn nhân bị phớt lờ, hoặc nếu những nguyên nhân mang tính hệ thống gây ra tổn thương vẫn tiếp tục tồn tại<CitationRef ids={[1]} />. Trách nhiệm giải trình của giới lãnh đạo là điều bắt buộc; không thể che giấu những sai phạm dưới lớp vỏ bọc bảo vệ thanh danh tôn giáo<CitationRef ids={[1]} />.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG VIII: HỘI NHẬP VĂN HÓA & THÁCH THỨC TẠI VN
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-8" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">VIII.</span>
          Chiều Kích Hội Nhập Văn Hóa, Đào Tạo Và Những Thách Thức Tại Việt Nam
        </h2>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Việc thực thi chính sách bảo vệ an toàn không phải là công việc của riêng một ủy ban hay sự phản ứng tức thời khi khủng hoảng nổ ra. Nó phải được hội nhập vào toàn bộ cấu trúc đào tạo tri thức và đời sống thiêng liêng của một dòng tu<CitationRef ids={[1]} />.
        </p>

        {/* 8.1 */}
        <h3 id="section-8-1" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Huấn Luyện Liên Tục Trong Hành Trình Đào Tạo Tu Sĩ
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Với tiến trình huấn luyện tu sĩ Dòng Tên kéo dài nhiều năm qua các giai đoạn từ Nhà Thử, Ứng sinh, Tập viện, Triết học, Năm thực tập Tông đồ, Thần học và Năm tập Ba, các tu sĩ liên tục được rèn luyện để đối mặt với thực tế xã hội<CitationRef ids={[16]} />. Sứ mạng của Dòng Tên được cụ thể hóa qua bốn Ưu tiên Tông đồ: <strong>Dẫn đường đến với Thiên Chúa</strong>, <strong>Cùng đi với người nghèo và người bị loại trừ</strong>, <strong>Đồng hành với người trẻ</strong>, và <strong>Chăm sóc Ngôi nhà chung</strong><CitationRef ids={[16]} />. Tuy nhiên, sứ mạng đồng hành với giới trẻ sẽ trở nên bất khả thi và thiếu sự xác thực nếu bản thân các tu sĩ không làm chủ được cảm xúc, ranh giới và kiến thức về bảo vệ trẻ em.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Do đó, đào tạo và huấn luyện về xây dựng môi trường lành mạnh, an toàn trong hoạt động mục vụ là một trong những hoạt động trọng tâm của Tỉnh Dòng<CitationRef ids={[12]} />. Ở cấp độ Giáo hội quốc gia, các cơ sở nghiên cứu như Học viện Công giáo Việt Nam đã bắt đầu đưa chương trình Xây dựng Văn hóa an toàn và Bảo vệ trong các sứ vụ vào hệ thống giảng dạy tín chỉ. Mục tiêu là trang bị cho các linh mục, tu sĩ và giáo dân những nền tảng vững chắc về khoa học giáo dục, giáo luật, và tâm lý học mục vụ để họ trở thành những chuyên viên huấn luyện bảo vệ trẻ em ngay tại môi trường địa phương của mình<CitationRef ids={[33]} />.
        </p>

        {/* 8.2 */}
        <h3 id="section-8-2" className="font-[family-name:var(--font-playfair)] text-base sm:text-xl font-bold text-navy mb-4 sm:mb-5 mt-8 sm:mt-10 scroll-mt-24">
          Đối Mặt Với Rào Cản Văn Hóa Á Đông
        </h3>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Mặc dù hệ thống quy tắc được biên soạn kỹ lưỡng và đạt chuẩn mực quốc tế, quá trình thực thi bảo vệ an toàn tại Việt Nam vẫn vấp phải những lực cản nội tại xuất phát từ văn hóa xã hội đặc thù.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          <strong>Thứ nhất, truyền thống văn hóa “tôn sư trọng đạo” và sự kính trọng tuyệt đối, thậm chí đôi khi mang tính tôn sùng, dành cho hàng giáo sĩ và tu sĩ trong Giáo hội tại Việt Nam tạo ra một rào cản tâm lý khổng lồ đối với bất kỳ ai có ý định nghi ngờ hay lên tiếng về các hành vi sai trái</strong><CitationRef ids={[1]} />. Các bậc phụ huynh tại các vùng quê hoặc cộng đồng giáo xứ nhỏ thường mặc định rằng những người được thánh hiến luôn hành động vì mục đích cao cả. Việc họ dám chất vấn một linh mục hay một tu sĩ về những hành động “có vẻ bất thường” là điều rất hiếm. Sự ngây thơ và lòng tin tưởng tuyệt đối này vô tình trở thành bức bình phong hoàn hảo cho những kẻ có ý đồ xấu lợi dụng để thao túng.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          <strong>Thứ hai, tâm lý văn hóa Á Đông thường e ngại sự đối đầu, sợ gây ra sự xáo trộn cộng đồng, “vạch áo cho người xem lưng” hoặc sợ tạo ra những “gương xấu” làm tổn thương đức tin của người sơ cơ</strong><CitationRef ids={[1]} />. Khi đối mặt với một cáo buộc lạm dụng, xu hướng bản năng của nhiều cộng đồng Á Đông là thỏa hiệp, dàn xếp nội bộ, hoặc dùng uy quyền để thuyên chuyển người vi phạm đi một nơi xa xôi một cách âm thầm, thay vì phải đối mặt với các tiến trình tư pháp phức tạp. Tuy nhiên, các tài liệu hướng dẫn đương đại của Giáo hội và Dòng Tên đã chỉ ra một chân lý thần học sâu sắc: <em>sự minh bạch không làm suy yếu đức tin, mà chính sự giả dối, sự che đậy và sự thiếu công lý mới là thứ phá hủy uy tín của Giáo hội tận gốc rễ</em><CitationRef ids={[1]} />. Công lý và lòng thương xót phải đi đôi với sự thật.
        </p>
      </section>

      <SectionOrnament />

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG IX: KẾT LUẬN
      ══════════════════════════════════════════════════════════════ */}
      <section id="section-9" className="mb-12 sm:mb-16 scroll-mt-24 w-full">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-navy mb-5 sm:mb-6 leading-snug">
          <span className="text-cardinal mr-2">IX.</span>
          Kết Luận
        </h2>

        <p className="drop-cap text-charcoal mb-5 sm:mb-6 text-justify">
          Chính sách Xây dựng Văn hóa An toàn của Tỉnh Dòng Tên Việt Nam không chỉ là một phản ứng phòng vệ trước các áp lực của xã hội hiện đại, mà thực sự thể hiện một bước tiến mang tính đột phá và sự trưởng thành vượt bậc về mặt quản trị mục vụ tại Việt Nam. Bằng cách không chỉ dừng lại ở việc tuân thủ pháp luật dân sự (Luật Trẻ em 2016) và Tông thư <em>Vos Estis Lux Mundi</em> của Đức Thánh Cha Phanxicô, Dòng Tên đã đan dệt tinh tế các quy chuẩn pháp lý này vào trong chính lõi của linh đạo Inhaxiô, nơi con người, đặc biệt là những người dễ bị tổn thương nhất, được đặt vào trung tâm của sự chăm sóc toàn diện từng cá nhân<CitationRef ids={[12]} />.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Việc thiết lập các ranh giới không khoan nhượng về tiếp xúc vật lý, quy tắc hiện diện của người trưởng thành thứ hai trong môi trường mở, cũng như sự kiểm soát khắt khe các tương tác trên không gian mạng số, đã cho thấy một sự am hiểu sâu sắc về tâm lý học tội phạm, đặc biệt là việc chặt đứt chu trình thao túng tâm lý và ngăn chặn sự lạm dụng quyền lực, lạm dụng lương tâm<CitationRef ids={[12]} />. Đồng thời, các quy định này tạo ra một <strong>vòng tròn bảo vệ kép</strong>: vừa bảo vệ nạn nhân tiềm năng khỏi những tổn thương không thể đảo ngược, vừa bảo vệ bản thân các tu sĩ thi hành sứ vụ khỏi những tình huống hàm hồ, dẫn đến các cáo buộc sai trái làm suy giảm nhuệ khí tông đồ.
        </p>

        <p className="text-charcoal mb-5 sm:mb-6 text-justify">
          Tuy nhiên, hành trình biến một bộ quy tắc được hệ thống hóa trên văn bản trở thành một nền văn hóa đích thực, một căn tính thứ hai ăn sâu vào tư duy và phản xạ của mọi Giêsu hữu, nhân viên và tình nguyện viên, sẽ còn đòi hỏi nhiều nỗ lực và thời gian. Quá trình này đòi hỏi sự hoán cải liên tục để từ bỏ não trạng giáo sĩ trị, lòng dũng cảm để lên tiếng trước sai phạm bất chấp sức ép của văn hóa giữ thể diện Á Đông, và sự khiêm tốn để luôn sẵn sàng học hỏi, đào tạo chuyên sâu. Dẫu nhiều chông gai, nỗ lực kiến tạo một môi trường mục vụ trong suốt, trách nhiệm, lắng nghe và chăm sóc của Tỉnh Dòng Tên Việt Nam đang cung cấp một mô hình kiểu mẫu xuất sắc, đóng góp thiết thực vào lời mời gọi phục hồi tính ngôn sứ, để Giáo hội thực sự trở thành một nơi chữa lành, một bệnh viện dã chiến giàu lòng thương xót và an toàn tuyệt đối giữa lòng thế giới hiện đại.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHƯƠNG X: TÀI LIỆU THAM KHẢO
      ══════════════════════════════════════════════════════════════ */}
      <References />
    </article>
  );
}
