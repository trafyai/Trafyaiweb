import React from "react";
import './CoursePage.css';
import CheckBox from "../../../assets/Images/course-page/skills-section/check_small.svg";
export default function CourseDescriptionSection(){
    return(
        <main>
            <div className="course-description">
                <div className="course-description-container">
                    <div className="about-course">
                        <div className="about-course-heading"><h1>About the Course</h1></div>
                        <div className="about-course-description">
                            <p>Cross Platform UI/UX development curriculum is built on deep core 
                            values of designing like user research, usability, testing, designing 
                            for modern technologies like VR and AR, and Gamification of UX. This 
                            course helps you build a progressive career in UI/UX industry and increase
                            your skill and potential as an UI/UX designer.</p>
                        </div>
                    </div>

                    <div className="course-skills">
                        <div className="course-skills-heading"><h1>Skills you will Master</h1></div>
                        <div className="course-skills-description">
                            <ul>
                                <li>
                                    
                                    Emotional Design
                                </li>
                                <li>
                                    
                                    Spatial Design
                                </li>
                                <li>
                                 
                                    Accessibility and Inclusive Design
                                </li>
                                <li>
                                    
                                    Designing for Virtual Reality
                                </li>
                                <li>
                                    
                                    Creating Dynamic User Experience
                                </li>
                                <li>
                                    
                                    Designing for Conversation AI’s
                                </li>
                            </ul>
        
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}