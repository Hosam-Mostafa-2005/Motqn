import React from "react";
import { Link } from "react-router-dom";
import { GiCrescentBlade, GiLantern, GiSamaraMosque, GiPrayerBeads } from "react-icons/gi";
import { FaHeart, FaQuran, FaChild, FaUsers } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#070D20] text-blue-100 font-tajawal pt-16 pb-12 border-t-4 border-yellow-500 relative overflow-hidden text-right" dir="rtl">
      {/* Subtle decorative background mosque outline */}
      <div className="absolute bottom-0 left-0 opacity-[0.03] pointer-events-none text-white text-[25rem] -translate-x-20 translate-y-20">
        <GiSamaraMosque />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500 text-[#0B122B] flex items-center justify-center text-2xl shadow-lg shadow-yellow-500/20 font-black">
                <GiCrescentBlade />
              </div>
              <div>
                <span className="text-3xl font-black text-white">مُتقن</span>
                <span className="text-xs text-yellow-400 font-bold block -mt-1">منصة القرآن التفاعلية للأطفال</span>
              </div>
            </div>

            <p className="text-blue-200/80 leading-relaxed text-sm">
              منصة تعليمية إسلامية تربط بين أولياء الأمور، والأطفال، ونخبة من الشيوخ والمقرئين المعتمدين لغرس حب كتاب الله وإتقان تلاوته وحفظه.
            </p>

            <div className="pt-2 text-xs text-yellow-400/90 flex items-center gap-2">
              <GiPrayerBeads className="text-base" />
              <span>"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"</span>
            </div>
          </div>

          {/* Col 2: Public Navigation */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 border-r-4 border-yellow-500 pr-3">
              استكشف المنصة
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-yellow-400 transition-colors">
                  ميزات رحلة النور
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-yellow-400 transition-colors">
                  سوق المحفظين المعتمدين
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-yellow-400 transition-colors">
                  باقات الأسعار والخصم العائلي
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="hover:text-yellow-400 transition-colors">
                  دراسة السوق والقيمة المضافة
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-yellow-400 transition-colors">
                  مخطط نموذج العمل (BMC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Dashboards */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 border-r-4 border-blue-500 pr-3">
              البوابات والخدمات
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/parent/dashboard" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <FaUsers className="text-xs text-blue-400" /> بوابة ولي الأمر
                </Link>
              </li>
              <li>
                <Link to="/student/dashboard" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <FaChild className="text-xs text-yellow-400" /> بوابة الطفل (البطل)
                </Link>
              </li>
              <li>
                <Link to="/student/practice" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <FaQuran className="text-xs text-green-400" /> استوديو تسجيل التلاوة
                </Link>
              </li>
              <li>
                <Link to="/teacher/dashboard" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <GiLantern className="text-xs text-yellow-400" /> بوابة الشيخ والمحفظ
                </Link>
              </li>
              <li>
                <Link to="/shiekhs/childsetup" className="hover:text-yellow-400 transition-colors">
                  إعداد ملف طفل جديد
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Values */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 border-r-4 border-green-500 pr-3">
              عهد الإتقان
            </h4>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3 text-xs leading-relaxed text-blue-200">
              <p>
                🛡️ <strong className="text-white">بيئة آمنة 100%:</strong> حصص فردية وجماعية تحت إشراف تربوي مستمر ومتابعة لولي الأمر.
              </p>
              <p>
                🎙️ <strong className="text-white">إتقان بشري أصيل:</strong> نعتمد على استماع المشايخ المجازين وتصحيح مخارج الحروف.
              </p>
              <p>
                ⭐ <strong className="text-white">ضمان الرضا:</strong> إمكانية تغيير الشيخ أو استرداد الاشتراك خلال 14 يوماً.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} منصة <strong className="text-white">مُتقن | MOTQAN</strong> لتعليم القرآن الكريم.
          </p>
          <div className="flex items-center gap-6">
            <span>نسأل الله الإخلاص والقبول والتوفيق لأبنائنا</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
