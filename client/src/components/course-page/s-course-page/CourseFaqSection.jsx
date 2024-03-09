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
                    <div className="course-faq-heading"><h1>Frequently Asked Questions</h1></div>
                    <div className="course-faq-accordion-container">
                        {[
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" }
                        
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
