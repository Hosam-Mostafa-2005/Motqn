import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import {
  FaEnvelope,
  FaLock,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
  FaUserTie,
  FaUserAstronaut,
} from "react-icons/fa";
import { GiLantern, GiAbstract050, GiMoon, GiCrescentBlade } from "react-icons/gi";

const Login = () => {
  const navigate = useNavigate();
  const { login, setRole } = useAppStore();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("parent");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "ahmad@motqan.com",
      password: "password123",
    },
  });

  const onSubmit = (data) => {
    login(data.email, selectedRole);
    if (selectedRole === "student") {
      navigate("/student/dashboard");
    } else if (selectedRole === "sheikh") {
      navigate("/teacher/dashboard");
    } else {
      navigate("/parent/dashboard");
    }
  };

  const handleQuickLogin = (role) => {
    setSelectedRole(role);
    setRole(role);
    if (role === "student") {
      setValue("email", "youssef@motqan.com");
      navigate("/student/dashboard");
    } else if (role === "sheikh") {
      setValue("email", "sheikh.abdelrahman@motqan.com");
      navigate("/teacher/dashboard");
    } else {
      setValue("email", "ahmad@motqan.com");
      navigate("/parent/dashboard");
    }
  };

  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0a1128] font-tajawal relative overflow-hidden text-right p-4"
      dir="rtl"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <GiAbstract050 className="text-[60rem] text-yellow-500 animate-spin-slow" />
      </div>

      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Swaying Lanterns */}
      <div className="absolute top-0 right-10 z-20 flex gap-4 pointer-events-none">
        <motion.div {...lanternSway(4, 0)} className="flex flex-col items-center">
          <div className="w-[1px] h-32 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        </motion.div>
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-30 text-xs font-bold text-blue-200 hover:text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-1.5 transition-colors"
      >
        <FaArrowLeft className="text-[10px]" /> العودة للرئيسية
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative z-10 my-8"
      >
        <div className="bg-[#111b3d]/90 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-3">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-[#0B122B] flex items-center justify-center text-2xl font-black shadow-lg shadow-yellow-500/30 mx-auto">
                <GiCrescentBlade />
              </div>
            </Link>
            <h2 className="text-3xl font-black text-white mb-2">أهلاً بك في مُتقن</h2>
            <p className="text-blue-200/70 text-sm">
              سجل الدخول لمتابعة الورد اليومي والدروس المباشرة
            </p>
          </div>

          {/* Quick 1-Click Demo Login Selector */}
          <div className="mb-6 p-4 rounded-2xl bg-[#0B122B]/80 border border-yellow-500/30 text-center">
            <span className="text-xs text-yellow-400 font-bold block mb-2.5">
              ⚡ تجربة المنصة بنقرة واحدة (Demo Quick Login):
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin("parent")}
                className="py-2.5 px-2 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-white text-xs font-bold transition-all border border-blue-500/40 flex flex-col items-center gap-1"
              >
                <FaUserTie className="text-sm text-blue-300" />
                <span>ولي أمر</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("student")}
                className="py-2.5 px-2 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 hover:text-[#0B122B] text-yellow-300 text-xs font-bold transition-all border border-yellow-500/40 flex flex-col items-center gap-1"
              >
                <FaUserGraduate className="text-sm text-yellow-400" />
                <span>طالب (يوسف)</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("sheikh")}
                className="py-2.5 px-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-white text-xs font-bold transition-all border border-emerald-500/40 flex flex-col items-center gap-1"
              >
                <FaUserAstronaut className="text-sm text-emerald-300" />
                <span>المُحفّظ</span>
              </button>
            </div>
          </div>

          {/* Role selector for manual form submission */}
          <div className="mb-6">
            <label className="text-xs font-bold text-blue-200 block mb-2">تسجيل الدخول بصفتي:</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "parent", label: "ولي أمر" },
                { id: "student", label: "طالب" },
                { id: "sheikh", label: "مُحفظ" },
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRole(r.id)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedRole === r.id
                      ? "bg-yellow-500 text-[#0B122B] border-yellow-400 font-black"
                      : "bg-[#0a1128] text-gray-400 border-blue-900 hover:text-white"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-blue-200 pr-2">البريد الإلكتروني</label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaEnvelope />
                </div>
                <input
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "صيغة البريد غير صحيحة",
                    },
                  })}
                  type="email"
                  className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none text-sm"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs pr-2 font-bold">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-xs font-bold text-blue-200">كلمة المرور</label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaLock />
                </div>
                <input
                  {...register("password", { required: "كلمة المرور مطلوبة" })}
                  type={showPassword ? "text" : "password"}
                  className="w-full pr-12 pl-12 py-3.5 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs pr-2 font-bold">{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#0a1128] font-black text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              تسجيل الدخول <FaArrowLeft className="text-sm" />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              ليس لديك حساب بعد؟{" "}
              <Link
                to="/register"
                className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors underline decoration-yellow-500/30"
              >
                أنشئ حساباً جديداً
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
