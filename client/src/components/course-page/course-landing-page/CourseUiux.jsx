import React from "react";
import './CourseLanding.css';

export default function CourseUiux(){
    return(
        <main>
            <div className="course-landing-uiux">
                 <div className="course-landing-uiux-container">
                    <div className="course-landing-uiux-heading"><h1>UI/UX COURSE</h1></div>
                    <div className="course-landing-uiux-box">
                         <div className="landing-uiux-box-top">
                            <h1>UI/UX</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                            <div className="uiux-labels">
                                <span>blanditiis</span>
                                <span>et accusamus</span>
                                <span>accusamus</span>
                                <span> ducimus</span>
                                <span>blanditiis</span>
                            </div>
                         </div>
                         <div className="landing-uiux-box-bottom">
                            <hr />
                            <div className="uiux-box-bottom-rating">
                                <p>4.5 (125 joined)</p>
                            </div>
                            <div className="uiux-box-bottom"></div>
                         </div>
                    </div>
                 </div>
            </div>
        </main>
    )
}