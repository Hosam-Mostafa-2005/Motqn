import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChild,
  FaCalendarCheck,
  FaChartPie,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import {
  GiLantern,
  GiMoon,
  GiCrescentBlade,
  GiFlowerPot,
  GiAbstract050,
  GiSunPriest,
  GiPrayerBeads,
} from "react-icons/gi";

const ParentDashboard = () => {
  const myChildren = [
    {
      id: 1,
      name: "يوسف",
      level: "جزء عمّ",
      progress: 75,
      lastSession: "منذ ساعتين",
      sheikh: "الشيخ عبد الرحمن",
    },
    {
      id: 2,
      name: "سارة",
      level: "القاعدة النورانية",
      progress: 40,
      lastSession: "أمس",
      sheikh: "الشيخ يوسف",
    },
  ];

  // إعدادات حركة الفوانيس (Swaying Animation)
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [3, -3, 3], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen bg-[#f0f4f8] font-tajawal text-right pb-10 relative overflow-hidden"
      dir="rtl"
    >
      {/* =======================
          🎨 طبقة الزينة والديكور
         ======================= */}

      {/* 1. زخرفة الخلفية الكبرى */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <GiAbstract050 className="text-[70rem] absolute -top-40 -left-40 text-blue-900" />
        <GiAbstract050 className="text-[70rem] absolute top-1/3 -right-60 text-yellow-600" />
      </div>

      {/* 2. فوانيس اليمين (Right Side Lanterns) */}
      <div className="absolute top-0 right-10 z-20 flex gap-4 pointer-events-none">
        {/* فانوس كبير */}
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-32 bg-yellow-600/50"></div>
          <GiLantern className="text-6xl text-yellow-600 drop-shadow-lg" />
        </motion.div>
        {/* فانوس صغير */}
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center mt-[-20px]"
        >
          <div className="w-[2px] h-20 bg-yellow-600/50"></div>
          <GiLantern className="text-4xl text-yellow-500 drop-shadow-md" />
        </motion.div>
      </div>

      {/* 3. فوانيس اليسار (Left Side Lanterns) */}
      <div className="absolute top-0 left-10 z-20 flex gap-4 pointer-events-none">
        {/* فانوس متوسط */}
        <motion.div
          {...lanternSway(4.5, 0.5)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-28 bg-yellow-600/50"></div>
          <GiLantern className="text-5xl text-yellow-600 drop-shadow-lg" />
        </motion.div>
        {/* فانوس صغير جداً */}
        <motion.div
          {...lanternSway(6, 1.5)}
          className="flex flex-col items-center mt-[-10px]"
        >
          <div className="w-[2px] h-16 bg-yellow-600/50"></div>
          <GiLantern className="text-3xl text-yellow-500 drop-shadow-md" />
        </motion.div>
      </div>

      {/* 4. حبل زينة علوي خفيف (Top Bunting) */}
      <div className="absolute top-0 left-1/4 right-1/4 h-20 flex justify-center gap-12 z-10 opacity-60 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            <div className="w-[1px] h-8 bg-blue-200 mx-auto"></div>
            <FaStar className="text-yellow-300 text-xl" />
          </motion.div>
        ))}
      </div>

      {/* =======================
          🖥️ محتوى الصفحة الرئيسي
         ======================= */}

      {/* Header */}
      <div className="bg-[#0a1128] text-white p-10 pt-16 relative overflow-hidden rounded-b-[4rem] shadow-2xl border-b-4 border-yellow-500">
        <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-4xl font-black mb-2 flex items-center gap-4">
              لوحة المتابعة الإيمانية{" "}
            </h1>
            <p className="text-blue-200 text-lg flex items-center gap-2">
              <GiPrayerBeads /> مرحباً بك، نسأل الله أن يبارك في ذريتك
            </p>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(234, 179, 8, 0.4)",
            }}
            className="bg-yellow-500 text-[#0a1128] px-8 py-4 rounded-3xl font-black flex items-center gap-3 shadow-xl transition-all relative z-30"
          >
            <FaPlus /> إضافة طفل جديد
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-10 relative z-10">
        {/* Statistics Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-blue-50 relative overflow-hidden"
          >
            <GiAbstract050 className="absolute -top-6 -right-6 text-6xl text-blue-50 opacity-40" />
            <h3 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3">
              <FaChartPie className="text-blue-600" /> حصاد الشهر
            </h3>
            <div className="space-y-5">
              <div className="p-5 bg-gradient-to-r from-blue-50 to-white rounded-[2rem] border border-blue-100 flex justify-between items-center relative overflow-hidden">
                <div className="absolute right-0 top-0 w-2 h-full bg-blue-600"></div>
                <span className="font-bold text-gray-500 mr-4">
                  حلقات متممة
                </span>
                <span className="text-3xl font-black text-blue-700">١٢</span>
              </div>
              <div className="p-5 bg-gradient-to-r from-yellow-50 to-white rounded-[2rem] border border-yellow-100 flex justify-between items-center relative overflow-hidden">
                <div className="absolute right-0 top-0 w-2 h-full bg-yellow-500"></div>
                <span className="font-bold text-gray-500 mr-4">
                  آيات محفوظة
                </span>
                <span className="text-3xl font-black text-yellow-600">١٤٥</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-[#0a1128] p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border border-blue-800">
            <GiMoon className="absolute -bottom-10 -left-10 text-9xl text-yellow-500 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            {/* وميض نجوم */}
            <div className="absolute top-4 right-10 text-yellow-400 animate-pulse text-xs">
              ✦
            </div>
            <div className="absolute bottom-10 right-4 text-blue-400 animate-pulse text-xl">
              ✦
            </div>

            <h4 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <GiLantern /> درر تربوية
            </h4>
            <p className="text-lg leading-relaxed font-medium text-blue-100">
              "اجعل من وقت القرآن وقتاً للحب والسكينة، لا وقتاً للضغط والشدة."
            </p>
          </motion.div>
        </div>

        {/* Children Progress Section */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-blue-900 flex items-center gap-4">
              قرّة عيني <FaChild className="text-blue-600" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {myChildren.map((child, index) => (
              <motion.div
                key={child.id}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[4rem] shadow-2xl border border-white relative overflow-hidden group"
              >
                {/* زخرفة مائية في قلب الكارت */}
                <GiAbstract050 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] text-blue-50/30 opacity-40 pointer-events-none transition-transform group-hover:rotate-45 duration-700" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 rounded-[2rem] shadow-lg shadow-blue-200">
                      <FaChild className="text-3xl" />
                    </div>
                    <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm border border-green-200 flex items-center gap-1">
                      <FaStar className="text-xs" /> مُجدّ
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-blue-900 mb-2">
                    {child.name}
                  </h3>
                  <p className="text-gray-400 mb-8 font-medium">
                    بستان:{" "}
                    <span className="text-blue-600 underline font-bold">
                      {child.level}
                    </span>
                  </p>

                  <div className="space-y-3 mb-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-900 font-bold uppercase text-xs tracking-widest">
                        نسبة الإنجاز
                      </span>
                      <span className="text-blue-600 font-black">
                        {child.progress}%
                      </span>
                    </div>
                    <div className="h-4 w-full bg-blue-50 rounded-full overflow-hidden border border-blue-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${child.progress}%` }}
                        className="h-full bg-gradient-to-l from-blue-600 to-blue-400 shadow-inner"
                      />
                    </div>
                  </div>

                  <Link
                    to={`/dashboard/children/${child.id}`}
                    className="w-full py-5 bg-[#0a1128] text-white font-black rounded-3xl text-center block shadow-xl hover:bg-yellow-500 hover:text-black transition-all flex justify-center items-center gap-2"
                  >
                    رؤية مسار النور <GiCrescentBlade />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🗓️ الجدول المزخرف */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          className="bg-white p-10 rounded-[4rem] shadow-2xl border-t-8 border-yellow-500 relative overflow-hidden"
          whileHover={{ boxShadow: "0px 30px 60px rgba(0,0,0,0.1)" }}
        >
          <GiAbstract050 className="absolute -bottom-20 -left-20 text-[20rem] text-blue-50 opacity-40 rotate-45" />

          <h3 className="text-3xl font-black text-blue-900 mb-10 flex items-center gap-4 relative z-10">
            <FaCalendarCheck className="text-yellow-600" /> الجلسات الرمضانية
            القادمة
          </h3>
          <div className="relative z-10 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="text-blue-300 uppercase text-sm tracking-widest border-b-2 border-blue-50">
                  <th className="pb-6 pr-4">الطفل</th>
                  <th className="pb-6">التوقيت</th>
                  <th className="pb-6">المعلم</th>
                  <th className="pb-6">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                <tr className="group hover:bg-blue-50/50 transition-all">
                  <td className="py-6 pr-4 font-black text-blue-900">يوسف</td>
                  <td className="py-6 text-gray-500 font-medium">
                    اليوم - ٠٤:٠٠ م
                  </td>
                  <td className="py-6 font-bold text-blue-600 flex items-center gap-2">
                    <GiFlowerPot className="text-yellow-500" /> الشيخ عبد الرحمن
                  </td>
                  <td className="py-6">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-2xl font-bold text-xs border border-yellow-200">
                      بانتظار التأكيد
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentDashboard;
