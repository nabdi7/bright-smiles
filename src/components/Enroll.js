import React from 'react';
import './Enroll.css';

const Enroll = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch With Our Agents</h2>
          <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
          <div className="contact-methods">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>010-020-0340</span>
              <p>Phone Number</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@villa.co</span>
              <p>Business Email</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name..." required />
            <input type="email" name="email" placeholder="Your E-mail..." required />
            <input type="text" name="subject" placeholder="Subject..." required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-map">
        <iframe 
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.121822826809!2d-122.2696509!3d47.3314921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059b448a3c987%3A0x5acb15e7c88830ef!2s30124%2053rd%20Ave%20S%2C%20Auburn%2C%20WA%2098001!5e0!3m2!1sen!2sus!4v1716182915476!5m2!1sen!2sus"
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Enroll;
