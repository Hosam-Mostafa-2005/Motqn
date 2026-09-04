import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShieldAlt,
  FaScroll,
  FaTrophy,
  FaCheckCircle,
  FaRocket,
  FaDragon,
  FaLock,
  FaGem,
} from "react-icons/fa";
import {
  GiLantern,
  GiAbstract050,
  GiPrayerBeads,
  GiCrescentBlade,
  GiOpenChest,
  GiSwordsEmblem,
} from "react-icons/gi";

const Gamification = () => {
  // إعدادات حركة الفوانيس
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [3, -3, 3], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  const dailyQuests = [
    { id: 1, title: "تسميع الورد اليومي (3 آيات)", done: true, reward: 20 },
    { id: 2, title: "الاستماع لتصحيح الشيخ", done: false, reward: 15 },
    { id: 3, title: "قراءة تفسير ميسر للآيات", done: false, reward: 10 },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a1128] font-tajawal text-right pb-20 relative overflow-hidden"
      dir="rtl"
    >
      {/* زينة الخلفية */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <GiAbstract050 className="text-[80rem] absolute top-0 right-0 text-yellow-500 animate-spin-slow" />
      </div>

      {/* فوانيس متدلية يساراً */}
      <div className="absolute top-0 left-10 z-20 flex gap-6 pointer-events-none opacity-80">
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-40 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-7xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
        </motion.div>
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center mt-[-30px]"
        >
          <div className="w-[2px] h-28 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-5xl text-yellow-200 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]" />
        </motion.div>
      </div>

      {/* =======================
          💎 الهيدر: ملخص البطل
         ======================= */}
      <div className="relative z-10 bg-gradient-to-r from-blue-900/50 to-[#0a1128]/50 backdrop-blur-md p-8 border-b-4 border-yellow-500/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
              <GiCrescentBlade className="text-yellow-500" /> رحلة النور: مغامرة
              يوسف
            </h1>
            <p className="text-blue-200 text-lg flex items-center gap-2">
              <GiPrayerBeads /> المستوى الحالي: حارس جزء عمّ
            </p>
          </motion.div>

          {/* عداد الحسنات */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-1 rounded-3xl shadow-lg shadow-yellow-500/20"
          >
            <div className="bg-[#0a1128] px-8 py-4 rounded-[1.4rem] flex items-center gap-4">
              <FaStar className="text-5xl text-yellow-400 animate-pulse" />
              <div>
                <p className="text-yellow-100 text-xs font-bold uppercase tracking-wider">
                  رصيد الحسنات
                </p>
                <p className="text-4xl font-black text-white">١,٤٥٠</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =======================
          🗺️ المحتوى الرئيسي
         ======================= */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-10 relative z-10">
        {/* 🧒 العمود الأيمن: بطاقة البطل والمهام */}
        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          {/* بطاقة الشخصية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-br from-blue-800 to-[#0a1128] p-8 rounded-[3rem] shadow-2xl border-2 border-blue-500/30 relative overflow-hidden group"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-blue-900 rounded-full border-4 border-yellow-500 p-1 shadow-lg shadow-yellow-500/20 mb-6 relative">
                <img
                  src="/man.png"
                  alt="Hero Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-[#0a1128] p-2 rounded-full border-2 border-[#0a1128] font-bold text-xs">
                  LVL 5
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">
                البطل يوسف
              </h3>
              <p className="text-blue-300 text-sm mb-6">لقب: "قارئ الفجر"</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0f1d45] p-4 rounded-2xl border border-blue-500/20">
                  <FaShieldAlt className="text-blue-400 text-2xl mx-auto mb-2" />
                  <p className="text-xs text-blue-200">درع التجويد</p>
                  <p className="text-white font-bold">85%</p>
                </div>
                <div className="bg-[#0f1d45] p-4 rounded-2xl border border-yellow-500/20">
                  <FaScroll className="text-yellow-400 text-2xl mx-auto mb-2" />
                  <p className="text-xs text-yellow-200">قوة الحفظ</p>
                  <p className="text-white font-bold">920 آية</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* لوحة المهام اليومية */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#141e3c] p-8 rounded-[3rem] shadow-xl border border-blue-500/30 relative"
          >
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <FaScroll className="text-yellow-500" /> مهام اليوم الرمضانية
            </h3>
            <div className="space-y-4">
              {dailyQuests.map((quest) => (
                <div
                  key={quest.id}
                  className={`p-4 rounded-2xl flex justify-between items-center ${
                    quest.done
                      ? "bg-green-900/30 border border-green-500/50"
                      : "bg-[#0a1128] border border-blue-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {quest.done ? (
                      <FaCheckCircle className="text-green-400 text-xl" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                    )}
                    <span
                      className={`font-bold ${
                        quest.done
                          ? "text-green-100 line-through opacity-60"
                          : "text-white"
                      }`}
                    >
                      {quest.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#0a1128] px-3 py-1 rounded-full">
                    <span className="text-yellow-400 text-sm">
                      +{quest.reward}
                    </span>
                    <GiPrayerBeads className="text-yellow-500 text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🎮 العمود الأيسر: الصورة والاضافات الجديدة */}
        <div className="lg:col-span-8 order-1 lg:order-2 relative">
          {/* شريط تشويقي */}
          <div className="absolute top-6 right-[-2px] bg-yellow-500 text-[#0a1128] px-10 py-2 font-black text-lg rotate-[3deg] shadow-lg z-30 flex items-center gap-2 rounded-l-lg">
            <FaRocket /> قريباً في المرحلة الثانية (Phase 2)
          </div>

          {/* حاوية الصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a1128] p-2 rounded-[4rem] border-4 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.2)] overflow-hidden relative h-[450px]"
          >
            <div className="absolute inset-0 rounded-[4rem] border-4 border-yellow-500/20 animate-pulse-slow pointer-events-none"></div>
            <img
              src="/rpg.png"
              alt="Islamic RPG Game Concept"
              className="w-full h-full object-cover rounded-[3.5rem] opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/80 to-transparent p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3 flex justify-center items-center gap-3">
                <FaTrophy className="text-yellow-500" /> عالم "رحلة النور"
                المفتوح
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                استعد لمواجهة "وحوش النسيان" في بيئات إسلامية خلابة.
              </p>
            </div>
          </motion.div>

          {/* 🔥 الإضافات الجديدة أسفل الصورة (المهمات والوحوش) */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* 👹 كارت الوحش القادم (Boss Card) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-900/40 to-[#0a1128] p-6 rounded-[2.5rem] border border-red-500/30 relative overflow-hidden group"
            >
              {/* تأثير خلفية مرعب */}
              <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-red-500/20 p-3 rounded-2xl text-red-400">
                    <FaDragon className="text-3xl" />
                  </div>
                  <div className="bg-red-900/80 px-3 py-1 rounded-full text-xs text-red-200 border border-red-500 flex items-center gap-1">
                    <FaLock className="text-[10px]" /> مغلق (LVL 10)
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  حارس سورة البقرة
                </h3>
                <p className="text-red-200/60 text-sm mb-4">
                  وحش النسيان العملاق
                </p>

                {/* شريط الصعوبة */}
                <div className="w-full bg-red-900/30 h-2 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-red-600 w-[80%] rounded-full shadow-[0_0_10px_red]"></div>
                </div>

                <p className="text-xs text-gray-400 text-center">
                  مطلوب: مراجعة الحزب الأول كاملاً
                </p>
              </div>
            </motion.div>

            {/* 💰 كارت الخزينة (Treasury Card) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/40 to-[#0a1128] p-6 rounded-[2.5rem] border border-blue-500/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-2xl text-blue-400">
                    <GiOpenChest className="text-3xl animate-bounce-slow" />
                  </div>
                  <div className="bg-yellow-500/20 px-3 py-1 rounded-full text-xs text-yellow-300 border border-yellow-500 flex items-center gap-1">
                    <FaGem /> متجر الجوائز
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  خزينة الفاتحين
                </h3>
                <p className="text-blue-200/60 text-sm mb-4">
                  استبدل حسناتك بجوائز
                </p>

                {/* جوائز مقترحة */}
                <div className="flex gap-2">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0a1128] border border-blue-700 flex items-center justify-center text-xl"
                    title="وسام"
                  >
                    🥇
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0a1128] border border-blue-700 flex items-center justify-center text-xl"
                    title="سيف"
                  >
                    ⚔️
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0a1128] border border-blue-700 flex items-center justify-center text-xl"
                    title="تاج"
                  >
                    👑
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0a1128] border border-dashed border-gray-600 flex items-center justify-center text-xs text-gray-500">
                    +3
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamification;
