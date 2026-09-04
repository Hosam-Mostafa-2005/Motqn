import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaBalanceScale,
  FaCrown,
} from "react-icons/fa";
import { GiAbstract050, GiSwordsPower } from "react-icons/gi";

const CompetitorAnalysis = () => {
  // بيانات المنافسين
  const competitors = [
    {
      name: "Tarteel",
      strengths: [
        "يستخدم الذكاء الاصطناعي في تصحيح التلاوة",
        "Feedback فوري",
        "تجربة تقنية متقدمة",
      ],
      weaknesses: [
        "غير مخصص للأطفال",
        "لا يوجد متابعة بشرية",
        "يركز على التأسيس اللغوي والالتزام الذاتي فقط",
      ],
    },
    {
      name: "Quran Companion",
      strengths: [
        "نظام تحفيز وتتبع للحفظ",
        "تحديد أهداف يومية وأسبوعية",
        "واجهة سهلة",
      ],
      weaknesses: [
        "لا يصحح النطق بدقة",
        "لا يوجد تفاعل بشري",
        "غير مناسب للأطفال الصغار",
      ],
    },
    {
      name: "Quranic",
      strengths: [
        "تعليم اللغة العربية من خلال القرآن",
        "محتوى منظم يساعد على فهم المعاني",
      ],
      weaknesses: [
        "غير مخصص للأطفال",
        "لا يصحح النطق",
        "لا يوفر متابعة مستمرة",
      ],
    },
    {
      name: "Learn Quran Tajwid",
      strengths: [
        "شرح واضح لقواعد التجويد",
        "محتوى تعليمي منظم",
        "مناسب للمبتدئين",
      ],
      weaknesses: [
        "تجربة تقليدية (ليست تفاعلية)",
        "لا يوجد متابعة",
        "لا يدمج الحفظ مع التطبيق العملي للطفل",
      ],
    },
    {
      name: "Memorize Quran for Kids",
      strengths: ["موجه للأطفال", "واجهة بسيطة", "تقسيم تدريجي للحفظ"],
      weaknesses: [
        "لا يصحح مخارج الحروف",
        "لا يوجد تقييم حقيقي",
        "متابعة ضعيفة وتجربة سطحية",
      ],
    },
    {
      name: "Muslim Pro",
      strengths: [
        "انتشار واسع وشهرة كبيرة",
        "سهولة قراءة القرآن",
        "أدوات مساعدة (تفسير، ترجمة)",
      ],
      weaknesses: [
        "لا يقدم تصحيح نطق",
        "ليس تجربة تعليمية",
        "لا تخصيص للأطفال أو متابعة",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f8fafc] font-tajawal text-right relative overflow-hidden"
      dir="rtl"
    >
      {/* =======================
          🌌 الهيدر الخلفي
         ======================= */}
      <div className="bg-[#0a1128] pt-20 pb-32 rounded-b-[4rem] relative shadow-2xl border-b-8 border-yellow-500 overflow-hidden">
        {/* زخرفة خلفية */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <GiAbstract050 className="text-[50rem] absolute -top-20 -left-20 text-white animate-spin-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
          >
            <FaArrowRight /> العودة للرئيسية
          </Link>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <GiSwordsPower className="text-4xl text-[#0a1128]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              تحليل <span className="text-yellow-400">المنافسين</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              دراسة دقيقة للسوق توضح الفجوة التي تملؤها منصة "مُتقن" بتميزها في
              الجمع بين التقنية والمتابعة البشرية.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =======================
          📊 جدول المقارنة
         ======================= */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900 to-[#0a1128] text-white">
                  <th className="py-6 px-6 text-right font-black text-lg w-1/4 border-l border-white/10">
                    <div className="flex items-center gap-2">
                      <FaBalanceScale className="text-yellow-400 text-2xl" />{" "}
                      اسم المنافس
                    </div>
                  </th>
                  <th className="py-6 px-6 text-right font-black text-lg w-1/3 border-l border-white/10">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" /> نقاط القوة
                      (Strengths)
                    </div>
                  </th>
                  <th className="py-6 px-6 text-right font-black text-lg w-1/3">
                    <div className="flex items-center gap-2">
                      <FaTimesCircle className="text-red-400" /> نقاط الضعف
                      (Weaknesses)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {competitors.map((comp, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
                  >
                    {/* اسم المنافس */}
                    <td className="py-6 px-6 align-top border-l border-gray-100">
                      <h3 className="text-xl font-bold text-blue-900">
                        {comp.name}
                      </h3>
                    </td>

                    {/* نقاط القوة */}
                    <td className="py-6 px-6 align-top border-l border-gray-100">
                      <ul className="space-y-3">
                        {comp.strengths.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 text-sm font-medium"
                          >
                            <span className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* نقاط الضعف */}
                    <td className="py-6 px-6 align-top bg-red-50/10">
                      <ul className="space-y-3">
                        {comp.weaknesses.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 text-sm font-medium"
                          >
                            <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* الخلاصة (Mutqan Advantage) */}
          <div className="bg-[#0a1128] p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-4 flex justify-center items-center gap-3">
                <FaCrown className="text-yellow-400 text-3xl animate-pulse" />
                لماذا "مُتقن" هو الخيار الأفضل؟
              </h3>
              <p className="text-blue-100 max-w-4xl mx-auto text-lg leading-relaxed">
                بينما يركز المنافسون إما على{" "}
                <span className="text-green-400 font-bold">التقنية فقط</span>{" "}
                (بدون روح) أو{" "}
                <span className="text-green-400 font-bold">
                  التعليم التقليدي فقط
                </span>{" "}
                (بدون متعة)، يأتي{" "}
                <span className="text-yellow-400 font-bold">مُتقن</span> ليملأ
                هذه الفجوة بدمج الذكاء الاصطناعي مع اللمسة البشرية الحانية، في
                قالب ألعاب (Gamified) يجذب الطفل ويطمئن الوالدين.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
