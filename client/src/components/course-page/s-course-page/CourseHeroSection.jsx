import React from 'react';
import './CoursePage.css';

export default function CourseHeroSection(){


    return(

        <main>
            <div className="hero-section">
                <div className="hero-section-container">

                  <div className="hero-main">
                    <div className="hero-label">
                        <div className="hero-category">UI/UX</div>
                        <div className="hero-popularity">Popular</div>
                        <div className="share"></div>
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
                        <div className="hero-rating-star"></div>
                    </div>
                    <div className="hero-cta">
                        <button className="hero-enroll">Join now</button>
                        <p className="hero-enrolled"></p>
                    </div>
                  </div>

                  <div className="hero-sub">
                           <div></div>
                  </div>

                </div>
            </div>
        </main>
    )
}