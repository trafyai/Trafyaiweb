import React from "react"
import CourseAi from "../../../components/course-page/course-landing-page/CourseAi";
import CourseUiux from "../../../components/course-page/course-landing-page/CourseUiux";
import CourseDm from "../../../components/course-page/course-landing-page/CourseDm";
import { Helmet } from 'react-helmet';

export default function courseLandingPage(){
    const currentPageUrl = 'https://www.trafyai.com/courses';
    return(
        <div style={{display: "flex"}}>
        <Helmet>
        <title>Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={currentPageUrl} />
        <meta name="description" content="Explore UI/UX designing, artificial intelligence, and digital marketing career courses with live training, certification, placement support and more." />
      </Helmet>
        <CourseUiux/>
        <CourseDm/>
        <CourseAi/>
        
        
        </div>
    )
}