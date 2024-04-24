import { Col, Row } from 'react-bootstrap';
import '../App.css';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaHeadphones } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <div className="section-wrapper contact">
                <p style={{ zIndex: '99', color: 'white', padding: '10% 0 0 20%' }}>
                    <Navbar.Brand href="#">
                        <div className='logo'>
                            <p className='logoText'><span className='tLetter' >T</span>rendify</p>
                        </div>
                    </Navbar.Brand>
                </p>
                <div className="section-overlay contactUs ">
                    <h1 className="contact-text">Contact us</h1>
                </div>
            </div>


            <div className='cards'>
                <div className='container'>
                    <div className='contactRow'>
                        <div className='cardContact'>
                            <Link href="#" className='titleIcon'><FaHeadphones /></Link>
                            <p className='title'>Contact info</p>
                            <p className='para'>
                                <Link href="#" className='icon' ><FaPhone /></Link>
                                01151561788</p>
                            <p className='para'>
                                <Link href="#" className='icon'><FaPhone /></Link>
                                0105140788</p>
                            <p className='para'>
                                <Link href="#" className='icon'><FaEnvelope /></Link>
                                roma@gmail.com
                            </p>

                        </div>

                        <div className='cardContact '>
                            <Link href="#" className='titleIcon'><FaWhatsapp /></Link>
                            <p className='title'>Whatsapp</p>
                            <div className='slice'>
                                <p className='para'><Link href="#" className='icon Whatsapp' ><FaWhatsapp /></Link>support number one</p></div>
                            <div className='slice'>
                                <p className='para'><Link href="#" className='icon Whatsapp' ><FaWhatsapp /></Link>support number Tow</p>
                            </div>
                        </div>

                        <div className='cardContact'>
                            <Link href="#" className='titleIcon'>< FaMapMarkerAlt /></Link>
                            <p className='title'>Address Way​</p>
                            <h2 style={{ color: "white", fontWeight: "bold" }}>Cairo , Egypt</h2></div>

                    </div></div></div>












            <div className='foothr '></div><div className="footer"><p>&copy; {new Date().getFullYear()} Rehame Jalal </p></div>
        </>)
};
export default Contact;