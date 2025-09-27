import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { sendForgotPasswordRequest } from "~/services/authService"; 
import { Link } from "react-router-dom";
import logo from '~/assets/logo_greeno.png'
import { FaPhone } from "react-icons/fa";

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^0\d{9}$/, "Số điện thoại không đúng định dạng"),
});

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ phone }) => {
    try {
      await sendForgotPasswordRequest({ phone });
      toast.success("✅ Đã gửi link đặt lại mật khẩu đến email!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "❌ Gửi yêu cầu thất bại!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9FFF2]">
      <div className="bg-[#FFF9F0] rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Logo */}
        {/* <div className="text-center mb-6">
          <img
            src={logo}
            alt="GREENO"
            className="w-20 h-20 mx-auto"
          />
        
        </div> */}

        {/* Heading */}
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-3">
          Quên mật khẩu?
        </h3>
        <p className="text-center text-gray-500 mb-6">
          Nhập số điện thoại để lấy lại mật khẩu qua email
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaPhone className="absolute left-0 top-1.5"/>
              </span>
              <input
                type="text"
                placeholder="Nhập số điện thoại"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Đang xử lý..." : "Gửi link đặt lại mật khẩu"}
          </button>

          <p className="text-sm text-center text-gray-600 mt-6">
            Quay lại{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
