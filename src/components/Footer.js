import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; 

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-col links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="aboutSection" smooth={true} duration={1000}>About</Link></li>
                            <li><Link to="servicesSection" smooth={true} duration={1000}>Program</Link></li>
                            <li><Link to="contactSection" smooth={true} duration={1000}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Get In Touch</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} /> <a href="https://www.google.com/maps/place/30124+53rd+Ave+S,+Auburn,+WA+98001/@47.3314921,-122.2696509,17z/data=!3m1!4b1!4m6!3m5!1s0x549059b448a3c987:0x5acb15e7c88830ef!8m2!3d47.3314921!4d-122.2696509!16s%2Fg%2F11c4_3wj9_?entry=ttu">30124 53rd Ave S, Auburn, WA</a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:brightchildcare98@gmail.com">brightchildcare98@gmail.com</a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:fjoojiye@yahoo.com">fjoojiye@yahoo.com</a></li>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+12064834129">(206) 483-4129</a></li> 
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Hours of operation</h3>
                        <ul>
                            <li>Mon - Fri: 5:00 AM - 9:00 PM</li>
                            <li>Sat - Sun: 5:00 AM - 9:00 PM</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        {/* <h4>Bright Smiles Childcare</h4> */}
                        {/* <div className="logo">
                            {/* <img
                                src={logo}
                                // width='250px'
                                // height='auto'
                                // max-width='100%'
                                // max-height='100%'
                                alt='Bright Smiles Home Childcare'
                            /> 
                        </div> */}
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Youtube"> 
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>©{new Date().getFullYear()} Bright Smiles Home Childcare. <a href="https://qualitydesigns.site/" target="_blank" rel="noopener noreferrer">Quality Designs</a></p>
            </div>
        </>
    );
}

export default Footer;
