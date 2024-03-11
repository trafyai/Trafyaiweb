import React from "react";
import './CourseLanding.css';
import {Link} from "react-router-dom";
import CourseUiuxData from "../../../data/course-page/course-landing-page/CourseUiuxData";

export default function CourseUiux(){
    return(
        <main>
            <div className="course-landing-uiux">
                <div className="course-landing-ai-container">
                    <div className="course-landing-ai-heading"><h1>UI/UX Course</h1></div>
                    <div className="course-landing-ai-box-container">
                    {CourseUiuxData.map((item, index) => (
                     <Link to="/uiux-course">   <div className="course-landing-ai-box" key={index}>

                            <div className="course-landing-uiux-card-title">
                                <h1>{item.title} </h1>
                            </div>

                            <div className="course-landing-ai-contents">
                                <div className="landing-ai-card-description">
                                    <p>{item.description}</p>
                                </div>

                                <div className="landing-ai-card-labels">
                                    <div className="landing-ai-card-labels-contents">
                                        {Object.values(item.label).map((label, index) => (
                                            <h3 key={index}>{label}</h3>
                                        ))}
                                    </div>
                                </div>

                                <hr />

                                <div className="landing-ai-card-ratings">
                                    <img src="" alt="" />
                                    <p>{item.rating}</p>
                                </div>

                                <div className="landing-ai-card-level">
                                    <p>{item.level}</p>
                                    <p>{item.duration}</p>
                                </div>

                            </div>

                        </div></Link>
                        ))}

                    </div>
                </div>
                
            </div>
        </main>
    )
}
