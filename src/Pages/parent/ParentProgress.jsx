import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaChartLine,
  FaChild,
  FaCheckCircle,
  FaStar,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";
import { GiFruitBowl, GiLantern, GiTreeGrowth, GiPrayerBeads } from "react-icons/gi";

const ParentProgress = () => {
  const { children, selectedChildId, setSelectedChildId } = useAppStore();
  const activeChild = children.find((c) => c.id === selectedChildId) || children[0];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              تقارير الأداء والمتابعة الأبوية
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              تقرير إنجاز الحفظ والتلاوة
            </h1>
            <p className="text-blue-200 text-xs mt-0.5">
              متابعة دقيقة لمستوى الحفظ، مخارج الحروف، ونقاط القوة والتحسين لكل طفل
            </p>
          </div>

          {/* Child Switcher Pills */}
          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/20">
            {children.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChildId(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedChildId === c.id
                    ? "bg-yellow-500 text-[#0B122B] font-black shadow-md"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50 space-y-2">
          <span className="text-xs font-bold text-gray-400">إنجاز المستوى الحالي</span>
          <div className="text-3xl font-black text-blue-900">{activeChild.progress}%</div>
          <span className="text-[11px] text-emerald-600 font-bold block">مستوى: {activeChild.level}</span>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50 space-y-2">
          <span className="text-xs font-bold text-gray-400">السور المتممة</span>
          <div className="text-3xl font-black text-yellow-600">
            {activeChild.surahs?.filter((s) => s.status === "completed").length || 0} سور
          </div>
          <span className="text-[11px] text-gray-500 block">بإتقان وتجويد</span>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50 space-y-2">
          <span className="text-xs font-bold text-gray-400">رصيد الحسنات المحفز</span>
          <div className="text-3xl font-black text-emerald-600">{activeChild.hasanat}</div>
          <span className="text-[11px] text-gray-500 block">نقاط تحفيزية مستحقة</span>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50 space-y-2">
          <span className="text-xs font-bold text-gray-400">الالتزام والمواظبة</span>
          <div className="text-3xl font-black text-purple-600">{activeChild.streak} يوم</div>
          <span className="text-[11px] text-gray-500 block">حلقات مستمرة دون انقطاع</span>
        </div>
      </div>

      {/* Detailed Evaluation Matrix */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
        <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <FaChartLine className="text-blue-600" /> تقييم المهارات القرآنية للطفل ({activeChild.name})
        </h3>

        <div className="space-y-4">
          {[
            { skill: "مخارج الحروف والنطق السليم", score: 90, note: "ممتاز جداً، تم تصحيح مخرج الراء والثاء" },
            { skill: "تطبيق أحكام التجويد (المدود والغنن)", score: 85, note: "جيد جداً، يحتاج للتمرن على المد المشبع 6 حركات" },
            { skill: "قوة الحفظ والترتيل بدون توقف", score: 80, note: "حفظ متين، استرجاع سريع للآيات" },
            { skill: "التفاعل والحماس في الحلقة", score: 95, note: "شديد الحرص والاهتمام، علاقة طيبة مع الشيخ" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50/60 border border-gray-100 space-y-2">
              <div className="flex justify-between items-center text-sm font-black">
                <span className="text-blue-900">{item.skill}</span>
                <span className="text-blue-600">{item.score}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all"
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 italic">💡 {item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Children in Family */}
      {children.length > 1 && (
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaChild className="text-yellow-500" /> مقارنة الأبناء في الرحلة القرآنية
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {children.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-3xl bg-blue-50/40 border border-blue-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white p-1 border shadow">
                    <img src={c.avatar} alt={c.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h4 className="font-black text-base text-blue-900">{c.name}</h4>
                    <span className="text-xs text-gray-500">{c.level}</span>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-lg font-black text-blue-700 block">{c.progress}%</span>
                  <Link
                    to={`/dashboard/children/${c.id}`}
                    className="text-xs text-blue-600 font-bold hover:underline"
                  >
                    عرض الملف ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentProgress;
