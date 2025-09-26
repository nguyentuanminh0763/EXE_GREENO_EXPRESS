// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import womanImage from '~/assets/woman.png'

export default function HeroCarousel() {
  return (
    <Swiper
      autoplay={{ delay: 100000 }}
      loop={true}
      modules={[Autoplay]}
      className="w-full h-[700px]"
    >
      {/* Slide 1 */}
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="h-[700px] bg-gradient-to-r from-[#E9FFF2] via-[#E9FFF2] to-[#C8FAD9]">
          {/* items-stretch để 2 cột cao bằng 800px, không dùng items-center */}
          <div className="mx-auto lg:px-40 md:px-12 px-40 h-full flex flex-col md:flex-row items-stretch">
            {/* Left content */}
            <div className="flex-1 pt-20 md:pt-32 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-black leading-tight">
                Bảo vệ{" "}
                <span className="bg-gradient-to-r from-[#27AE60] to-[#1B8F49] bg-clip-text text-transparent">
                  thiên nhiên
                </span>
                <br />từ nhà bếp của bạn
              </h1>

              <p className="text-gray-700 max-w-2xl text-base lg:text-lg">
                Nước rửa chén sinh học GREENO – Giải pháp làm sạch xanh đến từ thiên
                nhiên, an toàn cho cả gia đình và trái đất.
              </p>

              <div className="flex gap-4 pt-4">
                <button
                  className="px-8 py-4 rounded-xl bg-[#1BA24A] hover:bg-[#159341] text-white font-semibold shadow-sm"
                >
                  Mua ngay
                </button>
                <button
                  className="px-8 py-4 rounded-xl border-2 border-[#1BA24A] text-[#1BA24A] hover:bg-[#E6F8ED] font-semibold"
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="flex-1 h-full flex justify-end">
              <img
                src={womanImage}
                alt="Khách hàng cầm sản phẩm GREENO"
                className="h-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>



    </Swiper>
  );
}
