import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBirthdayCake,
  FaSchool,
  FaLanguage,
  FaQuran,
  FaMicrophoneAlt,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaChild,
  FaMars,
  FaVenus,
} from "react-icons/fa";
import {
  GiLantern,
  GiAbstract050,
  GiOpenBook,
  GiStarsStack,
} from "react-icons/gi";

const ChildSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Basic Info, 2: Quran Level

  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    age: "",
    gender: "",
    grade: "",
    readingLevel: "",
    isFirstTime: "",

    // Step 2
    memorizedBefore: "",
    memorizedAmount: "",
    tajweedLevel: "",
    pronunciationIssues: "",
    issueDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelection = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    navigate("/dashboard");
  };

  // حركة الفوانيس
  const lanternSway = (duration = 3, delay = 0) => ({
    animate: { rotate: [2, -2, 2], y: [0, 5, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div
      className="min-h-screen bg-[#f3f7fa] font-tajawal text-right relative overflow-x-hidden"
      dir="rtl"
    >
      {/* =======================
          🌌 الهيدر الأزرق الفخم (Brand Blue)
         ======================= */}
      <div className="bg-[#0a1128] pt-12 pb-32 rounded-b-[4rem] relative overflow-hidden shadow-2xl border-b-8 border-yellow-500">
        {/* زخرفة الخلفية */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <GiAbstract050 className="text-[50rem] absolute -top-20 -right-20 text-white animate-spin-slow" />
        </div>

        {/* فوانيس متدلية من الهيدر */}
        <div className="absolute top-0 right-20 z-20 flex gap-4 pointer-events-none">
          <motion.div
            {...lanternSway(4, 0)}
            className="flex flex-col items-center"
          >
            <div className="w-[2px] h-24 bg-yellow-500/50"></div>
            <GiLantern className="text-5xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
          </motion.div>
        </div>
        <div className="absolute top-0 left-20 z-20 flex gap-4 pointer-events-none">
          <motion.div
            {...lanternSway(5, 1)}
            className="flex flex-col items-center"
          >
            <div className="w-[2px] h-16 bg-blue-400/50"></div>
            <GiLantern className="text-4xl text-blue-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
          </motion.div>
        </div>

        {/* محتوى الهيدر */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/20 mb-4"
          >
            {step === 1 ? (
              <FaChild className="text-4xl text-yellow-400" />
            ) : (
              <FaQuran className="text-4xl text-green-400" />
            )}
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black mb-3">
            {step === 1 ? "بيانات البطل الجديد" : "مستوى الحفظ والتلاوة"}
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            {step === 1
              ? "لنتعرف أكثر على طفلك لنختار له الخطة الأنسب"
              : "معلومات تساعد الشيخ في تحديد نقطة الانطلاق"}
          </p>
        </div>
      </div>

      {/* =======================
          📝 كارت الفورم (متداخل مع الهيدر)
         ======================= */}
      <div className="-mt-20 relative z-20 px-4 pb-20 flex justify-center">
        <motion.div
          className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-blue-100 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* شريط التقدم */}
          <div className="h-2 bg-blue-50 flex" dir="ltr">
            <motion.div
              className="h-full bg-[#0a1128]" // Brand Blue
              initial={{ width: "0%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* ================= Step 1: معلومات أساسية ================= */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* الاسم والسن */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="font-bold text-[#0a1128] flex items-center gap-2">
                          <FaUser className="text-yellow-500" /> اسم الطفل
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-blue-50/50 border border-blue-100 focus:border-[#0a1128] focus:ring-1 focus:ring-[#0a1128] outline-none transition-all"
                          placeholder="اكتب اسم البطل هنا..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-[#0a1128] flex items-center gap-2">
                          <FaBirthdayCake className="text-yellow-500" /> سن
                          الطفل
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-blue-50/50 border border-blue-100 focus:border-[#0a1128] focus:ring-1 focus:ring-[#0a1128] outline-none transition-all"
                          placeholder="السن بالسنوات"
                        />
                      </div>
                    </div>

                    {/* النوع */}
                    <div className="space-y-3">
                      <label className="font-bold text-[#0a1128]">النوع</label>
                      <div className="flex gap-4">
                        <SelectionCard
                          label="ذكر"
                          icon={<FaMars />}
                          selected={formData.gender === "male"}
                          onClick={() => handleSelection("gender", "male")}
                        />
                        <SelectionCard
                          label="أنثى"
                          icon={<FaVenus />}
                          selected={formData.gender === "female"}
                          onClick={() => handleSelection("gender", "female")}
                        />
                      </div>
                    </div>

                    {/* القراءة والدراسة */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="font-bold text-[#0a1128] flex items-center gap-2">
                          <FaSchool className="text-yellow-500" /> الصف الدراسي
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-blue-50/50 border border-blue-100 outline-none appearance-none cursor-pointer focus:border-[#0a1128]"
                        >
                          <option value="">اختر الصف...</option>
                          <option value="kg">رياض أطفال (KG)</option>
                          <option value="primary">المرحلة الابتدائية</option>
                          <option value="prep">المرحلة الإعدادية</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-[#0a1128] flex items-center gap-2">
                          <GiOpenBook className="text-yellow-500" /> التجربة
                          السابقة
                        </label>
                        <select
                          name="isFirstTime"
                          value={formData.isFirstTime}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-blue-50/50 border border-blue-100 outline-none appearance-none cursor-pointer focus:border-[#0a1128]"
                        >
                          <option value="">هل حفظ من قبل؟</option>
                          <option value="yes">نعم، سبق له الحفظ</option>
                          <option value="no">لا، هذه أول مرة</option>
                        </select>
                      </div>
                    </div>

                    {/* مستوى القراءة */}
                    <div className="space-y-3">
                      <label className="font-bold text-[#0a1128] flex items-center gap-2">
                        <FaLanguage className="text-yellow-500" /> مستوى القراءة
                        بالعربية
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SelectionCard
                          label="يقرأ بطلاقة"
                          selected={formData.readingLevel === "fluent"}
                          onClick={() =>
                            handleSelection("readingLevel", "fluent")
                          }
                          small
                        />
                        <SelectionCard
                          label="يقرأ بتهجي"
                          selected={formData.readingLevel === "learning"}
                          onClick={() =>
                            handleSelection("readingLevel", "learning")
                          }
                          small
                        />
                        <SelectionCard
                          label="لا يقرأ بعد"
                          selected={formData.readingLevel === "beginner"}
                          onClick={() =>
                            handleSelection("readingLevel", "beginner")
                          }
                          small
                        />
                      </div>
                    </div>

                    <div className="pt-8 flex justify-end border-t border-gray-100 mt-8">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-[#0a1128] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-900/20 transition-all flex items-center gap-3 text-lg"
                      >
                        التالي: المستوى القرآني <FaArrowLeft />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ================= Step 2: المستوى القرآني ================= */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* الحفظ السابق */}
                    <div className="space-y-4">
                      <label className="font-bold text-[#0a1128] flex items-center gap-2">
                        <FaQuran className="text-green-500" /> هل يحفظ أجزاء من
                        القرآن؟
                      </label>
                      <div className="flex gap-4">
                        <SelectionCard
                          label="نعم"
                          selected={formData.memorizedBefore === "yes"}
                          onClick={() =>
                            handleSelection("memorizedBefore", "yes")
                          }
                        />
                        <SelectionCard
                          label="لا"
                          selected={formData.memorizedBefore === "no"}
                          onClick={() =>
                            handleSelection("memorizedBefore", "no")
                          }
                        />
                      </div>
                    </div>

                    {/* تفاصيل الحفظ */}
                    {formData.memorizedBefore === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                      >
                        <label className="text-sm font-bold text-gray-600 mb-2 block">
                          ما شاء الله! وصل لأي سورة/جزء؟
                        </label>
                        <input
                          type="text"
                          name="memorizedAmount"
                          value={formData.memorizedAmount}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-green-50 border border-green-200 focus:border-green-600 outline-none"
                          placeholder="مثال: جزء عم، أو سورة النبأ..."
                        />
                      </motion.div>
                    )}

                    {/* التجويد */}
                    <div className="space-y-4">
                      <label className="font-bold text-[#0a1128] flex items-center gap-2">
                        <GiStarsStack className="text-yellow-500" /> معرفة أحكام
                        التجويد
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <SelectionCard
                          label="يعرف أحكام بسيطة"
                          selected={formData.tajweedLevel === "basic"}
                          onClick={() =>
                            handleSelection("tajweedLevel", "basic")
                          }
                        />
                        <SelectionCard
                          label="لا يعرف التجويد"
                          selected={formData.tajweedLevel === "none"}
                          onClick={() =>
                            handleSelection("tajweedLevel", "none")
                          }
                        />
                      </div>
                    </div>

                    {/* مشاكل النطق */}
                    <div className="space-y-4">
                      <label className="font-bold text-[#0a1128] flex items-center gap-2">
                        <FaMicrophoneAlt className="text-red-500" /> مخارج
                        الحروف والنطق
                      </label>
                      <p className="text-sm text-gray-500">
                        هل لاحظت أي صعوبات في نطق حروف معينة (مثل الراء،
                        الثاء...)؟
                      </p>
                      <div className="flex gap-4">
                        <SelectionCard
                          label="يوجد صعوبات"
                          selected={formData.pronunciationIssues === "yes"}
                          onClick={() =>
                            handleSelection("pronunciationIssues", "yes")
                          }
                        />
                        <SelectionCard
                          label="النطق سليم"
                          selected={formData.pronunciationIssues === "no"}
                          onClick={() =>
                            handleSelection("pronunciationIssues", "no")
                          }
                        />
                      </div>
                    </div>

                    {/* تفاصيل النطق */}
                    {formData.pronunciationIssues === "yes" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <textarea
                          name="issueDetails"
                          value={formData.issueDetails}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-red-50 border border-red-200 focus:border-red-500 outline-none h-24 resize-none"
                          placeholder="مثال: يجد صعوبة في نطق حرف الراء، أو لديه تأتأة بسيطة..."
                        ></textarea>
                      </motion.div>
                    )}

                    <div className="pt-8 flex justify-between items-center border-t border-gray-100 mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-gray-500 hover:text-[#0a1128] font-bold flex items-center gap-2 px-4 py-2"
                      >
                        <FaArrowRight /> رجوع
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-l from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-green-200 transition-all flex items-center gap-2 text-lg"
                      >
                        إتمام الملف <FaCheck />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 🔘 مكون فرعي لبطاقات الاختيار - محدث بألوان البراند
const SelectionCard = ({ label, icon, selected, onClick, small }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer border-2 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300
      ${small ? "p-4 text-sm" : "p-5 text-base w-full"}
      ${
        selected
          ? "bg-[#0a1128] border-[#0a1128] text-white shadow-xl shadow-blue-900/20 scale-[1.02]" // Brand Blue for Selected
          : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50"
      }
    `}
  >
    {icon && (
      <span
        className={`text-xl ${selected ? "text-yellow-400" : "text-blue-400"}`}
      >
        {icon}
      </span>
    )}
    <span className="font-bold">{label}</span>
  </div>
);

export default ChildSetup;
