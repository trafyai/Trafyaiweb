import React from 'react';
import './CoursePage.css';
import Share from "../../../assets/Images/course-page/hero-section/share.svg";
import RatingStar from "../../../assets/Images/course-page/hero-section/rating-star.svg";
import Phone from "../../../assets/Images/course-page/hero-section/iPhone.png";
import Macbook from "../../../assets/Images/course-page/hero-section/iMac.png";
import Tab from "../../../assets/Images/course-page/hero-section/iTab.png";
import Vision from "../../../assets/Images/course-page/hero-section/iVision.png";
import Watch from "../../../assets/Images/course-page/hero-section/iWatch.png";



export default function CourseHeroSection(){


    return(

        <main>
            <div className="hero-section">
                <div className="hero-section-container">

                  <div className="hero-main">
                    <div className="hero-label">
                        <div className="hero-category">UI/UX</div>
                        <div className="hero-popularity">Popular</div>
                        <div className="share">
                            <img src={Share} alt="" />
                        </div>
                    </div>
                    <div className="hero-main-heading">
                        <h1>Learn Cross Platform UI/UX design and development </h1>
                    </div>
                    <div className="hero-description">
                        <p>Explore the principles, material guidelines and core concepts of 
                        behind cross platform responsive UI/UX development process.</p>
                    </div>
                    <div className="hero-rating">
                        <div className="hero-rating-number">4.5</div>
                        <div className="hero-rating-star">
                            <img src={RatingStar} alt="" />
                        </div>
                    </div>
                    <div className="hero-cta">
                        <button className="hero-enroll">Join now</button>
                        <p className="hero-enrolled">126 Enrolled in last week</p>
                    </div>
                  </div>

                  <div className="hero-sub">
                        <div className="hero-platform">
                            <div className="platform-heading">Learn</div>
                            <div className="platform-images">
                                <img src={Phone} alt="iphone" />
                                <img src={Macbook} alt="imac" />
                                <img src={Tab} alt="ipad" />
                                <img src={Vision} alt="vison" />
                                <img src={Watch} alt="iwatch" />

                            </div>
                        </div>
                        <div className="hero-start-date">
                            <div className="start-date-heading">Start date</div>
                            <div className="start-date">March 1, 2024</div>
                        </div>
                        <div className="hero-level">
                            <div className="level-heading">Level</div>
                            <div className="level">Advanced</div>
                        </div>
                        <div className="hero-duration">
                            <div className="duration-heading">Duration</div>
                            <div className="duration">3 Months</div>
                        </div>
                        
                  </div>

                </div>
            </div>
        </main>
    )
}