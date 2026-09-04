import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCrown,
  FaGamepad,
  FaMosque,
  FaChild,
  FaStar,
  FaGift,
} from "react-icons/fa";
import {
  GiLantern,
  GiAbstract050,
  GiPrayerBeads,
  GiOpenChest,
  GiReceiveMoney,
} from "react-icons/gi";

const Pricing = () => {
  const [childrenCount, setChildrenCount] = useState(1);

  // حساب نسبة الخصم بناءً على عدد الأطفال
  const getDiscount = (count) => {
    if (count === 2) return 0.2; // 20%
    if (count >= 3) return 0.4; // 40%
    return 0;
  };

  const discountPercentage = getDiscount(childrenCount) * 100;

  // دالة لحساب السعر النهائي بعد الخصم
  const calculatePrice = (basePrice) => {
    const discount = getDiscount(childrenCount);
    const priceAfterDiscount = basePrice * (1 - discount);
    return Math.round(priceAfterDiscount);
  };

  const plans = [
    {
      id: "basic",
      title: "الباقة الأساسية",
      subtitle: "The Basic",
      basePrice: 80,
      icon: <FaMosque className="text-blue-500" />,
      color: "blue",
      features: [
        { text: "دروس لايف تفاعلية", included: true },
        { text: "متابعة مستوى الحفظ", included: true },
        { text: "تقارير بسيطة لولي الأمر", included: true },
        { text: "ألعاب تعليمية", included: false },
        { text: "قصص وتفسير مبسط", included: false },
        { text: "متابعة شخصية مع الشيخ", included: false },
      ],
    },
    {
      id: "standard",
      title: "الباقة المتميزة",
      subtitle: "Standard",
      basePrice: 100,
      isPopular: true,
      icon: <FaGamepad className="text-green-500" />,
      color: "green",
      features: [
        { text: "دروس لايف تفاعلية", included: true },
        { text: "متابعة مستوى الحفظ", included: true },
        { text: "تقارير متابعة مفصلة", included: true },
        { text: "ألعاب تعليمية ممتعة", included: true },
        { text: "قصص وتفسير مبسط", included: true },
        { text: "متابعة شخصية مع الشيخ", included: false },
      ],
    },
    {
      id: "premium",
      title: "باقة الإتقان",
      subtitle: "Premium",
      basePrice: 150, // متوسط السعر المقترح
      icon: <FaCrown className="text-yellow-500" />,
      color: "yellow",
      features: [
        { text: "كل مميزات الباقة السابقة", included: true },
        { text: "متابعة شخصية مع الشيخ", included: true },
        { text: "تقييم صوتي دقيق للحفظ", included: true },
        { text: "مسابقات وجوائز حقيقية", included: true },
        { text: "دعم مباشر لولي الأمر", included: true },
        { text: "أولوية في حجز المواعيد", included: true },
      ],
    },
  ];

  // حركة الفوانيس
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen bg-[#f8fafc] font-tajawal text-right pb-20 relative overflow-hidden"
      dir="rtl"
    >
      {/* 🎨 خلفية وزينة */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <GiAbstract050 className="text-[70rem] absolute -top-20 -right-40 text-blue-900 animate-spin-slow" />
      </div>

      {/* فوانيس متدلية */}
      <div className="absolute top-0 right-10 z-20 flex gap-4 pointer-events-none">
        <motion.div
          {...lanternSway(4, 0)}
          className="flex flex-col items-center"
        >
          <div className="w-[2px] h-32 bg-yellow-600/50"></div>
          <GiLantern className="text-6xl text-yellow-600 drop-shadow-lg" />
        </motion.div>
        <motion.div
          {...lanternSway(5, 1)}
          className="flex flex-col items-center -mt-8"
        >
          <div className="w-[2px] h-20 bg-yellow-600/50"></div>
          <GiLantern className="text-4xl text-orange-500 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* =======================
          💵 الهيدر: العنوان
         ======================= */}
      <div className="bg-[#0a1128] text-white pt-16 pb-32 rounded-b-[4rem] relative border-b-8 border-yellow-500 shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 flex justify-center items-center gap-3">
              استثمر في مستقبل طفلك <GiOpenChest className="text-yellow-400" />
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              اختر الباقة المناسبة لرحلة طفلك القرآنية. أسعار مرنة تناسب الجميع
              مع خصومات خاصة للعائلات.
            </p>
          </motion.div>

          {/* 👨‍👩‍👧‍👦 حاسبة الخصم العائلي (Family Package Selector) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 inline-block max-w-3xl w-full"
          >
            <h3 className="text-yellow-400 font-bold mb-4 flex items-center justify-center gap-2">
              <FaGift /> خصم العائلة (Family Package)
            </h3>

            <div className="flex justify-center gap-4 flex-wrap">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setChildrenCount(num)}
                  className={`px-6 py-3 rounded-2xl flex items-center gap-2 transition-all border-2
                      ${
                        childrenCount === num
                          ? "bg-yellow-500 text-[#0a1128] border-yellow-500 shadow-lg scale-105 font-black"
                          : "bg-transparent text-white border-white/30 hover:bg-white/10"
                      }
                    `}
                >
                  <div className="flex -space-x-2 space-x-reverse">
                    {[...Array(num)].map((_, i) => (
                      <FaChild key={i} />
                    ))}
                  </div>
                  <span>
                    {num === 3
                      ? "3 أطفال أو أكثر"
                      : num === 1
                        ? "طفل واحد"
                        : "طفلين"}
                  </span>
                  {num > 1 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full mr-2">
                      خصم {num === 2 ? "20%" : "40%"}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =======================
          🏷️ كروت الأسعار
         ======================= */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border transition-all duration-300 relative
                ${plan.isPopular ? "border-green-400 scale-105 z-10 shadow-green-200/50" : "border-gray-100 hover:-translate-y-2"}
              `}
            >
              {plan.isPopular && (
                <div className="bg-green-500 text-white text-center py-2 font-bold text-sm">
                  ✨ الخيار الأكثر طلباً
                </div>
              )}

              <div className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 bg-${plan.color}-50`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900">
                  {plan.title}
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-6">
                  {plan.subtitle}
                </p>

                <div className="mb-6 relative inline-block">
                  {/* عرض السعر الأصلي مشطوب لو فيه خصم */}
                  {discountPercentage > 0 && (
                    <span className="text-gray-400 line-through text-lg absolute -top-6 right-0 left-0">
                      {plan.basePrice} ج.م
                    </span>
                  )}
                  <div className="flex items-end justify-center gap-1 text-blue-900">
                    <span className="text-5xl font-black">
                      {calculatePrice(plan.basePrice)}
                    </span>
                    <span className="text-xl font-bold mb-1">ج.م</span>
                    <span className="text-gray-400 text-sm mb-2">/ شهرياً</span>
                  </div>
                  {discountPercentage > 0 && (
                    <div className="text-red-500 text-xs font-bold mt-1 bg-red-50 px-2 py-1 rounded-full inline-block">
                      وفرت {discountPercentage}%
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-black text-lg transition-all shadow-lg
                   ${
                     plan.id === "premium"
                       ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-orange-200"
                       : plan.id === "standard"
                         ? "bg-green-600 text-white hover:bg-green-700"
                         : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                   }
                `}
                >
                  اشترك الآن
                </button>
              </div>

              <div className="bg-gray-50 p-8 border-t border-gray-100">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <FaCheckCircle
                          className={`text-${plan.color === "yellow" ? "orange" : plan.color}-500 flex-shrink-0`}
                        />
                      ) : (
                        <FaTimesCircle className="text-gray-300 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-gray-700 font-bold"
                            : "text-gray-400 decoration-gray-300"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =======================
          🆓 نموذج Freemium
         ======================= */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border-2 border-dashed border-blue-200 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="flex-1 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <GiReceiveMoney className="text-2xl" />
              </div>
              <h2 className="text-3xl font-black text-blue-900">
                مش متأكد لسه؟
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              جرب{" "}
              <span className="text-blue-600 font-bold">
                باقة Freemium المجانية
              </span>
              . مش هتدفع ولا مليم وهتستفيد بجزء من المحتوى، ألعاب تعليمية، وآية
              يومية عشان تطمن لجودة منصتنا.
            </p>
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">
              ابدأ التجربة المجانية
            </button>
          </div>

          {/* قائمة ميزات المجاني */}
          <div className="bg-blue-50 p-6 rounded-[2rem] min-w-[250px]">
            <h4 className="font-bold text-blue-900 mb-4 text-center border-b border-blue-200 pb-2">
              تحتوي على:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <FaStar className="text-yellow-400" /> بعض الألعاب
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <FaStar className="text-yellow-400" /> آية يومية
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <FaStar className="text-yellow-400" /> تجربة محدودة للحلقات
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-12 text-gray-400 text-sm">
        <p>جميع الأسعار بالجنيه المصري | ضمان استرجاع الأموال خلال 14 يوم</p>
      </div>
    </div>
  );
};

export default Pricing;
