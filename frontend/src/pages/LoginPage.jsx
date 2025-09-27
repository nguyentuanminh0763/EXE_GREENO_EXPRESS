import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "~/services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/contexts/AuthProvider";
import { getProfile } from "~/services/userService";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import logo from "~/assets/logo_greeno.png"

// Validation schema
const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^0\d{9}$/, "Số điện thoại không đúng định dạng"),
  password: yup
    .string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu ít nhất 6 ký tự"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onSubmit = async ({ phone, password }) => {
    try {
      const data = await login(phone, password);
      const profile = await getProfile();
      setUser(profile);
      toast.success("Đăng nhập thành công!");

      if (profile.role === "admin") {
        navigate("/admin");
      } else navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9FFF2]">
      <div className="bg-[#FFF9F0] rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="GREENO"
            className="w-20 h-16 mx-auto mb-2"
          />
          <p className="text-gray-500 text-sm">Nước rửa chén sinh học</p>
        </div>

        {/* Heading */}
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-2">
          Đăng nhập tài khoản
        </h3>
        <p className="text-center text-gray-500 mb-8">
          Chào mừng bạn quay trở lại!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Phone */}
          <div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaEnvelope className="absolute left-0 top-1.5"/>
              </span>
              <input
                type="text"
                placeholder="Nhập email hoặc số điện thoại"
                {...register("phone")}
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaLock className="absolute left-0 top-1.5"/>
              </span>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                {...register("password")}
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" /> Ghi nhớ đăng nhập
            </label>
            <Link
              to="/forgot-password"
              className="text-green-600 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>

          {/* Or divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-400 text-sm">Hoặc đăng nhập với</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={() => console.log("TODO: Google login")}
            className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Đăng nhập với Google
          </button>

          {/* Register link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
