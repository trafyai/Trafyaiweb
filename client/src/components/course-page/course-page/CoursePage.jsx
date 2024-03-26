// import React from "react";
// import 'CoursePage.css';

// export default function CoursePage(){
//     return(
//        <main>
             
//              <div className="hero-section">
//                 <div className="hero-section-container">

//                     <div className="hero-main">
//                         <div className="hero-label">
//                             <div className="hero-category"><p>Digital Marketing</p></div>
//                             <div className="hero-popularity"><p>Popular</p></div>
//                             <div className="share">
//                                 <img src={Share} alt="" onClick={courseShare} />
//                             </div>

//                         </div>
//                         <div className="hero-main-heading">
//                             <h1>Learn AI Powered Digital Marketing</h1>
//                         </div>
//                         <div className="hero-description">
//                             <p>Gain deep understanding of digital marketing principles, strategies, and practices and develop practical skills in SEO, content creation, social media, email campaigns, and paid advertising. </p>
//                         </div>
//                         <div className="hero-rating">
//                             <div className="hero-rating-number">4.5</div>
//                             <div className="hero-rating-star">
//                                 <img src={RatingStar} alt="" />
//                             </div>
//                         </div>
//                         <div className="hero-cta">
//                             <Link to="/course-enquiry"><button className="hero-enroll">Join now</button></Link>
//                             <p className="hero-enrolled">126 Enrolled in last week</p>
//                         </div>
//                     </div>
//                     {showShare &&
//                         <div className="course-share">
//                             <div className="course-share-exit">
//                                 <p>Share</p>
//                                 <img src={close} alt="" onClick={courseShare} />
//                             </div>
//                             <div className="course-share-container">
//                                 <div className="course-share-socials">
//                                     <img src={Whatsapp} alt="whatsapp" onClick={shareToWhatsApp}/>
//                                     <img src={Facebook} alt="facebook" onClick={shareToFacebook}/>
//                                     <img src={Linkedin} alt="linkedin" onClick={shareToLinkedIn}/>
//                                     <img src={X} alt="x" onClick={shareToTwitter} />
//                                 </div>
//                                 <div className="course-share-link">
//                                     <input type="text" value={pageUrl} readOnly />
//                                     <button onClick={copyUrlToClipboard}>Copy</button>
//                                 </div>
//                             </div>
//                         </div>
//                     }
//                     {showAlert &&
//                         <div className="alert">Link copied to clipboard</div>
//                     }
//                     <div className="hero-sub">
//                         <div className="hero-platform">
//                             <div className="platform-heading"><p>Learn</p></div>
//                             <div className="platform-images">
//                                 <img src={Phone} alt="iphone" />
//                                 <img src={Macbook} alt="imac" />
//                                 <img src={Tab} alt="ipad" />
//                                 <img src={Vision} alt="vison" />
//                                 <img src={Watch} alt="iwatch" />

//                             </div>
//                         </div>
//                         <div className="hero-start-date">
//                             <div className="start-date-heading"><p>Start date</p></div>
//                             <div className="start-date"><p>April 1, 2024</p></div>
//                         </div>
//                         <div className="hero-level">
//                             <div className="level-heading"><p>Level</p></div>
//                             <div className="level"><p>Advanced</p></div>
//                         </div>
//                         <div className="hero-duration">
//                             <div className="duration-heading"><p>Duration</p></div>
//                             <div className="duration"><p>4 weeks</p></div>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//             {/* ------------------------------------About------------------------------------------ */}

//             <div className="course-description">
//                 <div className="course-description-container">
//                     <div className="left-description-container">
//                     <div className="about-course">
//                         <div className="about-course-heading"><h2>About the Course</h2></div>
//                         <div className="about-course-description">
//                             <p>This course is structured to explore the core pillars of digital marketing, from SEO and content creation to social media strategy and email campaigns. Learn how to leverage paid advertising effectively and optimize your efforts through analytics, ensuring a strong online presence and measurable results. Ideal for marketers and entrepreneurs seeking to excel in the digital landscape.</p>
//                         </div>
//                     </div>
//                         <div className="course-tools">
//                             <div className="tools-covered"><h2>Tools Covered</h2></div>
//                             <div className="tools-img">
//                                 {/* <img src={Figma} alt="Figma" />
//                                 <img src={Miro} alt="Miro" />
//                                 <img src={Chatgpt} alt="Chatgpt" />
//                                 <img src={Gemini} alt="Gemini" />
//                                 <img src={Framer} alt="Framer" /> */}
//                                 <img src={GTM} alt="Figma" />
//                                 <img src={Analytics} alt="Miro" />
//                                 <img src={Chatgpt} alt="Chatgpt" />
//                                 <img src={Mailchimp} alt="Gemini" />
//                                 <img src={Hubspot} alt="Framer" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="course-skills">
//                         <div className="course-skills-heading"><h2>Skills you will Master</h2></div>
//                         <div className="course-skills-description">
//                             <ul>
//                                 <li> SEO</li>
//                                 <li>Content creation </li>
//                                 <li>Social media marketing </li>
//                                 <li>Email campaigns</li>
//                                 <li>PPC</li>
//                                 <li>Designing for Conversation AI’s</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --------------------Syllabus---------------------------------------------------- */}

