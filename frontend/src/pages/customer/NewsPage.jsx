// src/pages/NewsPage.jsx
import React, { useMemo, useState } from "react";
import MainLayout from "~/layouts/MainLayout";
import { FaFileAlt, FaUsers, FaLeaf, FaClock, FaBookOpen } from "react-icons/fa";
import bia from "~/assets/bia.png";
import img from "~/assets/gr23.png"
import img2 from "~/assets/nuoc.png"
import news1 from "~/assets/news1.png"
import news2 from "~/assets/news2.png"
import news3 from "~/assets/news3.png"
import news4 from "~/assets/news4.png"
import news5 from "~/assets/news5.png"
import news6 from "~/assets/news6.png"

const TOPICS = ["Tất cả", "Vệ sinh", "Môi trường", "Mẹo hay", "Sản phẩm", "Gia đình"];

// Dữ liệu bài viết (fix cứng)
const POSTS = [
  {
    id: 1,
    title: "10 Mẹo Vệ Sinh Nhà Cửa Thân Thiện Môi Trường",
    desc:
      "Khám phá những cách làm sạch hiệu quả mà không gây hại cho môi trường. Sử dụng các thành phần tự nhiên và sản phẩm GREENO…",
    date: "15 Tháng 12, 2024",
    topic: "Vệ sinh",
    read: "Đọc tiếp",
    img: news1,
  },
  {
    id: 2,
    title: "Cách Giảm Rác Thải Nhựa Trong Gia Đình",
    desc:
      "Hướng dẫn chi tiết cách thay thế các sản phẩm nhựa bằng những lựa chọn bền vững. Từ mua sắm đến đồ dùng nhà bếp…",
    date: "12 Tháng 12, 2024",
    topic: "Môi trường",
    read: "Đọc tiếp",
    img: news2,
  },
  {
    id: 3,
    title: "Hướng Dẫn Sử Dụng Sản Phẩm GREENO Hiệu Quả",
    desc:
      "Tối ưu hoá hiệu quả làm sạch với các sản phẩm GREENO. Lưu lượng phù hợp, cách pha chế và bảo quản đúng cách…",
    date: "10 Tháng 12, 2024",
    topic: "Mẹo hay",
    read: "Đọc tiếp",
    img: news3,
  },
  {
    id: 4,
    title: "Tạo Vườn Rau Sạch Tại Nhà Cho Gia Đình",
    desc:
      "Hướng dẫn từng bước để có một khu vườn rau sạch ngay tại nhà. Từ việc chọn giống, chăm sóc đến thu hoạch…",
    date: "8 Tháng 12, 2024",
    topic: "Gia đình",
    read: "Đọc tiếp",
    img: news4,
  },
  {
    id: 5,
    title: "So Sánh Sản Phẩm Tẩy Rửa Tự Nhiên và Hóa Học",
    desc:
      "Phân tích chi tiết về ưu nhược điểm của từng loại sản phẩm. Tại sao nên chọn GREENO cho gia đình bạn…",
    date: "5 Tháng 12, 2024",
    topic: "Sản phẩm",
    read: "Đọc tiếp",
    img: news5,
  },
  {
    id: 6,
    title: "7 Cách Tiết Kiệm Điện Hiệu Quả Cho Gia Đình",
    desc:
      "Những mẹo đơn giản nhưng hiệu quả để giảm hoá đơn điện hàng tháng. Vừa tiết kiệm vừa bảo vệ môi trường…",
    date: "3 Tháng 12, 2024",
    topic: "Mẹo hay",
    read: "Đọc tiếp",
    img: news6,
  },
];

// Dữ liệu sản phẩm liên quan (fix cứng)
const RELATED_PRODUCTS = [
  {
    id: "p1",
    name: "Nước Rửa Chén GREENO",
    desc: "Làm sạch hiệu quả, không gây hại da tay",
    price: 89000,
    img: img,
  },
  {
    id: "p2",
    name: "Nước Giặt GREENO",
    desc: "Bảo vệ màu sắc, thân thiện với da",
    price: 125000,
    img: img2,
  },
  {
    id: "p3",
    name: "Nước Lau Nhà GREENO",
    desc: "Khử khuẩn tự nhiên, hương thơm dịu",
    price: 75000,
    img: img,
  },
  {
    id: "p4",
    name: "Nước Giặt GREENO",
    desc: "Bảo vệ màu sắc, thiên nhiên dịu nhẹ",
    price: 125000,
    img: img2,
  },
];

export default function NewsPage() {
  const [topic, setTopic] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = useMemo(
    () => (topic === "Tất cả" ? POSTS : POSTS.filter((p) => p.topic === topic)),
    [topic]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <MainLayout>
      {/* HERO */}
      <div
        className="relative h-[300px] md:h-[360px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${bia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay xanh tươi + blur nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/60 to-emerald-200/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">
            Blog Sống Xanh
          </h1>
          <p className="mt-4 text-slate-800 md:text-lg">
            Khám phá những mẹo hay về cuộc sống bền vững, bảo vệ môi trường và
            cách sử dụng sản phẩm GREENO hiệu quả
          </p>

          <div className="mt-6 flex justify-center gap-8 text-green-700 font-medium text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaFileAlt /> 120+ Bài viết
            </div>
            <div className="flex items-center gap-2">
              <FaUsers /> 5000+ Độc giả
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf /> Cộng đồng xanh
            </div>
          </div>
        </div>
      </div>

      {/* FILTER + GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-8">
          {/* Filter chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500 mr-2">Lọc theo chủ đề:</span>
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTopic(t);
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-sm transition ${
                  topic === t
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    {p.topic}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-slate-900 font-semibold text-lg line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm line-clamp-3">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <FaClock className="opacity-70" />
                      {p.date}
                    </div>
                    <button className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold hover:bg-emerald-100">
                      {p.read}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setPage((n) => Math.max(1, n - 1))}
              disabled={page === 1}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white disabled:opacity-50"
              title="Trang trước"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-10 w-10 rounded-lg border ${
                  page === n
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((n) => Math.min(totalPages, n + 1))}
              disabled={page === totalPages}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white disabled:opacity-50"
              title="Trang sau"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-[#E9FFF2] py-12">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-700">
              Sản Phẩm GREENO Liên Quan
            </h2>
            <p className="text-slate-600 mt-2">
              Khám phá các sản phẩm tẩy rửa tự nhiên, an toàn cho gia đình và môi trường
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_PRODUCTS.map((pr) => (
              <div
                key={pr.id}
                className="rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={pr.img}
                    alt={pr.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-slate-900 font-semibold">{pr.name}</div>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">{pr.desc}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-emerald-600 font-bold">
                      {pr.price.toLocaleString()}đ
                    </div>
                    <button className="rounded-full bg-emerald-500 text-white text-xs font-semibold px-3 py-1 hover:bg-emerald-600">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA nhẹ */}
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white font-semibold px-6 py-3 hover:bg-emerald-700">
              <FaBookOpen /> Khám phá thêm sản phẩm
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
