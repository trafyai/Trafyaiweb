
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import {Link} from 'react-router-dom';

export default function Signup() {
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

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const passwordInputType = showPassword ? "text" : "password";
    const confirmPasswordInputType = showConfirmPassword ? "text" : "password";

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
                <div className="signup-heading"><h1>Create Your Account</h1></div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="Name">
                        <input type="text" placeholder="Enter first name" autoComplete="off" name="fname" className="fname-holder" value={formData.fname} onChange={handleChange} />
                        <input type="text" placeholder="Enter last name" autoComplete="off" name="lname" className="lname-holder" value={formData.lname} onChange={handleChange} />
                    </div>
                    <div className="Email">
                        <input type="text" placeholder="Enter email" required autoComplete="off" name="email" className={`email-holder ${!emailValid ? "error" : ""}`} value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} />
                        {errorMessageEmail && <div className="error-message">{errorMessageEmail}</div>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <input type={passwordInputType} placeholder="Enter password" required autoComplete="off" name="password" className="password-holder" value={formData.password} onChange={handleChange} />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={handleTogglePasswordVisibility} className="eye" />
                        </div>
                        <div>
                        <div className="confirm-password-input">
                            <input type={confirmPasswordInputType} placeholder="Confirm password" required autoComplete="off" name="cpassword" className={`password-holder ${errorMessagePassword ? "error" : ""}`} value={formData.cpassword} onChange={handleChange} />
                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} onClick={handleToggleConfirmPasswordVisibility} className="eye" />
                        </div>  
                            {errorMessagePassword && <div className="error-message">{errorMessagePassword}</div>}
                        </div>
                    </div>
                    <div className="SignUp-button">
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </div>
                    <p>Already have an account? <Link to="/login"> Login </Link></p>
                </form>
            </div>
        </div>
    );
}
