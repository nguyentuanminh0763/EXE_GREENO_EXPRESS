import { useEffect, useMemo, useState } from "react";
import MainLayout from "~/layouts/MainLayout";
import {
  getCart,
  updateCartItem,
  removeCartItem,
} from "~/services/cartService";
import {
  createPaymentLink,
  createOrder,
  confirmPayment,
} from "~/services/paymentService";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function CartPage() {
  const [cart, setCart] = useState(null);

  // chọn sản phẩm để thanh toán
  const [selectedIds, setSelectedIds] = useState([]); // array of productId
  const allSelected = useMemo(() => {
    const ids = (cart?.items || [])
      .filter((i) => i.product)
      .map((i) => i.product._id);
    return ids.length > 0 && ids.every((id) => selectedIds.includes(id));
  }, [cart, selectedIds]);

  // địa chỉ giao hàng
  const [shipping, setShipping] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    province: "",
    district: "",
  });

  // thanh toán
  const [paymentMethod, setPaymentMethod] = useState("cod"); // cod | qr
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCart();
  }, []);

  // set mặc định chọn tất cả sau khi load
  useEffect(() => {
    if (cart?.items?.length) {
      setSelectedIds(
        cart.items.filter((i) => i.product).map((i) => i.product._id)
      );
    }
  }, [cart?.items?.length]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const payment = urlParams.get("payment");
    const orderCode = urlParams.get("orderCode");

    if (payment === "success" && orderCode) {
      handlePaymentSuccess(orderCode);
    } else if (payment === "cancelled") {
      toast.error("Thanh toán đã bị hủy");
      navigate("/cart", { replace: true });
    }
  }, [location.search, navigate]);

  const handlePaymentSuccess = async (orderCode) => {
    try {
      const result = await confirmPayment(orderCode);

      if (result.success) {
        toast.success("Thanh toán thành công!");
        await fetchCart();
        navigate("/customer/orders");
      } else {
        toast.error(result.message || "Có lỗi xảy ra khi xác nhận thanh toán");
      }
    } catch (error) {
      console.error("Error handling payment success:", error);
      toast.error("Có lỗi xảy ra khi xử lý thanh toán");
    }
  };

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (err) {
      console.error("Lỗi khi load giỏ hàng:", err);
    }
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateCartItem(productId, newQuantity);
    fetchCart();
  };

  const handleRemove = async (productId) => {
    await removeCartItem(productId);
    fetchCart();
  };

  // các item được chọn để thanh toán
  const selectedItems = useMemo(() => {
    if (!cart?.items) return [];
    return cart.items.filter(
      (i) => i.product && selectedIds.includes(i.product._id)
    );
  }, [cart, selectedIds]);

  const total = useMemo(() => {
    return selectedItems.reduce(
      (sum, item) => sum + item.product.finalPrice * item.quantity,
      0
    );
  }, [selectedItems]);

  const toggleSelectAll = () => {
    if (!cart?.items?.length) return;
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(
        cart.items.filter((i) => i.product).map((i) => i.product._id)
      );
    }
  };

  const toggleSelectOne = (productId) => {
    setSelectedIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleCheckout = async () => {
    if (!selectedItems.length) {
      toast.error("Bạn chưa chọn sản phẩm nào để thanh toán!");
      return;
    }

    if (!shipping.fullName || !shipping.phone || !shipping.addressLine) {
      toast.error("Vui lòng điền đầy đủ thông tin giao hàng.");
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod === "cod") {
        // Đặt hàng COD chỉ với các item đã chọn
        const orderData = {
          paymentMethod: "cod",
          items: selectedItems.map((i) => ({
            productId: i.product._id,
            quantity: i.quantity,
            price: i.product.finalPrice,
          })),
          shippingInfo: shipping, // backend có thể bỏ qua nếu chưa dùng
          total,
        };

        const result = await createOrder(orderData);

        if (result.success) {
          toast.success("Đặt hàng thành công!");
          navigate("/customer/orders");
        } else {
          toast.error(result.message || "Đặt hàng thất bại");
        }
      } else if (paymentMethod === "qr") {
        // Thanh toán QR chỉ với các item đã chọn
        const paymentData = {
          items: selectedItems.map((i) => ({
            productId: i.product._id,
            name: i.product.name,
            quantity: i.quantity,
            price: i.product.finalPrice,
          })),
          total,
          shippingInfo: shipping,
        };

        const result = await createPaymentLink(paymentData);

        if (result.success && result.data.checkoutUrl) {
          window.location.href = result.data.checkoutUrl;
        } else {
          toast.error("Không thể tạo liên kết thanh toán");
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.response?.data?.message || "Có lỗi xảy ra khi thanh toán");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!cart) return <MainLayout><div className="px-6 md:px-28 py-12">Đang tải giỏ hàng...</div></MainLayout>;

  return (
    <MainLayout>
      <div className="bg-[#F7FAF9]">
        {/* Progress */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 pt-10">
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
              Giỏ hàng
            </div>
            <div className="w-10 h-[2px] bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">2</span>
              Thanh toán
            </div>
            <div className="w-10 h-[2px] bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs">3</span>
              Hoàn tất
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-16">
            {/* LEFT: địa chỉ + phương thức thanh toán */}
            <div className="lg:col-span-2 space-y-6">
              {/* Địa chỉ giao hàng */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-50">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-emerald-600">🚚</span> Địa chỉ giao hàng
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-600">Họ và tên *</label>
                    <input
                      className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                      value={shipping.fullName}
                      onChange={(e) => setShipping((s) => ({ ...s, fullName: e.target.value }))}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Số điện thoại *</label>
                    <input
                      className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                      value={shipping.phone}
                      onChange={(e) => setShipping((s) => ({ ...s, phone: e.target.value }))}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm text-slate-600">Địa chỉ *</label>
                  <input
                    className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                    value={shipping.addressLine}
                    onChange={(e) => setShipping((s) => ({ ...s, addressLine: e.target.value }))}
                    placeholder="Số nhà, tên đường…"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm text-slate-600">Tỉnh/Thành phố</label>
                    <select
                      className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 bg-white"
                      value={shipping.province}
                      onChange={(e) => setShipping((s) => ({ ...s, province: e.target.value }))}
                    >
                      <option value="">Chọn tỉnh/thành phố</option>
                      <option>Đà Nẵng</option>
                      <option>Hà Nội</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Khác…</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Quận/Huyện</label>
                    <select
                      className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 bg-white"
                      value={shipping.district}
                      onChange={(e) => setShipping((s) => ({ ...s, district: e.target.value }))}
                    >
                      <option value="">Chọn quận/huyện</option>
                      <option>Hải Châu</option>
                      <option>Thanh Khê</option>
                      <option>Cẩm Lệ</option>
                      <option>Khác…</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Phương thức thanh toán */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-50">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-emerald-600">💳</span> Phương thức thanh toán
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer hover:bg-slate-50 transition
                    ${paymentMethod==='cod' ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200'}">
                    <input
                      type="radio"
                      name="pm"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <div>
                      <div className="font-semibold text-slate-800">Thanh toán khi nhận hàng (COD)</div>
                      <div className="text-sm text-slate-500">Thanh toán bằng tiền mặt khi nhận hàng</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer hover:bg-slate-50 transition
                    ${paymentMethod==='qr' ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200'}">
                    <input
                      type="radio"
                      name="pm"
                      value="qr"
                      checked={paymentMethod === "qr"}
                      onChange={() => setPaymentMethod("qr")}
                    />
                    <div>
                      <div className="font-semibold text-slate-800">Thanh toán QR / PayOS</div>
                      <div className="text-sm text-slate-500">Quét mã QR app ngân hàng / ví để thanh toán</div>
                    </div>
                  </label>
                </div>
              </section>

              {/* Danh sách giỏ hàng + checkbox chọn */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Sản phẩm trong giỏ</h3>
                  <label className="text-sm flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                    />
                    Chọn tất cả
                  </label>
                </div>

                <div className="space-y-4">
                  {cart.items.length === 0 && (
                    <p className="text-slate-500">Giỏ hàng của bạn đang trống.</p>
                  )}

                  {cart.items.map((item) =>
                    item.product ? (
                      <div
                        key={item.product._id}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 rounded-xl border border-slate-200"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(item.product._id)}
                            onChange={() => toggleSelectOne(item.product._id)}
                          />
                          <img
                            src={item.product.images?.[0] || "/default-product.jpg"}
                            alt={item.product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div>
                            <div className="font-semibold text-slate-800">{item.product.name}</div>
                            <div className="text-sm text-slate-500">
                              Giá: {item.product.finalPrice.toLocaleString()}đ
                            </div>
                            <div className="text-xs text-slate-400">Kho còn: {item.product.stock}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            className="px-2.5 py-1 bg-slate-100 rounded hover:bg-slate-200"
                            onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                          >
                            −
                          </button>
                          <input
                            readOnly
                            value={item.quantity}
                            className="w-10 text-center border border-slate-200 rounded"
                          />
                          <button
                            className={`px-2.5 py-1 rounded ${
                              item.quantity >= item.product.stock
                                ? "bg-slate-200 cursor-not-allowed"
                                : "bg-slate-100 hover:bg-slate-200"
                            }`}
                            disabled={item.quantity >= item.product.stock}
                            onClick={() =>
                              handleQuantityChange(item.product._id, item.quantity + 1)
                            }
                          >
                            +
                          </button>

                          <button
                            className="text-rose-500 text-sm ml-2"
                            onClick={() => handleRemove(item.product._id)}
                          >
                            Xoá
                          </button>
                        </div>

                        <div className="font-bold text-emerald-600 min-w-[110px] text-right">
                          {(item.product.finalPrice * item.quantity).toLocaleString()}đ
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </section>
            </div>

            {/* RIGHT: tóm tắt đơn hàng */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-50 sticky top-6">
                <h3 className="font-bold text-slate-900 mb-4">Đơn hàng của bạn</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span>{total.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span>25.000đ</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Giảm giá</span>
                    <span>-20.000đ</span>
                  </div>
                  <div className="h-px bg-slate-200 my-2" />
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>Tổng cộng</span>
                    <span>
                      {(Math.max(total + 25000 - 20000, 0)).toLocaleString()}đ
                    </span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full h-11 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-50"
                  onClick={handleCheckout}
                  disabled={isProcessing || selectedItems.length === 0}
                >
                  {isProcessing ? "Đang xử lý..." : "✅ Xác nhận đặt hàng"}
                </button>

                <p className="text-[11px] text-slate-500 mt-3">
                  Bằng cách đặt hàng, bạn đồng ý với các điều khoản dịch vụ của chúng tôi.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
