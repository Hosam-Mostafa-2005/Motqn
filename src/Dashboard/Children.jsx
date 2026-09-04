import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaPause,
  FaMicrophoneAlt,
  FaStar,
  FaArrowRight,
  FaChevronLeft,
  FaCheckCircle,
  FaLock,
  FaMosque,
} from "react-icons/fa";
import {
  GiLantern,
  GiAbstract050,
  GiTreeGrowth,
  GiFruitBowl,
  GiPrayerBeads,
  GiCrescentBlade,
  GiStarsStack,
} from "react-icons/gi";

const Children = () => {
  const [isPlaying, setIsPlaying] = useState(null);

  /* ======================
      🧒 بيانات الطفل (Mock Data)
   ====================== */
  const childData = {
    name: "يوسف",
    level: "جزء عمّ",
    hasanat: 1450,
    streak: 12,
    avatar: "/man.png", // تأكد من وجود الصورة في public
  };

  const surahs = [
    { id: 1, name: "الفاتحة", status: "completed", ayahs: 7 },
    { id: 2, name: "الناس", status: "completed", ayahs: 6 },
    { id: 3, name: "الفلق", status: "completed", ayahs: 5 },
    { id: 4, name: "الإخلاص", status: "completed", ayahs: 4 },
    { id: 5, name: "المسد", status: "current", ayahs: 5 },
    { id: 6, name: "النصر", status: "locked", ayahs: 3 },
  ];

  const recordings = [
    {
      id: 1,
      surah: "سورة الفاتحة",
      date: "أمس - 04:30 م",
      duration: "00:45",
      feedback: "أحسنت يا بطل، انتبه لمدّ (الضالّين) 6 حركات.",
      rating: 4.8,
    },
    {
      id: 2,
      surah: "سورة الناس",
      date: "02 رمضان - 03:15 م",
      duration: "00:30",
      feedback: "ممتاز! الغنة في النون المشددة رائعة.",
      rating: 5.0,
    },
  ];

  // إعدادات حركة الفوانيس (Sway Animation)
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen bg-[#f3f7fa] font-tajawal text-right pb-24 relative overflow-hidden"
      dir="rtl"
    >
      {/* ======================
          🌌 طبقة الزينة والخلفية
         ====================== */}
      {/* 1. زخرفة أرابيسك خلفية */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <GiAbstract050 className="text-[70rem] absolute -top-40 -left-40 text-blue-900 animate-spin-slow" />
      </div>

      {/* 2. فوانيس متدلية (يمين ويسار) */}
      <div className="absolute top-0 right-10 z-50 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-32 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>
          <GiLantern className="text-6xl text-yellow-500 drop-shadow-[0_10px_15px_rgba(234,179,8,0.5)]" />
        </motion.div>
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center -mt-8"
        >
          <div className="w-[2px] h-20 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>
          <GiLantern className="text-4xl text-orange-500 drop-shadow-[0_10px_15px_rgba(249,115,22,0.5)]" />
        </motion.div>
      </div>

      <div className="absolute top-0 left-10 z-50 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(6, 0.5)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-40 bg-gradient-to-b from-blue-600 to-blue-400"></div>
          <GiLantern className="text-5xl text-blue-500 drop-shadow-[0_10px_15px_rgba(59,130,246,0.5)]" />
        </motion.div>
      </div>

      {/* ======================
          🕌 الهيدر (Header)
         ====================== */}
      <header className="bg-[#0a1128] text-white pt-10 pb-32 rounded-b-[4rem] border-b-8 border-yellow-500 shadow-2xl relative overflow-hidden">
        {/* زخرفة داخلية للهيدر */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-blue-200 mb-8 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <FaArrowRight /> العودة للوحة المتابعة
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* صورة الطفل مع إطار مميز */}
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="w-36 h-36 rounded-full border-4 border-yellow-500 p-1 shadow-2xl relative z-10 bg-[#0a1128]">
                <img
                  src={childData.avatar}
                  alt={childData.name}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-[#0a1128] px-6 py-1 rounded-full font-black text-sm shadow-lg border-2 border-[#0a1128] z-20 whitespace-nowrap">
                المستوى: {childData.level}
              </div>
            </div>

            {/* بيانات الطفل */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-5xl font-black mb-2 flex items-center justify-center md:justify-start gap-3">
                البطل {childData.name}
                <GiCrescentBlade className="text-yellow-500 rotate-[-15deg]" />
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <div className="bg-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-default">
                  <GiStarsStack className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-xs text-blue-200">رصيد الحسنات</p>
                    <p className="font-bold text-lg">{childData.hasanat}</p>
                  </div>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-default">
                  <GiTreeGrowth className="text-green-400 text-xl" />
                  <div>
                    <p className="text-xs text-blue-200">أيام متواصلة</p>
                    <p className="font-bold text-lg">{childData.streak} يوم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 📜 كارت الآية العائم */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-30">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-6 rounded-[2.5rem] shadow-xl border-2 border-yellow-100 flex gap-5 items-center relative overflow-hidden"
        >
          <div className="bg-yellow-50 p-4 rounded-full">
            <GiPrayerBeads className="text-4xl text-yellow-600" />
          </div>
          <div>
            <p className="font-black text-blue-900 text-lg mb-1">
              ﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾
            </p>
            <p className="text-gray-500 text-sm font-medium">
              ✨ نصيحة اليوم: التمهّل في التلاوة يساعدك على تدبر المعاني.
            </p>
          </div>
          {/* زخرفة جانبية */}
          <FaMosque className="absolute -left-6 -bottom-6 text-9xl text-gray-50 opacity-50 rotate-12" />
        </motion.div>
      </div>

      {/* ======================
          🌱 المحتوى الرئيسي
         ====================== */}
      <main className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-12 gap-10 relative z-10">
        {/* 🌳 العمود الأيمن: بستان الحفظ (Progress Tree) */}
        <section className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[3.5rem] shadow-xl border-t-8 border-green-500 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-300"></div>

            <h2 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3">
              <GiFruitBowl className="text-green-600 text-3xl" />
              بستان الحفظ
            </h2>

            <div className="relative pl-4">
              {/* الخط الرابط (الجذع) */}
              <div className="absolute top-4 right-[19px] w-[2px] h-[90%] bg-gradient-to-b from-green-200 to-gray-200"></div>

              <div className="space-y-6">
                {surahs.map((s) => (
                  <div
                    key={s.id}
                    className="relative flex items-center gap-4 group"
                  >
                    {/* الدائرة (حالة السورة) */}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-sm transition-all
                      ${
                        s.status === "completed"
                          ? "bg-yellow-500 border-yellow-200 text-white scale-110"
                          : s.status === "current"
                            ? "bg-green-500 border-green-200 text-white animate-pulse"
                            : "bg-white border-gray-200 text-gray-300"
                      }
                    `}
                    >
                      {s.status === "completed" ? (
                        <FaCheckCircle />
                      ) : s.status === "current" ? (
                        <GiTreeGrowth />
                      ) : (
                        <FaLock className="text-xs" />
                      )}
                    </div>

                    {/* الكارت */}
                    <div
                      className={`flex-1 p-4 rounded-2xl border transition-all cursor-pointer
                       ${
                         s.status === "current"
                           ? "bg-green-50 border-green-200 shadow-md translate-x-[-5px]"
                           : s.status === "locked"
                             ? "bg-gray-50 border-gray-100 opacity-60"
                             : "bg-white border-gray-100 hover:shadow-md hover:border-yellow-200"
                       }
                    `}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-blue-900">{s.name}</h4>
                        {s.status === "completed" && (
                          <FaStar className="text-yellow-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {s.ayahs} آيات •{" "}
                        {s.status === "current"
                          ? "جاري الحفظ..."
                          : s.status === "completed"
                            ? "تمت بنجاح"
                            : "مغلقة"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🎙️ العمود الأيسر: التلاوات */}
        <section className="lg:col-span-8 space-y-8">
          <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-blue-50 relative overflow-hidden">
            <GiAbstract050 className="absolute -top-20 -left-20 text-[15rem] text-blue-50 opacity-60" />

            <h2 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3 relative z-10">
              <FaMicrophoneAlt className="text-blue-600 text-3xl" />
              أحدث التلاوات
            </h2>

            <div className="space-y-6 relative z-10">
              {recordings.map((r) => (
                <div
                  key={r.id}
                  className={`p-6 rounded-[2.5rem] flex flex-col md:flex-row gap-6 items-start transition-all border border-transparent
                    ${isPlaying === r.id ? "bg-[#0a1128] text-white shadow-2xl scale-[1.02]" : "bg-blue-50 hover:bg-white hover:shadow-lg hover:border-blue-100"}
                  `}
                >
                  <button
                    onClick={() =>
                      setIsPlaying(isPlaying === r.id ? null : r.id)
                    }
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all flex-shrink-0
                      ${isPlaying === r.id ? "bg-yellow-500 text-white" : "bg-white text-blue-600 hover:scale-110"}
                    `}
                  >
                    {isPlaying === r.id ? (
                      <FaPause className="text-xl" />
                    ) : (
                      <FaPlay className="text-xl pl-1" />
                    )}
                  </button>

                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`font-bold text-lg ${isPlaying === r.id ? "text-white" : "text-blue-900"}`}
                      >
                        {r.surah}
                      </h3>
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-lg">
                        <span className="text-yellow-400 text-sm font-black">
                          {r.rating}
                        </span>
                        <FaStar className="text-yellow-400 text-xs" />
                      </div>
                    </div>

                    <p
                      className={`text-xs mb-4 ${isPlaying === r.id ? "text-gray-400" : "text-gray-500"}`}
                    >
                      <span className="opacity-70">{r.date}</span> •{" "}
                      <span className="opacity-70">{r.duration}</span>
                    </p>

                    <div
                      className={`p-4 rounded-2xl text-sm italic relative
                       ${isPlaying === r.id ? "bg-white/10 border-r-4 border-yellow-500 text-gray-200" : "bg-white border-r-4 border-yellow-400 text-gray-600"}
                    `}
                    >
                      " {r.feedback} "
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="text-blue-600 font-bold flex items-center gap-2 mx-auto hover:bg-blue-50 px-6 py-2 rounded-full transition-colors">
                عرض الأرشيف الكامل <FaChevronLeft className="text-xs" />
              </button>
            </div>
          </div>

          {/* 🤲 كارت الذكر */}
          <div className="bg-gradient-to-r from-blue-900 to-[#0a1128] p-8 rounded-[3rem] shadow-xl flex flex-col md:flex-row gap-6 items-center text-white relative overflow-hidden">
            <GiStarsStack className="absolute top-0 right-0 text-9xl text-white opacity-5" />
            <div className="bg-white/10 p-5 rounded-full backdrop-blur-md">
              <GiPrayerBeads className="text-5xl text-yellow-400" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-black text-yellow-400 mb-2">
                ذكر ما بعد التلاوة
              </h3>
              <p className="text-xl font-bold mb-1">
                "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ"
              </p>
              <p className="text-sm text-blue-200">
                أشهد أن لا إله إلا أنت، أستغفرك وأتوب إليك.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Children;
