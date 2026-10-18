import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import BookingModal from "../../components/common/BookingModal";
import {
  FaChalkboardTeacher,
  FaStar,
  FaCheckCircle,
  FaCalendarCheck,
  FaCommentDots,
} from "react-icons/fa";
import { GiLantern } from "react-icons/gi";

const ParentTeachers = () => {
  const { teachers } = useAppStore();
  const [selectedBookingTeacher, setSelectedBookingTeacher] = useState(null);

  // Take the first 3 teachers as associated with children
  const associatedTeachers = teachers.slice(0, 3);

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              المعلمون والمقرئون
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              معلمو أبنائي المشرفون على التحفيظ
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              تواصل مع معلمي أطفالك وتابع تقييماتهم وجداولهم
            </p>
          </div>

          <Link
            to="/teachers"
            className="px-5 py-2.5 bg-yellow-500 text-[#0B122B] font-black rounded-xl text-xs hover:bg-yellow-400 transition-all flex items-center gap-1.5 shadow"
          >
            <FaChalkboardTeacher /> تصفح سوق المحفظين
          </Link>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {associatedTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-blue-50 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 p-1 border-2 border-yellow-500 shadow flex-shrink-0">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-black text-lg text-blue-900">{teacher.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-yellow-500 font-bold">
                    <FaStar /> {teacher.rating} ({teacher.reviewCount} تقييم)
                  </div>
                  <span className="text-xs text-gray-400 block mt-0.5">{teacher.experience} خبرة</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {teacher.specialty}
              </p>

              <div className="p-3 bg-blue-50/50 rounded-xl text-xs text-blue-900">
                <strong>الطلاب المشرف عليهم:</strong> يوسف، سارة
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
              <Link
                to={`/teachers/${teacher.id}`}
                className="px-3 py-2 text-xs font-bold text-gray-700 hover:text-blue-600"
              >
                الملف التعريفي
              </Link>
              <Link
                to="/shiekhs/review"
                className="px-3 py-2 text-xs font-bold text-yellow-800 bg-yellow-50 hover:bg-yellow-100 rounded-lg"
              >
                تقييم الشيخ
              </Link>
              <button
                onClick={() => setSelectedBookingTeacher(teacher)}
                className="px-4 py-2 bg-[#0B122B] text-white rounded-xl text-xs font-bold hover:bg-blue-900 cursor-pointer"
              >
                حجز موعد
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal
        teacher={selectedBookingTeacher}
        isOpen={!!selectedBookingTeacher}
        onClose={() => setSelectedBookingTeacher(null)}
      />
    </div>
  );
};

export default ParentTeachers;
