import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaUserPlus,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import { GiLantern, GiAbstract050, GiCrescentBlade } from "react-icons/gi";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAppStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      role: "parent",
      password: "",
    },
  });

  const onSubmit = (data) => {
    registerUser(data);
    if (data.role === "sheikh") {
      navigate("/teacher/dashboard");
    } else {
      // For parent, guide them directly to child setup!
      navigate("/shiekhs/childsetup");
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
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="absolute top-0 left-10 z-20 flex gap-4 pointer-events-none">
        <motion.div {...lanternSway(4.5, 0)} className="flex flex-col items-center">
          <div className="w-[1px] h-32 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        </motion.div>
      </div>

      <Link
        to="/"
        className="absolute top-6 left-6 z-30 text-xs font-bold text-blue-200 hover:text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-1.5 transition-colors"
      >
        <FaArrowLeft className="text-[10px]" /> العودة للرئيسية
      </Link>

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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30 mx-auto">
                <GiCrescentBlade />
              </div>
            </Link>
            <h2 className="text-3xl font-black text-white mb-2">انضم إلى منصة مُتقن</h2>
            <p className="text-blue-200/70 text-sm">
              ابدأ رحلتك القرآنية اليوم مع نخبة من خيرة المحفظين
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-blue-200 pr-2">الاسم الكامل</label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaUser />
                </div>
                <input
                  {...register("fullName", { required: "الاسم الكامل مطلوب" })}
                  type="text"
                  className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none text-sm"
                  placeholder="مثال: أحمد عبد الله"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-xs pr-2">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-blue-200 pr-2">البريد الإلكتروني</label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaEnvelope />
                </div>
                <input
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: { value: /^\S+@\S+$/i, message: "صيغة البريد غير صحيحة" },
                  })}
                  type="email"
                  className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none text-sm"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs pr-2">{errors.email.message}</p>
              )}
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-blue-200 pr-2">نوع الحساب</label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaIdCard />
                </div>
                <select
                  {...register("role", { required: "يرجى اختيار نوع الحساب" })}
                  className="w-full pr-12 pl-4 py-3.5 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none appearance-none cursor-pointer text-sm font-bold"
                >
                  <option value="parent">ولي أمر (أرغب في متابعة تحفيظ أبنائي)</option>
                  <option value="sheikh">شيخ / مُحفّظ (أرغب في تدريس الطلاب)</option>
                </select>
                <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-blue-200 pr-2">كلمة المرور</label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaLock />
                </div>
                <input
                  {...register("password", {
                    required: "كلمة المرور مطلوبة",
                    minLength: { value: 6, message: "يجب ألا تقل عن 6 أحرف" },
                  })}
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
                <p className="text-red-400 text-xs pr-2">{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              إنشاء الحساب والمتابعة <FaUserPlus />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-400 text-sm">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="text-blue-400 font-bold hover:text-blue-300 transition-colors underline decoration-blue-500/30"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
