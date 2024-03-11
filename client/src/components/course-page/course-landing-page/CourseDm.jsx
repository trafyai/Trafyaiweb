import React from "react";
import './CourseLanding.css';
import CourseDmData from "../../../data/course-page/course-landing-page/CourseDmData";

export default function CourseDm(){
    return(
        <main>
            <div className="course-landing-dm">
                <div className="course-landing-ai-container">
                    <div className="course-landing-ai-heading"><h1>Digital Marketing Course</h1></div>
                    <div className="course-landing-ai-box-container">
                    {CourseDmData.map((item, index) => (
                        <div className="course-landing-ai-box" key={index}>

                            <div className="course-landing-dm-card-title">
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

                        </div>
                        ))}

                    </div>
                </div>
                
            </div>
        </main>
    )
}
