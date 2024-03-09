import React from "react";
import Header from "./components/common/header/header.js";
import Footer from "./components/common/footer/Footer.jsx";
import LandingPage from "./pages/landing-page/landingPage.js";
import {Routes, Route, Link} from "react-router-dom";
import Signup from "./components/common/auth/signup/signup.jsx";
import Login from "./components/common/auth/login/Login.jsx";
import UserProfile from "./pages/auth/user-profile/user-profile.js";
import CoursePage from "./pages/course-page/course-page-single/coursePage.js";
import Courses from "./pages/course-page/coursepage-landing/courseLandingPage.js";

function App() {
  return (
    <>
     <Header/> 
     
      <Routes>
      <Route path="/" element={<LandingPage/> }   />
        <Route path="/signup" element={<Signup/> }   />
        <Route path="/login" element={<Login/> }   />
        <Route path="/user-dashboard" element={<UserProfile/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/uiux-course" element={<CoursePage/>} />
      </Routes>

      <Footer/>
      
    
        
        
    </>  
  )
}

export default App;
