import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaCheckCircle,
  FaLock,
  FaStar,
  FaTrophy,
  FaMedal,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";
import {
  GiFruitBowl,
  GiTreeGrowth,
  GiStarsStack,
  GiLantern,
  GiPrayerBeads,
} from "react-icons/gi";

const StudentProgress = () => {
  const { getActiveChild } = useAppStore();
  const child = getActiveChild();

  const badges = [
    { id: 1, title: "حافظ الفاتحة", icon: <FaCrown className="text-yellow-500" />, desc: "أتم حفظ وتجويد سورة الفاتحة", unlocked: true },
    { id: 2, title: "حارس المعوذتين", icon: <FaShieldAlt className="text-blue-500" />, desc: "أتقن سورتي الفلق والناس", unlocked: true },
    { id: 3, title: "وسام الاستمرارية", icon: <GiTreeGrowth className="text-emerald-500" />, desc: "10 أيام متواصلة من المذاكرة", unlocked: true },
    { id: 4, title: "نجم التجويد", icon: <FaStar className="text-yellow-400" />, desc: "حصل على تقييم 5 نجوم من الشيخ", unlocked: true },
    { id: 5, title: "فارس جزء عمّ", icon: <FaTrophy className="text-gray-400" />, desc: "إتمام جزء عمّ كاملاً", unlocked: false },
    { id: 6, title: "قارئ الفجر", icon: <GiLantern className="text-gray-400" />, desc: "تسميع الورد قبل الشروق", unlocked: false },
  ];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              سجل الإنجازات والأوسمة
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              بستان الحفظ — رحلة إنجازات {child.name}
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              كل آية تحفظها هي شجرة تنبت في بستان إيمانك وتزيد رصيدك عند الله
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-center">
              <span className="text-[10px] text-blue-200 block">إجمالي الحسنات</span>
              <strong className="text-xl font-black text-yellow-400">{child.hasanat}</strong>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-center">
              <span className="text-[10px] text-blue-200 block">نسبة الجزء</span>
              <strong className="text-xl font-black text-emerald-400">{child.progress}%</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Surahs Progress Arena */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <GiFruitBowl className="text-green-600 text-2xl" /> شجرة السور (محطات الحفظ)
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {child.surahs?.map((s) => (
            <div
              key={s.id}
              className={`p-5 rounded-3xl border-2 flex flex-col justify-between transition-all ${
                s.status === "completed"
                  ? "bg-yellow-50/50 border-yellow-300"
                  : s.status === "current"
                  ? "bg-emerald-50 border-emerald-400 shadow-md ring-2 ring-emerald-200"
                  : "bg-gray-50 border-gray-200 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-base font-black ${
                    s.status === "completed"
                      ? "bg-yellow-500 text-white"
                      : s.status === "current"
                      ? "bg-emerald-600 text-white animate-pulse"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {s.status === "completed" ? (
                    <FaCheckCircle />
                  ) : s.status === "current" ? (
                    <GiTreeGrowth />
                  ) : (
                    <FaLock />
                  )}
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    s.status === "completed"
                      ? "bg-yellow-200 text-yellow-900"
                      : s.status === "current"
                      ? "bg-emerald-200 text-emerald-900 font-black"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s.status === "completed" ? "مكتمل" : s.status === "current" ? "جاري التدريب" : "مغلق"}
                </span>
              </div>

              <div>
                <h4 className="font-black text-base text-blue-900 mb-0.5">{s.name}</h4>
                <p className="text-xs text-gray-500">{s.ayahs} آيات كريمة</p>
              </div>

              {s.grade && (
                <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] font-bold text-blue-800">
                  {s.grade}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Badges and Trophies */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaTrophy className="text-yellow-500" /> خزانة الأوسمة والمكافآت
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-5 rounded-3xl border flex items-center gap-4 transition-all ${
                b.unlocked
                  ? "bg-white border-yellow-200 shadow-sm hover:shadow-md"
                  : "bg-gray-50 border-gray-200 opacity-50"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
                  b.unlocked ? "bg-yellow-50 border border-yellow-200" : "bg-gray-200"
                }`}
              >
                {b.icon}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-sm text-blue-900">{b.title}</h4>
                  {b.unlocked && <FaCheckCircle className="text-emerald-500 text-xs" />}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
