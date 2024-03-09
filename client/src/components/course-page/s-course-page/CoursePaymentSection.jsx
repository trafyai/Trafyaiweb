import React from "react";
import './CoursePage.css';
import Gpay from '../../../assets/Images/course-page/payment-section/Gpay.png';
import PhonePe from '../../../assets/Images/course-page/payment-section/Phonepe.png';
import Visa from '../../../assets/Images/course-page/payment-section/Visa.png';
import Mastercard from '../../../assets/Images/course-page/payment-section/Mastercard.png';
import Rupay from '../../../assets/Images/course-page/payment-section/rupay.png';
import Upi from '../../../assets/Images/course-page/payment-section/UPI.png';

export default function CoursePaymentSection(){

    return(
        <main>
           <div className="course-payment">
            <div className="course-payment-container">
                <div className="course-payment-heading"><h1>Course Fee</h1></div>
                <div className="course-payment-contents">
                    <div className="course-payment-box">
                        <div className="payment-month"><p>3 months</p></div>
                        <div className="payment-starting">
                            <h2>Starting at</h2>
                            <h1>INR 50,000</h1>
                        </div>
                        {/* <div className="payment-total"><p></p></div> */}
                        <hr />
                        <div className="payment-points"><h2>Including</h2>
                        <ul>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                        </ul>
                        </div>
                        <button className="course-payment-enroll">Enroll now</button>
                    </div>
                    <div className="course-payment-option">
                        <div className="payment-option-heading"><h1>Payment options</h1></div>
                        <div className="payment-options-container">
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h3>UPI</h3></div>
                                <div className="payment-options-images">
                                    <img src={Gpay} alt="" />
                                    <img src={PhonePe} alt="" />
                                    <img src={Upi} alt="" />
                                </div>
                            </div>
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h3>Card</h3></div>
                                <div className="payment-options-images">
                                    <img src={Visa} alt="" />
                                    <img src={Mastercard} alt="" />
                                    <img src={Rupay} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </main>
    )

}