import React, { useState, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';
import emailjs from 'emailjs-com'; 
import banner from '../images/banner1.png';
import certifiedImage from '../images/statecertified.png';
import card1 from '../images/card1.webp';
import card2 from '../images/card2.webp';
import card3 from '../images/card3.webp';
import card4 from '../images/card6.webp'
import card5 from '../images/card5.webp'
import card6 from '../images/card4.webp'
import image1 from '../images/gallery1.jpg';
import image2 from '../images/img141.jpeg';
import image3 from '../images/img1.jpg';
import image5 from '../images/gallery5.jpg';
import image8 from '../images/img8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCheck } from '@fortawesome/free-solid-svg-icons';
import applicationPDF from '../application.pdf';
import handbookPDF from '../brightsmileshandbook.pdf';
import { useInView } from 'react-intersection-observer';

const Home = () => { 
    const [activeSection, setActiveSection] = useState('home'); 

    const handleDownload = () => {
        window.open(applicationPDF, '_blank');
    };
    const handleHandbook = () => {
        window.open(handbookPDF, '_blank');
    };
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [user_name, setName] = useState(""); 
    const [user_email, setEmail] = useState(""); 
    const [user_phone, setPhone] = useState(""); 
    const [message, setMessage] = useState("");
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_USER_ID)
          .then(
            (result) => {
              console.log("Email sent successfully:", result);
              setFormSubmitted(true);
              setContactMessage("We got your message. Thanks!");
              setTimeout(() => {
                setContactMessage("");
                setName("");
                setPhone("");
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

    const [heroRef, heroInView] = useInView({ triggerOnce: true });
    const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
    const [servicesRef, servicesInView] = useInView({ triggerOnce: true });

    // Function to handle section change
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
    const navigate = useNavigate();
    const scrollToContact = (event) => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <>
        <Helmet>
            <title>Bright Smiles Home Childcare</title>
            <meta name="description" content="Welcome to Bright Smiles Home Childcare, a nurturing and supportive learning environment for children in Auburn, WA." />
        </Helmet>
        {/* hero */}
        <div className="hero-container">
            <div className="hero-row">
                <div className={`left fade-in ${heroInView ? 'visible' : ''}`} ref={heroRef}>
                    <h1 className="hero-title">Bright Smiles Childcare</h1>
                    <h2 className="hero-bigger">Discover, Explore, and Learn Together</h2>
                    <p className="hero-p">At Bright Smiles Childcare, we provide a nurturing and safe environment where young minds can flourish.</p>
                    <div className="enroll-kid">
                        <Link to="/contact" className='hero-button' onClick={scrollToContact}>
                            Enroll your kid
                        </Link>
                        {/* <FontAwesomeIcon icon={faPhone} className="contact-icon" /> */}
                        {/* <a href="tel:+18018158685" className="contact-icon">(206) 483-4129</a> */}
                    </div>
                </div>
                <div className={`right slide-from-right ${heroInView ? 'visible' : ''}`} ref={heroRef}>
                    <img src={banner} alt="Bright Smiles Home Childcare" />
                </div>
            </div>
        </div>

        {/* about the daycare  */}
        <Link to='aboutSection' smooth={true} duration={1000}></Link>
        <Element name='aboutSection'>
            <section className={`bigBox slide-from-left ${aboutInView ? 'visible' : ''}`} ref={aboutRef}>
                {/* Helmet for the about section */}
                {activeSection === 'about' && (
                    <Helmet>
                    <title>About Us - Bright Smiles Home Childcare</title>
                    <meta name="description" content="Learn more about Bright Smiles Home Childcare, a nurturing and supportive childcare center in Auburn, WA." />
                    </Helmet>
                )}
                <div className="aboutSection">
                    <div className="leftSide"> 
                        <h1> Bright Smiles Childcare </h1>

                        <p>Welcome to Bright Smiles Home Childcare, a nurturing and supportive learning environment for children in Auburn, WA. We pride ourselves on providing high-quality childcare and education services in a warm and inviting atmosphere.</p>
                        <p>At Bright Smiles Home Childcare, we believe in fostering a love for learning through play-based activities and hands-on experiences. Our dedicated team of educators focuses on nurturing each child's individual interests, talents, and learning styles.</p>
                        <p>We are committed to promoting social, emotional, and cognitive development in children, helping them build confidence and independence. With our comprehensive curriculum and engaging learning opportunities, we strive to prepare children for success in school and in life.</p>
                        <p>Join us at Bright Smiles Home Childcare, where every child is valued, supported and encouraged. Contact us at <a href='tel:+12064834129'><b>(206)483-4129</b></a> or <a href="mailto:brightchildcare98@gmail.com"><b>brightchildcare98@gmail.com</b></a></p>
                        <h2><strong>Highlights/Quick Facts:</strong></h2>
                        <ul>
                            <li>Comprehensive and Affordable Tuition</li>
                            <li>Safe &amp; Secure</li>
                            <li>Education as the Core Foundation</li>
                            <li>Engaging and Developmentally Appropriate Curriculum</li>
                            <li>Healthy and Nutritious Meals and Snacks Provided Daily</li>
                            <li>Qualified, Caring, and Experienced Staff</li>
                        </ul>

                        <p>At Bright Smiles Home Childcare, our vision is clear: to create the most nurturing environment for children, earning the trust of parents each day. We are dedicated to meeting the individual needs of every child through age-appropriate activities in a loving and secure setting. We invite you to schedule a tour of our facility to meet our staff and experience our welcoming atmosphere firsthand. We can't wait to welcome you and your children!</p>

                        <br className="line"></br>
                    </div>
                    
                    <div className="rightSide">
                        <h3>Latest News</h3>

                        <ul>
                            <li><span><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> Enrollment Open Now for 2023-2024. Contact us Now!!</span></li>
                            <li><span><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> You can now download enrollment forms below!!</span></li>
                            <li><div className="download-link" onClick={handleDownload}>Download Application</div></li>
                            <li><div className="download-link" onClick={handleHandbook}>Download Handbook</div></li>
                        </ul>

                    </div>	
                    <br className="line"></br>
                    <div className="underline">&nbsp;</div>
                
                </div>
            </section>
        </Element>


        {/* qualified */}
        <section className="qualified">
            <div className="container">
                <div className="parts">
                    <p class="black_text"><span>State</span>  <img src={certifiedImage} alt='State-certified' /></p>
                    <h3>Licensed &amp;</h3>
                    <h5>Certified</h5>
                    <p class="left-text">Experience top-quality education in a nurturing <br/>
                        environment for your child, providing both <br/>
                        peace of mind and confidence for parents.</p>
                </div>
                <div className="parts">
                    <h4>Why are we the best place <br/>
                    to learn?
                    </h4>
                    <p> Age-appropriate curriculum</p>
                    <p> Flexible hours and enrollment plans</p>
                    <p> Strict safety policies and CPR/First Aid Certified Staff</p>
                    <p> Affordable Tuition with Convenient Payment Options</p>
                    <p> Healthy Meals and Snacks Provided Daily</p>
                    <p> <a href="/" previewlistener="true">Learn more about us</a></p>
                    {/* <p><a href={handbookPDF} target="_blank" rel="noopener noreferrer">Preview our handbook</a></p> */}
                    {/* <p> <div className="handbook" onClick={handleHandbook}>Preview Handbook</div></p> */}
                </div>
            </div>
        
        </section>
        
        {/* services */}
        <Link to='servicesSection' smooth={true} duration={1000}></Link>
        <Element name='servicesSection'>
            <section class="service-section">
                {activeSection === 'services' && (
                    <Helmet>
                    <title>Our Services - Bright Smiles Home Childcare</title>
                    <meta name="description" content="Explore our comprehensive childcare and educational services at Bright Smiles Home Childcare in Auburn, WA." />
                    </Helmet>
                )}
                <div className="base-container width-container">
                <div class="animated-circle top-left"></div>
                <div class="animated-circle bottom-right"></div>
                    <div className={`inner-service fade-in ${servicesInView ? 'visible' : ''}`} ref={servicesRef}>
                        <h1 className="heading">We Provide Your Child <span className="span-color">With An Opportunity</span></h1>
                        <p class="main-description">We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                    </div>
                    <div className={`card slide-from-left ${servicesInView ? 'visible' : ''}`} ref={servicesRef}>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card1} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">Engaging Activities</h4>
                                <p className="card-paragraph">Encouraging active participation and hands-on learning experiences to ignite curiosity and creativity.</p>
                            </div>
                        </div>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card2} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">Professional Teachers</h4>
                                <p className="card-paragraph">Our experienced teacher provide personalized guidance and support to nurture each child's unique potential.</p>
                            </div>
                        </div>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card3} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">Education Program</h4>
                                <p className="card-paragraph">A well-rounded curriculum designed to stimulate intellectual growth and foster holistic development.</p>
                            </div>
                        </div>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card4} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">All in One Place Together</h4>
                                <p className="card-paragraph">An inclusive setting where children learn and grow together, fostering collaboration and social skills.</p>
                            </div>
                        </div>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card5} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">After School Program</h4>
                                <p className="card-paragraph">Promote physical fitness, teamwork, and sportsmanship through our engaging program.</p>
                            </div>
                        </div>
                        <div class="card-item">
                            <div className="card-inner">
                                <img className="card-image" src={card6} alt="Childcare programs at Bright Smiles Home Childcare" />
                            </div>
                            <div class="card-text">
                                <h4 className="card-heading">Easy To Learn</h4>
                                <p className="card-paragraph">Access a wealth of resources and tools designed to accommodate diverse learning styles and abilities, ensuring every child's success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>

        {/* gallery */}
        <section className='gallery-section '>
            <div className="base-container width-container">
                <div className="gallery-heading">
                    <h1 className="gallery-header">Our <span className="span-gallery">Gallery</span></h1>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="left-gallery">
                    <div className="medium-gallery-image w-inline-block">
                        <img className="medium-image" src={image1} alt="daycare programs at Bright Smiles Home Childcare" />
                        <img className="small-image img-position" src={image8} alt="daycare programs at Bright Smiles Home Childcare" />
                    </div>
                    <div className="small-gallery-image w-inline-block">
                        <img className="small-image img-position" src={image3} alt="daycare programs at Bright Smiles Home Childcare" />
                        <img className="small-image img-position" src={image2} alt="daycare programs at Bright Smiles Home Childcare" />

                    </div>
                </div>
                <div className="right-gallery">
                    <div className="big-gallery-image w-inline-block">
                        <img className="big-image w-inline-block" src={image5} alt="daycare programs at Bright Smiles Home Childcare" /> 
                    </div>
                </div>
            </div>
        </section>


        {/* testimonials */}
        {/* <section className='testimonials'>
        </section> */}
        
        {/* location map*/}
        <section class="mapSection">
            <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.121822826809!2d-122.2696509!3d47.3314921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059b448a3c987%3A0x5acb15e7c88830ef!2s30124%2053rd%20Ave%20S%2C%20Auburn%2C%20WA%2098001!5e0!3m2!1sen!2sus!4v1716182915476!5m2!1sen!2sus"
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="">
            {/* loading="lazy"> */}
            </iframe>
        </section>
        
        {/* contact us  */}
        <Link to='contactSection' smooth={true} duration={1000}></Link>
        <Element name='contactSection'>
            <section className="booking-section">
                {activeSection === 'contact' && (
                    <Helmet>
                    <title>Contact Us - Bright Smiles Home Childcare</title>
                    <meta name="description" content="Get in touch with Bright Smiles Home Childcare to book a tour or learn more about our childcare programs and services." />
                    </Helmet>
                )}
                <div className="booking-container">
                    <div className="booking-info">
                        <h2 className="sub-title">BOOK A TOUR</h2>
                        <h1 className="main-title">Book A Spot For Your Kid</h1>
                        <p className="description">
                            We invite you to visit our daycare facility and see firsthand how we provide a nurturing and stimulating environment for children. 
                            Our knowledgeable staff will guide you through our facility and answer any questions you may have about our programs and services.
                        </p>
                        <ul className="benefits-list">
                            <li><FontAwesomeIcon icon={faCheck} className="check-mark" /> Half-Day Facility Tours Available</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-mark" /> Interactive Learning Environments</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-mark" /> Nutritious Meals and Snacks Provided</li>
                        </ul>
                        <Link to="/contact">
                            <button className="book-now-btn" onClick={scrollToContact}>Book Now</button>
                        </Link>
                    </div>
                    <div className="booking-form">
                        <h2 className="form-title">Get In Touch</h2>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input
                                type='text'
                                placeholder='Name'
                                name='user_name' 
                                value={user_name} 
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type='tel'
                                placeholder='Phone'
                                name='user_phone' 
                                value={user_phone} 
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                name='user_email' 
                                value={user_email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                    placeholder='Message'
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                            ></textarea>
                            <button className='send-message' type="submit">Send</button>
                            {formSubmitted && (
                                <h6 className='thank-you-message'>
                                    Successful! We'll reach out shortly. Thanks!
                                </h6>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </Element>
      
    </>
    );
   
}

export default Home;
