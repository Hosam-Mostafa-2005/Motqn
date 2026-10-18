import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import BookingModal from "../components/common/BookingModal";
import {
  FaStar,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaMoon,
  FaStarHalfAlt,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { GiMoon, GiSamaraMosque, GiLantern, GiCrescentBlade } from "react-icons/gi";

const Shiekhs = () => {
  const { teachers } = useAppStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [bookingTeacher, setBookingTeacher] = useState(null);

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

  const filterCategories = [
    { id: "all", label: "جميع المحفظين" },
    { id: "qiraat", label: "القراءات العشر والتجويد" },
    { id: "nourania", label: "القاعدة النورانية" },
    { id: "kids", label: "البراعم وصغار السن" },
  ];

  const filteredTeachers = teachers.filter((sh) => {
    const matchesSearch =
      sh.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sh.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sh.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === "qiraat") {
      return sh.specialty.includes("القراءات") || sh.specialty.includes("تجويد");
    }
    if (activeFilter === "nourania") {
      return sh.specialty.includes("النورانية") || sh.tags.includes("القاعدة النورانية");
    }
    if (activeFilter === "kids") {
      return sh.tags.includes("صغار السن") || sh.tags.includes("براعم") || sh.tags.includes("مرح");
    }

    return true;
  });

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
      {/* 🌙 Hero Section */}
      <div className="relative bg-[#0a1128] text-white py-20 px-6 overflow-hidden border-b-4 border-yellow-500">
        <div className="absolute top-0 right-0 opacity-20 transform translate-x-20 -translate-y-10">
          <FaMoon className="text-[25rem] text-yellow-200 blur-sm" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <GiSamaraMosque className="text-[20rem] text-blue-400" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <GiLantern className="text-yellow-500 text-6xl animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            نخبة <span className="text-yellow-500">مُقرئي</span> المنصة المعتمدين
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            اختر المعلم الأنسب لبناء مستقبل قرآني مشرق لطفلك، مع نخبة من الشيوخ
            المجازين والمتقنين لمخارج الحروف والتأسيس التربوي.
          </p>
        </motion.div>
      </div>

      {/* 🔍 Search & Filters Bar */}
      <div className="max-w-6xl mx-auto -mt-8 px-4 relative z-30">
        <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl border border-white space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full flex-1">
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-300 text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث باسم الشيخ، التخصص (تجويد، نورانية...)، أو الكلمات المفتاحية..."
                className="w-full pr-14 pl-6 py-3.5 rounded-2xl border-none bg-blue-50/70 focus:ring-2 focus:ring-blue-500 outline-none text-right text-base font-medium"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs text-gray-500 hover:text-red-500 font-bold px-3 py-2"
              >
                مسح البحث
              </button>
            )}
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5 ml-2">
              <FaFilter className="text-blue-500 text-[10px]" /> تصنيف:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#0a1128] text-yellow-400 font-black shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🕌 Grid - عرض الكروت */}
      {filteredTeachers.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTeachers.map((sh) => (
            <motion.div
              key={sh.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-28 bg-gradient-to-br from-blue-700 to-[#0a1128] relative overflow-hidden">
                  <div className="absolute top-2 left-2 opacity-10 text-white text-6xl">
                    <GiSamaraMosque />
                  </div>
                </div>

                <div className="relative px-6 pb-4 pt-12">
                  {/* Photo with verified badge */}
                  <div className="absolute -top-14 right-6 p-1 bg-white rounded-[1.8rem] shadow-lg">
                    <img
                      src={sh.image}
                      alt={sh.name}
                      className="w-24 h-24 rounded-[1.5rem] object-cover bg-blue-50"
                    />
                    {sh.verified && (
                      <div className="absolute -bottom-1 -left-1 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white shadow">
                        <FaCheckCircle className="text-xs" />
                      </div>
                    )}
                  </div>

                  {/* Header info */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Link
                        to={`/teachers/${sh.id}`}
                        className="text-xl font-black text-blue-900 mb-1 group-hover:text-blue-600 transition-colors block"
                      >
                        {sh.name}
                      </Link>
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(sh.rating)}
                        <span className="text-gray-500 text-xs font-bold mr-1">
                          ({sh.rating})
                        </span>
                        <span className="text-gray-400 text-[11px]">
                          • {sh.reviewCount} تقييم
                        </span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 text-yellow-800 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-yellow-100 flex-shrink-0">
                      {sh.experience} خبرة
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-4 leading-relaxed line-clamp-2">
                    {sh.specialty}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sh.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">الاستثمار بالساعة</p>
                  <span className="text-lg font-black text-blue-900">{sh.price}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/teachers/${sh.id}`}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    الملف
                  </Link>
                  <button
                    onClick={() => setBookingTeacher(sh)}
                    className="bg-[#0a1128] text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-blue-600 transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <FaCalendarAlt className="text-[11px] text-yellow-400" /> حجز جلسة
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Empty State */
        <div className="max-w-md mx-auto text-center py-20 px-6">
          <div className="w-20 h-20 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
            <FaSearch />
          </div>
          <h3 className="text-2xl font-black text-blue-900 mb-2">لا توجد نتائج مطابقة</h3>
          <p className="text-gray-500 text-sm mb-6">
            جرب البحث بكلمات أخرى أو اختر "جميع المحفظين" لعرض كل المقرئين المتاحين.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveFilter("all");
            }}
            className="bg-[#0a1128] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
          >
            عرض جميع المحفظين
          </button>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        teacher={bookingTeacher}
        isOpen={!!bookingTeacher}
        onClose={() => setBookingTeacher(null)}
      />

      <div className="mt-20 text-center text-gray-400 text-sm italic">
        "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ" — صحيح البخاري
      </div>
    </div>
  );
};

export default Shiekhs;
