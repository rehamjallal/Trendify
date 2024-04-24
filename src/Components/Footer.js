import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Shopping from '../images/Shopping.png';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <MDBFooter bgColor='info' color='light' className='foot text-center text-lg-start text-muted' fixed='bottom'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span style={{ color: "#ffffff", fontSize: '1.5rem', cursor: "pointer" }}>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset' >
                        <CiFacebook className='footIcons' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FaXTwitter className='footIcons' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FaGoogle className='footIcons' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FaInstagram className='footIcons' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FaLinkedinIn className='footIcons' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <FaGithub className='footIcons' />

                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                <div className='logo'>
                                    <p className='logoText'><span className='tLetter' >T</span>rendify</p>
                                    <img src={Shopping} className='image' alt='logo' />
                                </div>              </h6>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 hfoot'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Women
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Men
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Accessories
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Electronics
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4  hfoot'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4  hfoot'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Egypt,Cairo
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@email.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />01151561788
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" />01051407885
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold'>
                    Rehame Galal
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;