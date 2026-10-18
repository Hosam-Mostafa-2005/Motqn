import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import DemoRoleBar from "../common/DemoRoleBar";
import {
  FaChild,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaQuran,
  FaMicrophoneAlt,
  FaTrophy,
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaPlusCircle,
} from "react-icons/fa";
import {
  GiCrescentBlade,
  GiLantern,
  GiFruitBowl,
  GiPrayerBeads,
  GiStarsStack,
} from "react-icons/gi";

const DashboardLayout = ({ role = "parent" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout, children, selectedChildId, setSelectedChildId } = useAppStore();

  const activeChild = children.find((c) => c.id === selectedChildId) || children[0];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Determine current effective role from URL or prop
  const currentRole = location.pathname.startsWith("/student")
    ? "student"
    : location.pathname.startsWith("/teacher")
    ? "sheikh"
    : role || currentUser?.role || "parent";

  // Sidebar items based on role
  const parentLinks = [
    { label: "لوحة المتابعة", path: "/parent/dashboard", icon: <FaHome /> },
    { label: "قائمة الأبناء", path: "/parent/children", icon: <FaChild /> },
    { label: "تقارير الإنجاز", path: "/parent/progress", icon: <FaChartLine /> },
    { label: "جدول الحصص", path: "/parent/lessons", icon: <FaCalendarAlt /> },
    { label: "المحفظون المعتمدون", path: "/parent/teachers", icon: <FaChalkboardTeacher /> },
    { label: "الإعدادات والباقة", path: "/parent/settings", icon: <FaCog /> },
  ];

  const studentLinks = [
    { label: "لوحة البطل", path: "/student/dashboard", icon: <FaHome /> },
    { label: "خطتي القرآنية", path: "/student/learning-plan", icon: <FaBookOpen /> },
    { label: "حصصي المباشرة", path: "/student/lessons", icon: <FaCalendarAlt /> },
    { label: "بستان الحفظ والأوسمة", path: "/student/progress", icon: <GiFruitBowl /> },
    { label: "استوديو التلاوة", path: "/student/practice", icon: <FaMicrophoneAlt /> },
    { label: "ملفي وأوسمتي", path: "/student/profile", icon: <FaTrophy /> },
  ];

  const teacherLinks = [
    { label: "لوحة المحفظ", path: "/teacher/dashboard", icon: <FaHome /> },
    { label: "طلابي والحصص", path: "/teacher/dashboard#lessons", icon: <FaUsers /> },
    { label: "مراجعة التلاوات", path: "/teacher/dashboard#recordings", icon: <FaMicrophoneAlt /> },
    { label: "إدارة المواعيد المتاحة", path: "/teacher/dashboard#availability", icon: <FaCalendarAlt /> },
  ];

  const links =
    currentRole === "student"
      ? studentLinks
      : currentRole === "sheikh"
      ? teacherLinks
      : parentLinks;

  const roleTitle =
    currentRole === "student"
      ? "بوابة البطل الصغير"
      : currentRole === "sheikh"
      ? "بوابة المُحفّظ المعتمد"
      : "بوابة ولي الأمر";

  return (
    <div className="min-h-screen bg-[#F5F8FC] font-tajawal text-right flex flex-col" dir="rtl">
      {/* Top Demo Bar */}
      <DemoRoleBar />

      <div className="flex-1 flex overflow-hidden">
        {/* ===================== SIDEBAR ===================== */}
        <aside
          className={`fixed inset-y-0 right-0 z-40 w-72 bg-[#0B122B] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-blue-900/50 pt-16 md:pt-0 md:static md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Brand Logo & Role Tag */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500 text-[#0B122B] flex items-center justify-center text-xl font-black shadow-lg shadow-yellow-500/20">
                  <GiCrescentBlade />
                </div>
                <div>
                  <span className="text-xl font-black text-white">مُتقن</span>
                  <span className="text-[10px] text-yellow-400 font-bold block">{roleTitle}</span>
                </div>
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="md:hidden text-gray-400 hover:text-white p-1"
              >
                <FaTimes />
              </button>
            </div>

            {/* Child Selector inside Sidebar for Parent role */}
            {currentRole === "parent" && (
              <div className="p-4 mx-4 my-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-200 font-bold flex items-center gap-1.5">
                    <FaChild className="text-yellow-400" /> متابعة الطفل:
                  </span>
                  <Link
                    to="/shiekhs/childsetup"
                    className="text-[11px] text-yellow-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <FaPlusCircle className="text-[10px]" /> إضافة طفل
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {children.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedChildId(c.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                        selectedChildId === c.id
                          ? "bg-yellow-500 text-[#0B122B] border-yellow-400 shadow-md font-black"
                          : "bg-white/5 text-gray-300 border-transparent hover:bg-white/10"
                      }`}
                    >
                      {c.name} ({c.level})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation links */}
            <nav className="p-4 space-y-1.5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/parent/dashboard" || link.path === "/student/dashboard"}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "text-blue-100/80 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span className="text-lg text-yellow-400">{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom user card & logout */}
          <div className="p-4 border-t border-white/10 bg-[#070D20]/60">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-yellow-500 text-[#0B122B] font-black flex items-center justify-center text-sm">
                  {currentRole === "student" ? activeChild?.name[0] : currentUser?.name[0] || "م"}
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white truncate max-w-[120px]">
                    {currentRole === "student" ? activeChild?.name : currentUser?.name || "مستخدم"}
                  </div>
                  <div className="text-[10px] text-yellow-400">
                    {currentRole === "student" ? "طالب نشط" : currentRole === "sheikh" ? "مُحفظ معتمد" : "ولي أمر"}
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                title="تسجيل الخروج"
                className="text-gray-400 hover:text-red-400 p-2 transition-colors"
              >
                <FaSignOutAlt />
              </button>
            </div>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs text-blue-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
            >
              <FaHome className="text-yellow-400" /> العودة للواجهة العامة
            </Link>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
          />
        )}

        {/* ===================== MAIN CONTENT WRAPPER ===================== */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Top Dashboard Header */}
          <header className="bg-white border-b border-gray-200/80 sticky top-0 z-20 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
            {/* Right: Hamburger on mobile + Breadcrumb */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                <FaBars />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="font-black text-[#0B122B]">{roleTitle}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500 text-xs">
                  {currentRole === "student"
                    ? `البطل: ${activeChild?.name} (${activeChild?.level})`
                    : currentRole === "parent"
                    ? `متابعة: ${activeChild?.name}`
                    : "إدارة الحلقات والطلاب"}
                </span>
              </div>
            </div>

            {/* Left: Quick Child Switcher (Parent) or Hasanat Badge (Student) or Actions */}
            <div className="flex items-center gap-3">
              {currentRole === "student" && (
                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-2xl text-xs font-black text-yellow-800">
                  <GiStarsStack className="text-yellow-500 text-lg" />
                  <span>رصيد الحسنات: {activeChild?.hasanat || 1450}</span>
                </div>
              )}

              {currentRole === "parent" && (
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-2xl text-xs font-bold text-blue-900">
                  <span className="text-gray-500 hidden sm:inline">الطفل الحالي:</span>
                  <select
                    value={selectedChildId}
                    onChange={(e) => setSelectedChildId(Number(e.target.value))}
                    className="bg-transparent font-black text-blue-700 outline-none cursor-pointer"
                  >
                    {children.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.level})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <Link
                to="/teachers"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#0B122B] text-white hover:bg-blue-900 px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all"
              >
                <FaChalkboardTeacher className="text-yellow-400" /> حجز جلسة مع شيخ
              </Link>
            </div>
          </header>

          {/* Page Body Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
