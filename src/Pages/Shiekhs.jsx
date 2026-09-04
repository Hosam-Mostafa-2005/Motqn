import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaMoon,
  FaStarHalfAlt,
} from "react-icons/fa";
import { GiMoon, GiSamaraMosque, GiLantern } from "react-icons/gi";

// تحديث بيانات الشيوخ لإضافة تفاصيل التقييم
const sheikhsData = [
  {
    id: 1,
    name: "الشيخ عبد الرحمن السعدي",
    rating: 5.0,
    reviewCount: 120, // عدد التقييمات
    students: 210,
    experience: "15 سنة",
    specialty: "إجازة في القراءات العشر",
    image: "/man.png",
    price: "250 ج.م / ساعة",
    verified: true,
    tags: ["صبور", "مخارج حروف"],
  },
  {
    id: 2,
    name: "الشيخ يوسف القاضي",
    rating: 4.5,
    reviewCount: 95,
    students: 145,
    experience: "8 سنوات",
    specialty: "تحفيظ القاعدة النورانية",
    image: "/man.png",
    price: "180 ج.م / ساعة",
    verified: true,
    tags: ["مرح", "أسلوب قصصي"],
  },
  {
    id: 3,
    name: "الشيخ عمر الفاروق",
    rating: 4.1,
    reviewCount: 60,
    students: 90,
    experience: "6 سنوات",
    specialty: "تجويد مكثف",
    image: "/man.png",
    price: "160 ج.م / ساعة",
    verified: true,
    tags: ["دقيق", "متابعة يومية"],
  },
  {
    id: 4,
    name: "الشيخ صابر المشرفي",
    rating: 4.8,
    reviewCount: 85,
    students: 112,
    experience: "12 سنة",
    specialty: "تصحيح تلاوة وتدبر",
    image: "/man.png",
    price: "220 ج.م / ساعة",
    verified: true,
    tags: ["هادئ", "تفسير ميسر"],
  },
  {
    id: 5,
    name: "الشيخ بلال حمزة",
    rating: 4.6,
    reviewCount: 40,
    students: 75,
    experience: "4 سنوات",
    specialty: "تحفيظ جزء عمّ",
    image: "/man.png",
    price: "130 ج.م / ساعة",
    verified: false,
    tags: ["سريع الرد", "تشجيع"],
  },
  {
    id: 6,
    name: "الشيخ إياد المقدسي",
    rating: 4.9,
    reviewCount: 200,
    students: 300,
    experience: "20 سنة",
    specialty: "تأهيل للمسابقات الدولية",
    image: "/man.png",
    price: "350 ج.م / ساعة",
    verified: true,
    tags: ["خبير", "مقامات"],
  },
];

const Shiekhs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // دالة لرسم النجوم بناءً على التقييم
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="min-h-screen bg-[#f8fafc] font-tajawal pb-20 overflow-hidden text-right"
      dir="rtl"
    >
      {/* 🌙 Hero Section - تصميم ليلي فخم */}
      <div className="relative bg-[#0a1128] text-white py-24 px-6 overflow-hidden border-b-4 border-yellow-500">
        {/* ✨ زر الرجوع للرئيسية */}
        <div className="absolute top-8 right-8 z-50">
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full text-white hover:bg-white/20 transition-all font-bold text-sm shadow-xl"
            >
              <FaArrowRight className="text-xs" />
              العودة للرئيسية
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 opacity-20 transform translate-x-20 -translate-y-10">
          <FaMoon className="text-[25rem] text-yellow-200 blur-sm" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <GiSamaraMosque className="text-[20rem] text-blue-400" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <GiLantern className="text-yellow-500 text-6xl animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            نخبة <span className="text-yellow-500">مُقرئي</span> المنصة
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            اختر المعلم الأنسب لبناء مستقبل قرآني مشرق لطفلك، مع نخبة من الشيوخ
            المجازين والمتقنين لمخارج الحروف.
          </p>
        </motion.div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="max-w-6xl mx-auto -mt-10 px-4 relative z-30">
        <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[2.5rem] shadow-2xl border border-white flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full">
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-300 text-xl" />
            <input
              type="text"
              placeholder="ابحث عن محفظك القادم..."
              className="w-full pr-14 pl-6 py-4 rounded-3xl border-none bg-blue-50/50 focus:ring-2 focus:ring-blue-500 outline-none text-right text-lg font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-3xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-200">
            <FaFilter /> تصفية النتائج
          </button>
        </div>
      </div>

      {/* 🕌 Grid - عرض الكروت */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {sheikhsData.map((sh) => (
          <motion.div
            key={sh.id}
            variants={cardVariants}
            whileHover={{ y: -15 }}
            className="group relative bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-50 overflow-hidden"
          >
            <div className="h-32 bg-gradient-to-br from-blue-700 to-[#0a1128] relative overflow-hidden">
              <div className="absolute top-2 left-2 opacity-10 text-white text-6xl">
                <GiSamaraMosque />
              </div>
            </div>

            <div className="relative px-8 pb-8 pt-16">
              <div className="absolute -top-16 right-8 p-1 bg-white rounded-[2rem] shadow-lg">
                <img
                  src={sh.image}
                  alt={sh.name}
                  className="w-28 h-28 rounded-[1.8rem] object-cover bg-blue-50"
                />
                {sh.verified && (
                  <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white p-2 rounded-full border-4 border-white">
                    <FaCheckCircle className="text-sm" />
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-black text-blue-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {sh.name}
                  </h3>
                  {/* ⭐ عرض النجوم والتقييم */}
                  <div className="flex items-center gap-1 mb-1">
                    {renderStars(sh.rating)}
                    <span className="text-gray-500 text-sm font-bold mr-1">
                      ({sh.rating})
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    بناءً على {sh.reviewCount} تقييم
                  </p>
                </div>
                <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-xs font-bold border border-yellow-100">
                  {sh.experience} خبرة
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {sh.specialty} - متخصص في المتابعة الفردية وتعديل مخارج الحروف
                للأطفال.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {sh.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    الاستثمار بالساعة
                  </p>
                  <span className="text-xl font-black text-blue-900">
                    {sh.price}
                  </span>
                </div>
                <button className="bg-[#0a1128] text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                  حجز جلسة
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">
        <p className="text-gray-400 italic">"خيركم من تعلم القرآن وعلمه"</p>
      </div>
    </div>
  );
};

export default Shiekhs;
