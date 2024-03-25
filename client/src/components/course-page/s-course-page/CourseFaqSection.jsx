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
                            { title: "Is this course suitable for beginners?", content: "Absolutely! Whether you're new to design or looking to enhance your existing skills, this course caters to students of all levels." },
                            { title: " Will I receive a certificate upon completion of the course?", content: " Yes, upon successful completion of the course, you will receive a certificate to showcase your skills and knowledge in UI/UX design." },
                            { title: "Can I access the course materials after I finish the course?", content: "Yes, you will have lifetime access to all course materials, including lectures, assignments, and resources. This allows you to revisit content and continue learning at your own pace even after completing the course." },
                            { title: "Can I enroll in this course if I'm currently employed full-time?", content: " Yes! Our course is designed to accommodate busy schedules. With flexible learning options, you can balance your coursework with your professional commitments." },
                            { title: "What career opportunities can I pursue after completing this course?", content: "UI/UX design skills are in high demand across industries, opening up a wide range of career opportunities. Graduates of our course often pursue roles such as UI/UX designer, interaction designer, product designer, or user researcher in tech companies, design agencies, startups, and more." }
                        
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
