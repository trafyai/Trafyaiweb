import React, { useState } from 'react';
import './CoursePage.css';
import Share from "../../../assets/Images/course-page/hero-section/share.svg";
import RatingStar from "../../../assets/Images/course-page/hero-section/rating-star.svg";
import Phone from "../../../assets/Images/course-page/hero-section/iPhone.png";
import Macbook from "../../../assets/Images/course-page/hero-section/iMac.png";
import Tab from "../../../assets/Images/course-page/hero-section/iTab.png";
import Vision from "../../../assets/Images/course-page/hero-section/iVision.png";
import Watch from "../../../assets/Images/course-page/hero-section/iWatch.png";
import Whatsapp from '../../../assets/Images/comman/common/socials/whatsapp.png';
import Facebook from '../../../assets/Images/comman/common/socials/facebook.png';
import Linkedin from '../../../assets/Images/comman/common/socials/linkedin.png';
import X from '../../../assets/Images/comman/common/socials/twitter.png';
import close from '../../../assets/Images/comman/header/close.svg';


export default function CourseHeroSection() {

    const [showShare, setShowShare] = useState(false);
    const [pageUrl, setPageUrl] = useState(window.location.href);
    const [showAlert, setShowAlert] = useState(false);

    function courseShare() {
        setShowShare(!showShare);
        document.body.classList.toggle('overflow');
    }
    
function shareToLinkedIn() {
    const postTitle = encodeURIComponent('UI/UX Designing');
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  }
  
  function shareToTwitter() {
    const postTitle = encodeURIComponent('UI/UX Designing');
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
}
  
  function shareToFacebook() {
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  }
  function shareToWhatsApp() {
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://api.whatsapp.com/send?text=${postUrl}`, '_blank');
  }

    function copyUrlToClipboard() {
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
                
                // Select the input element and highlight the text
                const inputElement = document.querySelector('.course-share-link input');
                inputElement.select();
                inputElement.setSelectionRange(0, inputElement.value.length);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <main>
            <div className="hero-section">
                <div className="hero-section-container">

                    <div className="hero-main">
                        <div className="hero-label">
                            <div className="hero-category"><p>UI/UX</p></div>
                            <div className="hero-popularity"><p>Popular</p></div>
                            <div className="share">
                                <img src={Share} alt="" onClick={courseShare} />
                            </div>

                        </div>
                        <div className="hero-main-heading">
                            <h1>Learn Advanced AI Powered UX/UX design with Figma</h1>
                        </div>
                        <div className="hero-description">
                            <p>Explore the principles, material guidelines and core concepts behind cross platform responsive UI/UX development process.</p>
                        </div>
                        <div className="hero-rating">
                            <div className="hero-rating-number">4.5</div>
                            <div className="hero-rating-star">
                                <img src={RatingStar} alt="" />
                            </div>
                        </div>
                        <div className="hero-cta">
                            <button className="hero-enroll">Join now</button>
                            <p className="hero-enrolled">126 Enrolled in last week</p>
                        </div>
                    </div>
                    {showShare &&
                        <div className="course-share">
                            <div className="course-share-exit">
                                <p>Share</p>
                                <img src={close} alt="" onClick={courseShare} />
                            </div>
                            <div className="course-share-container">
                                <div className="course-share-socials">
                                    <img src={Whatsapp} alt="whatsapp" onClick={shareToWhatsApp}/>
                                    <img src={Facebook} alt="facebook" onClick={shareToFacebook}/>
                                    <img src={Linkedin} alt="linkedin" onClick={shareToLinkedIn}/>
                                    <img src={X} alt="x" onClick={shareToTwitter} />
                                </div>
                                <div className="course-share-link">
                                    <input type="text" value={pageUrl} readOnly />
                                    <button onClick={copyUrlToClipboard}>Copy</button>
                                </div>
                            </div>
                        </div>
                    }
                    {showAlert &&
                        <div className="alert">Link copied to clipboard</div>
                    }
                    <div className="hero-sub">
                        <div className="hero-platform">
                            <div className="platform-heading"><p>Learn</p></div>
                            <div className="platform-images">
                                <img src={Phone} alt="iphone" />
                                <img src={Macbook} alt="imac" />
                                <img src={Tab} alt="ipad" />
                                <img src={Vision} alt="vison" />
                                <img src={Watch} alt="iwatch" />

                            </div>
                        </div>
                        <div className="hero-start-date">
                            <div className="start-date-heading"><p>Start date</p></div>
                            <div className="start-date"><p>March 1, 2024</p></div>
                        </div>
                        <div className="hero-level">
                            <div className="level-heading"><p>Level</p></div>
                            <div className="level"><p>Advanced</p></div>
                        </div>
                        <div className="hero-duration">
                            <div className="duration-heading"><p>Duration</p></div>
                            <div className="duration"><p>3 Months</p></div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}
