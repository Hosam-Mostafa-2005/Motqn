import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // أضفنا useNavigate للتوجيه الصحيح
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import { GiLantern, GiAbstract050, GiMoon } from "react-icons/gi";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("بيانات تسجيل الدخول:", data);
    // محاكاة تسجيل الدخول الناجح
    // هنا المفروض نتحقق من الـ API، ولو تمام نوجهه:
    navigate("/dashboard");
  };

  // إعدادات حركة الفوانيس
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0a1128] font-tajawal relative overflow-hidden text-right"
      dir="rtl"
    >
      {/* =======================
          🎨 الخلفية والزينة
         ======================= */}

      {/* 1. زخرفة إسلامية ضخمة تدور ببطء في الخلفية */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <GiAbstract050 className="text-[60rem] text-yellow-500 animate-spin-slow" />
      </div>

      {/* 2. تأثيرات ضوئية (Glow) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 3. فوانيس متدلية (يمين ويسار) */}
      <div className="absolute top-0 right-10 z-20 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        </motion.div>
      </div>
      <div className="absolute top-0 left-10 z-20 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center -mt-10"
        >
          <div className="w-[1px] h-40 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-5xl text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" />
        </motion.div>
      </div>

      {/* =======================
          🔐 كارت تسجيل الدخول
         ======================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#111b3d]/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden">
          {/* شريط علوي ذهبي */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

          <div className="text-center mb-10">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-white/5 p-4 rounded-full border border-white/10 mb-4 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
            >
              <GiMoon className="text-5xl text-yellow-400" />
            </motion.div>
            <h2 className="text-3xl font-black text-white mb-2">
              أهلاً بك في مُتقن
            </h2>
            <p className="text-blue-200/60 text-sm">
              أدخل بياناتك لمتابعة وردك اليومي
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* البريد الإلكتروني */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-200 pr-2">
                البريد الإلكتروني
              </label>
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
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs pr-2 font-bold">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* كلمة المرور */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-sm font-bold text-blue-200">
                  كلمة المرور
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-yellow-500 hover:text-yellow-300 transition-colors"
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
                  type="password"
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs pr-2 font-bold">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* زر الدخول */}
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(234, 179, 8, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-[#0a1128] font-black text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
            >
              تسجيل الدخول <FaArrowLeft className="text-sm" />
            </motion.button>
          </form>

          {/* الفوتر */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-400 text-sm">
              ليس لديك حساب؟{" "}
              <Link
                to="/register"
                className="text-yellow-400 font-bold hover:text-yellow-200 transition-colors underline decoration-yellow-500/30"
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
