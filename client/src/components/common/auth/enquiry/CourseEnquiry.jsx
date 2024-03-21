import React from "react";
import './CourseEnquiry.css';

export default function CourseEnquiry(){
    return(
        <main>
            <div className="course-enquiry-form">
                <div className="course-enquiry-form-container">
                    <div className="course-enquiry-form-contents">

                    <form className="enquiryform" >
                        <div className="enquiryform-heading">
                            <h2>Ready to get started?</h2>
                        </div>
                        
                        <div className="enquiryfname">
                            <input type="text"  placeholder="First name"  
                            className="enquiry-fname" />
                        </div>
                        <div className="enquirylname">
                            <input type="text"  placeholder="Last name"  
                            className="enquiry-lname"  />
                            
                        </div>
                        <div className="enquiryemail">
                            <input type="text"  placeholder="Email" required 
                                className="enquiry-email" />
                           
                        </div>
                        <div className="enquiryphone">
                            <input type="text"  placeholder="Phone Number" required  
                                className="enquiry-phone" />
                           
                        </div>
                        <div className="enquirymessage">
                            <textarea type="text"  placeholder="Message" required 
                                className="enquiry-message" style={{width: "100%"}}/>
                           
                        </div>
                        
                            <button type= "submit"  className="course-enquiry-button">Get in touch</button>
                        

                    </form>
                    </div>
                </div>
            </div>
        </main>
    )
}