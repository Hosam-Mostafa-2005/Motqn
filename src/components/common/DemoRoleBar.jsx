import React from "react";
import { useAppStore } from "../../store/useAppStore";
import { Link, useLocation } from "react-router-dom";
import { FaUserGraduate, FaUserTie, FaUserAstronaut, FaExchangeAlt } from "react-icons/fa";

const DemoRoleBar = () => {
  const { currentUser, setRole } = useAppStore();
  const location = useLocation();

  const currentRole = currentUser?.role || "guest";

  const getDashboardPath = (role) => {
    if (role === "student") return "/student/dashboard";
    if (role === "sheikh") return "/teacher/dashboard";
    return "/parent/dashboard";
  };

  return (
    <aside aria-label="شريط المعاينة التجريبية" className="bg-[#0B122B] text-white border-b border-blue-900/50 py-2 px-4 text-xs font-tajawal relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Role explanation */}
        <div className="flex items-center gap-2 text-blue-200">
          <span className="inline-flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-2.5 py-0.5 rounded-full font-bold border border-yellow-500/30">
            <FaExchangeAlt className="text-[10px]" /> معاينة الأدوار (Demo Roles)
          </span>
          <span className="hidden sm:inline text-gray-300">
            الحساب الحالي: <strong className="text-white font-bold">{currentUser ? currentUser.name : "زائر"}</strong>
          </span>
        </div>

        {/* Right Side: Quick Role Switch Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 hidden md:inline">تبديل الواجهة:</span>

          <button
            onClick={() => setRole("parent")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all font-bold ${
              currentRole === "parent"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-white/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <FaUserTie className="text-[11px]" />
            <span>ولي أمر</span>
          </button>

          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all font-bold ${
              currentRole === "student"
                ? "bg-yellow-500 text-[#0B122B] shadow-md shadow-yellow-500/30 ring-1 ring-yellow-400 font-black"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <FaUserGraduate className="text-[11px]" />
            <span>طالب (يوسف)</span>
          </button>

          <button
            onClick={() => setRole("sheikh")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all font-bold ${
              currentRole === "sheikh"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-white/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <FaUserAstronaut className="text-[11px]" />
            <span>مُحفظ (الشيخ)</span>
          </button>

          {/* Quick link to current role dashboard */}
          {currentUser && !location.pathname.startsWith("/parent") && !location.pathname.startsWith("/student") && !location.pathname.startsWith("/teacher") && (
            <Link
              to={getDashboardPath(currentRole)}
              className="mr-2 text-yellow-400 hover:text-yellow-300 underline font-bold"
            >
              الذهاب للوحة التحكم ←
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DemoRoleBar;
