// src/pages/ContactPage.jsx
import MainLayout from "~/layouts/MainLayout";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Nếu có ảnh nền riêng, import và dùng ở style.backgroundImage
// import heroBg from "~/assets/green-blur.jpg";


export default function ContactPage() {

    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen((p) => (p === i ? null : i));
    const onSubmit = (e) => {
        e.preventDefault(); // giữ nguyên frontend — gắn API khi cần
    };

    const faqItems = [
        {
            q: "Sản phẩm GREENO có an toàn cho da tay không?",
            a: "Có. Công thức sinh học, không chứa sulfate và paraben, dịu nhẹ cho da tay và an toàn cho gia đình.",
        },
        {
            q: "Làm thế nào để sử dụng sản phẩm hiệu quả nhất?",
            a: "Pha loãng theo khuyến nghị (1:3 đến 1:5), tạo bọt với nước, rửa và tráng sạch. Với vết bẩn cứng đầu, ngâm 5–10 phút trước khi chà.",
        },
        {
            q: "Tôi có thể mua sản phẩm ở đâu?",
            a: "Bạn có thể mua tại website chính thức GREENO hoặc các cửa hàng đối tác, siêu thị và sàn TMĐT.",
        },
    ];

    return (
        <MainLayout>
            {/* HERO */}
            <section
                className="relative"
                style={{
                    backgroundImage:
                        // `url(${heroBg})`
                        "url(https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
                <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-14 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700">
                        Liên hệ với chúng tôi
                    </h1>
                    <p className="mt-3 max-w-3xl mx-auto text-slate-700">
                        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với
                        GREENO để được tư vấn về sản phẩm nước rửa chén sinh học.
                    </p>
                </div>
            </section>

            {/* FORM + INFO */}
            <section className="bg-[#F3FBF6] py-10 md:py-14">
                <div className="mx-auto max-w-[1100px] px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Form */}
                    <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(2,8,23,0.06)] p-5 md:p-6">
                        <div className="font-semibold text-slate-900 mb-4">
                            Gửi tin nhắn cho chúng tôi
                        </div>
                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm text-slate-600">Họ và tên*</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="Nhập họ và tên của bạn"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-slate-600">Email*</label>
                                <input
                                    type="email"
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-slate-600">Số điện thoại</label>
                                <input
                                    type="tel"
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="0123 456 789"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-slate-600">Nội dung nhắn*</label>
                                <textarea
                                    rows={4}
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="Nhập nội dung tin nhắn của bạn..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 transition"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    {/* Info + Social */}
                    <div className="space-y-4">
                        <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(2,8,23,0.06)] p-5 md:p-6">
                            <div className="font-semibold text-slate-900 mb-4">
                                Thông tin liên hệ
                            </div>

                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3 items-start">
                                    <span className="mt-0.5 text-emerald-600">
                                        <FiPhone />
                                    </span>
                                    <div>
                                        <div className="font-medium text-slate-800">Hotline</div>
                                        <div className="text-slate-600">1800 6789</div>
                                    </div>
                                </li>

                                <li className="flex gap-3 items-start">
                                    <span className="mt-0.5 text-emerald-600">
                                        <FiMail />
                                    </span>
                                    <div>
                                        <div className="font-medium text-slate-800">Email hỗ trợ</div>
                                        <div className="text-slate-600">support@greeno.vn</div>
                                    </div>
                                </li>

                                <li className="flex gap-3 items-start">
                                    <span className="mt-0.5 text-emerald-600">
                                        <FiClock />
                                    </span>
                                    <div>
                                        <div className="font-medium text-slate-800">Giờ làm việc</div>
                                        <div className="text-slate-600">T2 - T6: 8:00 - 17:30</div>
                                        <div className="text-slate-600">T7: 8:00 - 12:00</div>
                                    </div>
                                </li>

                                <li className="flex gap-3 items-start">
                                    <span className="mt-0.5 text-emerald-600">
                                        <FiMapPin />
                                    </span>
                                    <div>
                                        <div className="font-medium text-slate-800">Địa chỉ</div>
                                        <div className="text-slate-600">
                                            123 Đường ABC, Quận Hải Châu, TP Đà Nẵng
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(2,8,23,0.06)] p-5 md:p-6">
                            <div className="font-semibold text-slate-900 mb-3">
                                Kết nối với chúng tôi
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="#"
                                    className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube />
                                </a>
                                <a
                                    href="#"
                                    className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition"
                                    aria-label="TikTok"
                                >
                                    <FaTiktok />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1100px] px-4 pt-11">
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                            Vị trí của chúng tôi
                        </h3>
                        <p className="mt-2 text-slate-600">
                            Đến thăm showroom GREENO để trải nghiệm sản phẩm trực tiếp
                        </p>
                    </div>

                    <div className="mt-6 rounded-2xl ring-1 ring-black/5 shadow-[0_12px_30px_rgba(2,8,23,0.06)] p-4">
                        {/* Thay block dưới bằng iframe Google Maps khi có */}
                        <div className="h-[380px] w-full rounded-xl bg-[#EEF2F6] flex flex-col items-center justify-center text-slate-600">
                            <svg
                                width="44"
                                height="44"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="text-emerald-600 mb-3"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
                                />
                            </svg>
                            <div className="font-semibold">Bản đồ Google Maps</div>
                            <div className="text-sm">123 Đường ABC, Quận Hải Châu, TP Đà Nẵng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#F2FBF5] py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900">
                        Câu hỏi thường gặp
                    </h2>
                    <p className="mt-2 text-center text-slate-600">
                        Những thắc mắc phổ biến về sản phẩm GREENO
                    </p>

                    <div className="mt-8 space-y-3">
                        {faqItems.map((item, i) => {
                            const isOpen = open === i;
                            return (
                                <div key={i} className="bg-white rounded-lg shadow border border-slate-100">
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                                    >
                                        <span className="font-medium text-slate-800">{item.q}</span>
                                        <FiChevronDown
                                            className={`transition-transform ${isOpen ? "rotate-180 text-green-600" : ""
                                                }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-4 text-slate-600 border-t">{item.a}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
