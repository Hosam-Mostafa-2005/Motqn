import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import BookingModal from "../../components/common/BookingModal";
import {
  FaCalendarAlt,
  FaVideo,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaTimes,
  FaPlus,
  FaClock,
} from "react-icons/fa";
import { GiLantern } from "react-icons/gi";

const ParentLessons = () => {
  const { bookings, teachers, cancelBooking } = useAppStore();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              جدول الحصص العائلي
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              مواعيد الحلقات القرآنية للأبناء
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              متابعة مواعيد جميع الحصص المباشرة والروابط الافتراضية
            </p>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-5 py-2.5 bg-yellow-500 text-[#0B122B] font-black rounded-xl text-xs hover:bg-yellow-400 transition-all flex items-center gap-1.5 shadow cursor-pointer"
          >
            <FaPlus /> حجز حصة جديدة مع شيخ
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600" /> الحصص المجدولة
        </h3>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className={`p-6 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
                booking.status === "cancelled"
                  ? "bg-gray-50 border-gray-200 opacity-60"
                  : "bg-blue-50/40 border-blue-100 hover:bg-white hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B122B] text-white flex items-center justify-center text-xl font-black">
                  {booking.childName[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-blue-900">{booking.childName}</h4>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-blue-800 font-bold">مع {booking.sheikhName}</span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status === "confirmed"
                        ? "مؤكدة"
                        : booking.status === "cancelled"
                        ? "ملغاة"
                        : "قيد التأكيد"}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">{booking.type}</p>

                  <div className="flex items-center gap-4 text-xs font-bold text-blue-700 mt-2">
                    <span>🗓️ {booking.date}</span>
                    <span>⏰ {booking.time}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {booking.status !== "cancelled" && (
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href={booking.meetingUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
                  >
                    <FaVideo /> دخول الجلسة
                  </a>
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="px-3 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold transition-colors cursor-pointer"
                    title="إلغاء الموعد"
                  >
                    إلغاء
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        teacher={teachers[0]}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default ParentLessons;
