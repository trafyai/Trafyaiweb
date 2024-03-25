import React, { useState } from "react";
import './CoursePage.css';
import ExpandMore from '../../../assets/Images/course-page/syllabus-section/expand_more.svg';

export default function CourseFaqSection() {
    const [accordionState, setAccordionState] = useState({});

    function toggleAccordion(index) {
        setAccordionState(prevState => ({
            ...prevState,
            [index]: {
                isOpen: !prevState[index]?.isOpen,
                isRotated: !prevState[index]?.isRotated
            }
        }));
    }

    return (
        <main>
            <div className="course-faq">
                <div className="course-faq-container">
                    <div className="course-faq-heading"><h2>Frequently Asked Questions</h2></div>
                    <div className="course-faq-accordion-container">
                        {[
                            { title: "Who is this course for?", content: "This course is ideal for marketing professionals, business owners, entrepreneurs, or anyone looking to enhance their digital marketing skills and effectively promote their products or services online." },
                            { title: "Do I need any prior experience in digital marketing?", content: "No prior experience is required. This course is designed to accommodate beginners as well as those with some background in marketing looking to expand their knowledge in the digital realm." },
                            { title: "What software/tools will I need?", content: "Participants will need access to a computer with internet connectivity. Additionally, we'll utilise various digital marketing tools and platforms throughout the course, many of which offer free versions or trials." },
                            { title: "Will there be any assignments or assessments?", content: "Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios." }
                        
                        ].map((item, index) => (
                            <div className="course-faq-accordion" key={index} onClick={() => toggleAccordion(index)}>
                                <div className="faq-accordion-title">
                                    <h2>{item.title}</h2>
                                    <img src={ExpandMore} style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
                                </div>
                                {accordionState[index]?.isOpen && (
                                    <div className="faq-accordion-contents">
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
