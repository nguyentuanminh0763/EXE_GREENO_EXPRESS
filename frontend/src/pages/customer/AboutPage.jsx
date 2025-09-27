// src/pages/AboutPage.jsx
import MainLayout from "~/layouts/MainLayout";
import { FaLeaf, FaRecycle, FaLightbulb, FaFlask, FaRocket, FaWater, FaTree, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import storyImg from "~/assets/div(2).png"; // 👉 đổi sang ảnh bạn muốn (ảnh trong figma)
import about1 from "~/assets/about1.png"
import about2 from "~/assets/about2.png"
import about3 from "~/assets/about3.png"
import about4 from "~/assets/about4.png"
import envImg from "~/assets/caytrong.png";

function FounderCard({ avatar, name, title, desc, linkedin, facebook }) {
    return (
        <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(2,8,23,0.06)] overflow-hidden hover:shadow-lg transition">
            <div className="aspect-[4/3]">
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 text-center">
                <div className="font-semibold text-slate-900">{name}</div>
                <div className="mt-1 text-emerald-600 font-semibold text-sm">{title}</div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{desc}</p>

                <div className="mt-4 flex items-center justify-center gap-3 text-slate-500">
                    <a
                        href={linkedin || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    >
                        <FaLinkedinIn className="text-[14px]" />
                    </a>
                    <a
                        href={facebook || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    >
                        <FaFacebookF className="text-[14px]" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    const founders = [
        {
            name: "Nguyễn Thị Diễm Hương",
            title: "CEO & Founder",
            desc: "10 năm kinh nghiệm trong ngành hóa chất xanh",
            avatar:
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Trương Công Tuấn Kiệt",
            title: "CTO",
            desc: "Chuyên gia công nghệ sinh học, Tiến sĩ Hóa học",
            avatar:
                "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Nguyễn Văn Thế Kỷ",
            title: "CMO",
            desc: "Chuyên gia marketing xanh và phát triển thương hiệu",
            avatar:
                "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=1200&auto=format&fit=crop",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Nguyễn Tuấn Minh",
            title: "CTO",
            desc: "Chuyên gia công nghệ sinh học, Tiến sĩ Hóa học",
            avatar:
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
            linkedin: "#",
            facebook: "#",
        },
    ];

    return (

        <MainLayout>
            {/* Hero / Story */}
            <section className="bg-gradient-to-r from-[#F0FFF6] to-[#ECFFF3]">
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                        {/* Left */}
                        <div className="md:col-span-6">
                            <h1 className="text-[36px] md:text-[44px] font-extrabold leading-tight text-slate-900">
                                Câu chuyện về{" "}
                                <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                                    GREENO
                                </span>
                            </h1>

                            <p className="mt-5 text-slate-600 md:text-lg leading-relaxed max-w-[560px]">
                                Hành trình từ ý tưởng xanh đến sản phẩm sinh học thân thiện với môi
                                trường – tối ưu hiệu quả làm sạch, an toàn cho gia đình và Trái Đất.
                            </p>

                            {/* Chips */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-4 py-2 text-sm font-medium shadow-sm">
                                    <FaLeaf /> 100% Sinh học
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-4 py-2 text-sm font-medium shadow-sm">
                                    <FaRecycle /> Thân thiện môi trường
                                </span>
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="md:col-span-6">
                            <div className="rounded-2xl shadow-[0_18px_45px_rgba(2,8,23,0.08)] ring-1 ring-black/5 overflow-hidden">
                                <img
                                    src={storyImg}
                                    alt="Đội ngũ GREENO"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Câu chuyện thương hiệu */}
            <section className="bg-white py-20 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Câu Chuyện Thương Hiệu
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        GREENO ra đời từ niềm tin rằng những sản phẩm hàng ngày có thể vừa hiệu quả vừa thân thiện với môi trường
                    </p>

                    {/* 3 cột */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-green-50 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-center mb-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white">
                                    <FaLightbulb size={24} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Ý Tưởng</h3>
                            <p className="text-gray-600 mt-2">
                                Khởi nguồn từ việc nhận thấy tác hại của hóa chất trong sản phẩm rửa chén truyền thống đối với sức khỏe và môi trường
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-green-50 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-center mb-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white">
                                    <FaFlask size={24} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Nghiên Cứu</h3>
                            <p className="text-gray-600 mt-2">
                                3 năm nghiên cứu và phát triển công thức từ các nguyên liệu tự nhiên, sinh học
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-green-50 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-center mb-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white">
                                    <FaRocket size={24} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Ra Mắt</h3>
                            <p className="text-gray-600 mt-2">
                                Chính thức có mặt trên thị trường với sứ mệnh mang đến giải pháp rửa chén xanh
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Nguyên Liệu Tự Nhiên */}
            <section className="bg-[#F7FAF9] py-16 md:py-20">
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Nguyên Liệu Tự Nhiên
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Tất cả nguyên liệu đều được lựa chọn kỹ lưỡng từ các trang trại hữu cơ
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                id: 1,
                                name: "Bồ hòn",
                                desc: "Từ trang trại bồ hòn hữu cơ tại các tỉnh phía Bắc",
                                img: about1
                            },
                            {
                                id: 2,
                                name: "Trái dứa",
                                desc: "Chiết xuất từ trái dứa tươi, bảo vệ da tay",
                                img: about2
                            },
                            {
                                id: 3,
                                name: "Chanh Tươi",
                                desc: "Tinh dầu chanh tự nhiên, khử mùi hiệu quả",
                                img: about3
                            },
                            {
                                id: 4,
                                name: "Men sinh học",
                                desc: "Lên men tự nhiên không hóa chất",
                                img: about4
                            }
                        ].map((it) => (
                            <div
                                key={it.id}
                                className="rounded-2xl bg-white shadow-[0_10px_25px_rgba(2,8,23,0.06)] ring-1 ring-black/5 overflow-hidden hover:shadow-lg transition"
                            >
                                <div className="aspect-[4/3]">
                                    <img src={it.img} alt={it.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold text-slate-900">{it.name}</div>
                                    <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cam Kết Môi Trường Section */}
            <section className="bg-green-600 py-16 md:py-20 text-white">
                <div className="mx-auto max-w-[1200px] px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Left content */}
                    <div className="md:col-span-6 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            Cam Kết Môi Trường
                        </h2>

                        <ul className="space-y-5">
                            <li className="flex gap-3 items-start">
                                <FaRecycle className="mt-3 text-2xl text-white flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Bao Bì Tái Chế</h3>
                                    <p className="text-green-100">
                                        100% chai nhựa có thể tái chế, giảm thiểu rác thải nhựa
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <FaWater className="mt-3 text-2xl text-white flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">An Toàn Nước Thải</h3>
                                    <p className="text-green-100">
                                        Công thức phân hủy sinh học 100%, không gây ô nhiễm nguồn nước
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <FaTree className="mt-3 text-2xl text-white flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Trồng Cây Xanh</h3>
                                    <p className="text-green-100">
                                        Mỗi sản phẩm bán ra, chúng tôi trồng 1 cây xanh
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right image */}
                    <div className="md:col-span-6 relative">
                        <img
                            src={envImg}
                            alt="Cam kết môi trường"
                            className="rounded-2xl shadow-lg"
                        />
                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-white text-green-700 px-5 py-3 rounded-lg shadow-md font-bold">
                            500+ <br />
                            <span className="text-sm font-normal">Cây xanh đã trồng</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-[1000px] px-4">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-[36px] font-extrabold text-slate-900">
                            Hành Trình Phát Triển
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Từ ý tưởng đến thực hiện, mỗi bước đi đều hướng tới sự bền vững
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Line chạy xuyên suốt */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-green-500"></div>

                        <div className="space-y-12">
                            {/* Item 1 */}
                            <div className="flex justify-between items-center w-full">
                                <div className="w-5/12 text-right">
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="font-bold text-lg text-slate-900">2022 - Khởi Đầu</h3>
                                        <p className="text-gray-600">
                                            Ý tưởng ra đời từ mong muốn tạo ra sản phẩm rửa chén an toàn
                                        </p>
                                    </div>
                                </div>
                                <div className="w-2/12 flex justify-center relative">
                                    <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                                </div>
                                <div className="w-5/12"></div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex justify-between items-center w-full">
                                <div className="w-5/12"></div>
                                <div className="w-2/12 flex justify-center relative">
                                    <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                                </div>
                                <div className="w-5/12 text-left">
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="font-bold text-lg text-slate-900">2023 - Nghiên Cứu</h3>
                                        <p className="text-gray-600">
                                            Phát triển công thức từ nguyên liệu tự nhiên, thử nghiệm hiệu quả
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex justify-between items-center w-full">
                                <div className="w-5/12 text-right">
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="font-bold text-lg text-slate-900">2024 - Sản Xuất</h3>
                                        <p className="text-gray-600">
                                            Xây dựng dây chuyền sản xuất đạt tiêu chuẩn quốc tế
                                        </p>
                                    </div>
                                </div>
                                <div className="w-2/12 flex justify-center relative">
                                    <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                                </div>
                                <div className="w-5/12"></div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex justify-between items-center w-full">
                                <div className="w-5/12"></div>
                                <div className="w-2/12 flex justify-center relative">
                                    <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                                </div>
                                <div className="w-5/12 text-left">
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <h3 className="font-bold text-lg text-slate-900">2025 - Ra Mắt</h3>
                                        <p className="text-gray-600">
                                            Chính thức có mặt trên thị trường với sản phẩm hoàn thiện
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/* 
            <section className="bg-[#F6F7F9] py-16 md:py-20">
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Đội Ngũ Sáng Lập
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Những con người đam mê và tận tâm đã xây dựng nên GREENO
                        </p>
                    </div> */}

                    {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {founders.slice(0, 3).map((p) => (
                            <FounderCard key={p.name} {...p} />
                        ))}
                    </div> */}

                    {/* Hàng dưới 1 card căn trái (như Figma) */}
                    {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FounderCard {...founders[3]} />
                        <div className="hidden md:block" />
                        <div className="hidden md:block" />
                    </div>
                </div>
            </section> */}

        </MainLayout>
    );
}
