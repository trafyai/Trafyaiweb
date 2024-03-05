import React from "react";
import './CoursePage.css';
import Figma from "../../../assets/Images/course-page/hero-section/Figma.png";
import Miro from "../../../assets/Images/course-page/hero-section/Miro.png";
import Chatgpt from "../../../assets/Images/course-page/hero-section/ChatGPT.png";
import Gemini from "../../../assets/Images/course-page/hero-section/Gemini.png";
import Framer from "../../../assets/Images/course-page/hero-section/Framer.png";


export default function CourseDescriptionSection(){
    return(
        <main>
            <div className="course-description">
                <div className="course-description-container">
                    <div className="left-description-container">
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
                        <div className="course-tools">
                            <div className="tools-covered"><h1>Tools Covered</h1></div>
                            <div className="tools-img">
                                <img src={Figma} alt="" />
                                <img src={Miro} alt="" />
                                <img src={Chatgpt} alt="" />
                                <img src={Gemini} alt="" />
                                <img src={Framer} alt="" />
                            </div>
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