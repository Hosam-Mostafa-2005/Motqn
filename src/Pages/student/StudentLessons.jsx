import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaCalendarCheck,
  FaVideo,
  FaClock,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { GiLantern } from "react-icons/gi";

const StudentLessons = () => {
  const { getActiveChild, bookings } = useAppStore();
  const child = getActiveChild();

  const childBookings = bookings.filter((b) => b.childId === child.id || b.childName === child.name);
  const upcomingBookings = childBookings.filter((b) => b.status === "confirmed" || b.status === "pending");
  const pastBookings = childBookings.filter((b) => b.status === "completed");

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              الحلقات والدروس المباشرة
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              حصص البطل {child.name} مع المعلم
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              احرص على الجلوس في مكان هادئ وتجهيز المصحف الشريف قبل موعد الحلقة بـ 5 دقائق
            </p>
          </div>

          <Link
            to="/teachers"
            className="px-5 py-2.5 bg-yellow-500 text-[#0B122B] font-black rounded-xl text-xs hover:bg-yellow-400 transition-all flex items-center gap-1.5 shadow"
          >
            <FaCalendarCheck /> حجز حلقة جديدة
          </Link>
        </div>
      </div>

      {/* Upcoming Lessons */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaCalendarCheck className="text-blue-600" /> الحصص القادمة
        </h3>

        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md">
                    <FaChalkboardTeacher />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-blue-900">{b.sheikhName}</h4>
                    <p className="text-xs text-gray-600">{b.type}</p>
                    <div className="flex items-center gap-3 text-xs text-blue-800 font-bold mt-1">
                      <span>🗓️ {b.date}</span>
                      <span>⏰ الساعة {b.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href={b.meetingUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-black shadow-md flex items-center justify-center gap-2"
                  >
                    <FaVideo /> دخول غرفة الحلقة
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400 text-sm">
            لا توجد حصص قادمة مجدولة حالياً.
          </div>
        )}
      </div>

      {/* Past Lessons History */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaCheckCircle className="text-emerald-500" /> أرشيف الحصص المكتملة
        </h3>

        {pastBookings.length > 0 ? (
          <div className="space-y-3">
            {pastBookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-sm text-blue-900">{b.type}</h4>
                  <span className="text-gray-500">{b.sheikhName} • {b.date}</span>
                  {b.notes && <p className="text-gray-600 mt-1 italic">"{b.notes}"</p>}
                </div>
                <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                  تمت بنجاح
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400 text-xs">
            سيبدأ تسجيل أرشيف الحصص بمجرد إتمام أول جلسة مباشرة.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentLessons;
