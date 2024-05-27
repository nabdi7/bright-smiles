import React, { useState, useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';
// import { Link } from 'react-router-dom';
import logo from '../images/logo10.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faBars, faTimes, faPhone} from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar');
      if (!navbar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  
  return (
    <>
      <header class="sub-header"> 
        <div class="container"> 
              <ul class="info">
                <li><FontAwesomeIcon icon={faEnvelope} className="icon-style" /> <a href="mailto:brightchildcare98@gmail.com">Brightchildcare98@gmail.Com</a></li>
                <li className="address"><FontAwesomeIcon icon={faLocationDot} className="icon-style" /> <a href="https://www.google.com/maps/place/30124+53rd+Ave+S,+Auburn,+WA+98001/@47.3314921,-122.2696509,17z/data=!3m1!4b1!4m6!3m5!1s0x549059b448a3c987:0x5acb15e7c88830ef!8m2!3d47.3314921!4d-122.2696509!16s%2Fg%2F11c4_3wj9_?entry=ttu">30124 53rd Ave S, Auburn, WA</a></li>
              </ul>
            <div class="col-lg-4 col-md-4">
              <ul class="social-links">
                <li><a href="tel:+12062223462"><FontAwesomeIcon icon={faPhone} className="icon-style"/> </a> (206) 483-4129</li>
                {/* <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /> </a></li>*/}
              </ul>
            </div>
        </div>
      </header>

      {/* navbar  */}
      <nav className='navbar'>
        <div className='navbar-logo'>
          <a href='/'> 
            <img
              src={logo}
              width="250px" height="auto"
              alt='Logo'
            />
          </a>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <ScrollLink to='homeSection' smooth={true} duration={1000} onClick={closeMenu}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='aboutSection' smooth={true} duration={1000} onClick={closeMenu}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='servicesSection' smooth={true} duration={1000} onClick={closeMenu}>
                Programs
              </ScrollLink>
            </li>
            <li>
              {/* <Link to="/enroll" className="active">
              Contact
              </Link> */}
              <ScrollLink to='contactSection' smooth={true} duration={1000} className="bn59" onClick={closeMenu}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} style={{ fontSize: "30px" }}/>
        </div>
      </nav>
      

    </>
  );
};

export default Navbar;
