import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaCog,
  FaCrown,
  FaCheckCircle,
  FaBell,
  FaUser,
  FaShieldAlt,
} from "react-icons/fa";
import { GiOpenChest, GiPrayerBeads } from "react-icons/gi";

const ParentSettings = () => {
  const { currentUser, pricingSelection } = useAppStore();
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div>
          <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
            إعدادات الحساب والاشتراك
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            إعدادات ولي الأمر
          </h1>
          <p className="text-blue-200 text-xs mt-0.5">
            إدارة الباقة العائلية وتفضيلات الإشعارات وبيانات الحساب
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="text-blue-300 block">ولي الأمر:</span>
              <strong className="text-white text-sm">{currentUser?.name || "أحمد محمود"}</strong>
            </div>
            <div>
              <span className="text-blue-300 block">البريد الإلكتروني:</span>
              <strong className="text-yellow-400">{currentUser?.email || "parent@motqan.com"}</strong>
            </div>
          </div>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-xs font-bold flex items-center gap-2">
          <FaCheckCircle className="text-emerald-600 text-base" /> تم حفظ التفضيلات بنجاح!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Subscription Plan Card */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
              <FaCrown className="text-yellow-500" /> الباقة الحالية والاشتراك
            </h3>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
              نشط ومفعل
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-50/60 to-orange-50/40 border border-yellow-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-yellow-800 uppercase block">الباقة المختارة</span>
                <h4 className="text-2xl font-black text-blue-900">
                  {pricingSelection?.planId === "premium"
                    ? "باقة الإتقان (Premium)"
                    : pricingSelection?.planId === "basic"
                    ? "الباقة الأساسية (Basic)"
                    : "الباقة المتميزة (Standard)"}
                </h4>
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-blue-900">
                  {pricingSelection?.monthlyTotal || 160} ج.م
                </span>
                <span className="text-xs text-gray-500 block">/ شهرياً</span>
              </div>
            </div>

            <div className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-yellow-200">
              <p>
                👨‍👩‍👧‍👦 <strong>الخطة العائلية:</strong> تشمل {pricingSelection?.childrenCount || 2} أطفال بخصم عائلي خاص.
              </p>
              <p>
                📅 <strong>تاريخ التجديد القادم:</strong> 15 من الشهر القادم.
              </p>
            </div>

            <Link
              to="/pricing"
              className="w-full py-3 bg-[#0B122B] hover:bg-blue-900 text-white font-bold rounded-xl text-center block text-xs transition-colors"
            >
              تغيير أو ترقية الباقة
            </Link>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaBell className="text-blue-600" /> تفضيلات التنبيهات
          </h3>

          <form onSubmit={handleSave} className="space-y-4 text-xs font-bold text-gray-700">
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer">
              <span>تنبيهات وتذكير الحصص عبر الواتساب</span>
              <input
                type="checkbox"
                checked={whatsappAlerts}
                onChange={(e) => setWhatsappAlerts(e.target.checked)}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer">
              <span>استلام تقارير الحفظ والتلاوة أسبوعياً عبر البريد</span>
              <input
                type="checkbox"
                checked={weeklyReports}
                onChange={(e) => setWeeklyReports(e.target.checked)}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </label>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-xs transition-all cursor-pointer"
              >
                حفظ التفضيلات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentSettings;
