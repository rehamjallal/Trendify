import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/slices/productsSlices';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from "./Landing";

function Man() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const manProducts = products.filter((product) => product.category === "men's clothing");

    return (

        <> 
            <Navbar />
            <hr></hr>
            <div className='categoryStyle'>
                {manProducts.map((Product, index) => (
                    <div className='catContainer'>
                        <div className='image'><img src={Product.image}  alt='img'/></div>
                        <div className='catText'>
                            <h3>{Product.title}</h3>
                            <p>{Product.description}</p>
                            <Link to={'/Store'} ><span className='btnSpan'><Button style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}>Get It </Button></span></Link>
                        </div>
                    </div >
                ))}
            </div >
        </>
    )
}
export default Man;
