import React from "react";
import './LandingPage.css';

export default function LandingHero(){
    return(
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-left">
                        <h1>Interactive Learning,
                            Next Generation Courses.
                        </h1>
                        <p>
                           Gain knowledge of advanced concepts with our unique Interactive, Immersive, and Adaptive learning modules and accelerate your career.</p>
                        <button>Explore</button>
                    </div>

                    <div className="landing-hero-right">
                        <div className="landing-hero-top">
                            <h1>Get a free career consultation</h1>
                            <form className="landing-hero-form">
                            <input type="text" placeholder="Name" required autoComplete="off" name="landingName" className="landing-name" />
                            <input type="text" placeholder="Email" required autoComplete="off" name="landingEmail" className="landing-email" />
                            <button className="landing-hero-form-btn" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="landing-hero-bottom">
                            <div className="landing-hero-live">
                                <img src="" alt="" />
                                <p>Live <br /> classes</p>
                            </div>
                            <div className="landing-hero-training">
                                <img src="" alt="" />
                                <p>1:1<br /> training</p>
                            </div>
                            <div className="landing-hero-placement">
                                <img src="" alt="" />
                                <p>Placement<br /> support</p>
                            </div>
                        </div>
                        <div className="landing-hero-last">
                            <div className="landing-hero-last-heading"><p>Upcoming Events:</p></div>
                            <div className="landing-hero-last-interactive"><p>Masterclass on responsive design</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}