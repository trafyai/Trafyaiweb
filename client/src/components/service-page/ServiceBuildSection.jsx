import React from 'react';
import './ServicePage.css';

function ServiceBuildSection() {
  return (
    <div>
        
  <div class="build"  >
       <div class="build-heading" >
            <h1 class="build-above-heading">Build with trafy</h1>
            <h1 class="build-h1-heading" >Create and Sell to any part of the World</h1>
            <p>Give your brand the enterprise-level acceleration it deserves. Get custom websites and mobile applications that are scalable, performance-oriented, interactive, and fully optimized for marketing and sales.</p>
        </div>
        <div class="build-topic">
            <button class="build-topic-website" >Website</button>
            <button class="build-topic-mobile">Mobile</button>
        </div>

  <div class="build-website">
    <div class="build-website-img">
       <img  src="website.svg"  alt="" />
    </div>
    <div class=" build-website-content">
      <div class="build-website-text-content">
        <div class="build-website-text-content-h1">
          <h1>Scale with Powerful Dynamic Websites
            </h1>
        </div>
        <div class="build-website-text-content-p">
          <p class="build-website-para">Elevate your business by building scalable websites from a single landing page to a complex ecommerce website that acts as a digital
             store for your products or services leading to increased sales.</p>
        </div>
        <div class="build-website-text-content-li"><h3 class="feature-heading">Features:</h3>
                                                   <li>Multiple Integrations</li>
                                                   <li>Search Engine Optimized Design</li>
                                                   <li>Analytics and reporting</li>
                                                    <li>Free SSL Certificate</li>
        </div>                                           
        
      </div>
      <div ><button class="common-button">View more</button></div>
    </div>
  </div>

  <div class="build-mobile">
    <div class="build-mobile-img">
    <img src="app.svg"  alt=""  />
    </div>
    <div class="build-mobile-content">
      <div class=" build-mobile-text-content">
        <div class="build-mobile-text-content-h1"><h1>Personalize with Interactive Native Mobile Apps
          </h1></div>
        <div class="build-mobile-text-content-p"><p class="build-website-para">Take your business to the next big thing with authoritative apps, having security as the cornerstone of your online presence.</p></div>
        <div class="build-mobile-text-content-li"><h3 class="feature-heading">Features:</h3>
                                                   <li>Security and Data Protection</li>
                                                   <li>Android and iOS Cross platform development</li>
                                                   <li>Analytics and reporting</li>
                                                   <li>API Integrations</li>
        </div>                                           
        <div ><button class="common-button">Get started</button></div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default ServiceBuildSection