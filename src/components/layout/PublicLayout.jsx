import React from "react";
import { Outlet } from "react-router-dom";
import DemoRoleBar from "../common/DemoRoleBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] font-tajawal text-[#0B122B] text-right" dir="rtl">
      <DemoRoleBar />
      <Navbar />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
