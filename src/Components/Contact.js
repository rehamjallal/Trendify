import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaHeadphones } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <div className="section-wrapper contact">
                <Navbar.Brand>
                    <div className='logo'>
                        <p className='logoText'><span className='tLetter' >T</span>rendify</p>
                    </div>
                </Navbar.Brand>
                <div className="section-overlay contactUs ">
                    <h1 className="contact-text">Contact Us</h1>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <FaHeadphones className='titleIcon' />
                                <h5 className="card-title title">Contact Info</h5>
                                <div className="contactInfo">
                                    <div className="contactItem">
                                        <FaPhone className='icon' />
                                        <p className='para'>Telephone: 01151561788</p>
                                    </div>
                                    <div className="contactItem">
                                        <FaWhatsapp className='icon Whatsapp' />
                                        <p className='para'>WhatsApp: 0105140788</p>
                                    </div>
                                    <div className="contactItem">
                                        <FaEnvelope className='icon' />
                                        <p className='para'>Email: roma@gmail.com</p>
                                    </div>
                                    <div className="contactItem">
                                        <FaMapMarkerAlt className='icon' />
                                        <p className='para'>Address: Cairo, Egypt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="map-responsive">
                                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6918058.444535008!2d28.44442818359373!3d30.716230218869255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584e7512155c39%3A0x1cf83e6b7bf4d669!2sEgypt!5e0!3m2!1sen!2sus!4v1621982562345!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer"><p>&copy; {new Date().getFullYear()} Rehame Jalal </p></div>
        </>
    );
}

export default Contact;
