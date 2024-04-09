
import React from "react";
import { BrowserRouter  as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/common/header/header.js";
import Footer from "./components/common/footer/Footer.jsx";
import ErrorPage from "./pages/error-page/errorPage.js";
import LandingPage from "./pages/landing-page/landingPage.js";
import Signup from "./components/common/auth/signup/signup.jsx";
import Login from "./components/common/auth/login/Login.jsx";
import UserProfile from "./pages/auth/user-profile/user-profile.js";

import Courses from "./pages/course-page/coursepage-landing/courseLandingPage.js";
import CourseEnquiry from "./pages/auth/enquiry/courseEnquiry.js";
import DemoEnquiry from "./components/common/auth/free-demo/DemoEnquiry.jsx";
import BlogLanding from "./pages/blog/blog-landing/blogLanding.js";
import BlogPage from "./pages/blog/blog-single/blogPage.js";
import CourseSingle from "./pages/course-page/coursePage/coursePage.js";
import ServicePage from "./pages/service-page/servicePage.js";

import TermsOfService from "./components/footer/compliance/TermsOfService.jsx";
import PrivacyPolicy from "./components/footer/compliance/PrivacyPolicy.jsx";
import CookiePolicy from "./components/footer/compliance/CookiePolicy.jsx";
import RefundPolicy from "./components/footer/compliance/RefundPolicy.jsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserProfile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/:courseId" element={<CourseSingle/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        
        
        <Route path="/course-enquiry" element={<CourseEnquiry/> }/>
        <Route path="/enquiry" element={<CourseEnquiry/> }/>
        <Route path="/demo-enquiry" element={<DemoEnquiry/> }/>
        
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        
        <Route path="/user" element={<UserProfile />} />

        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/cookie-policy" element={<CookiePolicy/>} />
        <Route path="/refund-policy" element={<RefundPolicy/>} />
      
        <Route path="/error" element={<ErrorPage />} />
       
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
      </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
