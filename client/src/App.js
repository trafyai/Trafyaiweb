// App.js

import React from "react";
import { Routes, Route, useLocation , Navigate } from "react-router-dom";
import Header from "./components/common/header/header.js";
import Footer from "./components/common/footer/Footer.jsx";
import ErrorPage from "./pages/error-page/errorPage.js";
import LandingPage from "./pages/landing-page/landingPage.js";
import Signup from "./components/common/auth/signup/signup.jsx";
import Login from "./components/common/auth/login/Login.jsx";
import UserProfile from "./pages/auth/user-profile/user-profile.js";

import Courses from "./pages/course-page/coursepage-landing/courseLandingPage.js";
import CourseEnquiry from "./pages/auth/enquiry/courseEnquiry.js";
import BlogLanding from "./pages/blog/blog-landing/blogLanding.js";
import BlogPage from "./pages/blog/blog-single/blogPage.js";
import CourseSingle from "./pages/course-page/coursePage/coursePage.js";

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
        
        <Route path="/course-enquiry" element={<CourseEnquiry/> }/>
        
        <Route path="/resources" element={<BlogLanding />} />
        <Route path="/resources/:id" element={<BlogPage />} />
        
        <Route path="/user" element={<UserProfile />} />
        {/* Define the error page route without any path segment */}
        <Route path="/error" element={<ErrorPage />} />
        {/* Redirect all other unknown routes to the error page */}
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