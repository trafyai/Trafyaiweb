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
                        <div className="about-course-heading"><h2>About the Course</h2></div>
                        <div className="about-course-description">
                            <p>Advanced AI Powered UX/UX design curriculum is built on deep core values like user research, 
                                usability, testing, designing for modern technologies like Wear OS and Vision OS. 
                                Our strategic gamified learning process helps you gain foundational knowledge and build diversified 
                                projects for your portfolio.</p>
                        </div>
                    </div>
                        <div className="course-tools">
                            <div className="tools-covered"><h2>Tools Covered</h2></div>
                            <div className="tools-img">
                            <img src={Figma} alt="Figma" />
                                <img src={Miro} alt="Miro" />
                                <img src={Chatgpt} alt="Chatgpt" />
                                <img src={Gemini} alt="Gemini" />
                                <img src={Framer} alt="Framer" />
                            </div>
                        </div>
                    </div>

                    <div className="course-skills">
                        <div className="course-skills-heading"><h2>Skills you will Master</h2></div>
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