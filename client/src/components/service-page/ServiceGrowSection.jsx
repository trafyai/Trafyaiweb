
import React, { useState } from 'react';
import './ServicePage.css';
import ServiceData from '../../data/service-page/ServiceData';

function ServiceGrowSection() {
    const [activeContent, setActiveContent] = useState(1); // Setting initial activeContent to the id of "Email Marketing"

   

    const showContent = (id) => {
        setActiveContent( id);
    };
    

    return (
        <div className="service-grow-section">
            <div className="service-grow-container">
                <div className="service-grow-description">
                    <h4>Grow with trafy</h4>
                    <h1>Unleash the Power of Marketing</h1>
                    <p>Begin your journey to exponential growth with trafy's comprehensive marketing services and strengthen your market presence, engage with your audience, and promote long-term growth</p>
                </div>
                <div className="service-grow-whole-content">
                    <div className="service-grow-dashboard">
                        {ServiceData.map(section => (
                             <div key={section.id} className={section.title} onClick={() => showContent(section.id)}><p>{section.title}</p></div>
                             
                        ))}
                    </div>

                    <div className="service-grow-content">

                    {ServiceData.map(section => (
                            activeContent === section.id &&
                            <div key={section.id} className={activeContent === section.id ? 'serviceActive' : ''} onClick={() => showContent(section.id)}>

                    <div className="service-grow-image"><img src={section.content.image} alt={section.content.alt} /></div>
                    </div>
                     ))}


                        {ServiceData.map(section => (
                            activeContent === section.id &&
                            <div key={section.id} className={activeContent === section.id ? 'serviceActive' : ''} onClick={() => showContent(section.id)}>
                                <h1>{section.content.heading}</h1>
                                <p>{section.content.description}</p>
                                <h3>{section.content.subheading}</h3>
                                <ul>
                                    {section.content.contents.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceGrowSection;
