import React from "react";
import './CoursePage.css';
import Image from '../../../assets/Images/course-page/certificate/UIUX.jpg';

export default function CourseCertificateSection(){
    return(
        <main>
            <div className="course-certificate">
                <div className="course-certificate-container">
                    <div className="course-certificate-contents">
                        <div className="course-certificate-image">
                            <img src={Image} alt="uiux certificate" />
                        </div>
                        <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>Earn Industry Recognised Certificate </h2></div>
                            <p>Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}