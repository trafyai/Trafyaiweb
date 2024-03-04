import CourseHeroSection from "../../../components/course-page/s-course-page/CourseHeroSection";
import CourseDescriptionSection from "../../../components/course-page/s-course-page/CourseDescriptionSection";
import CourseSyllabusSection from "../../../components/course-page/s-course-page/CourseSyllabusSection";
import CourseProjectSection from "../../../components/course-page/s-course-page/CourseProjectSection";
import CourseReviewSection from "../../../components/course-page/s-course-page/CourseReviewSection";
import CourseCertificateSection from "../../../components/course-page/s-course-page/CourseCertificateSection";
import CourseFaqSection from "../../../components/course-page/s-course-page/CourseFaqSection";

export default function coursePage(){

    return(
         <>
       <CourseHeroSection/>
       <CourseDescriptionSection/>
       <CourseSyllabusSection/>
       <CourseProjectSection/>
       <CourseReviewSection/>
       <CourseCertificateSection/>
       <CourseFaqSection/>
         </>

    )

}