import React, { useEffect, useState, useRef, useContext } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaBell, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "~/api/axiosClient";
import { AuthContext } from "~/contexts/AuthContext";
import logo from "~/assets/logo_greeno.png"; // Giả sử bạn có logo ở đây
import { logout } from '~/services/authService';
import { toast } from 'react-toastify';

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [showNotif, setShowNotif] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const notifRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClickLogout = async () => {
    try {
      await logout()
      toast.success("Logout Successful!")
      navigate('/login')

    } catch (error) {
      console.error('Logout failed:', error); // xử lý lỗi cụ thể
      throw error;
    }
  }

  // Đóng dropdown khi click ngoài
  useEffect(() => {
    const handleClickOutside = e => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotif(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Khi dropdown mở, fetch notification mới
  useEffect(() => {
    if (showNotif) {
      axios.get("/chat/notifications")
        .then(res => {
          const data = res.data || [];

          setNotifications(data);
          setUnreadCount(data.filter(n => !n.isRead).length);
        })
        .catch(() => {
          setNotifications([]);
          setUnreadCount(0);
        });
    }
  }, [showNotif]);


  const baseClass = "text-base font-medium transition-all duration-200";
  const activeClass = `text-base transition-all duration-200 text-[#22C55E] font-bold`;
  const normalClass = `${baseClass} text-black hover:text-[#22C55E]`;

  return (
    <div className="bg-[#FCF8EF] px-40 py-4 flex justify-between items-center shadow-md rounded-md">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-full" />
          {/* <span className="text-xl font-bold text-orange-500">Patte</span> */}
        </div>
      </Link>

      {/* Nav links */}
      <nav className="hidden md:flex gap-10 font-medium text-gray-800">
        <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : normalClass}>Trang chủ</NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? activeClass : normalClass}>Tin Tức</NavLink>
        {/* <NavLink to="/service" className={({ isActive }) => isActive ? activeClass : normalClass}>Dịch vụ</NavLink> */}
        <NavLink to="/shop" className={({ isActive }) => isActive ? activeClass : normalClass}>Sản phẩm</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>Về chúng tôi</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>Liên hệ</NavLink>
      </nav>

      {/* Icons & notifications */}
      <div className="flex items-center gap-6 text-gray-800">
        <FaSearch className="cursor-pointer hover:text-[#22C55E]" />


        {user ? (
          <div className="relative" ref={dropdownRef}>
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              {/* {user.name == null ? 'Guest' : user.name} */}
              <FaUser className="cursor-pointer hover:text-[#22C55E]" />
            </span>

            {showDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg text-gray-700">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate('/customer/profile');
                      setShowDropdown(false);
                    }}
                  >
                    Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate('/customer/orders');
                      setShowDropdown(false);
                    }}
                  >
                    Orders
                  </li>
                  {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlist</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Address Book</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Change Password</li> */}
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li>
                  <li onClick={handleClickLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <span className="cursor-pointer" onClick={() => { navigate('/login') }}><FaUser className="cursor-pointer hover:text-[#22C55E]" /></span>

        )}

        {/* <div ref={notifRef} className="relative"> */}
        {/* Bell button */}
        {/* <button
            onClick={() => setShowNotif(v => !v)}
            className="relative focus:outline-none"
          >
            <FaBell className="text-lg hover:text-orange-500" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button> */}

        {/* Dropdown */}
        {/* {showNotif && (
            <div className="absolute right-0 mt-2 w-80 bg-white border rounded-md shadow-lg z-50">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <span className="font-semibold">Thông báo</span>
                {unreadCount > 0 && (
                  <button
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Đánh dấu đã đọc
                  </button>
                )}
              </div>
              <ul className="max-h-60 overflow-y-auto">
                {notifications.length === 0 && (
                  <li className="px-4 py-2 text-gray-500 text-sm">
                    Không có thông báo
                  </li>
                )}
                {notifications.map(n => (
                  <li
                    key={n._id}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${n.isRead ? "" : "bg-gray-50 font-medium"
                      }`}
                  >
                    <div>{n.title}</div>
                    <div className="text-xs text-gray-600">{n.content}</div>
                    <div className="text-2xs text-gray-400 mt-1">
                      {new Date(n.createdAt).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-center border-t">
                <Link
                  to="/customer/notifications"
                  className="block w-full px-4 py-2 text-blue-500 hover:bg-gray-50 text-sm"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>
          )}
        </div> */}

        {/* Cart icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="cursor-pointer hover:text-[#22C55E]" />
          <span className="absolute -top-2 -right-2 bg-[#22C55E] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </Link>
      </div>
    </div>
  );
}
