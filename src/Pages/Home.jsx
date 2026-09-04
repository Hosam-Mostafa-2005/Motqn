import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaQuran,
  FaChild,
  FaMoon,
  FaMicrophoneAlt,
  FaUsers,
  FaChartLine,
  FaVrCardboard,
  FaGamepad,
  FaArrowLeft,
} from "react-icons/fa";
import {
  GiLantern,
  GiSamaraMosque,
  GiStairsGoal,
  GiCrystalBall,
  GiCrescentBlade,
} from "react-icons/gi";
import { MdOutlineFamilyRestroom, MdCastForEducation } from "react-icons/md";

const Home = () => {
  // Animations logic
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div
      className="font-tajawal text-right bg-[#f0f4f8] text-[#1a365d] overflow-x-hidden"
      dir="rtl"
    >
      {/* 1. Ramadan Decorations (Global) */}
      <div className="fixed top-0 left-0 w-full flex justify-around pointer-events-none z-50">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: [2, -2, 2], y: [0, 5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-16 bg-yellow-500/50"></div>
            <GiLantern className="text-yellow-500 text-4xl -mt-1 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          </motion.div>
        ))}
      </div>

      {/* 2. Hero Section (Updated CTA) */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a1128] text-white p-6 overflow-hidden">
        {/* خلفية جمالية */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-10 text-yellow-200 text-9xl blur-sm opacity-20">
            <FaMoon />
          </div>
          <div className="absolute bottom-10 left-10 text-blue-400 text-8xl blur-sm opacity-10">
            <GiSamaraMosque />
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl text-center"
        >
          {/* Badge الترحيب الجديد */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-yellow-500 rounded-full text-yellow-400 mb-8 bg-yellow-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.2)]"
          >
            <GiCrescentBlade className="text-xl animate-pulse" />
            <span className="font-bold text-lg">أهلاً بك في منصة مُتقن</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            اربط قلب طفلك <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
              بأنوار القرآن
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            في <span className="font-bold text-yellow-400">"مُتقن"</span>، نجمع
            بين أصالة التحفيظ وتقنيات الذكاء الاصطناعي، لنقدم لطفلك تجربة
            تعليمية لا تُنسى.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/register"
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-3 group"
            >
              ابدأ رحلتك مجاناً{" "}
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/features"
              className="px-10 py-5 border border-white/30 hover:bg-white/10 text-white text-xl font-bold rounded-2xl transition-all backdrop-blur-sm"
            >
              جولة في المميزات
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. MVP Features (The Core) */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              لماذا يختار الآباء "مُتقن"؟
            </h2>
            <p className="text-gray-500 text-xl">
              حلول تقنية وتربوية شاملة (MVP Features)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaUsers />,
                title: "سوق المحفظين (Marketplace)",
                desc: "اختر الشيخ الأنسب لطفلك من بين نخبة من المتخصصين المعتمدين.",
              },
              {
                icon: <FaChild />,
                title: "متابعة بشرية مستمرة",
                desc: "تفاعل حقيقي بين الشيخ والطفل لضمان الاستمرارية والالتزام.",
              },
              {
                icon: <FaMicrophoneAlt />,
                title: "تصحيح التلاوة الذكي",
                desc: "نظام تسجيل يسمح للشيخ بسماع طفلك وتصحيح مخارج الحروف بدقة.",
              },
              {
                icon: <FaChartLine />,
                title: "لوحة متابعة ولي الأمر",
                desc: "كن على اطلاع دائم بمستوى الحفظ، الحضور، وتقارير الأداء.",
              },
              {
                icon: <GiStairsGoal />,
                title: "مسار حفظ منظم",
                desc: "خطط دراسية مخصصة تناسب عمر طفلك ومستواه الحالي.",
              },
              {
                icon: <MdCastForEducation />,
                title: "تعليم مرن",
                desc: "تعلم من منزلك وفي الأوقات التي تناسب جدول عائلتك.",
              },
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="text-4xl text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  {feat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Phase 2: The Gaming & Family Layer */}
      <section className="py-24 px-6 bg-[#f8fafc] overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <FaGamepad className="text-5xl text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              قريباً: مميزات الجيل الثاني (Phase 2)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ x: -10 }}
              className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border-r-8 border-yellow-500"
            >
              <div className="text-5xl text-yellow-500">
                <GiStairsGoal />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  نظام تحفيزي (Gamification)
                </h4>
                <p className="text-gray-600">
                  تحويل الحفظ إلى مغامرة! نقاط، أوسمة، ومستويات يحصل عليها الطفل
                  مع كل تقدم.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: -10 }}
              className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border-r-8 border-blue-600"
            >
              <div className="text-5xl text-blue-600">
                <FaChild />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">واجهة مخصصة للأطفال</h4>
                <p className="text-gray-600">
                  تصميم كرتوني جذاب وبسيط يجعل الطفل يتفاعل مع التطبيق بمفرده
                  وبحب.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: -10 }}
              className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border-r-8 border-yellow-500"
            >
              <div className="text-5xl text-yellow-500">
                <MdOutlineFamilyRestroom />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">الخطط العائلية</h4>
                <p className="text-gray-600">
                  باقات توفيرية للإخوة مع إمكانية التنافس الشريف بينهم في لوحة
                  متصدرين عائلية.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: -10 }}
              className="flex gap-6 bg-white p-8 rounded-3xl shadow-sm border-r-8 border-blue-600"
            >
              <div className="text-5xl text-blue-600">
                <FaChartLine />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">تقارير أداء متقدمة</h4>
                <p className="text-gray-600">
                  تحليلات ذكية توضح نقاط القوة والضعف في التجويد ومخارج الحروف
                  بدقة علمية.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Vision: The Future of Quran Learning */}
      <section className="py-24 px-6 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <GiCrystalBall className="text-7xl text-blue-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl font-black mb-6">
              رؤية مُتقن للمستقبل (Vision)
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              نحن لا نبني تطبيقاً فحسب، نحن نصيغ مستقبل التعليم الديني باستخدام
              أحدث تقنيات العصر لخدمة كتاب الله.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <GiSamaraMosque />,
                title: "وضع الخشوع",
                desc: "بيئة خالية من المشتتات تركز على الصفاء الذهني.",
              },
              {
                icon: <FaQuran />,
                title: "Story Mode",
                desc: "شرح القصص وراء السور بأسلوب تفاعلي مشوق.",
              },
              {
                icon: <FaVrCardboard />,
                title: "VR Experience",
                desc: "رحلات افتراضية مذهلة لزيارة الحرمين الشريفين.",
              },
              {
                icon: <FaGamepad />,
                title: "Full RPG System",
                desc: "بناء شخصية الطفل الإيمانية داخل عالم افتراضي.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl text-blue-400 mb-4">{v.icon}</div>
                <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                <p className="text-sm text-blue-200/70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-white py-12 border-t border-blue-100 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-black text-blue-900 mb-4 font-tajawal">
            مُتقن - لجيلٍ يحمل النور
          </h3>
          <p className="text-gray-500 mb-8">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} لمنصة مُتقن
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              إنشاء حساب جديد
            </Link>
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/pricing"
              className="text-blue-600 font-bold hover:underline"
            >
              الأسعار
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
