// AboutUs.js
import React from 'react';
import about from '../images/about.png';
// import { FaArrowLeft, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import man1 from '../images/man1.png';
import man2 from '../images/man2.png';
import man3 from '../images/man3.png';
import Navbar from "./Landing";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function AboutUs() {
    return (
        <>
            <Navbar />
            <h1 className="about-heading">Welcome to Trindify</h1>
            <Container>
                <div className="about-us-container">
                    <Row className='aboutContainer'>
                        <Col lg={6}>
                            <div className='about-text'>
                                <p className="about-paragraph">
                                    <span className="highlight">Trindify</span> is not just a marketplace; it's a destination where fashion meets innovation. We're passionate about bringing you the latest trends in clothing, accessories, and electronics from around the world. Our platform is designed to offer you an immersive and seamless shopping experience, making it easier than ever to discover new styles and products.
                                </p>
                                <p className="about-paragraph">
                                    At Trindify, we believe in the power of shopping to connect people and communities. Whether you're looking for the perfect outfit or the latest gadgets, we've got you covered. Join us on this journey, and let's redefine the way you shop!
                                </p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='img-container'>
                                <Image src={about} alt="About Trindify" className="about-img" fluid />
                            </div>
                        </Col>
                    </Row>
                    <h2 className="team-heading">Meet Our Team</h2>
                    <Row className="team-section">
                        <Col lg={4}>
                            <div className="team-member">
                                <Image src={man1} alt="Team Member 1" className="team-member-img" roundedCircle fluid />
                                <h3 className="team-member-name">John Doe</h3>
                                <p className="team-member-role">CEO & Founder</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><FaFacebook /></a>
                                    <a href="#" className="social-link"><FaTwitter /></a>
                                    <a href="#" className="social-link"><FaInstagram /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="team-member">
                                <Image src={man2} alt="Team Member 2" className="team-member-img" roundedCircle fluid />
                                <h3 className="team-member-name">Jane Smith</h3>
                                <p className="team-member-role">Head of Operations</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><FaFacebook /></a>
                                    <a href="#" className="social-link"><FaTwitter /></a>
                                    <a href="#" className="social-link"><FaInstagram /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="team-member">
                                <Image src={man3} alt="Team Member 3" className="team-member-img" roundedCircle fluid />
                                <h3 className="team-member-name">Mike Johnson</h3>
                                <p className="team-member-role">Chief Technology Officer</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><FaFacebook /></a>
                                    <a href="#" className="social-link"><FaTwitter /></a>
                                    <a href="#" className="social-link"><FaInstagram /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="cta-section">
                        <h2 className="cta-heading">Ready to experience the future of shopping?</h2>
                        <Link to='/Store'>
                            <Button style={{ backgroundColor: '#A0522D', outline: 'none', border: 'none' }} className="cta-button">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default AboutUs;
