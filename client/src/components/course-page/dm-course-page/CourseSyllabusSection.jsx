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
                            { title: "Introduction to Digital Marketing", content: "Learn the basics of digital marketing, including its importance, key concepts, and various channels." },
                            { title: "Understanding the Digital Landscape", content: " Explore consumer behavior online, emerging trends, and the impact of digital technologies on marketing strategies." },
                            { title: "Introduction to SEO", content: " Learn Search Engine Optimization, including keyword research, on-page optimization, and off-page optimization techniques." },
                            { title: "Content Marketing Strategy", content: " Learn to develop a comprehensive content plan aligned with business objectives, target audience, and distribution channels." },
                            { title: "Social Media Marketing", content: " Explore strategies for leveraging social media platforms effectively to build brand awareness, engage with the audience, and drive conversions." },
                            { title: "Email Marketing Strategy", content: " Learn to Design and implement successful email campaigns, including segmentation, automation, and personalization techniques." },
                            { title: "Paid Advertising", content: "  Different paid advertising channels, ad formats, targeting options, and budget management strategies." },
                            { title: "Google Analytics Fundamentals", content: "  Understand the basics of Google Analytics, including tracking website traffic, user behaviour, and conversion data." },
                            { title: "Conversion Rate Optimization (CRO)", content: "  Learn the techniques for optimizing website performance and improving conversion rates through testing, analysis, and iteration." }
                       
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
