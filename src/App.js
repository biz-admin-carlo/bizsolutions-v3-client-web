import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import Footer from "./components/Footer";
import TermsPage from "./pages/TermsofService";
import PrivacyPage from "./pages/PrivacyPage";
import CareerPage from "./pages/CareerPage";
import ContactUsPage from "./pages/ContactUsPage";
import ResultPage from "./pages/ResultPage";
import BizPage from "./pages/BizPage";
import HistoryPage from "./pages/HistoryPage";
import ScrollToTop from "./components/ScrollToTop";
import Cookies from "./components/Cookies";

function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          const encodedLocation = btoa(location); // Base64 encode the location
          sessionStorage.setItem("location", encodedLocation);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    // Obfuscated key name for localStorage
    const keyName = "app_visits_data";

    // Check if the key exists in localStorage
    const visitData = localStorage.getItem(keyName);
    if (!visitData) {
      // First visit: Initialize the data
      const initialData = {
        firstVisit: new Date().toISOString(), // Store the first visit timestamp
        visitCount: 1, // Start with 1 visit
      };
      localStorage.setItem(keyName, btoa(JSON.stringify(initialData))); // Encode and store the data
    } else {
      // Not the first visit: Increment the visit count
      const decodedData = JSON.parse(atob(visitData)); // Decode the stored data
      decodedData.visitCount += 1; // Increment the visit count
      localStorage.setItem(keyName, btoa(JSON.stringify(decodedData))); // Re-encode and store the updated data
    }

    // Geolocation logic
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          const encodedLocation = btoa(location); // Base64 encode the location
          sessionStorage.setItem("location", encodedLocation);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  
  return (
    <Router>
      <>
        {/* Scroll to Top Component */}
        <ScrollToTop />

        <Routes>
          {/* ✅ Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate replace to="/home" />} />

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<ResultPage />} />
          <Route path="/search/biz/:bizName" element={<BizPage />} />


          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/company-history" element={<HistoryPage />} />

          <Route path="/pricing" element={<PricingPage />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cookies />
        {/* Footer */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
