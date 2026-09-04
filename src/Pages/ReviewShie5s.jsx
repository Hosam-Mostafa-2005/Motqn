import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaTimes,
  FaCheckCircle,
  FaMosque,
} from "react-icons/fa";
import { GiLantern, GiAbstract050, GiPrayerBeads } from "react-icons/gi";

const ReviewShie5s = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // حالة التقييمات
  const [ratings, setRatings] = useState({
    general: 0,
    pronunciation: 0, // النطق
    memorization: 0, // الحفظ
    interaction: 0, // التفاعل
  });

  const [note, setNote] = useState("");

  // دالة لتحديث التقييم
  const handleRate = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إرسال البيانات للـ API
    console.log("تم إرسال التقييم:", { ratings, note });
    setIsSubmitted(true);
  };

  // حركة الفوانيس
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  // مكون النجوم الداخلي (Reusable Component)
  const StarRating = ({ label, category, value }) => {
    return (
      <div className="mb-4">
        <label className="block text-blue-900 font-bold mb-2 text-sm">
          {label}
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRate(category, star)}
              className="text-2xl transition-transform hover:scale-110 focus:outline-none"
            >
              {star <= value ? (
                <FaStar className="text-yellow-400 drop-shadow-md" />
              ) : (
                <FaRegStar className="text-gray-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-[#0a1128] font-tajawal text-right flex items-center justify-center p-4 relative overflow-hidden"
      dir="rtl"
    >
      {/* =======================
          🌌 الخلفية والزينة
         ======================= */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <GiAbstract050 className="text-[60rem] absolute -top-40 -right-40 text-yellow-500 animate-spin-slow" />
      </div>

      {/* فوانيس متدلية */}
      <div className="absolute top-0 left-10 z-20 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-40 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
        </motion.div>
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center -mt-10"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500/0 to-yellow-500"></div>
          <GiLantern className="text-4xl text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]" />
        </motion.div>
      </div>

      {/* =======================
          📝 كارت التقييم
         ======================= */}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10"
          >
            {/* الشريط العلوي */}
            <div className="bg-gradient-to-l from-blue-900 to-[#0a1128] p-6 text-center relative border-b-4 border-yellow-500">
              <Link
                to="/dashboard"
                className="absolute top-6 left-6 text-white/50 hover:text-white transition-colors"
              >
                <FaTimes />
              </Link>
              <h2 className="text-2xl font-black text-white mb-1">
                تقييم الجلسة
              </h2>
              <p className="text-blue-200 text-sm mb-6">
                كيف كانت تجربتك مع الشيخ عبد الرحمن؟
              </p>

              {/* صورة الشيخ */}
              <div className="absolute -bottom-10  right-1/2 translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src="/man.png"
                  alt="Sheikh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-14 pb-8 px-8">
              <form onSubmit={handleSubmit}>
                {/* التقييم العام (كبير) */}
                <div className="text-center mb-8">
                  <label className="block text-gray-500 font-bold mb-3">
                    التقييم العام للجلسة
                  </label>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRate("general", star)}
                        className="text-4xl transition-all hover:scale-125 focus:outline-none"
                      >
                        {star <= ratings.general ? (
                          <FaStar className="text-yellow-400 drop-shadow-lg" />
                        ) : (
                          <FaRegStar className="text-gray-300" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 my-6"></div>

                {/* التقييمات التفصيلية */}
                <div className="grid grid-cols-1 gap-2">
                  <StarRating
                    label="💎 جودة النطق وتصحيح التلاوة"
                    category="pronunciation"
                    value={ratings.pronunciation}
                  />
                  <StarRating
                    label="🧠 أسلوب التحفيظ والمراجعة"
                    category="memorization"
                    value={ratings.memorization}
                  />
                  <StarRating
                    label="🤝 تفاعل الشيخ وتشجيعه للطفل"
                    category="interaction"
                    value={ratings.interaction}
                  />
                </div>

                {/* ملاحظات إضافية */}
                <div className="mt-6">
                  <label className="block text-blue-900 font-bold mb-2 text-sm">
                    ملاحظات لولي الأمر (اختياري)
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-xl p-4 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none resize-none h-24"
                    placeholder="اكتب رسالة شكر للشيخ أو ملاحظة للإدارة..."
                  ></textarea>
                </div>

                {/* زر الإرسال */}
                <button
                  type="submit"
                  className="w-full mt-8 bg-[#0a1128] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-all flex justify-center items-center gap-2"
                >
                  إرسال التقييم <FaCheckCircle />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          /* =======================
             🎉 حالة النجاح (شاشة الشكر)
             ======================= */
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-md rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden border-4 border-yellow-500"
          >
            {/* خلفية زخرفية */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
            >
              <FaMosque className="text-5xl text-green-600" />
            </motion.div>

            <h2 className="text-3xl font-black text-blue-900 mb-2">
              جزاكم الله خيراً
            </h2>
            <p className="text-gray-500 mb-6">
              تم إرسال تقييمك بنجاح، نفع الله بكم وبأبنائكم.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-2xl mb-8 relative">
              <GiPrayerBeads className="text-yellow-500 text-2xl absolute -top-3 right-1/2 translate-x-1/2 bg-white px-2 rounded-full" />
              <p className="text-yellow-800 font-bold text-sm pt-2">
                "اللهم اجعل القرآن العظيم ربيع قلوبنا ونور صدورنا"
              </p>
            </div>

            <Link to="/dashboard">
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                العودة للوحة التحكم
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewShie5s;
