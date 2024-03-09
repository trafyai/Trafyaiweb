import react from "react";
import './LandingPage.css';
import Group from '../../assets/Images/comman/common/Group 1 (1).png';

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
                        <li> <span className="learning-right-icon"></span>Personalized Curriculam</li>
                        <li><span className="learning-right-icon"></span>Unlimited Doubt Clearing Session</li>
                        <li><span className="learning-right-icon"></span>Placement Training</li>
                        <li><span className="learning-right-icon"></span>Impressive CV & Cover Letters</li>
                        <li><span className="learning-right-icon"></span>Post Hiring Support</li>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
