import React, { useState } from "react";
import './CoursePage.css';
import ExpandMore from '../../../assets/Images/course-page/syllabus-section/expand_more.svg';

export default function CourseSyllabusSection() {
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
            <div className="course-syllabus">
                <div className="course-syllabus-container">
                    <div className="course-syllabus-heading"><h2>Course Syllabus</h2></div>
                    <div className="course-syllabus-accordion-container">
                        {[
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { title: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" }
                        
                        ].map((item, index) => (
                            <div className="course-syllabus-accordion" key={index} onClick={() => toggleAccordion(index)}>
                                <div className="syllabus-accordion-title">
                                    <h2>{item.title}</h2>
                                    <img src={ExpandMore} style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
                                </div>
                                {accordionState[index]?.isOpen && (
                                    <div className="syllabus-accordion-contents">
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
