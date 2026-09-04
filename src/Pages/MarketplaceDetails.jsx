import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers, FaCheckCircle, FaVideo } from "react-icons/fa";

const MarketplaceDetails = () => {
  return (
    <div className="min-h-screen bg-white font-tajawal text-right" dir="rtl">
      {/* Header ناعم */}
      <div className="bg-blue-600 text-white p-10 md:p-20 relative overflow-hidden">
        <Link
          to="/features"
          className="absolute top-10 right-10 flex items-center gap-2 hover:underline"
        >
          <FaArrowRight /> العودة للمميزات
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaUsers className="text-7xl mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            سوق المحفظين المعتمدين
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            نحن لا نوفر مجرد محفظين، بل نختار نخبة من حملة كتاب الله لبناء جيل
            قرآني متقن.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              كيف يعمل نظام الاختيار؟
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex gap-4">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <p>
                  <strong>التدقيق والاعتماد:</strong> يتم فحص إجازات الشيوخ
                  وخبرتهم في التعامل التربوي مع الأطفال قبل قبولهم.
                </p>
              </div>
              <div className="flex gap-4">
                <FaVideo className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                <p>
                  <strong>فيديو تعريفي:</strong> يمكنك مشاهدة فيديو لكل شيخ
                  لتسمع نبرة صوته وترى أسلوبه في التفاعل قبل الحجز.
                </p>
              </div>
            </div>
          </div>
          {/* رسم توضيحي أو Placeholder لصورة فخمة */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-10 rounded-[3rem] border-2 border-dashed border-blue-200"
          >
            <div className="text-center text-blue-600">
              <p className="font-bold mb-4">
                [ رسم توضيحي لبروفايل الشيخ المعتمد ]
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 w-32 bg-gray-100 rounded mx-auto mb-2"></div>
                <div className="h-3 w-24 bg-gray-50 rounded mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDetails;
