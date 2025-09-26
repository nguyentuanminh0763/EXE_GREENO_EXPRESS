export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-14">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo + intro */}
        <div>
          <h3 className="text-2xl font-extrabold text-green-500">GREENO</h3>
          <p className="mt-3 leading-relaxed">
            Nước rửa chén sinh học, an toàn cho gia đình và môi trường.
          </p>
          <div className="mt-4 flex gap-4 text-gray-300">
            {/* Facebook */}
            <a href="#" className="hover:text-green-500">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-green-500">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-green-500">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-500">Nước rửa chén</a></li>
            <li><a href="#" className="hover:text-green-500">Nước rửa tay</a></li>
            <li><a href="#" className="hover:text-green-500">Combo gia đình</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-500">Liên hệ</a></li>
            <li><a href="#" className="hover:text-green-500">Hướng dẫn sử dụng</a></li>
            <li><a href="#" className="hover:text-green-500">Chính sách đổi trả</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>📞</span> 1900 1234
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@greeno.vn
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span> Đà Nẵng, Việt Nam
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2025 GREENO - All rights reserved.
      </div>
    </footer>
  );
}