//             <div className="course-syllabus">
//                 <div className="course-syllabus-container">
//                     <div className="course-syllabus-heading">
//                         <h2>Course Syllabus</h2>
                       
//                     </div>
//                     <div className="course-syllabus-accordion-container">
//                         {[
//                             { title: "Introduction to Digital Marketing", content: "Learn the basics of digital marketing, including its importance, key concepts, and various channels." },
//                             { title: "Understanding the Digital Landscape", content: " Explore consumer behavior online, emerging trends, and the impact of digital technologies on marketing strategies." },
//                             { title: "Introduction to SEO", content: " Learn Search Engine Optimization, including keyword research, on-page optimization, and off-page optimization techniques." },
//                             { title: "Content Marketing Strategy", content: " Learn to develop a comprehensive content plan aligned with business objectives, target audience, and distribution channels." },
//                             { title: "Social Media Marketing", content: " Explore strategies for leveraging social media platforms effectively to build brand awareness, engage with the audience, and drive conversions." },
//                             { title: "Email Marketing Strategy", content: " Learn to Design and implement successful email campaigns, including segmentation, automation, and personalization techniques." },
//                             { title: "Paid Advertising", content: "  Different paid advertising channels, ad formats, targeting options, and budget management strategies." },
//                             { title: "Google Analytics Fundamentals", content: "  Understand the basics of Google Analytics, including tracking website traffic, user behaviour, and conversion data." },
//                             { title: "Conversion Rate Optimization (CRO)", content: "  Learn the techniques for optimizing website performance and improving conversion rates through testing, analysis, and iteration." }
                       
//                         ].slice(0, visibleItems).map((item, index) => (
//                             <div className="course-syllabus-accordion" key={index} onClick={() => toggleAccordion(index)}>
//                                 <div className="syllabus-accordion-title">
//                                     <h2>{item.title}</h2>
//                                     <img src={ExpandMore} alt="Expand More Icon" style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
//                                 </div>
//                                 {accordionState[index]?.isOpen && (
//                                     <div className="syllabus-accordion-contents">
//                                         <p>{item.content}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="course-view-container">
//                         {visibleItems === initialVisibleItems ? (
//                                 <button onClick={handleViewMore}>View More</button>
//                             ) : (
//                                 <button onClick={handleViewLess}>View Less</button>
//                             )}
//                      </div>

//                 </div>
//             </div>

//             {/* ----------------------------------Project----------------------------------- */}

//         <div className="course-project">
//         <div className="course-project-container">
//           <div className="course-project-heading">
//             <h2>Projects</h2>
//           </div>
//           <div className="course-projects-contents">
//             {CourseProjectData.map((item, index) => (
//               <div className="project-box" key={index} >
//                 <div className="project-box-heading" style={{ transition: "opacity 100s ease" }}>
//                 <h3 style={{ opacity: 1, backgroundColor: item.bg_color }}>{item.title}</h3>
//               </div>
//                 <div className="project-box-description" style={{ transition: "opacity 0.5s ease" }}>
//                 <p style={{ opacity: 1, padding:"16px" }}>{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------Review--------------------------------------------------- */}

//       <div className="course-review">
//                 <div className="course-review-container">
//                     <div className="course-review-heading">
//                         <h2>Review</h2>
//                     </div>
//                    <div className="course-review-contents">
//                    {[
//                             { name: "Divya Nair", content: "This course exceeded my expectations! The instructors were knowledgeable and provided practical insights that I could immediately apply to my business. Highly recommended!" },
//                             {name: "Dinesh Kumar", content: "I've taken several digital marketing courses before, but this one stands out for its comprehensive coverage and hands-on approach. I feel much more confident in my digital marketing skills now!" },
//                             { name: "Abishek", content: "As someone new to digital marketing, I found this course incredibly helpful in demystifying the complex world of online promotion. The instructors were engaging, and the content was well-structured. Thank you!" },
                            
