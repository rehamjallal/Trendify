import '../App.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Shopping from '../images/Shopping.png';
import { AiOutlineUser } from "react-icons/ai";
import { FaStore } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";

import Dropdown from './Dropdown';


function Landing() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <div className='navbarContent'>
                <div className='container'>
                    <div className='search'><Dropdown /></div>
                    <div className='logo'>
                        <p className='logoText'><span className='tLetter' >T</span>rendify</p>
                        <img src={Shopping} className='image' alt='logo' />
                    </div>
                    <div className='last'>
                        <Link to={'/Sign'}><div className='user'><AiOutlineUser style={{ color: "#FA631A", fontSize: "2.4rem", paddingBottom: "15px" }} /><p>sign up</p></div></Link>
                        <Link to={'/Store'} ><div className='store'><FaStore style={{ color: "#FA631A", fontSize: "2.4rem", paddingBottom: "15px" }} /><p>Store</p> </div></Link>
                    </div>
                </div>
            </div>
            <div className='links' style={{ display: 'flex', textAlign: "center", justifyContent: "center", padding: "40px 0" }}>
                <Link to={'/'}><p style={{paddingTop:'10px'}}>Home</p></Link>
                <Link to={"/About"}><p style={{paddingTop:'10px'}} >About US</p></Link>
                <Link to={"/features"}><p style={{paddingTop:'10px'}} >Features</p></Link>

                <Link to={"/contact"}><p style={{paddingTop:'10px'}} >Contact us</p></Link>
            </div>

            {showScrollButton && (
                <Button variant="primary" onClick={scrollToTop} style={{ position: 'fixed',borderRadius:'50%',alignItems:'center' ,bottom: '50px', right: '30px',backgroundColor:"#A0522D",border:"none",outline:'none' }}>
                    <FaLongArrowAltUp />
                </Button>
            )}
        </>

    );
}
export default Landing;
