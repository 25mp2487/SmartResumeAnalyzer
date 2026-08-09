import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import UploadResume from "./pages/UploadResume";
import Portfolio from "./pages/Portfolio";
import PortfolioEditor from "./pages/PortfolioEditor";
import TemplateSelection from "./components/portfolio/TemplateSelection";

function App() {
  return (
    <Routes>

      {/* ================= HOME ================= */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* ================= AUTH ================= */}
      <Route
        path="/auth"
        element={<Auth />}
      />

      {/* Keep /login working too */}
      <Route
        path="/login"
        element={<Auth />}
      />

      {/* ================= UPLOAD ================= */}
      <Route
        path="/upload"
        element={<UploadResume />}
      />

      {/* ================= PORTFOLIO ================= */}
      <Route
        path="/portfolio/:resumeId"
        element={<Portfolio />}
      />

      {/* ================= TEMPLATE SELECTION ================= */}
      <Route
        path="/portfolio/:resumeId/templates"
        element={<TemplateSelection />}
      />

      {/* ================= PORTFOLIO EDITOR ================= */}
      <Route
        path="/portfolio/:resumeId/edit"
        element={<PortfolioEditor />}
      />

      {/* ================= UNKNOWN URL ================= */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;