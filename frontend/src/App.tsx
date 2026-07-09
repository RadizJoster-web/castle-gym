import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AuthPage from "./pages/Auth";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Authentication Page */}
        <Route path="/login" element={<AuthPage action="login" />} />
        <Route path="/register" element={<AuthPage action="register" />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
