import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaMicrophoneAlt,
  FaCalendarCheck,
  FaBookOpen,
  FaRocket,
  FaAward,
  FaVideo,
} from "react-icons/fa";
import {
  GiLantern,
  GiFruitBowl,
  GiTreeGrowth,
  GiPrayerBeads,
  GiStarsStack,
  GiCrescentBlade,
} from "react-icons/gi";

const StudentDashboard = () => {
  const { getActiveChild, bookings } = useAppStore();
  const child = getActiveChild();

  const nextBooking = bookings.find((b) => b.childId === child.id && b.status === "confirmed") || bookings[0];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Hero Card for Child */}
      <div className="bg-gradient-to-r from-[#0B122B] via-[#111A38] to-[#1E3A8A] text-white rounded-[2.5rem] p-6 sm:p-10 shadow-xl border-b-4 border-yellow-500 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full border-4 border-yellow-500 p-1 bg-[#0B122B] shadow-2xl relative flex-shrink-0">
              <img
                src={child.avatar}
                alt={child.name}
                className="w-full h-full rounded-full object-cover bg-white"
              />
              <div className="absolute -bottom-1 -left-1 bg-yellow-500 text-[#0B122B] px-2 py-0.5 rounded-full font-black text-[10px]">
                LVL 5
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-yellow-500 text-[#0B122B] px-2.5 py-0.5 rounded-full font-black">
                  بطل القرآن الصغير
                </span>
                <span className="text-xs text-blue-200">✨ قارئ الفجر</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                أهلاً بك يا بطل، {child.name}!
              </h1>
              <p className="text-blue-200 text-xs sm:text-sm mt-1">
                "اجعل القرآن رفيقك، يضيء دربك ويشرح صدرك."
              </p>
            </div>
          </div>

          {/* Points & Streak summary */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                <GiStarsStack className="text-2xl" />
              </div>
              <span className="text-[11px] text-blue-200 block">رصيد الحسنات</span>
              <strong className="text-2xl font-black text-white">{child.hasanat}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                <GiTreeGrowth className="text-2xl" />
              </div>
              <span className="text-[11px] text-blue-200 block">أيام متتالية</span>
              <strong className="text-2xl font-black text-white">{child.streak} يوم</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/student/practice"
          className="p-5 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <FaMicrophoneAlt />
          </div>
          <div>
            <h4 className="font-black text-base">استوديو التسجيل</h4>
            <p className="text-xs text-blue-100">سجل تلاوتك للشيخ</p>
          </div>
        </Link>

        <Link
          to="/student/learning-plan"
          className="p-5 rounded-3xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <FaBookOpen />
          </div>
          <div>
            <h4 className="font-black text-base text-blue-900">خطتي القرآنية</h4>
            <p className="text-xs text-gray-500">سورة اليوم ومحطات الحفظ</p>
          </div>
        </Link>

        <Link
          to="/student/lessons"
          className="p-5 rounded-3xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <FaCalendarCheck />
          </div>
          <div>
            <h4 className="font-black text-base text-blue-900">حصصي المباشرة</h4>
            <p className="text-xs text-gray-500">حلقات الشيخ والمواعيد</p>
          </div>
        </Link>

        <Link
          to="/student/progress"
          className="p-5 rounded-3xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <GiFruitBowl />
          </div>
          <div>
            <h4 className="font-black text-base text-blue-900">بستان الحفظ</h4>
            <p className="text-xs text-gray-500">شجرة السور والأوسمة</p>
          </div>
        </Link>
      </div>

      {/* Main Row: Next Lesson Callout & Daily Quests */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Next Live Session */}
        <div className="lg:col-span-6 bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
              <FaCalendarCheck className="text-blue-600" /> جلستي القادمة مع الشيخ
            </h3>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
              مؤكدة
            </span>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border border-blue-100 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B122B] text-white flex items-center justify-center text-2xl font-black">
                <GiCrescentBlade className="text-yellow-400" />
              </div>
              <div>
                <h4 className="text-lg font-black text-blue-900">{nextBooking?.sheikhName}</h4>
                <p className="text-xs text-gray-600">{nextBooking?.type}</p>
                <div className="flex items-center gap-3 text-xs text-blue-700 font-bold mt-1">
                  <span>🗓️ {nextBooking?.date}</span>
                  <span>⏰ الساعة {nextBooking?.time}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl text-xs text-gray-600 border border-gray-100">
              💡 <strong>توجيه الشيخ:</strong> {nextBooking?.notes || "مراجعة ورد اليوم وحفظ السورة الجديدة"}
            </div>

            <a
              href={nextBooking?.meetingUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-center block shadow-md shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
            >
              <FaVideo /> دخول غرفة الحلقة المباشرة
            </a>
          </div>

          {/* Current Surah Progress */}
          <div className="p-5 rounded-2xl bg-yellow-50/60 border border-yellow-200 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-yellow-800">السورة الحالية قيد الحفظ:</span>
              <strong className="text-sm font-black text-blue-900">سورة المسد (5 آيات)</strong>
            </div>
            <div className="w-full bg-yellow-200/60 h-2.5 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full rounded-full w-[70%]" />
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[11px] text-gray-500">أتممت حفظ 3 آيات من 5</span>
              <Link
                to="/student/practice"
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                تسميع الآن ←
              </Link>
            </div>
          </div>
        </div>

        {/* Daily Quests / Missions */}
        <div className="lg:col-span-6 bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
              <FaAward className="text-yellow-500" /> مهمات اليوم الإيمانية
            </h3>
            <span className="text-xs text-gray-500 font-bold">اكسب حسنات وأوسمة</span>
          </div>

          <div className="space-y-3">
            {child.dailyQuests?.map((quest) => (
              <div
                key={quest.id}
                className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                  quest.done
                    ? "bg-green-50/60 border-green-200 text-green-900"
                    : "bg-gray-50 border-gray-100 text-gray-800 hover:bg-blue-50/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      quest.done ? "bg-green-500 text-white" : "border-2 border-gray-400"
                    }`}
                  >
                    {quest.done && <FaCheckCircle />}
                  </div>
                  <span className={`text-sm font-bold ${quest.done ? "line-through opacity-70" : ""}`}>
                    {quest.title}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-black text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200">
                  <span>+{quest.reward}</span>
                  <GiStarsStack className="text-sm text-yellow-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Gamification preview banner */}
          <Link
            to="/features/gamification"
            className="p-5 rounded-2xl bg-gradient-to-r from-[#0B122B] to-[#1E3A8A] text-white flex items-center justify-between hover:scale-[1.01] transition-transform block"
          >
            <div>
              <span className="text-[11px] text-yellow-400 font-bold block mb-0.5">نظام الألعاب والبطولات (Phase 2)</span>
              <strong className="text-sm font-black">عالم "رحلة النور" المفتوح</strong>
            </div>
            <span className="px-3 py-1 bg-yellow-500 text-[#0B122B] text-xs font-black rounded-xl">
              استكشف ←
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
