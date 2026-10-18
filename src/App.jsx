import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/layout/DashboardLayout";

// Auth Pages
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./Pages/ForgotPassword";

// Main Public Pages
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Shiekhs from "./Pages/Shiekhs";
import TeacherProfile from "./Pages/TeacherProfile";
import ChildSetup from "./Pages/ChildSetup";
import ReviewShie5s from "./Pages/ReviewShie5s";
import Features from "./Pages/Features";
import MarketplaceDetails from "./Pages/MarketplaceDetails";
import RecordingDetails from "./Pages/RecordingDetails";
import Gamification from "./Pages/Gamification";
import VrVision from "./Pages/Vr-Vision";
import BusinessModelCanvas from "./Pages/VisionBoard";
import CompAnalysis from "./Pages/CompAnalysis";

// Parent Experience
import ParentDashboard from "./Dashboard/ParentDashboard";
import Children from "./Dashboard/Children";
import ChildDetails from "./Dashboard/ChildDetails";
import ParentProgress from "./Pages/parent/ParentProgress";
import ParentLessons from "./Pages/parent/ParentLessons";
import ParentTeachers from "./Pages/parent/ParentTeachers";
import ParentSettings from "./Pages/parent/ParentSettings";

// Student Experience
import StudentDashboard from "./Pages/student/StudentDashboard";
import StudentLearningPlan from "./Pages/student/StudentLearningPlan";
import StudentLessons from "./Pages/student/StudentLessons";
import StudentProgress from "./Pages/student/StudentProgress";
import StudentPractice from "./Pages/student/StudentPractice";
import StudentProfile from "./Pages/student/StudentProfile";

// Teacher / Sheikh Experience
import SheikhDashboard from "./shiekh/SheikhDashboard";

// 404 Component
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 font-tajawal bg-[#F5F8FC]" dir="rtl">
    <div className="w-24 h-24 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-5xl font-black mb-6 shadow-md border-2 border-yellow-300">
      ٤٠٤
    </div>
    <h1 className="text-3xl sm:text-4xl font-black text-blue-900 mb-3">
      الصفحة غير موجودة
    </h1>
    <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
      عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو لوحة المتابعة.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/"
        className="px-6 py-3 bg-[#0B122B] text-white font-bold rounded-2xl hover:bg-blue-900 transition-all shadow-md"
      >
        الرئيسية
      </Link>
      <Link
        to="/parent/dashboard"
        className="px-6 py-3 bg-yellow-500 text-[#0B122B] font-black rounded-2xl hover:bg-yellow-400 transition-all shadow-md"
      >
        لوحة ولي الأمر
      </Link>
      <Link
        to="/teachers"
        className="px-6 py-3 bg-white text-blue-600 font-bold border border-blue-200 rounded-2xl hover:bg-blue-50 transition-all"
      >
        سوق المحفظين
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* ================= PUBLIC PORTAL ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/teachers" element={<Shiekhs />} />
          <Route path="/teachers/:id" element={<TeacherProfile />} />
          <Route path="/teacher/:id" element={<TeacherProfile />} />
          <Route path="/shiekhs" element={<Shiekhs />} />
          <Route path="/shiekhs/:id" element={<TeacherProfile />} />
          <Route path="/shiekhs/review" element={<ReviewShie5s />} />
          <Route path="/shiekhs/childsetup" element={<ChildSetup />} />

          {/* Features & Sub-pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/features/shiekhs" element={<MarketplaceDetails />} />
          <Route path="/features/marketplace" element={<MarketplaceDetails />} />
          <Route path="/features/recording" element={<RecordingDetails />} />
          <Route path="/features/dashboard" element={<ParentDashboard />} />
          <Route path="/features/gamification" element={<Gamification />} />
          <Route path="/features/vr-vision" element={<VrVision />} />
          <Route path="/vision" element={<BusinessModelCanvas />} />
          <Route path="/bmc" element={<BusinessModelCanvas />} />
          <Route path="/analysis" element={<CompAnalysis />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* 404 under public layout */}
          <Route path="/404" element={<NotFound />} />
        </Route>

        {/* ================= STUDENT EXPERIENCE ================= */}
        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="learning-plan" element={<StudentLearningPlan />} />
          <Route path="plan" element={<StudentLearningPlan />} />
          <Route path="lessons" element={<StudentLessons />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="practice" element={<StudentPractice />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* ================= PARENT EXPERIENCE ================= */}
        <Route path="/parent" element={<DashboardLayout role="parent" />}>
          <Route index element={<ParentDashboard />} />
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="children" element={<Children />} />
          <Route path="children/:id" element={<ChildDetails />} />
          <Route path="progress" element={<ParentProgress />} />
          <Route path="lessons" element={<ParentLessons />} />
          <Route path="teachers" element={<ParentTeachers />} />
          <Route path="settings" element={<ParentSettings />} />
        </Route>

        {/* Legacy / Alias Parent Routes */}
        <Route path="/dashboard" element={<DashboardLayout role="parent" />}>
          <Route index element={<ParentDashboard />} />
          <Route path="children" element={<Children />} />
          <Route path="children/:id" element={<ChildDetails />} />
          <Route path="progress" element={<ParentProgress />} />
          <Route path="lessons" element={<ParentLessons />} />
          <Route path="teachers" element={<ParentTeachers />} />
          <Route path="settings" element={<ParentSettings />} />
        </Route>

        {/* ================= TEACHER / SHEIKH EXPERIENCE ================= */}
        <Route path="/teacher" element={<DashboardLayout role="sheikh" />}>
          <Route index element={<SheikhDashboard />} />
          <Route path="dashboard" element={<SheikhDashboard />} />
        </Route>

        {/* Legacy / Alias Teacher Routes */}
        <Route path="/shiekh-dashboard" element={<DashboardLayout role="sheikh" />}>
          <Route index element={<SheikhDashboard />} />
        </Route>
        <Route path="/sheikh-dashboard" element={<DashboardLayout role="sheikh" />}>
          <Route index element={<SheikhDashboard />} />
        </Route>
        <Route path="/sheikh" element={<DashboardLayout role="sheikh" />}>
          <Route index element={<SheikhDashboard />} />
          <Route path="dashboard" element={<SheikhDashboard />} />
        </Route>

        {/* Global Fallback Route */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
