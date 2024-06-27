import React from 'react';
import Shopping from '../images/Shopping.png';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
}
    from 'mdb-react-ui-kit';

function App() {
    return (
        <MDBContainer fluid className='p-4'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    {/* <Link to={'/'}><span style={{background:'#A0522D',color:'#ffffff',borderRadius:'50%',padding:'2px 2px 4px 2px'}}><FaArrowLeft /></span></Link> */}
                    <div className='logo d-flex' style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <img src={Shopping} className='image' style={{ height: '5rem' }} alt='logo' />
                        <p className='logoText'><span className='tLetter' >T</span>rendify</p>
                    </div>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                        The best offer <br />
                        for your<spans style={{ color: '#FA631A' }} > Shopping</spans>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                        Discover the joy of seamless shopping at Trendify! Find the latest trends in fashion, electronics, and more. With our curated collection and unbeatable offers, your shopping experience will be nothing short of amazing. Why wait? Start exploring now!
                    </p>

                </MDBCol>

                <MDBCol md='6'>

                    <MDBCard className='my-5'>
                        <MDBCardBody className='p-5'>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md' style={{ background: 'none', outline: 'none', border: 'none', height: '2.5rem', backgroundColor: '#A0522D', color: '#FFFFFF' }}>sign up</MDBBtn>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <CiFacebook style={{ color: '#FA631A' }} />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <FaXTwitter style={{ color: '#FA631A' }} />

                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <FaGoogle style={{ color: '#FA631A' }} />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <FaGithub style={{ color: '#FA631A' }} />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default App;