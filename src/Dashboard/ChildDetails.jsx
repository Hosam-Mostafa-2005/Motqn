import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import BookingModal from "../components/common/BookingModal";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLock,
  FaStar,
  FaMicrophoneAlt,
  FaCalendarCheck,
  FaAward,
  FaChalkboardTeacher,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import {
  GiLantern,
  GiFruitBowl,
  GiTreeGrowth,
  GiPrayerBeads,
  GiStarsStack,
  GiCrescentBlade,
} from "react-icons/gi";

const ChildDetails = () => {
  const { id } = useParams();
  const { children, teachers } = useAppStore();
  const [playingRecId, setPlayingRecId] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Find child by id or fallback to first child
  const child = children.find((c) => c.id === Number(id)) || children[0];
  const assignedSheikh = teachers.find((t) => t.id === child?.assignedSheikhId) || teachers[0];

  if (!child) {
    return (
      <div className="text-center py-20 font-tajawal">
        <h3 className="text-2xl font-black text-blue-900 mb-4">لم يتم العثور على ملف الطفل</h3>
        <Link to="/parent/dashboard" className="text-blue-600 font-bold underline">
          العودة للوحة المتابعة
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/parent/children"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-600 bg-white px-4 py-2 rounded-xl shadow-xs border border-gray-100"
        >
          <FaArrowRight className="text-[10px]" /> العودة لقائمة الأبناء
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/shiekhs/review"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-bold hover:bg-yellow-100"
          >
            <FaStar className="text-yellow-500" /> تقييم حصة الشيخ
          </Link>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B122B] text-white text-xs font-bold hover:bg-blue-900 shadow-sm cursor-pointer"
          >
            <FaCalendarCheck className="text-yellow-400" /> حجز جلسة جديدة
          </button>
        </div>
      </div>

      {/* Hero Banner for the Child */}
      <div className="bg-gradient-to-br from-[#0B122B] to-[#15224F] text-white rounded-[2.5rem] p-6 sm:p-10 shadow-xl border-b-4 border-yellow-500 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-500 p-1 bg-[#0B122B] shadow-2xl relative flex-shrink-0">
            <img
              src={child.avatar}
              alt={child.name}
              className="w-full h-full rounded-full object-cover bg-white"
            />
            <div className="absolute -bottom-2 -left-2 bg-yellow-500 text-[#0B122B] p-2 rounded-full font-black text-xs shadow-md">
              LVL {Math.ceil(child.progress / 20) || 1}
            </div>
          </div>

          <div className="flex-1 text-center sm:text-right">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-2">
              <h1 className="text-3xl sm:text-4xl font-black text-white">{child.fullName || child.name}</h1>
              <span className="text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 px-3 py-0.5 rounded-full font-bold">
                {child.level}
              </span>
            </div>

            <p className="text-blue-200 text-sm mb-4">
              الهدف الحالي: <strong className="text-white">{child.memorizationGoal || "إتمام حفظ قصار السور"}</strong>
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs font-bold">
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                <GiStarsStack className="text-yellow-400 text-sm" />
                <span>{child.hasanat} حسنة</span>
              </div>
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                <GiTreeGrowth className="text-emerald-400 text-sm" />
                <span>{child.streak} أيام متواصلة</span>
              </div>
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                <FaChalkboardTeacher className="text-blue-400 text-sm" />
                <span>المعلم: {child.sheikh || assignedSheikh.name}</span>
              </div>
            </div>
          </div>

          {/* Progress Circular Badge */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 text-center flex-shrink-0 min-w-[140px]">
            <span className="text-xs text-blue-200 block mb-1">نسبة إنجاز المستوى</span>
            <div className="text-4xl font-black text-yellow-400 mb-1">{child.progress}%</div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${child.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Surah Tree & Recitations */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Right 5 cols: Boustan Al-Hifz (Surah Milestones) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
            <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
              <GiFruitBowl className="text-green-600 text-2xl" /> بستان الحفظ (مسار السور)
            </h3>
            <span className="text-xs text-gray-500 font-bold">{child.surahs?.length || 0} سور</span>
          </div>

          <div className="space-y-4 relative pl-2">
            {child.surahs?.map((s) => (
              <div
                key={s.id}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  s.status === "completed"
                    ? "bg-yellow-50/50 border-yellow-200"
                    : s.status === "current"
                    ? "bg-emerald-50 border-emerald-300 shadow-sm ring-1 ring-emerald-300"
                    : "bg-gray-50/70 border-gray-200 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                      s.status === "completed"
                        ? "bg-yellow-500 text-white"
                        : s.status === "current"
                        ? "bg-emerald-600 text-white animate-pulse"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {s.status === "completed" ? (
                      <FaCheckCircle />
                    ) : s.status === "current" ? (
                      <GiTreeGrowth />
                    ) : (
                      <FaLock className="text-xs" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-blue-900">{s.name}</h4>
                    <span className="text-xs text-gray-500">{s.ayahs} آيات</span>
                  </div>
                </div>

                <div className="text-left">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      s.status === "completed"
                        ? "bg-yellow-100 text-yellow-800"
                        : s.status === "current"
                        ? "bg-emerald-100 text-emerald-800 font-black"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {s.grade || (s.status === "completed" ? "تم الحفظ" : s.status === "current" ? "جاري الحفظ" : "مغلق")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left 7 cols: Audio Recitations & Teacher Feedback */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
              <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
                <FaMicrophoneAlt className="text-blue-600 text-xl" /> تلاوات البطل وتقييمات الشيخ
              </h3>
              <Link
                to="/student/practice"
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                فتح استوديو التسجيل ←
              </Link>
            </div>

            {child.recordings && child.recordings.length > 0 ? (
              <div className="space-y-4">
                {child.recordings.map((r) => (
                  <div
                    key={r.id}
                    className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setPlayingRecId(playingRecId === r.id ? null : r.id)}
                          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow hover:bg-blue-700 transition-colors"
                        >
                          {playingRecId === r.id ? <FaPause /> : <FaPlay className="mr-0.5" />}
                        </button>
                        <div>
                          <h4 className="font-bold text-sm text-blue-900">{r.surah}</h4>
                          <span className="text-[11px] text-gray-500">{r.date} • {r.duration}</span>
                        </div>
                      </div>

                      {r.rating ? (
                        <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-lg text-xs font-black">
                          <FaStar className="text-yellow-500" /> {r.rating} / 5
                        </div>
                      ) : (
                        <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                          بانتظار مراجعة الشيخ
                        </span>
                      )}
                    </div>

                    {/* Teacher feedback note */}
                    <div className="p-3.5 rounded-xl bg-white border border-gray-100 text-xs text-gray-700 leading-relaxed italic border-r-4 border-yellow-500">
                      <strong>ملاحظة المعلم:</strong> "{r.teacherFeedback}"
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <FaMicrophoneAlt className="text-4xl text-blue-200 mx-auto mb-2" />
                <p className="text-sm font-bold">لا توجد تسجيلات مسجلة بعد لهذا الطفل.</p>
                <Link
                  to="/student/practice"
                  className="mt-3 inline-block text-xs font-bold text-blue-600 underline"
                >
                  سجل أول تلاوة الآن في استوديو القرآن
                </Link>
              </div>
            )}
          </div>

          {/* Islamic Parenting Advice Card */}
          <div className="bg-[#0B122B] text-white p-6 rounded-3xl border border-blue-900 flex items-center gap-4">
            <GiLantern className="text-4xl text-yellow-400 flex-shrink-0" />
            <div className="text-xs leading-relaxed text-blue-100">
              <strong className="text-white block font-bold mb-1">همسة لولي الأمر:</strong>
              احتفل بكل سورة يتمها طفلك مهما كانت قصيرة، فإن مكافأة الصغير على إنجازه القرآني تجعل حب كتاب الله يرسخ في فؤاده.
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        teacher={assignedSheikh}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default ChildDetails;
