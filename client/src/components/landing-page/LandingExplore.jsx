import react from "react";
import './LandingPage.css';

export default function LandingExplore(){
    return(
        <main>
            <div className="landing-explore">
                <div className="landing-explore-container">
                    <div className="landing-explore-left">
                        <h1>Explore Our  Courses</h1>
                    </div>
                    <div className="landing-explore-right">
                        <div className="landing-explore-ai"><h2>Artificial Intelligence</h2></div>
                        <div className="landing-explore-uiux"><h2>UI/UX</h2></div>
                        <div className="landing-explore-dm"><h2>Digital Marketing</h2></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
