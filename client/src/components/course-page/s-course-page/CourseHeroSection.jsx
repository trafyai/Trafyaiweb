import React from 'react';
import './CoursePage.css';
import Share from "../../../assets/Images/course-page/hero-section/share.svg";
import RatingStar from "../../../assets/Images/course-page/hero-section/rating-star.svg";
import Phone from "../../../assets/Images/course-page/hero-section/Phone.svg";
import Macbook from "../../../assets/Images/course-page/hero-section/Macbook.svg";
import Tv from "../../../assets/Images/course-page/hero-section/TV.svg";
import Watch from "../../../assets/Images/course-page/hero-section/watch-2.svg";

export default function CourseHeroSection(){


    return(

        <main>
            <div className="hero-section">
                <div className="hero-section-container">

                  <div className="hero-main">
                    <div className="hero-label">
                        <div className="hero-category">UI/UX</div>
                        <div className="hero-popularity">Popular</div>
                        <div className="share">
                            <img src={Share} alt="" />
                        </div>
                    </div>
                    <div className="hero-main-heading">
                        <h1>Learn Cross Platform UI/UX design and development </h1>
                    </div>
                    <div className="hero-description">
                        <p>Explore the principles, material guidelines and core concepts of 
                        behind cross platform responsive UI/UX development process.</p>
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

                  <div className="hero-sub">
                        <div className="hero-platform">
                            <div className="platform-heading">Learn</div>
                            <div className="platform-images">
                            <svg className="svg-icon ios-icon platform-icon icon-inline" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.726 19.763h6.834c1.503 0 2.509-0.959 2.509-2.398v-14.729c0-1.439-1.005-2.398-2.509-2.398h-6.834c-1.503 0-2.509 0.959-2.509 2.398v14.729c0 1.439 1.005 2.398 2.509 2.398zM3.919 18.278c-0.784 0-1.217-0.415-1.217-1.153v-14.25c0-0.738 0.433-1.153 1.217-1.153h1.181c0.148 0 0.221 0.074 0.221 0.212v0.212c0 0.387 0.258 0.646 0.636 0.646h2.38c0.387 0 0.636-0.258 0.636-0.646v-0.212c0-0.138 0.074-0.212 0.221-0.212h1.181c0.775 0 1.208 0.415 1.208 1.153v14.25c0 0.738-0.433 1.153-1.208 1.153h-6.456zM5.192 17.604h3.92c0.249 0 0.424-0.175 0.424-0.433s-0.175-0.424-0.424-0.424h-3.92c-0.249 0-0.433 0.166-0.433 0.424s0.184 0.433 0.433 0.433z"></path>
                            </svg>

                            
                            <svg className="svg-icon macos-icon platform-icon icon-inline" viewBox="0 0 20 20">
                            <path d="M1.93 15.474h5.419v1.619h-0.05c-0.369 0-0.68 0.302-0.68 0.68s0.31 0.68 0.68 0.68h5.403c0.369 0 0.671-0.302 0.671-0.68s-0.302-0.68-0.671-0.68h-0.05v-1.619h5.411c1.208 0 1.938-0.73 1.938-1.938v-10.059c0-1.208-0.73-1.93-1.938-1.93h-16.133c-1.2 0-1.93 0.721-1.93 1.93v10.059c0 1.208 0.73 1.938 1.93 1.938zM1.711 11.774c-0.252 0-0.361-0.092-0.361-0.361v-7.911c0-0.378 0.235-0.604 0.604-0.604h16.091c0.369 0 0.604 0.227 0.604 0.604v7.911c0 0.268-0.117 0.361-0.369 0.361h-16.569z"></path>
                            </svg>

                            <svg viewBox="0 0 20 11.12">
                            <path d="M10.01,7.85c-.39,0-.75,.07-1.08,.23s-.65,.35-.96,.57c-.32,.22-.63,.45-.97,.68s-.7,.41-1.09,.57c-.39,.15-.83,.23-1.33,.23-.72,0-1.34-.18-1.88-.55s-.95-.89-1.25-1.55c-.3-.68-.44-1.47-.44-2.38,0-1.06,.21-1.9,.64-2.53s1.03-1.09,1.83-1.4,1.74-.51,2.85-.6,2.33-.15,3.7-.15,2.59,.05,3.7,.15,2.06,.3,2.85,.6,1.4,.77,1.83,1.4,.64,1.47,.64,2.53c0,.92-.15,1.71-.44,2.38-.3,.68-.72,1.19-1.25,1.55-.54,.37-1.16,.55-1.88,.55-.5,0-.94-.07-1.34-.23-.39-.15-.76-.34-1.09-.57-.34-.22-.65-.45-.97-.68s-.63-.41-.96-.57c-.36-.16-.72-.23-1.11-.23h0Zm0,.98c.27,0,.55,.07,.83,.23,.29,.15,.58,.34,.9,.57,.32,.22,.65,.45,1.02,.68,.37,.23,.77,.42,1.21,.57s.93,.23,1.47,.23c.87,0,1.64-.24,2.33-.72,.69-.48,1.24-1.13,1.63-1.96,.4-.82,.59-1.76,.59-2.79s-.17-1.87-.51-2.55-.81-1.23-1.43-1.64-1.33-.73-2.16-.94-1.74-.35-2.74-.41S11.11,0,10,0c-1.09-.02-2.14,.01-3.14,.08-1,.07-1.91,.21-2.74,.42-.83,.21-1.56,.52-2.16,.93-.61,.41-1.09,.96-1.43,1.64C.18,3.77,.03,4.62,.03,5.64s.2,1.97,.59,2.79c.4,.82,.94,1.48,1.63,1.96s1.47,.72,2.33,.72c.54,0,1.02-.07,1.46-.23,.44-.15,.84-.34,1.21-.57s.71-.45,1.02-.68,.61-.41,.9-.57c.3-.14,.58-.22,.84-.22h0Z"></path>
                            </svg>

                            <svg className="svg-icon watchos-icon platform-icon icon-inline" viewBox="0 0 14 20">
                            <path d="M0.456 13.731c0 1.43 0.563 2.481 1.605 3.053 0.507 0.267 0.802 0.609 0.987 1.227l0.295 0.987c0.175 0.59 0.59 0.876 1.208 0.876h4.261c0.636 0 1.024-0.277 1.199-0.876l0.304-0.987c0.184-0.618 0.48-0.959 0.987-1.227 1.042-0.572 1.605-1.623 1.605-3.053v-4.381h0.129c0.48 0 0.793-0.323 0.793-0.849v-1.245c0-0.526-0.314-0.849-0.793-0.849h-0.129v-0.138c0-1.43-0.563-2.472-1.605-3.053-0.507-0.267-0.802-0.609-0.987-1.217l-0.304-0.996c-0.157-0.581-0.572-0.876-1.199-0.876h-4.261c-0.618 0-1.033 0.286-1.208 0.876l-0.295 0.996c-0.175 0.599-0.47 0.959-0.987 1.217-1.033 0.553-1.605 1.605-1.605 3.053v7.461zM1.803 13.537v-7.065c0-1.374 0.802-2.204 2.149-2.204h5.46c1.347 0 2.149 0.83 2.149 2.204v7.065c0 1.365-0.802 2.195-2.149 2.195h-5.46c-1.347 0-2.149-0.83-2.149-2.195z"></path>
                            </svg>

                            </div>
                        </div>
                        <div className="hero-start-date">
                            <div className="start-date-heading">Start date</div>
                            <div className="start-date">March 1, 2024</div>
                        </div>
                        <div className="hero-level">
                            <div className="level-heading">Level</div>
                            <div className="level">Advanced</div>
                        </div>
                        <div className="hero-duration">
                            <div className="duration-heading">Duration</div>
                            <div className="duration">3 Months</div>
                        </div>
                        
                  </div>

                </div>
            </div>
        </main>
    )
}