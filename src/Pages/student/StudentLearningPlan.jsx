import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaBookOpen,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { GiFruitBowl, GiLantern, GiTreeGrowth, GiPrayerBeads } from "react-icons/gi";

const StudentLearningPlan = () => {
  const { getActiveChild } = useAppStore();
  const child = getActiveChild();

  const weeklySchedule = [
    { day: "الأحد", task: "حفظ سورة المسد (الآيات 1-3)", sheikhSession: false, done: true },
    { day: "الاثنين", task: "جلسة مباشرة مع الشيخ عبد الرحمن", sheikhSession: true, done: true },
    { day: "الثلاثاء", task: "تسميع سورة المسد كاملة وتسجيل صوتي", sheikhSession: false, done: false },
    { day: "الأربعاء", task: "مراجعة سورة الإخلاص والفلق والناس", sheikhSession: false, done: false },
    { day: "الخميس", task: "جلسة تثبيت وتصحيح مع الشيخ", sheikhSession: true, done: false },
  ];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              الخطة القرآنية المخصصة
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              خطة البطل {child.name} للحفظ والمراجعة
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              مستوى: {child.level} • الهدف الحالي: {child.memorizationGoal || "إتمام جزء عمّ"}
            </p>
          </div>

          <Link
            to="/student/practice"
            className="px-6 py-3 bg-yellow-500 text-[#0B122B] font-black rounded-xl text-xs shadow hover:bg-yellow-400 transition-all flex items-center gap-2"
          >
            <FaMicrophoneAlt /> الذهاب للتسميع
          </Link>
        </div>
      </div>

      {/* Current Objective Card */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50">
        <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
          <FaBookOpen className="text-blue-600" /> هدف الأسبوع الحالي
        </h3>

        <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
              الأسبوع الثاني من الشهر
            </span>
            <h4 className="text-2xl font-black text-blue-900">سورة المسد + تثبيت ما سبق</h4>
            <p className="text-xs text-gray-600 max-w-md">
              التركيز على نطق القلقلة في حروف (القاف، الطاء، الباء، الجيم، الدال) في فواصل الآيات.
            </p>
          </div>

          <div className="text-center min-w-[140px]">
            <div className="text-3xl font-black text-yellow-600">70%</div>
            <span className="text-xs text-gray-500">مكتمل من هدف الأسبوع</span>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaCalendarAlt className="text-yellow-600" /> الجدول الأسبوعي للمهام والحلقات
        </h3>

        <div className="space-y-3">
          {weeklySchedule.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex items-center justify-between text-xs ${
                item.done
                  ? "bg-green-50/60 border-green-200 text-green-900"
                  : "bg-gray-50 border-gray-100 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-black text-sm w-16 text-blue-900">{item.day}</span>
                <span className={`font-bold ${item.done ? "line-through opacity-70" : ""}`}>
                  {item.task}
                </span>
                {item.sheikhSession && (
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold text-[10px]">
                    حلقة مع الشيخ
                  </span>
                )}
              </div>

              <div>
                {item.done ? (
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <FaCheckCircle /> أُنجز
                  </span>
                ) : (
                  <span className="text-gray-400 font-bold">قيد الانتظار</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLearningPlan;
