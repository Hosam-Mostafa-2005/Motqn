import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import BookingModal from "../components/common/BookingModal";
import {
  FaChild,
  FaPlus,
  FaStar,
  FaCalendarCheck,
  FaMicrophoneAlt,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaArrowLeft,
} from "react-icons/fa";
import {
  GiLantern,
  GiFruitBowl,
  GiTreeGrowth,
  GiStarsStack,
  GiCrescentBlade,
} from "react-icons/gi";

const Children = () => {
  const { children, setSelectedChildId, teachers } = useAppStore();
  const [selectedChildForBooking, setSelectedChildForBooking] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = (child) => {
    setSelectedChildId(child.id);
    setSelectedChildForBooking(child);
    setIsBookingOpen(true);
  };

  const getSheikhForChild = (child) => {
    return teachers.find((t) => t.id === child?.assignedSheikhId) || teachers[0];
  };

  return (
    <div className="space-y-8 font-tajawal text-right pb-12" dir="rtl">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0B122B] to-[#15224F] text-white p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 text-center md:text-right">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-yellow-500/30">
            <GiCrescentBlade /> إدارة ومتابعة الأبناء
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2 flex items-center justify-center md:justify-start gap-3">
            قُرّة الأعين <FaChild className="text-yellow-400" />
          </h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl">
            تابع تقدم أطفالك في مسارات حفظ القرآن الكريم، التلاوات الصوتية، ومواعيد الحصص مع المحفظين المعتمدين.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <Link
            to="/shiekhs/childsetup"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0B122B] px-6 py-3.5 rounded-2xl font-black text-sm shadow-lg shadow-yellow-500/20 transition-all hover:scale-105"
          >
            <FaPlus /> إضافة طفل جديد
          </Link>
        </div>

        {/* Ambient Ramadan Lanterns */}
        <div className="absolute left-6 top-0 opacity-20 pointer-events-none">
          <GiLantern className="text-8xl text-yellow-400" />
        </div>
      </div>

      {/* Children Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {children.map((child) => {
          const sheikh = getSheikhForChild(child);
          const completedSurahs = child.surahs?.filter((s) => s.status === "completed").length || 0;
          const currentSurah = child.surahs?.find((s) => s.status === "current")?.name || "المسد";

          return (
            <motion.div
              key={child.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[2.5rem] p-7 shadow-xl border border-gray-100 hover:border-yellow-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Child Header Info */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={child.avatar}
                        alt={child.name}
                        className="w-18 h-18 rounded-2xl object-cover border-2 border-yellow-500/40 bg-blue-50 p-1 shadow-md"
                      />
                      <span className="absolute -bottom-2 -left-2 bg-[#0B122B] text-yellow-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-yellow-500/40">
                        {child.age ? `${child.age} سنوات` : "٧ سنوات"}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-blue-900">{child.fullName || child.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-lg font-bold border border-blue-100">
                          {child.level}
                        </span>
                        <span className="text-xs text-gray-400">• سورة الحفظ: <strong className="text-gray-700">{currentSurah}</strong></span>
                      </div>
                    </div>
                  </div>

                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1">
                    <FaCheckCircle className="text-xs" /> نشط
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-6 bg-blue-50/50 p-4 rounded-2xl border border-blue-50">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-gray-600">نسبة إنجاز المستوى ({child.level})</span>
                    <span className="text-blue-700 font-black">{child.progress}%</span>
                  </div>
                  <div className="w-full bg-blue-100/70 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${child.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-l from-yellow-500 to-yellow-400 h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-yellow-50/70 border border-yellow-100 p-3 rounded-2xl">
                    <div className="flex items-center justify-center gap-1 text-yellow-600 text-xs mb-1">
                      <GiStarsStack /> <span>الحسنات</span>
                    </div>
                    <div className="text-lg font-black text-yellow-800">{child.hasanat}</div>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-2xl">
                    <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs mb-1">
                      <GiTreeGrowth /> <span>أيام الحفظ</span>
                    </div>
                    <div className="text-lg font-black text-emerald-800">{child.streak} يوم</div>
                  </div>

                  <div className="bg-blue-50/70 border border-blue-100 p-3 rounded-2xl">
                    <div className="flex items-center justify-center gap-1 text-blue-600 text-xs mb-1">
                      <GiFruitBowl /> <span>السور المتقنة</span>
                    </div>
                    <div className="text-lg font-black text-blue-900">{completedSurahs} سورة</div>
                  </div>
                </div>

                {/* Assigned Sheikh Card */}
                <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                      <FaChalkboardTeacher />
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400 block">المعلم المعتمد:</span>
                      <strong className="text-blue-900 font-bold">{sheikh.name}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-yellow-100/80 text-yellow-800 px-2 py-0.5 rounded-md text-[11px] font-black">
                    <FaStar className="text-yellow-500 text-[10px]" /> {sheikh.rating}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/parent/children/${child.id}`}
                    onClick={() => setSelectedChildId(child.id)}
                    className="py-3 px-4 bg-[#0B122B] hover:bg-blue-900 text-white rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>السجل القرآني</span>
                    <FaArrowLeft className="text-[10px]" />
                  </Link>

                  <button
                    onClick={() => handleOpenBooking(child)}
                    className="py-3 px-4 bg-yellow-500 hover:bg-yellow-400 text-[#0B122B] rounded-xl font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <FaCalendarCheck />
                    <span>حجز حصة جديدة</span>
                  </button>
                </div>

                <Link
                  to="/student/practice"
                  onClick={() => setSelectedChildId(child.id)}
                  className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaMicrophoneAlt />
                  <span>فتح استوديو التلاوة لهذا الطفل</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Booking Modal */}
      {selectedChildForBooking && (
        <BookingModal
          teacher={getSheikhForChild(selectedChildForBooking)}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </div>
  );
};

export default Children;
