import CourseHeroSection from "../../../components/course-page/s-course-page/CourseHeroSection";
import CourseDescriptionSection from "../../../components/course-page/s-course-page/CourseDescriptionSection";
import CourseSyllabusSection from "../../../components/course-page/s-course-page/CourseSyllabusSection";
import courseProjectSection from "../../../components/course-page/s-course-page/CourseProjectSection";

export default function coursePage(){

    return(
         <>
       <CourseHeroSection/>
       <CourseDescriptionSection/>
       <CourseSyllabusSection/>
       <courseProjectSection/>
         </>

    )

}