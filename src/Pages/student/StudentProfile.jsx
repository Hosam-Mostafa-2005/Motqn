import React from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import {
  FaUser,
  FaAward,
  FaStar,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaQuran,
} from "react-icons/fa";
import { GiLantern, GiStarsStack, GiTreeGrowth, GiPrayerBeads } from "react-icons/gi";

const StudentProfile = () => {
  const { getActiveChild, teachers } = useAppStore();
  const child = getActiveChild();
  const assignedSheikh = teachers.find((t) => t.id === child.assignedSheikhId) || teachers[0];

  return (
    <div className="space-y-8 font-tajawal text-right pb-16" dir="rtl">
      {/* Header */}
      <div className="bg-[#0B122B] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-b-4 border-yellow-500">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full border-4 border-yellow-500 p-1 bg-[#0B122B] shadow-2xl relative flex-shrink-0">
            <img
              src={child.avatar}
              alt={child.name}
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
          <div>
            <span className="text-xs bg-yellow-500 text-[#0B122B] px-3 py-0.5 rounded-full font-black">
              الملف القرآني للبطل
            </span>
            <h1 className="text-3xl font-black text-white mt-1">البطل {child.fullName || child.name}</h1>
            <p className="text-blue-200 text-xs mt-0.5">
              السن: {child.age} سنوات • الصف: {child.grade === "primary" ? "المرحلة الابتدائية" : "رياض أطفال"}
            </p>
          </div>
        </div>
      </div>

      {/* Profile Details Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaUser className="text-blue-600" /> البيانات الشخصية والقرآنية
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-500 font-bold">المستوى الدراسي:</span>
              <span className="font-black text-blue-900">{child.level}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-500 font-bold">المحفوظ الحالي:</span>
              <span className="font-black text-blue-900">{child.memorizedAmount}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-500 font-bold">هدف الحفظ:</span>
              <span className="font-black text-blue-900">{child.memorizationGoal}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-500 font-bold">رصيد الحسنات:</span>
              <span className="font-black text-yellow-600 flex items-center gap-1">
                <GiStarsStack /> {child.hasanat} حسنة
              </span>
            </div>
          </div>
        </div>

        {/* Sheikh Information Card */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-50 space-y-6">
          <h3 className="text-xl font-black text-blue-900 flex items-center gap-2">
            <FaChalkboardTeacher className="text-yellow-600" /> الشيخ والمُحفّظ المشرف
          </h3>

          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white p-1 border-2 border-yellow-500 shadow flex-shrink-0">
              <img src={assignedSheikh.image} alt={assignedSheikh.name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <h4 className="font-black text-base text-blue-900">{assignedSheikh.name}</h4>
              <p className="text-xs text-gray-500">{assignedSheikh.specialty}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1 font-bold">
                <FaStar /> {assignedSheikh.rating} ({assignedSheikh.reviewCount} تقييم)
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center text-xs">
            <Link
              to={`/teachers/${assignedSheikh.id}`}
              className="text-blue-600 font-bold hover:underline"
            >
              عرض الملف التعريفي للشيخ ←
            </Link>
            <Link
              to="/student/practice"
              className="px-4 py-2 bg-[#0B122B] text-white rounded-xl font-bold hover:bg-blue-900 transition-colors"
            >
              تسجيل تلاوة للشيخ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
