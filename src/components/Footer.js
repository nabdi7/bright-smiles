import './Footer.css';
import logo from "../images/logo11.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Program</a></li>
                            <li><a href="#">Contact</a></li>
                            {/* <li><a href="#">Enroll now</a></li> */}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} /> <a href="https://www.google.com/maps/place/30124+53rd+Ave+S,+Auburn,+WA+98001/@47.3314921,-122.2696509,17z/data=!3m1!4b1!4m6!3m5!1s0x549059b448a3c987:0x5acb15e7c88830ef!8m2!3d47.3314921!4d-122.2696509!16s%2Fg%2F11c4_3wj9_?entry=ttu">30124 53rd Ave S, Auburn, WA</a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:brightchildcare98@gmail.com">brightchildcare98@gmail.com</a></li>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+18018158685">(206) 483-4129</a></li> 
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Hours of operation</h4>
                        <ul>
                            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                            <li>Saturday: Closed</li>
                            <li>Sunday: Closed</li>
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
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> 
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
