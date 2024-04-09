import React from 'react';
import './ServicePage.css';
import {Link} from 'react-router-dom';

 function ServiceHeroSection() {
  return (
    <div>
        <section class="service-hero-section">
        <div class="service-hero-content">
          <h1> Thinking of Growing your Business? 
            think trafy.
          </h1>
          <p>Your trusted partner for strategic growth, empowering brands to unlock their full potential and achieve targeted growth.
          </p>
          <Link to="/enquiry"> <button class="service-hero-button">Let’s Get Started</button></Link>
          
        </div>
      </section>

    </div>
  )
}

export default ServiceHeroSection