import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMicrophoneAlt,
  FaPlay,
  FaHistory,
} from "react-icons/fa";
import { GiWaveSurfer, GiCheckMark, GiSoundWaves } from "react-icons/gi";

const RecordingDetails = () => {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] font-tajawal text-right"
      dir="rtl"
    >
      {/* 🌙 Header القسم العلوي */}
      <div className="bg-gradient-to-br from-[#0a1128] to-blue-900 text-white p-12 md:p-24 relative overflow-hidden border-b-8 border-blue-500">
        <Link
          to="/features"
          className="absolute top-10 right-10 flex items-center gap-2 hover:text-yellow-400 transition-colors z-20 font-bold"
        >
          <FaArrowRight /> العودة للمميزات
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="bg-white/10 p-4 rounded-3xl inline-block mb-6 backdrop-blur-md">
            <FaMicrophoneAlt className="text-6xl text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            تصحيح التلاوة الذكي
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl leading-relaxed">
            تكنولوجيا متطورة تكسر حاجز البعد المكاني، وتجعل الشيخ يستمع لطفلك
            بدقة وكأنه في حلقة تحفيظ حقيقية.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* الشرح التفصيلي */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-4xl font-black text-blue-900 mb-10 border-r-8 border-yellow-500 pr-6 italic">
              رحلة الصوت من الطفل إلى الشيخ
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-r-4 border-blue-600">
                <h4 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-3">
                  <FaMicrophoneAlt className="text-blue-500" /> 1. التسجيل
                  والرفع
                </h4>
                <p className="text-lg text-gray-600">
                  يسجل الطفل تلاوته عبر واجهة بسيطة مصممة خصيصاً لتناسب عمره
                  الصغير، ويتم رفع الصوت بجودة عالية فوراً للشيخ.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-r-4 border-yellow-500">
                <h4 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-3">
                  <GiWaveSurfer className="text-yellow-600" /> 2. المراجعة
                  البشرية
                </h4>
                <p className="text-lg text-gray-600">
                  يقوم الشيخ بسماع التسجيل وتحديد مواضع الخطأ في النطق أو مخارج
                  الحروف بدقة متناهية عبر وضع علامات زمنية.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-r-4 border-green-500">
                <h4 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-3">
                  <GiCheckMark className="text-green-500" /> 3. التغذية الراجعة
                </h4>
                <p className="text-lg text-gray-600">
                  يستلم ولي الأمر تقريراً صوتياً ومكتوباً يوضح أين أخطأ الطفل
                  وكيف يصحح النطق في المرات القادمة.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🎙️ الرسم التوضيحي للموجات الصوتية */}
          <motion.div
            className="relative bg-white p-10 rounded-[4rem] shadow-2xl border border-blue-50 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <div className="text-center mb-8">
              <p className="text-blue-600 font-black text-xl mb-2">
                معاينة نظام التصحيح
              </p>
              <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
            </div>

            {/* محاكاة مشغل الصوت */}
            <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-dashed border-blue-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <FaPlay />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-gray-200 rounded-full relative">
                    {/* نقطة تصحيح الشيخ */}
                    <div className="absolute top-[-30px] right-[40%] bg-red-500 text-white text-[10px] px-2 py-1 rounded-md">
                      خطأ في النطق
                    </div>
                    <div className="absolute top-[-5px] right-[40%] w-3 h-3 bg-red-500 rounded-full ring-4 ring-red-100"></div>
                    <motion.div
                      animate={{ width: ["0%", "70%"] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="h-full bg-blue-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* الموجات الصوتية المتحركة */}
              <div className="flex items-end justify-center gap-1 h-32 mb-8">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-2 bg-blue-300 rounded-full"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-sm font-bold text-gray-400">
                <span className="flex items-center gap-2">
                  <FaHistory /> 00:45 / 02:10
                </span>
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg italic">
                  سورة الفاتحة - الطفل يوسف
                </span>
              </div>
            </div>

            <div className="mt-8 text-center bg-blue-50 p-6 rounded-3xl border border-blue-100">
              <p className="text-blue-900 font-bold mb-2">
                تعليق الشيخ المصحح:
              </p>
              <p className="text-gray-600 italic">
                "أحسن الله إليك يا بطل، انتبه لحرف 'ص' في كلمة 'الصراط' لتخرج
                بقوة."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecordingDetails;
