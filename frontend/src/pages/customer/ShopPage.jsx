import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import { addToCart } from "~/services/cartService";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState("createdAt_desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedProductId, setAddedProductId] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams({
      page,
      limit: 6,
      sort,
    });
    if (searchTerm) query.append("name", searchTerm);

    fetch(`http://localhost:3000/api/products?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.error("Lỗi khi load sản phẩm:", err));
  }, [page, sort, searchTerm]);

  const handleAddToCartClick = async (product) => {
    try {
      await addToCart(product._id, 1);
      setAddedProductId(product._id); // Đánh dấu sản phẩm đã được thêm
      setTimeout(() => setAddedProductId(null), 2000); // Xoá sau 2s
    } catch {
      alert("Lỗi khi thêm vào giỏ hàng");
    }
  };

  return (
  <MainLayout>
    {/* Header */}
    <section className="bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Tìm kiếm sản phẩm
        </h1>
        <p className="text-center text-slate-500 mt-2">
          Khám phá bộ sưu tập nước rửa chén sinh học thân thiện với môi trường
        </p>

        {/* Search bar */}
        <div className="mt-6 rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setPage(1)}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-28 outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                onClick={() => setPage(1)}
                className="absolute right-1 top-1 h-[42px] rounded-lg bg-emerald-500 px-5 text-white font-semibold hover:bg-emerald-600 transition"
              >
                Tìm kiếm
              </button>
            </div>

            {/* Sắp xếp */}
            <div className="shrink-0">
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                className="h-[46px] rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="createdAt_desc">Mới nhất</option>
                <option value="name_asc">Tên A-Z</option>
                <option value="name_desc">Tên Z-A</option>
                <option value="price_asc">Giá tăng dần</option>
                <option value="price_desc">Giá giảm dần</option>
              </select>
            </div>
          </div>

          {/* Popular tags (chỉ set searchTerm) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "nước rửa chén sinh học",
              "thân thiện môi trường",
              "không hóa chất",
              "chiết xuất tự nhiên",
              "dung tích lớn",
            ].map((t) => (
              <button
                key={t}
                onClick={() => { setSearchTerm(t); setPage(1); }}
                className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm hover:bg-emerald-100"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Content */}
    <section className="bg-slate-50 pb-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar filters (UI only, không đụng backend) */}
        <aside className="md:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">Bộ lọc</h3>
                <button
                  onClick={() => { /* reset UI-only filters nếu bạn muốn */ }}
                  className="text-sm text-emerald-600 hover:underline"
                >
                  Xóa tất cả
                </button>
              </div>

              {/* Nhóm filter mẫu — chỉ UI */}
              <div className="mt-4 space-y-4">
                <div>
                  <div className="font-medium text-slate-700">Khoảng giá</div>
                  <ul className="mt-2 space-y-2 text-slate-600">
                    {["Dưới 50,000đ","50,000đ - 100,000đ","100,000đ - 200,000đ","Trên 200,000đ"].map(x=>(
                      <li key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-600" />
                        <span className="text-sm">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-slate-700">Dung tích</div>
                  <ul className="mt-2 space-y-2 text-slate-600">
                    {["500ml","1L","2L","5L"].map(x=>(
                      <li key={x} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-600" />
                        <span className="text-sm">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-2 rounded-lg bg-emerald-500 text-white py-2 font-semibold hover:bg-emerald-600">
                  Áp dụng bộ lọc
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="md:col-span-9">
          {/* Subheader */}
          <div className="mb-4 flex items-center justify-between">
            <div className="text-slate-600">
              Hiển thị <b>{products.length}</b> sản phẩm
            </div>
          </div>

          {/* Grid */}
          {products.length === 0 ? (
            <p className="text-slate-500">Đang tải sản phẩm...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {products.map((product) => {
                const image = product.images?.[0] || "/default-product.jpg";
                const hasSale = (product.discount ?? 0) > 0 || (product.finalPrice ?? product.price) < product.price;
                const finalPrice = (product.finalPrice ?? product.price) || 0;

                return (
                  <div
                    key={product._id}
                    className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Badges & like */}
                    <div className="absolute left-3 top-3 z-10 flex gap-2">
                      {hasSale && (
                        <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                          Mới
                        </span>
                      )}
                      {product.bestSeller && (
                        <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow">
                          Bán chạy
                        </span>
                      )}
                    </div>
                    <button
                      className="absolute right-3 top-3 z-10 grid place-items-center h-9 w-9 rounded-full bg-white/90 border border-slate-200 hover:text-rose-500 hover:border-rose-200"
                      title="Yêu thích"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M12 21s-7-4.438-9.5-8.25C.5 9.5 2.5 6 6 6c2 0 3 .75 4 2 1-1.25 2-2 4-2 3.5 0 5.5 3.5 3.5 6.75C19 16.562 12 21 12 21z"/>
                      </svg>
                    </button>

                    {/* Image */}
                    <Link to={`/products/${product._id}`} className="block">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-4">
                      <Link to={`/products/${product._id}`} className="block">
                        <h3 className="line-clamp-2 min-h-[48px] text-base font-semibold text-slate-900 group-hover:text-emerald-600">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 line-clamp-2 min-h-[40px]">
                          {product.description}
                        </p>
                      </Link>

                      <div className="mt-3 flex items-end justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-emerald-600 font-bold text-lg">
                            {finalPrice.toLocaleString()}đ
                          </span>
                          {product.price && finalPrice < product.price && (
                            <span className="text-sm text-slate-400 line-through">
                              {product.price.toLocaleString()}đ
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCartClick(product);
                          }}
                          disabled={product.stock <= 0}
                          className={`rounded-lg px-4 py-2 text-sm font-semibold transition
                            ${product.stock <= 0
                              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                              : "bg-emerald-500 text-white hover:bg-emerald-600"
                            }`}
                        >
                          {product.stock <= 0 ? "Hết hàng" : "Thêm vào giỏ"}
                        </button>
                      </div>

                      {/* Added toast inline */}
                      {addedProductId === product._id && (
                        <p className="mt-2 text-emerald-600 text-sm font-semibold animate-pulse">
                          ✅ Đã thêm vào giỏ hàng!
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-10 flex justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white disabled:opacity-50"
              title="Trang trước"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-10 w-10 rounded-lg border ${
                  page === p
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white disabled:opacity-50"
              title="Trang sau"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
);

}
