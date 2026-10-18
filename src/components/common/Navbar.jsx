import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaBars,
  FaTimes,
  FaUserGraduate,
  FaUserTie,
  FaUserAstronaut,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { GiCrescentBlade, GiLantern, GiSamaraMosque } from "react-icons/gi";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { currentUser, logout } = useAppStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMobileOpen(false);
  };

  const getDashboardLink = () => {
    if (!currentUser) return "/login";
    if (currentUser.role === "student") return "/student/dashboard";
    if (currentUser.role === "sheikh") return "/teacher/dashboard";
    return "/parent/dashboard";
  };

  const getRoleLabel = () => {
    if (!currentUser) return "";
    if (currentUser.role === "student") return "طالب";
    if (currentUser.role === "sheikh") return "مُحفّظ";
    return "ولي أمر";
  };

  const navLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "المميزات", path: "/features" },
    { label: "سوق المحفظين", path: "/teachers" },
    { label: "باقات الأسعار", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B122B]/95 backdrop-blur-md border-b border-blue-900/40 text-white font-tajawal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 to-yellow-300 flex items-center justify-center text-[#0B122B] shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform">
            <GiCrescentBlade className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white">
                مُتقن
              </span>
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest bg-yellow-500/10 px-1.5 py-0.5 rounded border border-yellow-500/30">
                MOTQAN
              </span>
            </div>
            <span className="text-[11px] text-blue-200/70 -mt-1">
              لتعليم القرآن الكريم بروحٍ وإتقان
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-base font-bold transition-all relative py-1 ${
                  isActive
                    ? "text-yellow-400 after:content-[''] after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-yellow-400 after:rounded-full"
                    : "text-blue-100/90 hover:text-yellow-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <Link
                to={getDashboardLink()}
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2.5 rounded-2xl transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-[#0B122B] font-black flex items-center justify-center text-sm shadow">
                  {currentUser.role === "student" ? (
                    <FaUserGraduate />
                  ) : currentUser.role === "sheikh" ? (
                    <FaUserAstronaut />
                  ) : (
                    <FaUserTie />
                  )}
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-white leading-tight">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-yellow-400 font-bold">
                    لوحة {getRoleLabel()}
                  </div>
                </div>
              </Link>

              <button
                onClick={handleLogout}
                title="تسجيل الخروج"
                className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
              >
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 text-blue-100 hover:text-white font-bold px-4 py-2.5 rounded-xl transition-all"
              >
                <FaSignInAlt className="text-yellow-400" />
                تسجيل الدخول
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-[#0B122B] font-black px-5 py-2.5 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:scale-105"
              >
                <FaUserPlus />
                ابدأ رحلتك مجاناً
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="القائمة الرئيسية"
          >
            {isMobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0e1738] border-b border-blue-900 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-bold transition-all text-base ${
                    isActive
                      ? "bg-yellow-500 text-[#0B122B] font-black"
                      : "text-blue-100 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            {currentUser ? (
              <div className="space-y-3">
                <Link
                  to={getDashboardLink()}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-between w-full bg-blue-600/30 border border-blue-500/40 p-3.5 rounded-2xl text-white font-bold"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 text-[#0B122B] flex items-center justify-center font-bold">
                      {currentUser.name[0]}
                    </div>
                    <div className="text-right">
                      <div className="font-black text-sm">{currentUser.name}</div>
                      <div className="text-xs text-yellow-400">لوحة {getRoleLabel()}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-1 rounded-full font-black">
                    دخول
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-500/20 text-red-300 font-bold hover:bg-red-500 hover:text-white transition-all"
                >
                  <FaSignOutAlt /> تسجيل الخروج
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-yellow-500 text-[#0B122B] font-black shadow-lg transition-all"
                >
                  إنشاء حساب جديد مجاناً
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
