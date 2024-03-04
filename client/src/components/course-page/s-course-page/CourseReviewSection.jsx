import React from "react";
import './CoursePage.css';

export default function CourseReviewSection(){
    return(
        <main>
             <div className="course-review">
                <div className="course-review-container">
                    <div className="course-review-heading">
                        <h1>Review</h1>
                    </div>
                   <div className="course-review-contents">
                   {[
                            { name: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            {name: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            { name: "De Finibus Bonorum et Malorum", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                            
                        ].map((item, index) => (
                           <div className="review-box" key={index}>
                              <div className="review-box-description">
                                <p>{item.content}</p>
                              </div>
                              <div className="review-box-name"><h2>{item.name}</h2></div>
                           </div>

                        ))}
                   </div>
                </div>
            </div>
        </main>
    )
}