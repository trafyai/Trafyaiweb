import React, { useState } from "react";
import './LandingPage.css';
import Live from '../../assets/Images/landing-page/hero/live.png';
import One from '../../assets/Images/landing-page/hero/1-1.png';
import Placement from '../../assets/Images/landing-page/hero/placement.png';

const LandingHero = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });
    const [emptyDataError, setEmptyDataError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // New state for success message

    const postUserData = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const checkEmailExistence = async () => {
        const { email } = userData;
        const res = await fetch(`https://freeconslu-form-default-rtdb.firebaseio.com/userDataRecords.json?orderBy="email"&equalTo="${email}"`);
        const data = await res.json();
        return Object.keys(data).length > 0;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { name, email } = userData;
        let errorMessage = "";

        if (!name || !email) {
            errorMessage = "Please fill in the required fields. ";
        }

        if (email && !validateEmail(email)) {
            errorMessage += "Incorrect email format. ";
        }

        if (errorMessage) {
            setEmptyDataError(true);
            setEmailError(false);
            setErrorMessage(errorMessage);
            return;
        }

        // const emailExists = await checkEmailExistence();
        // if (emailExists) {
        //     setEmptyDataError(false);
        //     setEmailError(true);
        //     setErrorMessage("Email already exists.");
        //     return;
        // }

        const res = await fetch('https://freeconslu-form-default-rtdb.firebaseio.com/userDataRecords.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        if (res.ok) {
            setSuccessMessage("Thank You for Submitting the form"); // Set success message
            setUserData({ name: "", email: "" });
            setEmptyDataError(false);
            setEmailError(false);
            window.location.reload();
        } else {
            setSuccessMessage(""); // Clear success message
            setErrorMessage("Error storing data");
        }
    };

    return (
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-left">
                        <h1>Interactive Learning, Next Generation Courses.</h1>
                        <p>Gain knowledge of advanced concepts with our unique Interactive, Immersive, and Adaptive learning modules and accelerate your career.</p>
                        <button>Explore</button>
                    </div>

                    <div className="landing-hero-right">
                        <div className="landing-hero-top">
                            <h1>Get a free career consultation</h1>
                            <form className="landing-hero-form">
                                <input type="text" placeholder="Name" required autoComplete="off" name="name" className="landing-name" value={userData.name} onChange={postUserData} />
                                <div>
                                    <input type="email" placeholder="Email" required autoComplete="off" name="email" className="landing-email" value={userData.email} onChange={postUserData} />
                                    {emptyDataError || emailError ? <p style={{ paddingTop: "4px", color: "red", fontFamily:"Inter", fontSize:"14px" }}>{errorMessage}</p> : null}
                                </div>
                                {successMessage && <p style={{ paddingTop: "4px", color: "green", fontFamily:"Inter", fontSize:"14px" }}>{successMessage}</p>} {/* Render success message */}
                                <button className="landing-hero-form-btn" type="submit" onClick={submitData}>Submit</button>
                            </form>
                        </div>
                        <div className="landing-hero-bottom">
                            <div className="landing-hero-live">
                                <img src={Live} alt="" />
                                <p>Live <br /> classes</p>
                            </div>
                            <div className="landing-hero-training">
                                <img src={One} alt="" />
                                <p>1:1<br /> training</p>
                            </div>
                            <div className="landing-hero-placement">
                                <img src={Placement} alt="" />
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

export default LandingHero;