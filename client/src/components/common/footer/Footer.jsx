

import React from "react";
import './Footer.css'
import linkedin from '../../../assets/Images/comman/footer/linkedin (2).png';
import facebook from '../../../assets/Images/comman/footer/facebook.png';
import instagram from '../../../assets/Images/comman/footer/instagram (2).png';
import twitter from '../../../assets/Images/comman/footer/twitter (1).png';
import behance from '../../../assets/Images/comman/footer/behance.png';
import WhiteLogo from '../../../assets/Images/comman/header/whiteLogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-container-contents">

          <div className="footer-content">
            <div className="footer-content-heading"><h1>Solutions</h1></div>
            <div className="footer-content-text"><p>UI/UX Audit</p></div>
            <div className="footer-content-text"><p>Research & Design</p></div>
            <div className="footer-content-text"><p>Market Analysis</p></div>
            <div className="footer-content-text"><p>Strategy & Automation</p></div>
            <div className="footer-content-text"><p>Data Visualization</p></div>
            <div className="footer-content-text"><p>Dynamic Interaction <br />Ecosystem (Beta)</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h1>Resource</h1></div>
            <div className="footer-content-text"><p>Blogs</p></div>
            <div className="footer-content-text"><p>Trending</p></div>
            <div className="footer-content-text"><p>Insights & Reports</p></div>
            <div className="footer-content-text"><p>trafy Community</p></div>
            <div className="footer-content-text"><p>trafy Events</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h1>Academy</h1></div>
            <div className="footer-content-text"><p>Certification Courses</p></div>
            <div className="footer-content-text"><p>Webinars</p></div>
            <div className="footer-content-text"><p>Masterclass</p></div>
            <div className="footer-content-text"><p>Hackathon</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h1>Company</h1></div>
            <div className="footer-content-text"><p>Our Story</p></div>
            <div className="footer-content-text"><p>Careers</p></div>
            <div className="footer-content-text"><p>Investor Relation</p></div>
            <div className="footer-content-text"><p>Customer Stories</p></div>
            <div className="footer-content-text"><p>Sustainability </p></div>
            <div className="footer-content-text"><p>Giving back to you</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h1>Compliance</h1></div>
            <div className="footer-content-text"><p>Terms of Service</p></div>
            <div className="footer-content-text"><p>Privacy Policy</p></div>
            <div className="footer-content-text"><p>Anti-Spam Policy</p></div>
            <div className="footer-content-text"><p>Cookie Policy</p></div>
            <div className="footer-content-text"><p>Refund Policy</p></div>
            <div className="footer-content-text"><p>Freelancers & Affiliate Policy</p></div>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="social-section">
          <div className="footer-logo"><img src={WhiteLogo} alt="trafy logo" /></div>
          <div className="socials">
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={behance} alt="behance" />
          </div>
        </div>

        <div className="copyrights">
          <div className="copyright-text">© 2024 trafy. | <a href="">Commitments</a></div>
        </div>

      </div>
    </footer>
  )
}
export default Footer;