//                         ].map((item, index) => (
//                            <div className="review-box" key={index}>
//                               <div className="review-box-description">
//                                 <p>{item.content}</p>
//                               </div>
//                               <div className="review-box-name"><p>{item.name}</p></div>
//                            </div>

//                         ))}
//                    </div>
//                 </div>
//             </div>
          
//           {/* -------------------------------------Certificate------------------------------- */}
//           <div className="course-certificate">
//                 <div className="course-certificate-container">
//                     <div className="course-certificate-contents">
//                         <div className="course-certificate-image">
//                             <img src={Image} alt="" />
//                         </div>
//                         <div className="course-certificate-description">
//                         <div className="course-certificate-heading"><h2>Earn Industry Recognised Certificate </h2></div>
//                             <p>Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* -----------------------------------------------Payment------------------------------ */}

//             <div className="course-payment">
//             <div className="course-payment-container">
//                 <div className="course-payment-heading"><h2>Course Fee</h2></div>
//                 <div className="course-payment-contents">
//                     <div className="course-payment-box">
//                         <div className="payment-month"><p>3 weeks</p></div>
//                         <div className="payment-starting">
//                             <p>Starting at</p>
//                             <h3>INR 15,000</h3>
//                         </div>
//                         <hr />
//                         <div className="payment-points"><p>Including</p>
//                         <ul>
//                         <li>Lifetime access to course materials</li>
//                             <li>Doubt clearing sessions</li>
//                             <li>Career guidance and Mock Interviews</li>
//                         </ul>
//                         </div>
//                         <Link to="/course-enquiry"><button className="course-payment-enroll">Enroll now</button></Link>
//                     </div>
//                     <div className="course-payment-option">
//                         <div className="payment-option-heading"><h3>Payment options</h3></div>
//                         <div className="payment-options-container">
//                             <div className="payment-options-contents">
//                                 <div className="payment-options-topic"><h4>UPI</h4></div>
//                                 <div className="payment-options-images">
//                                     <img src={Gpay} alt="gpay" />
//                                     <img src={PhonePe} alt="phonepe" />
//                                     <img src={Upi} alt="upi" />
//                                 </div>
//                             </div>
//                             <div className="payment-options-contents">
//                                 <div className="payment-options-topic"><h4>Card</h4></div>
//                                 <div className="payment-options-images">
//                                     <img src={Visa} alt="visa" />
//                                     <img src={Mastercard} alt="Mastercard" />
//                                     <img src={Rupay} alt="Rupay" />
//                                 </div>
//                             </div>
//                             <div className="payment-options-contents">
//                                 <div className="payment-options-topic"><h4>Wallet</h4></div>
//                                 <div className="payment-options-images">
//                                     <img src={Mobikwik} alt="Mobikwik" />
//                                     <img src={Ola} alt="Ola" />
//                                     <img src={Airtel} alt="Airtel" />
//                                     <img src={Freecharge} alt="Freecharge" />
//                                     <img src={Jio} alt="Jio" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//            </div>

//            {/* --------------------------------------FAQ----------------------------------- */}

//            <div className="course-faq">
//                 <div className="course-faq-container">
//                     <div className="course-faq-heading"><h2>Frequently Asked Questions</h2></div>
//                     <div className="course-faq-accordion-container">
//                         {[
//                             { title: "Who is this course for?", content: "This course is ideal for marketing professionals, business owners, entrepreneurs, or anyone looking to enhance their digital marketing skills and effectively promote their products or services online." },
//                             { title: "Do I need any prior experience in digital marketing?", content: "No prior experience is required. This course is designed to accommodate beginners as well as those with some background in marketing looking to expand their knowledge in the digital realm." },
//                             { title: "What software/tools will I need?", content: "Participants will need access to a computer with internet connectivity. Additionally, we'll utilise various digital marketing tools and platforms throughout the course, many of which offer free versions or trials." },
//                             { title: "Will there be any assignments or assessments?", content: "Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios." }
                        
//                         ].map((item, index) => (
//                             <div className="course-faq-accordion" key={index} onClick={() => toggleAccordion(index)}>
//                                 <div className="faq-accordion-title">
//                                     <h2>{item.title}</h2>
//                                     <img src={ExpandMore} style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
//                                 </div>
//                                 {accordionState[index]?.isOpen && (
//                                     <div className="faq-accordion-contents">
//                                         <p>{item.content}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//        </main>
//     )
// }