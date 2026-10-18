import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import {
  FaCalendarCheck,
  FaUsers,
  FaMicrophoneAlt,
  FaStar,
  FaCheckCircle,
  FaPlay,
  FaPause,
  FaClock,
  FaVideo,
  FaPlus,
  FaTrash,
  FaCommentDots,
} from "react-icons/fa";
import { GiLantern, GiPrayerBeads, GiCrescentBlade, GiSamaraMosque } from "react-icons/gi";

const SheikhDashboard = () => {
  const { teachers, children, bookings, reviewRecording } = useAppStore();
  const sheikh = teachers[0]; // Sheikh Abdelrahman Saadi
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState("sessions");

  // Derive active tab from URL hash if available, otherwise fallback to local selection
  const hashTab =
    location.hash === "#recordings"
      ? "recordings"
      : location.hash === "#students" || location.hash === "#lessons"
      ? "students"
      : location.hash === "#availability"
      ? "availability"
      : location.hash === "#sessions"
      ? "sessions"
      : null;

  const activeTab = hashTab || selectedTab;
  const [playingAudioId, setPlayingAudioId] = useState(null);

  // Review form states
  const [reviewChildId, setReviewChildId] = useState(null);
  const [reviewRecId, setReviewRecId] = useState(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewNote, setReviewNote] = useState("");
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState("");

  // Gather all recordings from all children that are pending or have been recorded
  const allRecordings = children.flatMap((child) =>
    (child.recordings || []).map((rec) => ({
      ...rec,
      childId: child.id,
      childName: child.name,
      childLevel: child.level,
    }))
  );

  const pendingRecordings = allRecordings.filter((r) => r.status === "pending_review");
  const reviewedRecordings = allRecordings.filter((r) => r.status === "reviewed");

  const handleSendFeedback = (e) => {
    e.preventDefault();
    if (!reviewChildId || !reviewRecId) return;

    reviewRecording({
      childId: reviewChildId,
      recordingId: reviewRecId,
      rating: Number(reviewRating),
      feedback: reviewNote || "تلاوة مباركة ومتقنة، بارك الله فيك ونفع بك.",
    });

    setReviewSuccessMsg("تم إرسال التقييم والملاحظات للطالب بنجاح!");
    setReviewChildId(null);
    setReviewRecId(null);
    setReviewNote("");

    setTimeout(() => {
      setReviewSuccessMsg("");
    }, 4000);
  };

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Sheikh Header Card */}
      <div className="bg-[#0B122B] text-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border-b-4 border-yellow-500 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-white p-1 border-2 border-yellow-500 shadow-md flex-shrink-0">
              <img
                src={sheikh.image}
                alt={sheikh.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-yellow-500 text-[#0B122B] px-2.5 py-0.5 rounded-full font-black">
                  مُحفّظ معتمد
                </span>
                <span className="text-xs text-blue-200">الأزهر الشريف</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">{sheikh.name}</h1>
              <p className="text-blue-200 text-xs mt-0.5">{sheikh.specialty}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center">
            <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 min-w-[100px]">
              <span className="text-xs text-blue-200 block">طلابي النشطين</span>
              <strong className="text-xl font-black text-yellow-400">{children.length} طلاب</strong>
            </div>
            <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 min-w-[100px]">
              <span className="text-xs text-blue-200 block">حصص اليوم</span>
              <strong className="text-xl font-black text-white">2 جلسات</strong>
            </div>
            <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 min-w-[100px]">
              <span className="text-xs text-blue-200 block">تقييم الطلاب</span>
              <strong className="text-xl font-black text-yellow-400 flex items-center justify-center gap-1">
                <FaStar className="text-sm" /> {sheikh.rating}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {reviewSuccessMsg && (
        <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-sm font-bold flex items-center gap-2">
          <FaCheckCircle className="text-emerald-600 text-lg" /> {reviewSuccessMsg}
        </div>
      )}

      {/* Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
        {[
          { id: "sessions", label: "حصص اليوم المباشرة", icon: <FaCalendarCheck /> },
          {
            id: "recordings",
            label: `تلاوات تنتظر المراجعة (${pendingRecordings.length})`,
            icon: <FaMicrophoneAlt />,
          },
          { id: "students", label: "سجل الطلاب ومستوياتهم", icon: <FaUsers /> },
          { id: "availability", label: "جدول المواعيد المتاحة", icon: <FaClock /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#0B122B] text-yellow-400 shadow-md font-black"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ================= TAB 1: SESSIONS ================= */}
      {activeTab === "sessions" && (
        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50">
            <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
              <FaCalendarCheck className="text-blue-600" /> جدول الجلسات المباشرة القادمة
            </h3>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B122B] text-white flex items-center justify-center text-xl font-black">
                      {booking.childName[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-black text-blue-900">{booking.childName}</h4>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status === "confirmed" ? "مؤكدة" : "بانتظار التأكيد"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{booking.type}</p>
                      <div className="flex items-center gap-3 text-xs text-blue-700 font-bold mt-1">
                        <span>🗓️ {booking.date}</span>
                        <span>⏰ الساعة {booking.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={booking.meetingUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                    >
                      <FaVideo /> دخول الغرفة الافتراضية
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: PENDING RECORDINGS ================= */}
      {activeTab === "recordings" && (
        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50">
            <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
              <FaMicrophoneAlt className="text-yellow-600" /> تلاوات مسجلة بحاجة لمراجعة الشيخ
            </h3>

            {pendingRecordings.length > 0 ? (
              <div className="space-y-4">
                {pendingRecordings.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-5 rounded-2xl bg-yellow-50/50 border border-yellow-200 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            setPlayingAudioId(playingAudioId === rec.id ? null : rec.id)
                          }
                          className="w-12 h-12 rounded-full bg-yellow-500 text-[#0B122B] flex items-center justify-center text-base shadow hover:scale-105 transition-all"
                        >
                          {playingAudioId === rec.id ? <FaPause /> : <FaPlay className="mr-0.5" />}
                        </button>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-black text-base text-blue-900">{rec.childName}</h4>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">
                              {rec.childLevel}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">
                            {rec.surah} ({rec.ayahs}) • {rec.duration} • {rec.date}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setReviewChildId(rec.childId);
                          setReviewRecId(rec.id);
                        }}
                        className="px-4 py-2 bg-[#0B122B] text-yellow-400 text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors"
                      >
                        كتابة التقييم الآن
                      </button>
                    </div>

                    {/* Inline feedback form if opened for this recording */}
                    {reviewRecId === rec.id && (
                      <form
                        onSubmit={handleSendFeedback}
                        className="p-4 bg-white rounded-xl border border-gray-200 space-y-3 animate-in fade-in duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <label className="text-xs font-bold text-gray-700">تقييم التلاوة:</label>
                          <select
                            value={reviewRating}
                            onChange={(e) => setReviewRating(e.target.value)}
                            className="p-2 border rounded-lg text-xs font-bold"
                          >
                            <option value="5">⭐⭐⭐⭐⭐ ممتاز (5/5)</option>
                            <option value="4.5">⭐⭐⭐⭐ جيد جداً مرتفع (4.5/5)</option>
                            <option value="4">⭐⭐⭐⭐ جيد جداً (4/5)</option>
                            <option value="3.5">⭐⭐⭐ جيد (3.5/5)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-700 block mb-1">
                            ملاحظات المعلم وتصحيح مخارج الحروف:
                          </label>
                          <textarea
                            value={reviewNote}
                            onChange={(e) => setReviewNote(e.target.value)}
                            placeholder="اكتب رسالة تشجيعية للطفل وحدد له الحروف والمدود التي تحتاج تحسيناً..."
                            rows="3"
                            className="w-full p-3 border border-gray-200 rounded-xl text-xs text-gray-800 outline-none focus:border-blue-600"
                            required
                          />
                        </div>

                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setReviewRecId(null)}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-xs font-bold text-gray-600"
                          >
                            إلغاء
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow"
                          >
                            إرسال التقييم للطالب
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <FaCheckCircle className="text-4xl text-emerald-400 mx-auto mb-2" />
                <p className="text-sm font-bold">لا توجد تلاوات معلقة تنتظر المراجعة حالياً!</p>
                <p className="text-xs text-gray-400 mt-1">تم الرد على جميع تسجيلات الطلاب بنجاح.</p>
              </div>
            )}
          </div>

          {/* Already reviewed archive */}
          {reviewedRecordings.length > 0 && (
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50">
              <h4 className="text-lg font-black text-blue-900 mb-4">التلاوات التي تم تقييمها مؤخراً</h4>
              <div className="space-y-3">
                {reviewedRecordings.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs"
                  >
                    <div>
                      <strong className="text-blue-900 block text-sm">{rec.childName} - {rec.surah}</strong>
                      <span className="text-gray-500">{rec.date}</span>
                    </div>
                    <div className="text-left">
                      <span className="bg-yellow-100 text-yellow-800 font-bold px-2.5 py-1 rounded-md">
                        ⭐ {rec.rating} / 5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: STUDENTS ROSTER ================= */}
      {activeTab === "students" && (
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaUsers className="text-blue-600" /> سجل الطلاب المتدربين في حلقتي
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {children.map((child) => (
              <div
                key={child.id}
                className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 space-y-4 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B122B] text-white flex items-center justify-center text-2xl font-black overflow-hidden">
                    <img src={child.avatar} alt={child.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-lg text-blue-900">{child.fullName || child.name}</h4>
                      <span className="text-xs bg-yellow-100 text-yellow-800 font-black px-2.5 py-0.5 rounded-full">
                        {child.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      السن: {child.age} سنوات • رصيد الحسنات: {child.hasanat}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-500">إنجاز الحفظ:</span>
                    <span className="text-blue-700">{child.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: `${child.progress}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    السور المتممة: <strong>{child.surahs?.filter((s) => s.status === "completed").length || 0}</strong>
                  </span>
                  <Link
                    to={`/dashboard/children/${child.id}`}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    عرض الملف الكامل ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 4: AVAILABILITY ================= */}
      {activeTab === "availability" && (
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
              <FaClock className="text-yellow-600" /> إدارة المواعيد المتاحة لأولياء الأمور
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {sheikh.availableSlots?.map((slot) => (
              <div
                key={slot.id}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between text-xs font-bold"
              >
                <div>
                  <span className="text-gray-500 block">{slot.day}</span>
                  <span className="text-blue-900 text-sm font-black">{slot.time}</span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md text-[11px]">
                  متاح للحجز
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
            ℹ️ <strong>ملاحظة للمحفظ:</strong> يمكنك تعديل المواعيد المتاحة أسبوعياً بما يتناسب مع جدولك وأوقات فراغك.
          </div>
        </div>
      )}
    </div>
  );
};

export default SheikhDashboard;
