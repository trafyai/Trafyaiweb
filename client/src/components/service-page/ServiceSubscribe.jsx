import React from 'react';
import {Link} from 'react-router-dom';

function ServiceSubscribe() {
  return (
    <div>
        <section class="service-subscribe-section">
            <div class="service-subscribe-container">
                <h3>Your sales stratergy consultation is on us</h3>
               <Link to="/enquiry"><button>Get started for free</button></Link>
            </div>
    </section>
    </div>
  )
}

export default ServiceSubscribe