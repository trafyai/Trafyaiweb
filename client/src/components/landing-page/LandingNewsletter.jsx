import React, { useState } from "react";
import './LandingPage.css';

const LandingNewsletter = () => {
    const [userData, setUserData] = useState({
        email: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email } = userData;

        if (!email) {
            setErrorMessage("Please fill in the required fields.");
            return;
        }

        // Validation of email format can be added here if needed

        try {
            const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert("Thank you for subscribing!");
                setUserData({ email: "" }); // Clear the input field
            } else {
                setErrorMessage("Error submitting the form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setErrorMessage("Error submitting the form. Please try again later.");
        }
    };

    return (
        <main>
            <div className="landing-newsletter">
                <div className="landing-newsletter-container">
                    <div className="landing-newsletter-heading">
                        <h1>Get instant alerts on new breakthroughs and openings in your industry.</h1>
                    </div>
                    <div className="landing-newsletter-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                                autoComplete="off"
                                name="email"
                                className="landing-newsletter-email"
                            />
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingNewsletter;