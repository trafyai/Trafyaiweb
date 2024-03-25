import React from "react";
import './CoursePage.css';
import Gpay from '../../../assets/Images/course-page/payment-section/Gpay.png';
import PhonePe from '../../../assets/Images/course-page/payment-section/Phonepe.png';
import Visa from '../../../assets/Images/course-page/payment-section/Visa.png';
import Mastercard from '../../../assets/Images/course-page/payment-section/Mastercard.png';
import Rupay from '../../../assets/Images/course-page/payment-section/rupay.png';
import Upi from '../../../assets/Images/course-page/payment-section/UPI.png';
import Airtel from '../../../assets/Images/course-page/payment-section/airtel payment bank.png';
import Freecharge from '../../../assets/Images/course-page/payment-section/freecharge.png';
import Mobikwik from '../../../assets/Images/course-page/payment-section/MobiKwik.png';
import Ola from '../../../assets/Images/course-page/payment-section/ola money.png';
import Jio from '../../../assets/Images/course-page/payment-section/jio money.png';

export default function CoursePaymentSection(){

    return(
        <main>
           <div className="course-payment">
            <div className="course-payment-container">
                <div className="course-payment-heading"><h2>Course Fee</h2></div>
                <div className="course-payment-contents">
                    <div className="course-payment-box">
                        <div className="payment-month"><p>3 months</p></div>
                        <div className="payment-starting">
                            <p>Starting at</p>
                            <h3>INR 15,000</h3>
                        </div>
                        {/* <div className="payment-total"><p></p></div> */}
                        <hr />
                        <div className="payment-points"><p>Including</p>
                        <ul>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                            <li>voluptate velit esse cillum dolore eu fugiat </li>
                        </ul>
                        </div>
                        <button className="course-payment-enroll">Enroll now</button>
                    </div>
                    <div className="course-payment-option">
                        <div className="payment-option-heading"><h3>Payment options</h3></div>
                        <div className="payment-options-container">
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>UPI</h4></div>
                                <div className="payment-options-images">
                                    <img src={Gpay} alt="gpay" />
                                    <img src={PhonePe} alt="phonepe" />
                                    <img src={Upi} alt="upi" />
                                </div>
                            </div>
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>Card</h4></div>
                                <div className="payment-options-images">
                                    <img src={Visa} alt="visa" />
                                    <img src={Mastercard} alt="Mastercard" />
                                    <img src={Rupay} alt="Rupay" />
                                </div>
                            </div>
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>Wallet</h4></div>
                                <div className="payment-options-images">
                                    <img src={Mobikwik} alt="Mobikwik" />
                                    <img src={Ola} alt="Ola" />
                                    <img src={Airtel} alt="Airtel" />
                                    <img src={Freecharge} alt="Freecharge" />
                                    <img src={Jio} alt="Jio" />
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