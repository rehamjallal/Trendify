import React from 'react';
import family from '../images/family.png';
import Navbar from "./Landing";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
    return (
        <>
            <Navbar />
            <div className='featureContent'>
            <h1 className='feature'>Discover Trendify's Unique Features</h1>
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-md-6 mb-4'>
                            <img 
                                src={family} 
                                alt="Family" 
                                className="img-fluid featureImg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <div className='row'>
                                <div className='col-md-12 mb-4'>
                                    <motion.div 
                                        className='card featureCard'
                                        whileHover={{ rotateY: 180 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className='card-body'>
                                            <FaCheckCircle className="featureIcon" />
                                            <h5 className='card-title'>User-friendly Navigation:</h5>
                                            <p className='card-text'>A well-organized menu and search bar make it easy for users to find what they are looking for quickly. Include categories such as Men's, Women's, Kids, and subcategories like Tops, Bottoms, Dresses, etc.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <motion.div 
                                        className='card featureCard'
                                        whileHover={{ rotateY: 180 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className='card-body'>
                                            <FaCheckCircle className="featureIcon" />
                                            <h5 className='card-title'>High-Quality Product Images:</h5>
                                            <p className='card-text'>High-resolution images from multiple angles help customers get a better sense of the product. Consider adding zoom functionality for a closer look.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <motion.div 
                                        className='card featureCard'
                                        whileHover={{ rotateY: 180 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className='card-body'>
                                            <FaCheckCircle className="featureIcon" />
                                            <h5 className='card-title'>Detailed Product Descriptions:</h5>
                                            <p className='card-text'>Provide detailed information about each product, including materials, sizes, colors, care instructions, and any other relevant details.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className='col-md-12 mb-4'>
                                    <motion.div 
                                        className='card featureCard'
                                        whileHover={{ rotateY: 180 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className='card-body'>
                                            <FaCheckCircle className="featureIcon" />
                                            <h5 className='card-title'>Customer Reviews and Ratings:</h5>
                                            <p className='card-text'>Allow customers to leave reviews and ratings for products they have purchased. This builds trust and helps other shoppers make informed decisions.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
