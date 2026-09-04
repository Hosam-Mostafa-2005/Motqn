import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaUserPlus,
} from "react-icons/fa";
import {
  GiLantern,
  GiAbstract050,
  GiSamaraMosque,
  GiMoon,
} from "react-icons/gi";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("بيانات التسجيل:", data);
    // توجيه المستخدم بعد التسجيل (محاكاة)
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

      {/* 1. زخرفة إسلامية خلفية */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <GiAbstract050 className="text-[60rem] text-yellow-500 animate-spin-slow" />
      </div>

      {/* 2. تأثيرات ضوئية (Glow) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 3. فوانيس متدلية */}
      <div className="absolute top-0 left-10 z-20 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(4.5, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        </motion.div>
      </div>

      {/* =======================
          📝 كارت التسجيل
         ======================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative z-10 px-4"
      >
        <div className="bg-[#111b3d]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden">
          {/* شريط علوي ذهبي */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

          <div className="text-center mb-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-white/5 p-4 rounded-full border border-white/10 mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <GiMoon className="text-5xl text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-black text-white mb-2">
              انضم الي مُتقن
            </h2>
            <p className="text-blue-200/60 text-sm">
              ابدأ رحلتك أو رحلة طفلك مع القرآن اليوم
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* الاسم الكامل */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-200 pr-2">
                الاسم الكامل
              </label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaUser />
                </div>
                <input
                  {...register("fullName", { required: "الاسم مطلوب" })}
                  type="text"
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                  placeholder="الاسم الثلاثي"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-xs pr-2">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
                    required: "البريد مطلوب",
                    pattern: { value: /^\S+@\S+$/i, message: "بريد غير صحيح" },
                  })}
                  type="email"
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs pr-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* نوع الحساب */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-200 pr-2">
                نوع الحساب
              </label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaIdCard />
                </div>
                <select
                  {...register("role", { required: "يرجى اختيار نوع الحساب" })}
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled selected className="text-gray-500">
                    اختر الصفة...
                  </option>
                  <option value="parent">ولي أمر (أرغب في تحفيظ أبنائي)</option>
                  <option value="sheikh">شيخ / مُحفظ (أرغب في التدريس)</option>
                </select>
                {/* Custom Arrow */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>
            </div>

            {/* كلمة المرور */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-200 pr-2">
                كلمة المرور
              </label>
              <div className="relative group">
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors">
                  <FaLock />
                </div>
                <input
                  {...register("password", {
                    required: "كلمة المرور مطلوبة",
                    minLength: { value: 6, message: "يجب ألا تقل عن 6 أحرف" },
                  })}
                  type="password"
                  className="w-full pr-12 pl-4 py-4 rounded-xl bg-[#0a1128] border border-blue-800/50 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs pr-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* زر التسجيل */}
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
            >
              إنشاء الحساب <FaUserPlus />
            </motion.button>
          </form>

          {/* الفوتر */}
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
