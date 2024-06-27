import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/slices/productsSlices';
import { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from "./Landing";

function Electronics() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const Electronics = products.filter((product) => product.category === "electronics");

    return (
        <>
            <Navbar />
            <hr></hr>
            <div className='categoryStyle'>
                {Electronics.map((Product, index) => (
                    <div className='catContainer'>
                        <div className='image'><img src={Product.image} /></div>
                        <div className='catText'>
                            <h3>{Product.title}</h3>
                            <p>{Product.description}</p>
                            <Link to={'/Store'} ><span className='btnSpan'><Button style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}>Get It </Button></span></Link>
                        </div>
                    </div >
                ))}
            </div >
        </>);
}
export default Electronics;
