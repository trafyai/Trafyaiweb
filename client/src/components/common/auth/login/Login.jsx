import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const passwordInputType = showPassword ? "text" : "password";

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleEmailBlur = () => {
        setEmailValid(validateEmail(formData.email));
        if (!validateEmail(formData.email)) {
            setErrorMessageEmail("Invalid email address");
        } else {
            setErrorMessageEmail("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(formData.password)) {
            setErrorMessagePassword("Password must be at least 8 characters long");
            return;
        }
        if (formData.password !== formData.cpassword) {
            setErrorMessagePassword("Passwords do not match");
            return;
        }
        setErrorMessagePassword("");
        // Proceed with form submission
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-heading"><h1>Login to Your Account</h1></div>

                <form className="form" onSubmit={handleSubmit}>
                    
                    <div className="Email">
                        <input type="text" placeholder="Enter email" required autoComplete="off" name="email" className={`email-holder ${!emailValid ? "error" : ""}`} value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} />
                        {errorMessageEmail && <div className="error-message">{errorMessageEmail}</div>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <input type={passwordInputType} placeholder="Enter password" required autoComplete="off" name="password" className="password-holder" value={formData.password} onChange={handleChange} />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={handleTogglePasswordVisibility} className="eye" />
                        </div>
                    </div>
                    <div className="SignUp-button">
                        <button className="signup-btn" type="submit">Login</button>
                    </div>
                    <p>Don't have an account? <Link to="/signup"> Signup</Link></p>
                </form>
            </div>
        </div>
    );
}
