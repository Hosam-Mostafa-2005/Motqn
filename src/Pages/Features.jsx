import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaMicrophoneAlt,
  FaChartLine,
  FaChild,
  FaGamepad,
  FaVrCardboard,
  FaArrowLeft,
  FaMoon,
} from "react-icons/fa";
import {
  GiLantern,
  GiScrollQuill,
  GiSamaraMosque,
  GiPrayerBeads,
} from "react-icons/gi";

const allFeatures = [
  {
    id: "shiekhs",
    title: "سوق المحفظين المعتمدين",
    icon: <FaUsers />,
    description:
      "نربط أولياء الأمور بنخبة من الشيوخ المجازين، لضمان تلقي طفلك العلم من أهل الإتقان مع مرونة تامة في الاختيار.",
    example:
      "تصفح سير الشيوخ الذاتية، استمع لنماذج من تلاواتهم، واختر من يطمئن له قلبك وقلب طفلك.",
    visual: "🕌 بطاقة تعريفية للشيخ بختم 'مُتقن' المعتمد",
  },
  {
    id: "recording",
    title: "تصحيح التلاوة الذكي",
    icon: <FaMicrophoneAlt />,
    description:
      "تقنية فريدة تسمح للشيخ بمراجعة تسجيلات طفلك وتصحيح مخارج الحروف بدقة، وكأنه يجلس بجواره.",
    example:
      "يسجل الطفل آية -> يحدد الشيخ موضع الخطأ صوتياً -> يتعلم الطفل النطق الصحيح فوراً.",
    visual: "🎙️ موجة صوتية نورانية توضح مواضع الإتقان",
  },
  {
    id: "dashboard",
    title: "لوحة متابعة ولي الأمر",
    icon: <FaChartLine />,
    description:
      "لوحة تحكم شاملة تعطيك طمأنينة تامة على مسار حفظ طفلك، وتقارير دورية عن تقدمه الإيماني.",
    example:
      "شجرة حفظ توضح السور التي أتمها الطفل مع رسائل تشجيعية من الشيخ لولي الأمر.",
    visual: "📈 شجرة الحفظ التفاعلية للأطفال",
  },
  {
    id: "gamification",
    title: "النظام التحفيزي (Phase 2)",
    icon: <FaGamepad />,
    description:
      "نحول رحلة الحفظ إلى عالم ممتع، حيث يجمع الطفل 'الأجر' والأوسمة التي تحفزه على المداومة.",
    example:
      "يحصل الطفل على وسام 'حافظ الفاتحة' ويفتح مستويات جديدة في عالم 'بستان الإيمان'.",
    visual: "🏆 خريطة مستويات رحلة النور (RPG)",
  },
  {
    id: "vr-vision",
    title: "تجربة VR الغامرة (Vision)",
    icon: <FaVrCardboard />,
    description:
      "رؤية مستقبلية لنقل الطفل افتراضياً إلى بيئات إيمانية كالحرمين الشريفين لتعزيز الخشوع والارتباط بالمقدسات.",
    example:
      "يرتدي الطفل نظارة الواقع الافتراضي ليجد نفسه يراجع القرآن في ساحات المسجد النبوي.",
    visual: "🕶️ محاكاة بصرية لزيارة افتراضية للمقدسات",
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(allFeatures[0]);

  return (
    <div
      className="min-h-screen bg-[#f4f7f9] font-tajawal p-6 md:p-12 relative overflow-hidden text-right"
      dir="rtl"
    >
      {/* 🎊 زينة رمضان العلوية المتحركة */}
      <div className="absolute top-0 left-0 w-full flex justify-around pointer-events-none z-50 opacity-60">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 10, 0],
              rotate: [i % 2 === 0 ? 1 : -1, i % 2 === 0 ? -1 : 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
          >
            <GiLantern className="text-yellow-600 text-4xl" />
          </motion.div>
        ))}
      </div>

      {/* هيدر الصفحة بتصميم إسلامي */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center border-b-2 pb-8 border-blue-100 relative z-10">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
            <GiSamaraMosque className="text-white text-3xl" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-blue-900">
              ميزات رحلة النور
            </h1>
            <p className="text-gray-500 mt-1 font-medium italic">
              "ورتل القرآن ترتيلاً"
            </p>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="bg-[#0a1128] px-8 py-3 rounded-2xl shadow-xl text-white font-bold flex items-center gap-2 border border-blue-400/30 transition-all"
          >
            <FaMoon className="text-yellow-400" /> العودة للرئيسية
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 relative z-10">
        {/* القائمة الجانبية (Sidebar) - يمين */}
        <div className="md:col-span-4 space-y-5">
          {allFeatures.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setActiveFeature(f)}
              whileHover={{ x: 10, backgroundColor: "#eff6ff" }}
              className={`w-full text-right p-6 rounded-[2.5rem] flex items-center justify-between transition-all duration-300 border-2 ${
                activeFeature.id === f.id
                  ? "bg-white border-blue-600 shadow-2xl scale-105"
                  : "bg-white/60 border-transparent text-blue-800 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-3xl ${activeFeature.id === f.id ? "text-blue-600" : "text-gray-400"}`}
                >
                  {f.icon}
                </span>
                <span className="text-xl font-extrabold">{f.title}</span>
              </div>
              {activeFeature.id === f.id && (
                <GiPrayerBeads className="text-yellow-600 text-2xl animate-spin-slow" />
              )}
            </motion.button>
          ))}
        </div>

        {/* منطقة العرض (Content Area) - يسار */}
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="bg-white rounded-[4rem] p-12 shadow-2xl min-h-[650px] flex flex-col justify-between border-t-8 border-yellow-500 relative"
            >
              {/* زخرفة مائية إسلامية */}
              <GiSamaraMosque className="absolute top-10 left-10 text-[20rem] text-blue-50/50 -z-0" />

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="text-6xl text-blue-900 bg-blue-50 p-6 rounded-3xl shadow-inner border border-blue-100">
                    {activeFeature.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-blue-900 mb-2">
                      {activeFeature.title}
                    </h3>
                    <div className="h-1.5 w-20 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <p className="text-2xl text-gray-700 leading-[1.8] mb-12 font-medium">
                  {activeFeature.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-white p-10 rounded-[3rem] border-r-8 border-blue-600 shadow-sm mb-12">
                  <h4 className="font-bold text-blue-900 text-2xl mb-4 flex items-center gap-3">
                    <GiScrollQuill className="text-yellow-600" /> رؤية عملية
                    للميزة:
                  </h4>
                  <p className="text-gray-600 text-xl leading-relaxed italic">
                    "{activeFeature.example}"
                  </p>
                </div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="p-12 bg-white rounded-[3rem] border-4 border-dotted border-blue-100 flex flex-col items-center justify-center shadow-inner">
                  <p className="text-yellow-600 mb-4 font-bold tracking-widest uppercase">
                    المعاينة البصرية النورانية
                  </p>
                  <span className="text-3xl font-black text-blue-900">
                    {activeFeature.visual}
                  </span>
                </div>

                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link
                    to={`/features/${activeFeature.id}`}
                    className="bg-blue-700 text-white px-16 py-5 rounded-[2rem] text-2xl font-black shadow-[0_20px_50px_rgba(29,78,216,0.3)] hover:bg-[#0a1128] transition-all flex items-center gap-5"
                  >
                    تفاصيل رحلة الحفظ{" "}
                    <FaArrowLeft className="text-lg animate-pulse" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* لمسات خلفية إضافية */}
      <div className="fixed bottom-[-100px] right-[-100px] opacity-10 pointer-events-none">
        <GiSamaraMosque className="text-[40rem] text-blue-900" />
      </div>
    </div>
  );
};

export default Features;
