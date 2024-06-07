import React, { useState, useRef } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock} from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [user_name, setName] = useState(""); 
    const [user_email, setEmail] = useState(""); 
    const [message, setMessage] = useState("");
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm("service_j3nyl4y", "template_if9y1ud", formRef.current, "Su2Fj91t8uKmDnkig")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setFormSubmitted(true);
          setContactMessage("We got your message. Thanks!");
          setTimeout(() => {
            setContactMessage("");
            setName("");
            setEmail("");
            setMessage("");
            setFormSubmitted(false);
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);

        }
      );
    };
    return (
        <>
        <section className='contact'>
            <div className="backgroundImage">
                <h1 className='global-title'>Contact Us</h1>
            </div>
        
            <div className='content-container'>
                {/* Left side */}
                <div className='left-side'>
                   
                        {/* <h3 className='content-title'>Are you ready to get started?</h3>
                        <p className='content-description'>If you have questions about the opportunities available in our programs, feel free to send us a message. We will get back to you as soon as possible.</p> */}
                        {/* <h3 className='content-title'>Bright Smiles Home childcare</h3> */}
                        <div className="information">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <div className="information-text">
                                <p className='content-description'><a href='tel:+12064834129'><b>(206)483-4129</b></a></p>
                                <p className='content-info'>Phone Number</p>
                            </div>
                        </div>
                        <div className="information">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <div className="information-text">
                                <p className='content-description'><a href='mailto:brightchildcare98@gmail.com'><b>brightchildcare98@gmail.com</b></a></p>
                                <p className='content-info'>Email Address</p>
                            </div>
                        </div>

                        <div className="information">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                            <div className="information-text"> 
                                <p className='content-description'><a href="https://www.google.com/maps/place/30124+53rd+Ave+S,+Auburn,+WA+98001/@47.3314921,-122.2696509,17z/data=!3m1!4b1!4m6!3m5!1s0x549059b448a3c987:0x5acb15e7c88830ef!8m2!3d47.3314921!4d-122.2696509!16s%2Fg%2F11c4_3wj9_?entry=ttu"><b>30124 53rd Ave S, Auburn, WA</b></a></p>
                                <p className='content-info'>Address</p>
                            </div>
                        </div>
                        
                        <div className="information">
                            <FontAwesomeIcon icon={faClock} className="icon"/>
                            <div className="information-text"> 
                                <p className='content-description'><b>Open Daily 5:00 AM - 9:00 PM</b></p>
                                <p className='content-info'>Hours</p>
                            </div>
                        </div>

                    {/* <div className='content-box'>
                        <h3 className='content-title'>Hours of operation</h3>
                        <ul className='schedule-hours'>
                            <li>Mon: open 24 hours</li>
                            <li>Tue: open 24 hours</li>
                            <li>Wed: open 24 hours</li>
                            <li>Thu: open 24 hours</li>
                            <li>Fri: open 24 hours</li>
                            <li>Sat: open 24 hours</li>
                            <li>Sun: open 24 hours</li>
                        </ul>
                    </div> */}
                </div>

                {/* Right side */}
                <div className='right-side'>
                    <div className="contact-box">
                    <h2 className='get-in-touch'>Get in touch</h2>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div>
                            <input
                                type='text'
                                placeholder='Name'
                                name='user_name' 
                                value={user_name} 
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='email'
                                placeholder='Email'
                                name='user_email' 
                                value={user_email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder='Message'
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button className='submit'>Send</button>
                        {formSubmitted && (
                            <h6 className='thank-you-message'>
                                Successful! We'll reach out shortly. Thanks!
                            </h6>
                            )}
                    </form>
                    </div>
                </div>
            </div>
        </section>

        <div className='location'>
            <div className='location-map'>
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.121822826809!2d-122.2696509!3d47.3314921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059b448a3c987%3A0x5acb15e7c88830ef!2s30124%2053rd%20Ave%20S%2C%20Auburn%2C%20WA%2098001!5e0!3m2!1sen!2sus!4v1716182915476!5m2!1sen!2sus"
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="">
                    {/* loading="lazy"> */}
                </iframe>
            </div>
        </div>
    </>
    );
}

export default Contact;
