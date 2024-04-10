import React from "react";
import { useParams, Navigate, useLocation } from 'react-router-dom';
import './CoursePage.css';
import { CourseHeroData, CourseAboutData, CourseSyllabusData , CourseProjectData , CourseReviewData ,CourseCertificateData , CoursePaymentData, CourseFaqData} from "../../../data/course-page/course-single-page/CoursePageData";
import CourseHero from "./CourseHero";
import CourseAbout from "./CourseAbout";
import CourseSyllabus from "./CourseSyllabus";
import CourseProject from "./CourseProject";
import CourseReview from "./CourseReview";
import CourseCertificate from "./CourseCertificate";
import CoursePayment from "./CoursePayment";
import CourseFaq from "./CourseFaq";
import { Helmet } from 'react-helmet';

export default function CoursePage() {
    const location = useLocation();
    const currentPageUrl = location.pathname;
    const { courseId } = useParams();
   

    // Find the course data based on the course ID
    const HeroData = CourseHeroData.find(course => course.id === courseId);
    const AboutData = CourseAboutData.find(course => course.id === courseId);
    const SyllabusData = CourseSyllabusData.find(course => course.id === courseId);
    const ProjectData = CourseProjectData.find(course => course.id === courseId);
    const ReviewData = CourseReviewData.find(course => course.id === courseId);
    const CertificateData = CourseCertificateData.find(course => course.id === courseId);
    const PaymentData=CoursePaymentData.find(course => course.id === courseId);
    const FaqData=CourseFaqData.find(course => course.id === courseId);

    if (!HeroData || !AboutData || !SyllabusData || !ProjectData || !ReviewData || !CertificateData || !PaymentData || !FaqData) {
        // Handle case when course data is not found
        return <Navigate to="/error" />;
    }
  

    return (
        <main>
             <Helmet>
            <title>{HeroData.courseHeading}</title>
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href= {currentPageUrl}/>
            <meta name="description" content={HeroData.courseDescription} />
            {/* <meta property="og:image" content={Banner} />
            <meta property="og:image:height" content="600"/>
            <meta property="og:image:width" content="1200"/> */}
            <meta property="og:url" content= {currentPageUrl}/>
            <meta property="og:title" content={HeroData.courseHeading}/>
           <meta property="og:description" content={HeroData.courseDescription}/> 
    </Helmet>
            <CourseHero {...HeroData} />
            <CourseAbout {...AboutData} />
            <CourseSyllabus {...SyllabusData} />
            <CourseProject {...ProjectData}/>
            <CourseReview {...ReviewData}/>
            <CourseCertificate {...CertificateData}/>
            <CoursePayment {...PaymentData}/>
            <CourseFaq {...FaqData}/>
        </main>
    );
}




 


