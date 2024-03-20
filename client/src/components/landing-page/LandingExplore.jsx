import react from "react";
import './LandingPage.css';

export default function LandingExplore(){
    return(
        <main>
            <div className="landing-explore">
                <div className="landing-explore-container">
                    <div className="landing-explore-left">
                        <h2>Explore Our Courses</h2>
                    </div>
                    <div className="landing-explore-right">
                        <div className="landing-explore-ai"><h3>Artificial Intelligence</h3></div>
                        <div className="landing-explore-uiux"><h3>UI/UX</h3></div>
                        <div className="landing-explore-dm"><h3>Digital Marketing</h3></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
