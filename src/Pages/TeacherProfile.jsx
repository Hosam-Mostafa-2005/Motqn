import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import BookingModal from "../components/common/BookingModal";
import {
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaAward,
  FaQuoteRight,
  FaPlay,
  FaUsers,
} from "react-icons/fa";
import { GiSamaraMosque, GiLantern, GiPrayerBeads, GiCrescentBlade } from "react-icons/gi";

const TeacherProfile = () => {
  const { id } = useParams();
  const { teachers } = useAppStore();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const teacher = teachers.find((t) => t.id === Number(id)) || teachers[0];

  const demoReviews = [
    {
      author: "أم يوسف",
      rating: 5,
      date: "منذ أسبوع",
      text: "الشيخ صبور جداً مع ابني يوسف، استطاع في أسبوعين تصحيح نطق الراء والثاء بدون أي ضغط، وابني ينتظر الحصة بشوق.",
    },
    {
      author: "أبو أنس",
      rating: 5,
      date: "منذ 3 أسابيع",
      text: "أسلوب تربوي متميز وإجازة حقيقية معتمدة. تقارير المتابعة بعد كل جلسة تعطيني راحة بال تامة.",
    },
    {
      author: "أم مريم",
      rating: 4.8,
      date: "منذ شهر",
      text: "المعلم دقيق جداً في التجويد والقراءة برواية حفص، ممتاز للمستويات المتوسطة والمتقدمة.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FC] font-tajawal pb-20 text-right" dir="rtl">
      {/* Hero Header */}
      <div className="bg-[#0B122B] text-white pt-12 pb-24 px-6 relative overflow-hidden border-b-4 border-yellow-500">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white bg-white/10 px-4 py-2 rounded-full text-xs font-bold mb-8 transition-colors"
          >
            <FaArrowRight /> العودة لسوق المحفظين
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-white p-1 border-4 border-yellow-500 shadow-2xl overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {teacher.verified && (
                <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white p-2.5 rounded-full border-4 border-[#0B122B] shadow-lg" title="مُحفّظ معتمد">
                  <FaCheckCircle className="text-base" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-right">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl md:text-5xl font-black text-white">{teacher.name}</h1>
                <span className="bg-yellow-500 text-[#0B122B] text-xs font-black px-3 py-1 rounded-full">
                  معتمد بختم مُتقن
                </span>
              </div>

              <p className="text-blue-200 text-lg mb-4">{teacher.title}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-gray-300 mb-6">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                  <FaStar className="text-yellow-400" />
                  <span>{teacher.rating} ({teacher.reviewCount} تقييم)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                  <FaUsers className="text-blue-400" />
                  <span>{teacher.students} طالب متدرّب</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                  <FaGraduationCap className="text-emerald-400" />
                  <span>{teacher.experience} خبرة تعليمية</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {teacher.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Booking Callout */}
            <div className="bg-[#111A38] p-6 rounded-3xl border border-blue-800/80 text-center w-full md:w-64 flex-shrink-0 shadow-xl">
              <span className="text-xs text-gray-400 font-bold block mb-1">الاستثمار التعليمي</span>
              <div className="text-3xl font-black text-white mb-1">{teacher.price}</div>
              <span className="text-[11px] text-emerald-400 font-bold block mb-4">يشمل المتابعة والتقارير</span>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-[#0B122B] font-black rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 cursor-pointer text-base"
              >
                حجز جلسة الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 grid lg:grid-cols-12 gap-8">
        {/* Left column: Bio, Methodology, Reviews */}
        <div className="lg:col-span-8 space-y-8">
          {/* Bio card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
            <h3 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <FaAward className="text-yellow-500" /> نبذة عن الشيخ ومسيرته
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              {teacher.bio}
            </p>

            <div className="mt-6 pt-6 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <span className="text-xs font-bold text-blue-600 block mb-1">التخصص والاعتماد</span>
                <span className="text-sm font-black text-blue-900">{teacher.specialty}</span>
              </div>
              <div className="bg-yellow-50 p-4 rounded-2xl">
                <span className="text-xs font-bold text-yellow-700 block mb-1">نموذج التلاوة التعليمي</span>
                <span className="text-sm font-black text-yellow-900 flex items-center gap-1.5">
                  <FaPlay className="text-xs" /> {teacher.sampleRecitation}
                </span>
              </div>
            </div>
          </div>

          {/* Educational Approach */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
            <h3 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-2">
              <GiPrayerBeads className="text-blue-600" /> أسلوب الشيخ في الحلقة
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex gap-3">
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                <p>
                  <strong>الرفق والتحفيز المستمر:</strong> لا توبيخ ولا ضغط، بل نبني علاقة حب بين الطفل وكتاب الله مع منح مكافآت ونقاط حسنات.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                <p>
                  <strong>التدقيق الصوتي بمخارج الحروف:</strong> التركيز على القراءة السليمة بأحكام التجويد الأساسية ومخارج الحلق واللسان.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                <p>
                  <strong>تقرير فوري لولي الأمر:</strong> بعد كل حلقة، يرسل الشيخ ملخصاً عما تم حفظه ونقاط القوة وما يحتاج لمراجعة بسيطة.
                </p>
              </div>
            </div>
          </div>

          {/* Parent Reviews */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
            <h3 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-2">
              <FaQuoteRight className="text-yellow-500" /> تجارب أولياء الأمور مع الشيخ
            </h3>
            <div className="space-y-4">
              {demoReviews.map((rev, i) => (
                <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-blue-900 text-sm">{rev.author}</span>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                      {[...Array(5)].map((_, s) => (
                        <FaStar key={s} />
                      ))}
                      <span className="text-gray-400 mr-2 text-[11px]">{rev.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Availability schedule */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-t-8 border-yellow-500">
            <h4 className="text-lg font-black text-blue-900 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-yellow-600" /> الأوقات المتاحة للحجز
            </h4>
            <div className="space-y-2.5">
              {teacher.availableSlots?.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-bold"
                >
                  <span className="text-blue-900">{slot.day}</span>
                  <span className="text-blue-600 bg-white px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                    <FaClock className="text-[10px]" /> {slot.time}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="mt-6 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaCalendarAlt /> اختيار موعد وحجز الجلسة
            </button>
          </div>

          <div className="bg-[#0B122B] text-white p-6 rounded-[2.5rem] shadow-xl border border-blue-900">
            <GiLantern className="text-4xl text-yellow-400 mb-3" />
            <h4 className="font-black text-lg mb-2">ضمان الجلسة الأولى</h4>
            <p className="text-blue-200 text-xs leading-relaxed">
              إذا لم يشعر طفلك بالراحة أو التوافق التام مع الشيخ خلال الجلسة الأولى، يمكنك استبدال الشيخ فوراً بدون أي تكلفة إضافية.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        teacher={teacher}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default TeacherProfile;
