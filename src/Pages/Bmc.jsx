import React from "react";
import {
  FaHandshake,
  FaCogs,
  FaLayerGroup,
  FaGem,
  FaHeart,
  FaBullhorn,
  FaUsers,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa";

const Bmc = () => {
  // مكون فرعي للقسم (Section Component)
  const CanvasSection = ({ title, icon, color, children, className = "" }) => {
    const colorClasses = {
      red: "border-t-4 border-red-500 bg-red-50",
      blue: "border-t-4 border-blue-500 bg-blue-50",
      yellow: "border-t-4 border-yellow-500 bg-yellow-50",
      purple: "border-t-4 border-purple-500 bg-purple-50",
      green: "border-t-4 border-green-500 bg-green-50",
      orange: "border-t-4 border-orange-500 bg-orange-50",
    };

    const textColors = {
      red: "text-red-700",
      blue: "text-blue-700",
      yellow: "text-yellow-700",
      purple: "text-purple-700",
      green: "text-green-700",
      orange: "text-orange-700",
    };

    return (
      <div
        className={`p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col ${colorClasses[color]} ${className}`}
      >
        {/* Title Header (English - LTR) */}
        <div
          className={`flex items-center justify-between mb-4 border-b border-gray-200 pb-2 ${textColors[color]}`}
          dir="ltr"
        >
          <h3 className="font-black text-lg uppercase tracking-wide font-sans">
            {title}
          </h3>
          <span className="text-2xl opacity-80">{icon}</span>
        </div>

        {/* Content (Arabic - RTL) */}
        <div
          className="text-gray-700 text-sm leading-relaxed font-medium flex-1 text-right"
          dir="rtl"
        >
          {children}
        </div>
      </div>
    );
  };

  // قائمة نقطية مخصصة
  const List = ({ items }) => (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-[#0a1128] font-tajawal py-12 px-4 md:px-8">
      {/* العنوان الخارجي */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
          Recycling Business Model
        </h1>
        <p className="text-blue-200 text-lg">
          مشروع إعادة التدوير وإدارة المخلفات
        </p>
      </div>

      {/* 🖼️ الإطار الرئيسي (The Board) */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white">
        {/* الشبكة العلوية */}
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-[600px] divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-200">
          {/* Column 1: Partnerships */}
          <div className="md:col-span-1">
            <CanvasSection
              title="Key Partners"
              icon={<FaHandshake />}
              color="red"
              className="h-full"
            >
              <List
                items={[
                  "مصانع إعادة التدوير",
                  "موردو معدات وأدوات التدوير",
                  "شركات النقل والخدمات اللوجستية",
                ]}
              />
            </CanvasSection>
          </div>

          {/* Column 2: Activities & Resources */}
          <div className="md:col-span-1 flex flex-col divide-y divide-gray-200">
            <div className="flex-1">
              <CanvasSection
                title="Key Activities"
                icon={<FaCogs />}
                color="blue"
                className="h-full border-none shadow-none bg-white"
              >
                <List
                  items={[
                    "شراء وجمع المخلفات",
                    "إدارة العمليات والتشغيل",
                    "تطوير تقنيات التدوير",
                    "عمليات النقل والتخزين",
                    "الفرز والمعالجة",
                  ]}
                />
              </CanvasSection>
            </div>
            <div className="flex-1">
              <CanvasSection
                title="Key Resources"
                icon={<FaLayerGroup />}
                color="blue"
                className="h-full border-none shadow-none bg-white"
              >
                <List
                  items={[
                    "العمال والموظفين",
                    "المخازن ومراكز التجميع",
                    "وسائل النقل (أسطول الشاحنات)",
                    "المعدات والآلات",
                    "رأس المال",
                  ]}
                />
              </CanvasSection>
            </div>
          </div>

          {/* Column 3: Value Proposition (Center) */}
          <div className="md:col-span-1">
            <CanvasSection
              title="Value Proposition"
              icon={<FaGem />}
              color="yellow"
              className="h-full bg-yellow-50/60"
            >
              <div className="space-y-4">
                <div className="bg-white/80 p-3 rounded-lg border border-yellow-200 shadow-sm">
                  <h4 className="font-bold text-yellow-800 mb-1 border-b border-yellow-100 pb-1">
                    البيئة والاستدامة:
                  </h4>
                  <p className="text-gray-800 leading-relaxed text-xs">
                    الحفاظ على البيئة، تقليل التلوث، والاستفادة القصوى من
                    المخلفات بدلاً من التخلص منها بطرق ضارة.
                  </p>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-yellow-200 shadow-sm">
                  <h4 className="font-bold text-yellow-800 mb-1 border-b border-yellow-100 pb-1">
                    للعملاء:
                  </h4>
                  <p className="text-gray-800 leading-relaxed text-xs">
                    خدمة عملاء سريعة وفعالة، توفير حلول سهلة للتخلص من المخلفات
                    بمقابل مادي أو بيئي.
                  </p>
                </div>
              </div>
            </CanvasSection>
          </div>

          {/* Column 4: Relationships & Channels */}
          <div className="md:col-span-1 flex flex-col divide-y divide-gray-200">
            <div className="flex-1">
              <CanvasSection
                title="Customer Relationships"
                icon={<FaHeart />}
                color="purple"
                className="h-full border-none shadow-none bg-white"
              >
                <List
                  items={[
                    "خدمة عملاء مستمرة",
                    "متابعة ما بعد الخدمة",
                    "توفير الوقت والجهد للعميل",
                    "تقديم عروض وخدمات إضافية",
                  ]}
                />
              </CanvasSection>
            </div>
            <div className="flex-1">
              <CanvasSection
                title="Channels"
                icon={<FaBullhorn />}
                color="purple"
                className="h-full border-none shadow-none bg-white"
              >
                <div
                  className="flex gap-3 mb-3 text-xl text-purple-400 justify-end"
                  dir="ltr"
                >
                  <span>📢</span> <span>📱</span>
                </div>
                <List
                  items={[
                    "حملات تسويقية للمطاعم",
                    "التسويق الإلكتروني",
                    "التواصل المباشر مع العملاء",
                  ]}
                />
              </CanvasSection>
            </div>
          </div>

          {/* Column 5: Segments */}
          <div className="md:col-span-1">
            <CanvasSection
              title="Customer Segments"
              icon={<FaUsers />}
              color="purple"
              className="h-full"
            >
              <div className="space-y-3">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <strong className="text-purple-900 block text-base mb-1">
                    القطاع التجاري والصناعي
                  </strong>
                  <ul className="text-xs text-gray-700 list-disc list-inside">
                    <li>المصانع</li>
                    <li>المطاعم والكافيهات</li>
                    <li>المحال التجارية</li>
                  </ul>
                </div>

                <div className="bg-purple-100 p-3 rounded-xl">
                  <strong className="text-purple-900 block text-base mb-1">
                    القطاع السكني
                  </strong>
                  <ul className="text-xs text-gray-700 list-disc list-inside">
                    <li>المساكن والمجمعات السكنية</li>
                    <li>الأفراد</li>
                  </ul>
                </div>
              </div>
            </CanvasSection>
          </div>
        </div>

        {/* الشبكة السفلية (Finance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-gray-100">
          {/* Cost */}
          <div className="border-r border-gray-200">
            <CanvasSection
              title="Cost Structure"
              icon={<FaMoneyBillWave />}
              color="orange"
              className="h-full bg-white border-none"
            >
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200 font-bold shadow-sm flex-1 text-center">
                  المخازن
                </span>
                <span className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200 font-bold shadow-sm flex-1 text-center">
                  أجور العمال والرواتب
                </span>
                <span className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200 font-bold shadow-sm flex-1 text-center">
                  تكاليف النقل
                </span>
                <span className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200 font-bold shadow-sm flex-1 text-center">
                  الإعلان والتسويق
                </span>
                <span className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg border border-orange-200 font-bold shadow-sm flex-1 text-center">
                  التكاليف التشغيلية
                </span>
              </div>
            </CanvasSection>
          </div>

          {/* Revenue */}
          <div>
            <CanvasSection
              title="Revenue Streams"
              icon={<FaWallet />}
              color="green"
              className="h-full bg-white border-none"
            >
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-green-50 text-green-800 px-4 py-2 rounded-lg border border-green-200 font-bold shadow-sm flex-1 text-center">
                  بيع المنتجات المعاد تدويرها
                </span>
                <span className="bg-green-50 text-green-800 px-4 py-2 rounded-lg border border-green-200 font-bold shadow-sm flex-1 text-center">
                  بيع المخلفات بعد المعالجة
                </span>
                <span className="bg-green-50 text-green-800 px-4 py-2 rounded-lg border border-green-200 font-bold shadow-sm flex-1 text-center">
                  أرباح التشغيل
                </span>
              </div>
            </CanvasSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmc;
