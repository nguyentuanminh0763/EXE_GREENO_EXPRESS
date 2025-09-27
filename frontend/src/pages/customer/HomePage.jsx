// src/pages/CustomerPage.jsx
import HeroCarousel from "~/components/HeroCarousel";
import MainLayout from "~/layouts/MainLayout";
import featureImg from "~/assets/gr23.png";
import featureImg2 from "~/assets/img.png";
import { Link } from "react-router-dom";

export default function CustomerPage() {
  return (
    <MainLayout>
      <HeroCarousel />
      {/* Features / Lợi ích */}
      <section className="mt-0 bg-white h-[600px]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-16 md:py-20">
          {/* Heading + sub */}
          <div className="text-center">
            <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-900 leading-tight">
              Nước rửa chén sinh học GREENO
            </h2>

            {/* chấm trang trí */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span className="inline-block h-[2px] w-16 bg-emerald-200"></span>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-gray-600 leading-relaxed">
              Nguyên liệu có nguồn gốc tự nhiên đạt chuẩn theo qui định Pháp luật Việt Nam,
              GREENO mang đến hiệu quả làm sạch vượt trội mà vẫn đảm bảo an toàn tuyệt đối
              cho sức khỏe gia đình và môi trường.
            </p>
          </div>

          {/* Grid 2 cột */}
          <div className="mt-12 gap-12 grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left image (40%) */}
            <div className="md:col-span-5">
              <img
                src={featureImg}
                alt="Greeno feature"
                className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>

            {/* Right content (60%) */}
            <div className="md:col-span-7">
              <ul className="space-y-7">
                {/* Item */}
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    {/* leaf icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M5 3a1 1 0 0 0-1 1v3.764A9.96 9.96 0 0 1 11 6c4.97 0 9 4.03 9 9a9.96 9.96 0 0 1-1.764 5H21a1 1 0 0 0 1-1c0-9.389-7.611-17-17-17z" /><path d="M3.293 19.293a1 1 0 0 0 1.414 1.414l6.364-6.364a3 3 0 1 0-1.414-1.414L3.293 19.293z" /></svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">100% thuần chay</h3>
                    <p className="text-gray-600">Chiết xuất từ thực vật tự nhiên, không chứa hóa chất độc hại.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    {/* shield icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2 4 5v6c0 5.25 3.438 10.094 8 11 4.562-.906 8-5.75 8-11V5l-8-3z" /></svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">An toàn tuyệt đối</h3>
                    <p className="text-gray-600">Không gây kích ứng da, an toàn cho trẻ em và phụ nữ mang thai.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    {/* sparkle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M11 2 9 8 3 10l6 2 2 6 2-6 6-2-6-2-2-6zM19 14l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3z" /></svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Hiệu quả vượt trội</h3>
                    <p className="text-gray-600">Làm sạch hoàn hảo mọi vết bẩn cứng đầu, để lại hương thơm tự nhiên.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Greeno */}
      <section className="bg-[#E9FFF2] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-[36px] font-extrabold text-slate-900">
            Tại sao chọn GREENO?
          </h2>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-8 md:p-10 text-center shadow-[0_12px_30px_rgba(16,185,129,0.12)] ring-1 ring-black/5">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                {/* heart icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M12 21s-7-4.438-9.5-8.25C.5 9.5 2.5 6 6 6c2 0 3 .75 4 2 1-1.25 2-2 4-2 3.5 0 5.5 3.5 3.5 6.75C19 16.562 12 21 12 21z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">An toàn</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Không chứa sulfate, paraben hay hóa chất độc hại. An toàn cho da tay và không gây dị ứng.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-8 md:p-10 text-center shadow-[0_12px_30px_rgba(16,185,129,0.12)] ring-1 ring-black/5">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                {/* coins icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3zm16 4c0 1.657-3.582 3-8 3S4 12.657 4 11v2c0 1.657 3.582 3 8 3s8-1.343 8-3v-2zm0 5c0 1.657-3.582 3-8 3s-8-1.343-8-3v2c0 1.657 3.582 3 8 3s8-1.343 8-3v-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Kinh tế</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Công thức cải tiến, chỉ cần một lượng nhỏ đã làm sạch hiệu quả, tiết kiệm chi phí.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-8 md:p-10 text-center shadow-[0_12px_30px_rgba(16,185,129,0.12)] ring-1 ring-black/5">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                {/* recycle icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M6.1 7.2 8 4l3.2 1.9-.9 1.6H8.3L6.1 7.2zM13.3 4h3.4l1.7 3-1.7 1-1.7-3H13.3zM18 10.6l1.9 3.2-1.9 3.2-1.6-.9v-1.9l1.6-3.6zM10.7 20H7.3L5.6 17l1.7-1 1.7 3h1.7zM6 13.4 4.1 10.2 6 7l1.6.9v1.9L6 13.4zM14 12l-2 3.5H9l2-3.5-2-3.5h3l2 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Phân hủy sinh học</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Phân hủy sinh học 96% sau 18 ngày, không gây ô nhiễm nguồn nước và đất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[36px] font-extrabold text-slate-900">
              Quy trình sản xuất
            </h2>
            <p className="mt-3 text-gray-600">
              Cam kết chất lượng từ nguồn nguyên liệu đến sản phẩm hoàn thiện
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left image */}
            <div className="md:col-span-6">
              <img
                src={featureImg2} // thay bằng đường dẫn ảnh thật của bạn
                alt="Quy trình sản xuất GREENO"
                className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>

            {/* Right steps */}
            <div className="md:col-span-6">
              <ul className="space-y-6">
                {/* Step 1 */}
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tuyển chọn nguyên liệu</h3>
                    <p className="text-gray-600">
                      Các thành phần thực vật được tuyển chọn kỹ lưỡng từ các trang trại hữu cơ
                    </p>
                  </div>
                </li>

                {/* Step 2 */}
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chiết xuất tự nhiên</h3>
                    <p className="text-gray-600">
                      Sử dụng công nghệ chiết xuất tiên tiến, giữ nguyên dưỡng chất tự nhiên
                    </p>
                  </div>
                </li>

                {/* Step 3 */}
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kiểm tra chất lượng</h3>
                    <p className="text-gray-600">
                      Mỗi lô sản phẩm đều được kiểm tra nghiêm ngặt theo tiêu chuẩn quốc tế
                    </p>
                  </div>
                </li>

                {/* Step 4 */}
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Đóng gói thân thiện</h3>
                    <p className="text-gray-600">
                      Sử dụng bao bì tái chế, thân thiện với môi trường
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F6F7F9] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-[36px] font-extrabold text-slate-900">
            Khách hàng nói gì về GREENO?
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card */}
            <article className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(2,8,23,0.08)] ring-1 ring-black/5">
              <header className="flex items-center gap-4">
                <img src="/assets/avatars/lan-anh.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">Chị Lan Anh</div>
                  <div className="text-sm text-slate-500">Hà Nội</div>
                </div>
              </header>

              {/* Stars */}
              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="mt-3 text-slate-600 leading-relaxed">
                "Tôi đã sử dụng GREENO được 6 tháng và rất hài lòng. Da tay không bị khô như trước, mà bát đĩa vẫn sạch bóng."
              </p>
            </article>

            {/* Card */}
            <article className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(2,8,23,0.08)] ring-1 ring-black/5">
              <header className="flex items-center gap-4">
                <img src="/assets/avatars/minh.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">Anh Minh</div>
                  <div className="text-sm text-slate-500">TP.HCM</div>
                </div>
              </header>

              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="mt-3 text-slate-600 leading-relaxed">
                "Với 2 đứa con nhỏ, tôi rất quan tâm đến sự an toàn. GREENO cho tôi sự yên tâm hoàn toàn."
              </p>
            </article>

            {/* Card */}
            <article className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(2,8,23,0.08)] ring-1 ring-black/5">
              <header className="flex items-center gap-4">
                <img src="/assets/avatars/thu-ha.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">Chị Thu Hà</div>
                  <div className="text-sm text-slate-500">Đà Nẵng</div>
                </div>
              </header>

              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="mt-3 text-slate-600 leading-relaxed">
                "Chất lượng tuyệt vời mà giá cả hợp lý. Một chai dùng được rất lâu, tiết kiệm hơn nhiều so với trước."
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Bắt đầu hành trình bảo vệ môi trường ngay hôm nay
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Tham gia cùng hàng nghìn gia đình Việt đã tin tưởng sử dụng GREENO
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button Mua ngay */}
            <Link to="/shop">
              <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-green-600 font-semibold shadow hover:bg-gray-50 transition">

                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0469 20H0.796875V0H21.0469V20Z" stroke="#E5E7EB" />
                  <g clip-path="url(#clip0_1_366)">
                    <path d="M0.796875 1.09375C0.796875 0.626172 1.17305 0.25 1.64062 0.25H3.24023C4.01367 0.25 4.69922 0.7 5.01914 1.375H19.4684C20.393 1.375 21.068 2.25391 20.8254 3.14688L19.384 8.50117C19.0852 9.60508 18.0832 10.375 16.9406 10.375H6.79805L6.98789 11.377C7.06523 11.7742 7.41328 12.0625 7.81758 12.0625H17.9531C18.4207 12.0625 18.7969 12.4387 18.7969 12.9062C18.7969 13.3738 18.4207 13.75 17.9531 13.75H7.81758C6.60117 13.75 5.55703 12.8852 5.33203 11.6934L3.51797 2.16602C3.49336 2.03242 3.37734 1.9375 3.24023 1.9375H1.64062C1.17305 1.9375 0.796875 1.56133 0.796875 1.09375ZM5.29688 16.5625C5.29688 16.3409 5.34052 16.1215 5.42533 15.9167C5.51013 15.712 5.63443 15.526 5.79113 15.3693C5.94783 15.2126 6.13386 15.0883 6.3386 15.0035C6.54333 14.9186 6.76277 14.875 6.98438 14.875C7.20598 14.875 7.42542 14.9186 7.63015 15.0035C7.83489 15.0883 8.02092 15.2126 8.17762 15.3693C8.33432 15.526 8.45862 15.712 8.54342 15.9167C8.62823 16.1215 8.67188 16.3409 8.67188 16.5625C8.67188 16.7841 8.62823 17.0035 8.54342 17.2083C8.45862 17.413 8.33432 17.599 8.17762 17.7557C8.02092 17.9124 7.83489 18.0367 7.63015 18.1215C7.42542 18.2064 7.20598 18.25 6.98438 18.25C6.76277 18.25 6.54333 18.2064 6.3386 18.1215C6.13386 18.0367 5.94783 17.9124 5.79113 17.7557C5.63443 17.599 5.51013 17.413 5.42533 17.2083C5.34052 17.0035 5.29688 16.7841 5.29688 16.5625ZM17.1094 14.875C17.5569 14.875 17.9862 15.0528 18.3026 15.3693C18.6191 15.6857 18.7969 16.1149 18.7969 16.5625C18.7969 17.0101 18.6191 17.4393 18.3026 17.7557C17.9862 18.0722 17.5569 18.25 17.1094 18.25C16.6618 18.25 16.2326 18.0722 15.9161 17.7557C15.5997 17.4393 15.4219 17.0101 15.4219 16.5625C15.4219 16.1149 15.5997 15.6857 15.9161 15.3693C16.2326 15.0528 16.6618 14.875 17.1094 14.875Z" fill="#16A34A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_366">
                      <path d="M0.796875 0.25H21.0469V18.25H0.796875V0.25Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Mua ngay
              </button>
            </Link>

            {/* Button Tìm hiểu thêm */}
            <Link to="/about">
              <button className="flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-green-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 15a1.25 1.25 0 111.25-1.25A1.251 1.251 0 0112 17zm1-4.75h-2v-6h2z" />
                </svg>
                Tìm hiểu thêm
              </button>
            </Link>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
