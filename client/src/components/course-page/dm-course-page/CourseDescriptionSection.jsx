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
                            <p>This course is structured to explore the core pillars of digital marketing, from SEO and content creation to social media strategy and email campaigns. Learn how to leverage paid advertising effectively and optimize your efforts through analytics, ensuring a strong online presence and measurable results. Ideal for marketers and entrepreneurs seeking to excel in the digital landscape.</p>
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
                                    
                                SEO
                                </li>
                                <li>
                                    
                                Content creation
                                </li>
                                <li>
                                 
                                Social media marketing 
                                </li>
                                <li>
                                    
                                Email campaigns
                                </li>
                                <li>
                                    
                                PPC
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