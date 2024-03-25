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
                            { name: "Divya Nair", content: "This course exceeded my expectations! The instructors were knowledgeable and provided practical insights that I could immediately apply to my business. Highly recommended!" },
                            {name: "Dinesh Kumar", content: "I've taken several digital marketing courses before, but this one stands out for its comprehensive coverage and hands-on approach. I feel much more confident in my digital marketing skills now!" },
                            { name: "Abishek", content: "As someone new to digital marketing, I found this course incredibly helpful in demystifying the complex world of online promotion. The instructors were engaging, and the content was well-structured. Thank you!" },
                            
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