import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaArrowRight, FaCheckCircle, FaLock } from "react-icons/fa";
import { GiMoon, GiLantern, GiAbstract050 } from "react-icons/gi";

const ForgotPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password reset requested for:", data.email);
    setIsSent(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0a1128] font-tajawal relative overflow-hidden text-right p-4"
      dir="rtl"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <GiAbstract050 className="text-[60rem] text-yellow-500 animate-spin-slow" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#111b3d]/90 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

          {!isSent ? (
            <div>
              <div className="text-center mb-8">
                <div className="inline-block bg-white/5 p-4 rounded-full border border-white/10 mb-4 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <GiMoon className="text-4xl text-yellow-400" />
                </div>
                <h2 className="text-3xl font-black text-white mb-2">استعادة كلمة المرور</h2>
                <p className="text-blue-200/70 text-sm">
                  أدخل بريدك الإلكتروني المسجل وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-[#0a1128] font-black text-lg rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  إرسال رابط الاستعادة
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 font-bold"
                >
                  <FaArrowRight className="text-xs" /> العودة لتسجيل الدخول
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl mx-auto border border-green-500/40">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-black text-white">تفقد بريدك الإلكتروني</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">
                تم إرسال تعليمات استعادة كلمة المرور إلى بريدك الإلكتروني بنجاح.
              </p>
              <div className="pt-4">
                <Link
                  to="/login"
                  className="inline-block w-full py-3.5 bg-yellow-500 text-[#0a1128] font-black rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  العودة لتسجيل الدخول
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
