import react from "react";
import './LandingPage.css';
import Comma from '../../assets/Images/comman/common/comma_white.png';

export default function LandingReview(){
    return(
        <main>
            <div className="landing-review">
                <div className="landing-review-container">
                    <div className="landing-review-top">
                        <h1>Created to Transform Lives</h1>
                        <p>Know what our precious learners have said about the course</p>
                    </div>
                    <div className="landing-review-bottom">
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
                                et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="landing-review-name">
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
                                et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="landing-review-name">
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
                                et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                            <div className="landing-review-name">
                                <h3>John Doe</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
