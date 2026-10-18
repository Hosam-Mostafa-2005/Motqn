import React, { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimes,
  FaUser,
  FaQuran,
  FaVideo,
} from "react-icons/fa";
import { GiLantern, GiPrayerBeads, GiCrescentBlade } from "react-icons/gi";

const BookingModal = ({ teacher, isOpen, onClose }) => {
  const navigate = useNavigate();
  const { children, selectedChildId, createBooking } = useAppStore();

  const [childId, setChildId] = useState(selectedChildId || (children[0]?.id || 1));
  const [selectedSlot, setSelectedSlot] = useState(teacher?.availableSlots?.[0] || null);
  const [sessionType, setSessionType] = useState("حفظ جديد وتسميع");
  const [notes, setNotes] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [newBooking, setNewBooking] = useState(null);

  if (!isOpen || !teacher) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = createBooking({
      teacherId: teacher.id,
      childId: Number(childId),
      date: selectedSlot?.day || "غداً",
      time: selectedSlot?.time || "04:00 م",
      type: sessionType,
      notes,
    });

    setNewBooking(booking);
    setIsBooked(true);
  };

  const handleClose = () => {
    setIsBooked(false);
    setNewBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-tajawal text-right" dir="rtl">
      <div className="bg-white rounded-[2.5rem] w-full max-w-xl overflow-hidden shadow-2xl border-4 border-yellow-500 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0B122B] text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-6 left-6 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <FaTimes />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white p-1 border-2 border-yellow-500 shadow-md flex-shrink-0">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-yellow-500 text-[#0B122B] px-2 py-0.5 rounded font-black">
                  حجز جلسة قرآنية
                </span>
                <span className="text-xs text-blue-200 font-bold">{teacher.price}</span>
              </div>
              <h3 className="text-xl font-black text-white mt-1">{teacher.name}</h3>
              <p className="text-xs text-blue-200/80">{teacher.specialty}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. اختيار الطفل */}
              <div>
                <label className="block text-sm font-black text-[#0B122B] mb-2 flex items-center gap-2">
                  <FaUser className="text-yellow-500" /> اختر الطفل للجلسة
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {children.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setChildId(c.id)}
                      className={`p-3 rounded-2xl border-2 text-right transition-all ${
                        childId === c.id
                          ? "bg-blue-50 border-blue-600 text-blue-900 shadow-sm font-black"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="font-bold text-sm">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.level}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. اختيار الموعد المتاح */}
              <div>
                <label className="block text-sm font-black text-[#0B122B] mb-2 flex items-center gap-2">
                  <FaClock className="text-blue-600" /> المواعيد المتاحة لدى الشيخ
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-36 overflow-y-auto p-1">
                  {teacher.availableSlots?.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-xl border text-center transition-all text-xs font-bold ${
                        selectedSlot?.id === slot.id
                          ? "bg-yellow-500 text-[#0B122B] border-yellow-500 shadow-sm font-black scale-[1.02]"
                          : "bg-white border-gray-200 text-gray-700 hover:border-yellow-300"
                      }`}
                    >
                      <div>{slot.day}</div>
                      <div className="text-[11px] opacity-80">{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. هدف الجلسة */}
              <div>
                <label className="block text-sm font-black text-[#0B122B] mb-2 flex items-center gap-2">
                  <FaQuran className="text-green-600" /> نوع الجلسة المطلوبة
                </label>
                <select
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm font-bold text-gray-800 outline-none focus:border-blue-600"
                >
                  <option value="حفظ جديد وتسميع">حفظ جديد وتسميع ورد اليوم</option>
                  <option value="مراجعة وتثبيت المحفوظ">مراجعة وتثبيت سور سابقة</option>
                  <option value="تصحيح تلاوة وتجويد">تصحيح تلاوة ومخارج حروف</option>
                  <option value="جلسة تعارف وتحديد مستوى">جلسة أولى: تعارف وتحديد مستوى الطفل</option>
                </select>
              </div>

              {/* 4. ملاحظات إضافية */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  ملاحظات للشيخ (اختياري)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="مثال: يرجى التركيز على مد الحروف وتكرار الآيات..."
                  className="w-full p-3 rounded-xl border border-gray-200 text-xs text-gray-800 outline-none focus:border-blue-600"
                />
              </div>

              {/* زر التأكيد */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-base shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaCheckCircle /> تأكيد حجز الجلسة
              </button>
            </form>
          ) : (
            /* شاشة النجاح */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner">
                <FaCheckCircle />
              </div>

              <h4 className="text-2xl font-black text-[#0B122B]">
                تم تأكيد حجز الجلسة بنجاح!
              </h4>

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-sm text-blue-900 space-y-2 text-right">
                <p>
                  <strong>الطفل:</strong> {newBooking?.childName}
                </p>
                <p>
                  <strong>المعلم:</strong> {newBooking?.sheikhName}
                </p>
                <p>
                  <strong>الموعد:</strong> {newBooking?.date} الساعة {newBooking?.time}
                </p>
                <p>
                  <strong>النوع:</strong> {newBooking?.type}
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-200 text-xs text-yellow-800 flex items-center gap-3">
                <FaVideo className="text-2xl text-yellow-600 flex-shrink-0" />
                <span>
                  تم إنشاء رابط الغرفة الافتراضية للجلسة، وسيكون متاحاً في جدول الحصص قبل الموعد بـ 15 دقيقة.
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    navigate("/parent/lessons");
                  }}
                  className="flex-1 py-3 bg-[#0B122B] text-white rounded-xl font-bold hover:bg-blue-900 transition-colors text-sm"
                >
                  الذهاب لجدول الحصص
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors text-sm"
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
