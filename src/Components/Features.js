import React from 'react';
import ReactPlayer from 'react-player';
import FamilyVideo from '../video/Familyvideo.mp4';
import family from '../images/family.png'
function Features() {
    return (
        <div className='featureContent'>
            <h1 className='steps'>Features</h1>
            <div className="container">
                <div className='featurevid'>
                    <img src={family} style={{width:'95%'}} />
                </div>
                <div className="featureCarts">
                    <div className='cart'>
                        <h4>User-friendly Navigation:</h4>
                        <p>A well-organized menu and search bar make it easy for users to find what they are looking for quickly. Include categories such as Men's, Women's, Kids, and subcategories like Tops, Bottoms, Dresses, etc.</p>
                    </div>
                    <div className='cart'>
                        <h4>High-Quality Product Images:</h4>
                        <p>High-resolution images from multiple angles help customers get a better sense of the product. Consider adding zoom functionality for a closer look.
                        </p>
                    </div>
                    <div className='cart'>
                        <h4>Detailed Product Descriptions:</h4>
                        <p>Provide detailed information about each product, including materials, sizes, colors, care instructions, and any other relevant details.</p>
                    </div>
                    <div className='cart'>
                        <h4>Customer Reviews and Ratings:</h4>
                        <p>Allow customers to leave reviews and ratings for products they have purchased. This builds trust and helps other shoppers make informed decisions.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Features;
