import React from "react";
import './CoursePage.css';
import Image from '../../../assets/Images/course-page/certificate/Digital Marketing.jpg';

export default function CourseCertificateSection(){
    return(
        <main>
            <div className="course-certificate">
                <div className="course-certificate-container">
                    <div className="course-certificate-contents">
                        <div className="course-certificate-image">
                            <img src={Image} alt="" />
                        </div>
                        <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>Earn Industry Recognised Certificate </h2></div>
                            <p>Cross Platform UI/UX development curriculum is built on deep core values of designing like 
                                user research, usability, testing, designing for modern technologies like VR and AR, and 
                                Gamification of UX. This course helps you build a progressive career in UI/UX industry and 
                                increase your skill and potential as an UI/UX designer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}