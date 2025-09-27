// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import { addToCart } from "~/services/cartService";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);
  const [capacity, setCapacity] = useState(""); // dung tích / size
  const [activeTab, setActiveTab] = useState("desc");

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // nếu có biến thể dung tích thì set mặc định
        if (Array.isArray(data?.variants) && data.variants.length > 0) {
          setCapacity(data.variants[0]?.name || "");
        } else if (Array.isArray(data?.sizes) && data.sizes.length > 0) {
          setCapacity(data.sizes[0]);
        }
      })
      .catch((err) => console.error("Lỗi khi load chi tiết sản phẩm:", err));
  }, [id]);

  if (!product) return <MainLayout><div className="px-6 md:px-28 py-12">Đang tải chi tiết sản phẩm...</div></MainLayout>;

  const images = product.images?.length ? product.images : ["/default-product.jpg"];
  const hasDiscount = product.discount && product.discount > 0;

  // Fallback dung tích nếu backend chưa có
  const capacityOptions =
    product?.variants?.map((v) => v.name) ||
    product?.sizes ||
    ["300ml", "500ml", "1L"];

  const priceBlock = (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-[26px] font-bold text-emerald-600">
          {Number(product.finalPrice).toLocaleString()}đ
        </span>
        {hasDiscount && (
          <span className="text-sm line-through text-slate-400">
            {Number(product.price).toLocaleString()}đ
          </span>
        )}
      </div>
      {hasDiscount && (
        <div className="inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-600 px-2 py-0.5 text-xs font-semibold">
          −{product.discount}% 
        </div>
      )}
    </div>
  );

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id, qty);
      window.scrollTo({ top: 0, behavior: "smooth" });
      const toastNode = document.createElement("div");
      toastNode.textContent = "✅ Đã thêm vào giỏ hàng!";
      toastNode.className =
        "fixed top-6 right-6 bg-emerald-600 text-white px-4 py-3 rounded-lg shadow z-50";
      document.body.appendChild(toastNode);
      setTimeout(() => toastNode.remove(), 1800);
    } catch {
      alert("Lỗi khi thêm vào giỏ hàng");
    }
  };

  return (
    <MainLayout>
      <div className="px-4 md:px-10 lg:px-16 xl:px-28 py-10 bg-[#F7FAF9] min-h-screen">
        {/* back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <span className="text-lg">←</span> Quay lại
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: gallery */}
          <div className="bg-white rounded-2xl border border-emerald-50 p-4 lg:p-6">
            <div className="relative">
              <img
                src={images[activeThumb]}
                alt={product.name}
                className="w-full h-[360px] md:h-[430px] object-contain rounded-xl bg-slate-50"
              />
              <div className="absolute top-3 right-3 rounded-full bg-emerald-600 text-white text-[11px] px-2 py-0.5">
                360° Xem
              </div>
            </div>

            {/* thumbnails */}
            <div className="mt-4 grid grid-cols-5 gap-3">
              {images.slice(0, 5).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  className={`h-16 rounded-lg border overflow-hidden ${
                    activeThumb === idx
                      ? "border-emerald-500 ring-2 ring-emerald-200"
                      : "border-slate-200 hover:border-emerald-200"
                  } bg-white`}
                >
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: info */}
          <div className="bg-white rounded-2xl border border-emerald-50 p-6 lg:p-8">
            <h1 className="text-[22px] md:text-[26px] font-bold text-slate-900">
              {product.name}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Phiên bản dùng thử, trải nghiệm sản phẩm thuần chay sinh học an toàn và tiết kiệm
            </p>

            {/* badges */}
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full border border-emerald-100">
                🟢 Hữu cơ
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100">
                🐾 Không thử nghiệm động vật
              </span>
              <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-600 px-2 py-1 rounded-full border border-violet-100">
                ✅ FDA Approved
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">{priceBlock}</div>

            {/* Capacity + quantity */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-slate-600 mb-1">Dung tích</div>
                <select
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                >
                  {capacityOptions.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Số lượng</div>
                <div className="flex items-center h-10 w-full rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    className="w-10 h-full hover:bg-slate-100"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <input
                    readOnly
                    value={qty}
                    className="flex-1 text-center outline-none"
                  />
                  <button
                    className="w-10 h-full hover:bg-slate-100"
                    onClick={() =>
                      setQty((q) =>
                        product.stock ? Math.min(product.stock, q + 1) : q + 1
                      )
                    }
                    disabled={product.stock && qty >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`w-full h-12 rounded-lg text-white font-semibold shadow-sm transition ${
                  product.stock <= 0
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {product.stock <= 0 ? "❌ Hết hàng" : "🛒  Thêm vào giỏ hàng"}
              </button>
              <p className="text-xs text-slate-500 mt-2">
                Kho hiện còn:{" "}
                <span className="font-medium text-slate-700">
                  {product.stock ?? 0}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs dưới */}
        <div className="mt-8 bg-white rounded-2xl border border-emerald-50 p-4 lg:p-6">
          <div className="flex gap-4 text-sm border-b">
            <TabBtn active={activeTab === "desc"} onClick={() => setActiveTab("desc")}>
              Mô tả sản phẩm
            </TabBtn>
            <TabBtn active={activeTab === "ingredients"} onClick={() => setActiveTab("ingredients")}>
              Thành phần
            </TabBtn>
            <TabBtn active={activeTab === "usage"} onClick={() => setActiveTab("usage")}>
              Hướng dẫn sử dụng
            </TabBtn>
            <TabBtn active={activeTab === "reviews"} onClick={() => setActiveTab("reviews")}>
              Đánh giá
            </TabBtn>
          </div>

          <div className="pt-6">
            {activeTab === "desc" && (
              <div className="space-y-2 text-slate-700 leading-relaxed">
                <p className="font-medium">Mô tả sản phẩm</p>
                <p>{product.description || "Đang cập nhật..."}</p>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="space-y-2 text-slate-700 leading-relaxed">
                <p className="font-medium">Thành phần</p>
                <p>{product.ingredients || "Đang cập nhật..."}</p>
              </div>
            )}

            {activeTab === "usage" && <UsageSteps />}

            {activeTab === "reviews" && <ReviewsBox productId={product._id} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

/* ---------- Sub Components ---------- */

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 -mb-px border-b-2 ${
        active
          ? "border-emerald-600 text-emerald-700 font-semibold"
          : "border-transparent text-slate-500 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function UsageSteps() {
  const steps = [
    { icon: "🫧", title: "Bước 1", desc: "Cho 1–2 giọt vào nước rửa chén" },
    { icon: "🧽", title: "Bước 2", desc: "Chà nhẹ nhàng để tạo bọt" },
    { icon: "💧", title: "Bước 3", desc: "Rửa sạch với nước" },
  ];
  return (
    <div>
      <p className="font-medium text-slate-800 mb-4">Hướng dẫn sử dụng</p>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center"
          >
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-semibold text-slate-900">{s.title}</div>
            <div className="text-sm text-slate-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsBox() {
  // dữ liệu demo — có thể nối API đánh giá sau
  const demo = [
    {
      name: "Nguyễn Thị Lan",
      rating: 5,
      content:
        "Sản phẩm rất tốt, làm sạch hiệu quả và không làm khô da tay. Mình rất hài lòng với chất lượng.",
    },
    {
      name: "Trần Văn Nam",
      rating: 4,
      content: "Hương thơm nhẹ nhàng, dễ chịu. Sẽ tiếp tục ủng hộ!",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-medium text-slate-800">Đánh giá khách hàng</p>
        <span className="text-xs text-amber-500">
          ★★★★☆ (4.8/5) • {demo.length} đánh giá
        </span>
      </div>

      <div className="space-y-4">
        {demo.map((rv, idx) => (
          <div key={idx} className="rounded-xl border bg-white p-4">
            <div className="flex items-center justify-between mb-1">
              <div className="font-semibold text-slate-900">{rv.name}</div>
              <div className="text-amber-400 text-sm">
                {"★".repeat(rv.rating)}
                <span className="text-slate-300">
                  {"★".repeat(5 - rv.rating)}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-700">{rv.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
