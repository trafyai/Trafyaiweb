import react from "react";
import './LandingPage.css';

export default function LandingLearning(){
    return(
        <main>
            <div className="landing-learning">
                <div className="landing-learning-container">
                    <div className="landing-learning-left">
                        <h1>Personalized Mentored 
                            Learning Paths
                        </h1>
                        <p>Learn from industry professionals and experts of the field. 
                            Connect with mentors personally and have unlimited doubt clearing sessions. Each session will be curated to help you learn better.</p>
                    </div>
                    <div className="landing-learning-right">
                        <div className="landing-learning-right-one">
                            <div className="learning-right-one-heading">
                                <h1>Education</h1>
                                <hr />
                            </div>
                            <div className="learning-right-one-contents">
                                <li>Core Concepts</li>
                                <li>Modern Technology</li>
                                <li>Learning Paths</li>
                                <li>Cheat Sheets</li>
                                <li>Multiplatform training</li>
                            </div>
                        </div>
                        <div className="landing-learning-right-one">
                            <div className="learning-right-one-heading">
                                <h1>Carrer</h1>
                                <hr />
                            </div>
                            <div className="learning-right-one-contents">
                                <li>Personalized Curriculam</li>
                                <li>Unlimited Doubt Clearing Session</li>
                                <li>Placement Training</li>
                                <li>Impressive CV & Cover Letters</li>
                                <li>Post Hiring Support</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
