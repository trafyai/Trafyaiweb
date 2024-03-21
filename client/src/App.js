// App.js

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/header/header.js";
import Footer from "./components/common/footer/Footer.jsx";
import ErrorPage from "./pages/error-page/errorPage.js";
import LandingPage from "./pages/landing-page/landingPage.js";
import Signup from "./components/common/auth/signup/signup.jsx";
import Login from "./components/common/auth/login/Login.jsx";
import UserProfile from "./pages/auth/user-profile/user-profile.js";
import CoursePage from "./pages/course-page/course-page-single/coursePage.js";
import Courses from "./pages/course-page/coursepage-landing/courseLandingPage.js";
import BlogLanding from "./pages/blog/blog-landing/blogLanding.js";
import BlogPage from "./pages/blog/blog-single/blogPage.js";

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
        <Route path="/uiux-course" element={<CoursePage />} />
        <Route path="/resources" element={<BlogLanding />} />
        <Route path="/resources/:id" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
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