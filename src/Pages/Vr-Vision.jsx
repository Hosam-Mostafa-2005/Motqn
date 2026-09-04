import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaVrCardboard, FaPlay, FaArrowRight, FaCube } from "react-icons/fa";
import {
  GiLantern,
  GiMoon,
  GiPrayerBeads,
  GiSamaraMosque,
  GiSparkles,
} from "react-icons/gi";

const VrVision = () => {
  const floatAnim = {
    animate: { y: [0, -20, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [5, -5, 5], y: [0, 8, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen bg-[#0f0c29] font-tajawal text-right pb-20 relative overflow-hidden"
      dir="rtl"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#302b63] via-[#0f0c29] to-[#24243e] opacity-90" />
        <GiMoon className="absolute -top-20 -left-20 text-[40rem] text-yellow-500/5 rotate-[-15deg] animate-pulse-slow" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 🏮 Lanterns */}
      <div className="absolute top-0 w-full flex justify-between px-10 pointer-events-none z-20">
        <div className="flex gap-4">
          <motion.div {...lanternSway(4)}>
            <div className="w-[2px] h-32 bg-gradient-to-b from-transparent to-yellow-500" />
            <GiLantern className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div {...lanternSway(5, 1)} className="-mt-10">
            <div className="w-[2px] h-20 bg-gradient-to-b from-transparent to-yellow-500" />
            <GiLantern className="text-5xl text-orange-400" />
          </motion.div>
        </div>
      </div>

      {/* 🕶️ Header */}
      <div className="relative z-10 p-10 pt-24 text-center">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 text-yellow-400 mb-6 border border-yellow-500/30 px-4 py-1 rounded-full"
        >
          <FaArrowRight /> العودة لرحلة المميزات
        </Link>

        <h1 className="text-5xl md:text-8xl font-black mb-6 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            المستقبل
          </span>{" "}
          بين يديك
        </h1>

        <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
          تجربة VR تنقل الطفل من شاشته إلى عالم إيماني حي ومُعاش.
        </p>
      </div>

      {/* 🔮 Main */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-12 gap-12 relative z-10">
        {/* Cards */}
        <div className="lg:col-span-5 space-y-6">
          {[
            {
              title: "جوار المسجد الحرام",
              icon: <GiSamaraMosque />,
              desc: "محاكاة روحانية للطواف والأذكار.",
              color: "from-yellow-500 to-orange-600",
            },
            {
              title: "الروضة الشريفة",
              desc: "مجالس علم افتراضية داخل المسجد النبوي.",
              color: "from-green-500 to-emerald-600",
            },
            {
              title: "عالم القصص القرآني",
              icon: <FaCube />,
              desc: "تجربة قصص السور بأسلوب بصري تفاعلي.",
              color: "from-purple-500 to-indigo-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, x: -10 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-[2rem] flex items-center gap-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl text-white`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-blue-200/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VR Visual */}
        <div className="lg:col-span-7 relative">
          <motion.div {...floatAnim}>
            <div className="relative bg-[#1a1a2e] rounded-[3rem] overflow-hidden h-[550px]">
              <div className="absolute top-6 right-6 flex items-center gap-2 text-yellow-400">
                <GiSparkles className="text-2xl" /> LIVE EXPERIENCE
              </div>

              <img
                src="/vr.png"
                alt="VR Experience"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPlay className="text-3xl text-white ml-1" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-[#2a2a4a] p-6 rounded-3xl flex items-center gap-4"
            >
              <FaVrCardboard className="text-5xl text-purple-400" />
              <div>
                <p className="text-white font-bold">نظارة مُتقن</p>
                <p className="text-xs text-purple-200">v1.0</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VrVision;
