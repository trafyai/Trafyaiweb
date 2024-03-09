import React from "react";
import './LandingPage.css';

export default function LandingNewsletter(){
    return(
        <main>
            <div className="landing-newsletter">
                <div className="landing-newsletter-container">
                    <div className="landing-newsletter-heading"><h1>Get instant alerts on new breakthroughs and openings in your industry.</h1></div>
                    <div className="landing-newsletter-form">
                        <form>
                        <input type="text" placeholder="Email" required autoComplete="off" name="landingNewsLetterEmail" className="landing-newsletter-email" />
                        <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}