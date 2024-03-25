// 



import React, { useState } from "react";
import './CoursePage.css';
import ExpandMore from '../../../assets/Images/course-page/syllabus-section/expand_more.svg';

export default function CourseSyllabusSection() {
    const initialVisibleItems = 5;
    const [accordionState, setAccordionState] = useState({});
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const totalItems = 12; // Total number of items

    function toggleAccordion(index) {
        setAccordionState(prevState => ({
            ...prevState,
            [index]: {
                isOpen: !prevState[index]?.isOpen,
                isRotated: !prevState[index]?.isRotated
            }
        }));
    }

    function handleViewMore() {
        setVisibleItems(totalItems);
    }

    function handleViewLess() {
        setVisibleItems(initialVisibleItems);
    }

    return (
        <main>
            <div className="course-syllabus">
                <div className="course-syllabus-container">
                    <div className="course-syllabus-heading">
                        <h2>Course Syllabus</h2>
                       
                    </div>
                    <div className="course-syllabus-accordion-container">
                        {[
                            { title: "Introduction to UI/UX", content: "Understand the fundamentals of user interface and experience design and explore the importance of user research, usability testing, and user personas in the design process." },
                            { title: "Typography, Colors & Components", content: "Learn how to effectively use typography, color theory, and UI components to create visually appealing and user-friendly interfaces, with a focus on consistency, hierarchy, and readability." },
                            { title: "User flow, Wireframing and Building a Landing Page", content: "Learn the process of designing user flows, creating wireframes, and implementing them to build a functional landing page, emphasising usability and user-centric design principles." },
                            { title: "Concepts of 21 Design", content: " Explore emerging design trends and concepts shaping the digital landscape, including responsive design, micro-interactions, and minimalist design principles, to stay ahead in the rapidly evolving field of UI/UX." },
                            { title: "Core Principles of UX & UX Adaption for Evolving Trends", content: "Delve into the core principles of UX design and learn how to adapt them to changing trends and user behaviors, ensuring designs remain relevant and effective over time." },
                            { title: "Data Visualization & Data Driven Design", content: " Explore the techniques for visualizing data effectively in user interfaces and leveraging data-driven design principles to create personalized and intuitive user experiences." },
                            { title: "Mobile UX Concepts", content: "  Understand the unique considerations and best practices for designing user experiences on mobile devices, including responsive design, touch interactions, and mobile-first design approaches." },
                            { title: "Visual Design & Journey Mapping", content: " Learn how to use visual design elements effectively and map user journeys to create cohesive and engaging experiences across different touchpoints and channels." },
                            { title: "Emotional Design & Spatial Design", content: "  Explore the psychological aspects of design, including emotional design principles and spatial considerations, to create immersive and memorable user experiences that resonate with users on a deeper level." },
                            { title: "Accessibility and Inclusive Design", content: "Understand the importance of designing for accessibility and inclusivity, including techniques for making digital products usable for people with disabilities and diverse user groups." },
                            { title: "Designing for Virtual Reality & Designing for Conversation AI’s", content: " Learn the principles and best practices for designing immersive virtual reality experiences and conversational interfaces, including considerations for interaction design and user engagement." },
                            { title: "Creating a Dynamic User Experience", content: "Learn advanced techniques for creating dynamic and interactive user experiences, including animation, gamification, and personalization, to captivate users and drive engagement." }
                       
                        ].slice(0, visibleItems).map((item, index) => (
                            <div className="course-syllabus-accordion" key={index} onClick={() => toggleAccordion(index)}>
                                <div className="syllabus-accordion-title">
                                    <h2>{item.title}</h2>
                                    <img src={ExpandMore} alt="Expand More Icon" style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
                                </div>
                                {accordionState[index]?.isOpen && (
                                    <div className="syllabus-accordion-contents">
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="course-view-container">
                        {visibleItems === initialVisibleItems ? (
                                <button onClick={handleViewMore}>View More</button>
                            ) : (
                                <button onClick={handleViewLess}>View Less</button>
                            )}
                     </div>

                </div>
            </div>
        </main>
    );
}
