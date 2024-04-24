import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Button, Modal } from 'react-bootstrap';
import { deleteCart, deleteFromCart } from '../rtk/slices/cartslices'; // Fixed import
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
    dispatch(deleteFromCart({ id: productId })); // Changed to deleteFromCart
  }

  return (
    <>
      <h4 className='price'>your total coast is: <CurrencyFormatter currency={'USD'} amount={totalCoast.toFixed(2)} /></h4>
      <Table className='table' size='sm'>
        <thead>
          <tr>
            <th>IMG</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((product) => (
            <tr key={product.id}>
              <td>
                <Image src={product.image} alt={product.title} style={{ height: "100px", width: "100px" }} />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <div className='buttons'>
                  {product.quantity > 1 ? 
                    <Button className="mx-1" variant="outline-secondary" onClick={() => handleDecreaseQuantity(product.id)}>-</Button> 
                    : 
                    <Button className='d-none'></Button>}
                  <Button className='bg-danger' variant="outline-light" onClick={() => handleShowConfirmation(product.id)}>remove</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>!!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseConfirmation}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Car;
// import '../App.css';
// import Table from 'react-bootstrap/Table';
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from 'react';
// import React from "react";
// import Image from 'react-bootstrap/Image';
// import { deleteCart, deleteFromQuantity } from '../rtk/slices/cartslices';
// import CurrencyFormatter from './CurrencyFormatter';
// import { Button, Modal } from 'react-bootstrap';

// function Car() {
//     const dispatch = useDispatch();
//     const carts = useSelector(state => state.cart.products);

//     const totalCoast = carts.reduce((acc, product) => {
//         acc += product.price * product.quantity
//         return acc
//     }, 0)

//     // modal
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [productIdToDelete, setProductIdToDelete] = useState(null);

//     const handleCloseConfirmation = () => setShowConfirmation(false);

//     const handleShowConfirmation = (productId) => {
//         setProductIdToDelete(productId);
//         setShowConfirmation(true);
//     }

//     const handleDelete = () => {
//         dispatch(deleteCart(productIdToDelete));
//         setShowConfirmation(false);
//     }

//     return (
//         <>
//             <h4 className='price'>your total coast is: <CurrencyFormatter currency={'USD'} amount={totalCoast.toFixed(2)} /></h4>
//             <Table className='table' size='sm'>

//                 <thead><tr><th>IMG</th><th >Price</th><th>Quantity</th><th>Actions</th></tr>
//                 </thead><tbody>{carts.map((product) => (<tr><td><Image src={product.image} alt={product.title} style={{ height: "100px", width: "100px", }} /></td><td>{product.price}</td>
//                     <td>{product.quantity}</td><td><div className='buttons'>{product.quantity > 1 ? <Button className="mx-1" variant="outline-secondary" onClick={() => dispatch(deleteFromQuantity(product.id))}>-</Button> : <Button className='d-none'></Button>}<Button className='bg-danger' variant="outline-light" onClick={() => handleShowConfirmation(product.id)}>remove</Button></div></td></tr>))}</tbody></Table>
//             <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
//                 <Modal.Header closeButton><Modal.Title>!!!!!</Modal.Title></Modal.Header><Modal.Body>Are you sure you want to delete this product?</Modal.Body><Modal.Footer><Button variant="success" onClick={handleCloseConfirmation}>Cancel</Button><Button variant="danger" onClick={handleDelete}>Delete</Button></Modal.Footer></Modal>
//         </>

//     )
// }

// export default Car;
// import React from "react";
// import { Table, Image, Button, Modal } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteFromCart } from "../rtk/slices/cartslices";
// import CurrencyFormatter from "./CurrencyFormatter";

// function Car() {
//   const dispatch = useDispatch();
//   const carts = useSelector((state) => state.cart.products);
//   const totalCount = useSelector((state) => state.cart.totalCount);

//   const totalCoast = carts.reduce((acc, product) => {
//     acc += product.price * product.quantity;
//     return acc;
//   }, 0);

//   const handleDelete = (id) => {
//     dispatch(deleteFromCart({ id: id }));
//   };

//   return (
//     <>
//       <h4 className="price">
//         Your total coast is:{" "}
//         <CurrencyFormatter currency={"USD"} amount={totalCoast.toFixed(2)} />
//       </h4>
//       <Table className="table" size="sm">
//         <thead>
//           <tr>
//             <th>IMG</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {carts.map((product) => (
//             <tr key={product.id}>
//               <td>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   style={{ height: "100px", width: "100px" }}
//                 />
//               </td>
//               <td>{product.price}</td>
//               <td>{product.quantity}</td>
//               <td>
//                 <Button
//                   className="mx-1"
//                   variant="outline-secondary"
//                   onClick={() => handleDelete(product.id)}
//                 >
//                   -
//                 </Button>
//                 <Button
//                   className="bg-danger"
//                   variant="outline-light"
//                   onClick={() => handleDelete(product.id)}
//                 >
//                   Remove
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// }

// export default Car;
