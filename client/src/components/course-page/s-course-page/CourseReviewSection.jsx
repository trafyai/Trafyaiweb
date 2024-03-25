import React from "react";
import './CoursePage.css';

export default function CourseReviewSection(){
    return(
        <main>
             <div className="course-review">
                <div className="course-review-container">
                    <div className="course-review-heading">
                        <h2>Review</h2>
                    </div>
                   <div className="course-review-contents">
                   {[
                            { name: "Karthik Raj", content: "This course exceeded my expectations! The instructors provided clear explanations and practical exercises that helped me level up my design skills. Highly recommended for anyone serious about pursuing a career in UI/UX design." },
                            {name: "Payal Singh", content: "As someone with a background in graphic design, I found this course to be valuable in expanding my skill set. The lessons on user research and prototyping were especially too good. I feel more confident in my ability to create designs that not only look great but also prioritize user needs." },
                            { name: "Deepanjali", content: "I've taken several online courses on UI/UX design, but none have been as comprehensive and engaging as this one. The instructors break down complex concepts, making it easy to follow along. Plus, the projects are fun and challenging—I've already started building my portfolio!" },
                            
                        ].map((item, index) => (
                           <div className="review-box" key={index}>
                              <div className="review-box-description">
                                <p>{item.content}</p>
                              </div>
                              <div className="review-box-name"><p>{item.name}</p></div>
                           </div>

                        ))}
                   </div>
                </div>
            </div>
        </main>
    )
}