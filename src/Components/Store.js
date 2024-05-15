import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/slices/productsSlices';
import { addToCart } from '../rtk/slices/cartslices';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CurrencyFormatter from './CurrencyFormatter';
import Button from 'react-bootstrap/Button';
import AppNavbar from './Navbar';
import About from './About';
function Store() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <AppNavbar />
            <div className='store'><Container className='storContainer'>

                <Row style={{ paddingTop: '8rem' }}>
                    {products.map((product) => (
                        <div className='col' key={product.id}>
                            <Card style={{ width: '15rem', height: "17rem", border: "1px solid re" }} className='mt-5 card'>
                                <Card.Img variant="top" src={product.image} style={{ height: "120px", width: "170px", }} className='img-fluid  m-3 ' />
                                <Card.Title className='d-flex justify-content-between p-2'>
                                    <span>{product.category}</span><span><CurrencyFormatter amount={product.price} currency={'USD'} /></span></Card.Title>
                                <Card.Body><div>
                                    <Button variant='black' className='add w-100 py-2' onClick={() => { dispatch(addToCart(product)) }}>Add to Shopping Car</Button></div></Card.Body></Card></div>))}</Row></Container></div></>);
}
export default Store;