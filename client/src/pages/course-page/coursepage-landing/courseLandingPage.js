import React from "react"
import CourseAi from "../../../components/course-page/course-landing-page/CourseAi";
import CourseUiux from "../../../components/course-page/course-landing-page/CourseUiux";
import CourseDm from "../../../components/course-page/course-landing-page/CourseDm";
import { Helmet } from 'react-helmet';

export default function courseLandingPage(){
    const currentPageUrl = 'http://www.trafyai.com/courses';
    return(
        <>
        <Helmet>
        <title>Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={currentPageUrl} />
        <meta name="description" content="Gain knowledge of advanced concepts with our unique Interactive, Immersive, and Adaptive learning modules and accelerate your career." />
      </Helmet>
        <CourseUiux/>
        <CourseDm/>
        <CourseAi/>
        
        
        </>
    )
}