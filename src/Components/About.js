// AboutUs.js

import React from 'react';
import about from '../images/about.png';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import man1 from '../images/man1.png'
import man2 from '../images/man2.png'
import man3 from '../images/man3.png'

function AboutUs() {
    return (
        <div className="container">


            <h1 style={{ color: '#A0522D', paddingTop: '2rem' }}>About Us</h1>
            <div className='aboutContainer'>
                <p style={{ color: ' #333333', fontSize: '1.1rem' }}>
                    <p>Web platform <span style={{ color: '#FA631A', fontWeight: 'bold', paddingRight: '10px', fontSize: '2rem' }}>Trindify</span>is a cutting-edge online marketplace that aims to revolutionize the way people shop for clothing, accessories, and electronics. Our mission is to connect shoppers with their favorite fashion items and introduce them to new and exciting products from around the world.</p>


                    <p>At Trindify, we believe that shopping has the power to bring people together and transcend boundaries. That's why we're dedicated to creating a seamless and immersive shopping experience for our users.                </p>

                </p>
                <div className='img'><img src={about} /></div>
            </div>
            <h2 style={{ color: '#A0522D', paddingTop: '2rem' }}>Our Team</h2>
            <div className="team-members">
                <div className="team-member">
                    <img
                        src={man1}
                        alt="John Doe"
                    />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                    <img
                        src={man2}

                        alt="Jane Smith"
                    />
                    <h3>Jane Smith</h3>
                    <p>CTO & Co-Founder</p>
                </div>
                <div className="team-member">
                    <img
                        src={man3}
                        alt="John Doe"
                    />
                    <h3>John Doe</h3>
                    <p>Chief Marketing Officer</p>
                </div>
            </div>
            <Link to={'/'}><span style={{ background: '#A0522D', marginTop: '10rem', color: '#ffffff', borderRadius: '50%', padding: '2px 2px 4px 2px' }}><FaArrowLeft /></span></Link>
        </div>
    );
}

export default AboutUs;
