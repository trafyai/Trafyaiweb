import React from "react";
import './CoursePage.css';

import GTM from "../../../assets/Images/course-page/hero-section/GTM.png";
import Analytics from "../../../assets/Images/course-page/hero-section/analytics.png";
import Chatgpt from "../../../assets/Images/course-page/hero-section/ChatGPT.png";
import Mailchimp from "../../../assets/Images/course-page/hero-section/mailchimp.png";
import Hubspot from "../../../assets/Images/course-page/hero-section/hubspot.png";



export default function CourseDescriptionSection(){
    return(
        <main>
            <div className="course-description">
                <div className="course-description-container">
                    <div className="left-description-container">
                    <div className="about-course">
                        <div className="about-course-heading"><h2>About the Course</h2></div>
                        <div className="about-course-description">
                            <p>Cross Platform UI/UX development curriculum is built on deep core 
                            values of designing like user research, usability, testing, designing 
                            for modern technologies like VR and AR, and Gamification of UX. This 
                            course helps you build a progressive career in UI/UX industry and increase
                            your skill and potential as an UI/UX designer.</p>
                        </div>
                    </div>
                        <div className="course-tools">
                            <div className="tools-covered"><h2>Tools Covered</h2></div>
                            <div className="tools-img">
                                {/* <img src={Figma} alt="Figma" />
                                <img src={Miro} alt="Miro" />
                                <img src={Chatgpt} alt="Chatgpt" />
                                <img src={Gemini} alt="Gemini" />
                                <img src={Framer} alt="Framer" /> */}
                                <img src={GTM} alt="Figma" />
                                <img src={Analytics} alt="Miro" />
                                <img src={Chatgpt} alt="Chatgpt" />
                                <img src={Mailchimp} alt="Gemini" />
                                <img src={Hubspot} alt="Framer" />
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