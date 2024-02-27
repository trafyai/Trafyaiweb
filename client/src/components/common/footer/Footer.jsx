import React from "react";
import './Footer.css'
import linkedin from '../../../assets/Images/comman/footer/linkedin (2).png';
import facebook from '../../../assets/Images/comman/footer/facebook.png';
import instagram from '../../../assets/Images/comman/footer/instagram (2).png';
import twitter from '../../../assets/Images/comman/footer/twitter (1).png';
import behance from '../../../assets/Images/comman/footer/behance.png';
function Footer(){
    return(
        <section className="footer">
        <div className="footer-container">
  
          <div className="footer-container-contents">
  
            <div className="footer-content">
              <div className="footer-content-heading"><h1>Solutions</h1></div>
              <div className="footer-content-text"><p>UI/UX Audit</p></div>
              <div className="footer-content-text"><a href=""><p>Research & Design</p></a></div>
              <div className="footer-content-text"><a href=""><p>Market Analysis</p></a></div>
              <div className="footer-content-text"><a href=""><p>Strategy & Automation</p></a></div>
              <div className="footer-content-text"><a href=""><p>Data Visualisation</p></a></div>
              <div className="footer-content-text"><a href=""><p>Dynamic Interaction <br/>Ecosystem (Beta)</p></a></div>
            </div>
  
            <div className="footer-content">
              <div className="footer-content-heading"><h1>Resource</h1></div>
              <div className="footer-content-text"><a href=""><p>Blogs</p></a></div>
              <div className="footer-content-text"><a href=""><p>Trending</p></a></div>
              <div className="footer-content-text"><a href=""><p>Insights & Reports</p></a></div>
              <div className="footer-content-text"><a href=""><p>trafy Community</p></a></div>
              <div className="footer-content-text"><a href=""><p>trafy Events</p></a></div>
            </div>
  
            <div className="footer-content">
              <div className="footer-content-heading"><h1>Academy</h1></div>
              <div className="footer-content-text"><a href=""><p>Certification Courses</p></a></div>
              <div className="footer-content-text"><a href=""><p>Webinars</p></a></div>
              <div className="footer-content-text"><a href=""><p>Masterclass</p></a></div>
              <div className="footer-content-text"><a href=""><p>Hackathon</p></a></div>
            </div>
  
            <div className="footer-content">
              <div className="footer-content-heading"><h1>Company</h1></div>
              <div className="footer-content-text"><a href=""><p>Our Story</p></a></div>
              <div className="footer-content-text"><a href=""><p>Careers</p></a></div>
              <div className="footer-content-text"><a href=""><p>Investor Relation</p></a></div>
              <div className="footer-content-text"><a href=""><p>Customer Stories</p></a></div>
              <div className="footer-content-text"><a href=""><p>Sustainability </p></a></div>
              <div className="footer-content-text"><a href=""><p>Giving back to you</p></a></div>
            </div>
  
            <div className="footer-content">
              <div className="footer-content-heading"><h1>Compliance</h1></div>
              <div className="footer-content-text"><a href="terms-and-conditions.html"><p>Terms of Service</p></a></div>
              <div className="footer-content-text"><a href="privacy-policy.html"><p>Privacy Policy</p></a></div>
              <div className="footer-content-text"><a href=""><p>Anti-Spam Policy</p></a></div>
              <div className="footer-content-text"><a href="cookiee-policy.html"><p>Cookie Policy</p></a></div>
              <div className="footer-content-text"><a href="refund-policy.html"><p>Refund Policy</p></a></div>
              <div className="footer-content-text"><a href=""><p>Freelancers & Affiliate Policy</p></a></div>
            </div>
  
          </div>
  
          <hr className="footer-line"/>
  
          <div className="social-section">
            <div className="footer-logo"><img src="Images/Logo/Trafy Logo_Workspace Logo.png" alt=""/></div>
            <div className="socials">
              <a href="https://www.linkedin.com/company/trafypro/"><img src={linkedin} alt=""/></a>
              <a href="https://www.facebook.com/trafyproint"><img src={facebook} alt=""/></a>
              <a href="https://www.instagram.com/trafypro/"><img src={instagram} alt=""/></a>
              <a href="https://twitter.com/trafyproint"><img src={twitter} alt=""/></a>
              <a href="https://www.behance.net/dmerztech"><img src={behance} alt=""/></a>
            </div>
          </div>
  
          <div className="copyrights">
            <div className="copyright-text">© 2024 trafy. | <a href="">Commitments</a></div>
          </div>
  
        </div>
      </section>
    )
}
export default Footer;