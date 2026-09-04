import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// Auth Pages
import Login from "./auth/Login";
import Register from "./auth/Register";

// Main Pages
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Shiekhs from "./Pages/Shiekhs";

// Dashboard Pages
import ParentDashboard from "./Dashboard/ParentDashboard";
import Children from "./Dashboard/Children";
import ChildDetails from "./Dashboard/ChildDetails";

// Shiekh Pages
import SheikhDashboard from "./shiekh/SheikhDashboard";
import Features from "./Pages/Features";
import MarketplaceDetails from "./Pages/MarketplaceDetails";
import RecordingDetails from "./Pages/RecordingDetails";
import Gamification from "./Pages/Gamification";
import VrVision from "./Pages/Vr-Vision";
import BusinessModelCanvas from "./Pages/VisionBoard";
import ChildSetup from "./Pages/ChildSetup";
import ReviewShie5s from "./Pages/ReviewShie5s";
import CompAnalysis from "./Pages/CompAnalysis";
import Bmc from "./Pages/BMC.JSX";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/shiekhs" element={<Shiekhs />} />
        <Route path="/bmc2" element={<Bmc />} />
        <Route path="/analysis" element={<CompAnalysis />} />
        <Route path="/shiekhs/childsetup" element={<ChildSetup />} />
        <Route path="/shiekhs/review" element={<ReviewShie5s />} />
        <Route path="/features/shiekhs" element={<Shiekhs />} />
        <Route path="/features/dashboard" element={<ParentDashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="/vision" element={<BusinessModelCanvas />} />
        <Route path="/features/marketplace" element={<MarketplaceDetails />} />
        <Route path="/features/gamification" element={<Gamification />} />
        <Route path="/features/vr-vision" element={<VrVision />} />
        <Route path="/features/recording" element={<RecordingDetails />} />
        {/* وهكذا لباقي الصفحات */}
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Parent Dashboard Routes */}
        <Route path="/dashboard" element={<ParentDashboard />} />
        <Route path="/dashboard/children" element={<Children />} />
        <Route path="/dashboard/children/:id" element={<ChildDetails />} />
        {/* Shiekh Routes */}
        <Route path="/shiekh-dashboard" element={<SheikhDashboard />} />
        {/* 404 Page (Optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
