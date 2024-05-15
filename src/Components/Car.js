import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Button, Modal } from 'react-bootstrap';
import { deleteCart, deleteFromCart } from '../rtk/slices/cartslices'; 
import CurrencyFormatter from './CurrencyFormatter';

function Car() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.products);
  const totalCoast = useSelector((state) => state.cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0));

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = (productId) => {
    setProductIdToDelete(productId);
    setShowConfirmation(true);
  }

  const handleDelete = () => {
    dispatch(deleteCart({ id: productIdToDelete }));
    setShowConfirmation(false);
  }

  const handleDecreaseQuantity = (productId) => {
    dispatch(deleteFromCart({ id: productId }));
  }

  return (
    <>
      <h4 className='price'>Your total cost is: <CurrencyFormatter currency={'USD'} amount={totalCoast.toFixed(2)} /></h4>
      <Table responsive striped bordered hover className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((product) => (
            <tr key={product.id}>
              <td>
                <Image src={product.image} alt={product.title} className="product-image" />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <div className='buttons'>
                  {product.quantity > 1 ?
                    <Button className="mx-1" variant="outline-secondary" onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
                    :
                    null}
                  <Button className='remove-button' variant="danger" onClick={() => handleShowConfirmation(product.id)}>Remove</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showConfirmation} onHide={handleCloseConfirmation} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Car;
