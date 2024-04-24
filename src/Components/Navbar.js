// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import  store  from '../rtk/store';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// import Car from './Car';

// // function APPnavbar() {
// //     const totalCount = useSelector((state) => state.cart.totalCount);
// //     const [showCart, setShowCart] = useState(false);

// //     const handleCartShow = () => setShowCart(true);
// //     const handleCartClose = () => setShowCart(false);

// //     return (
// //         <>
// //             <Navbar expand="lg" className="head" fixed='top'>
// //                 <Container fluid className='storeContainer'>
// //                     <Navbar.Brand href="#"><div className='logo'>
// //                         <p className='logoText'><span className='tLetter' >T</span>rendify</p>
// //                     </div></Navbar.Brand>
// //                     <Navbar.Toggle aria-controls="navbarScroll" />
// //                     <Navbar.Collapse id="navbarScroll">
// //                         <Nav
// //                             className="me-auto my-2 my-lg-0"
// //                             style={{ maxHeight: '100px' }}
// //                             navbarScroll >
// //                             <Nav.Link href="#action1" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }} >Home</Nav.Link>
// //                             <Nav.Link href="#action2" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }}>Contact</Nav.Link>
// //                             <NavDropdown title="Products Category" id="navbarScrollingDropdown">
// //                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
// //                                 <NavDropdown.Item href="#action4">
// //                                     Another action
// //                                 </NavDropdown.Item>
// //                                 <NavDropdown.Divider />
// //                                 <NavDropdown.Item href="#action5">
// //                                     Something else here
// //                                 </NavDropdown.Item>
// //                             </NavDropdown>
// //                         </Nav>
// //                         <Form className="d-flex">
// //                             <button
// //                                 style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}
// //                                 className='navIcon'
// //                                 onClick={handleCartShow}
// //                             >
// //                                 <MdOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
// //                                 <span className='navSpan'>{totalCount}</span>
// //                             </button>
// //                         </Form>
// //                     </Navbar.Collapse>
// //                 </Container>
// //             </Navbar>
// //             <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
// //                 <Offcanvas.Header closeButton>
// //                     <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
// //                 </Offcanvas.Header>
// //                 <Offcanvas.Body>
// //                     <Car />
// //                     {/* Add your shopping cart content here */}
// //                 </Offcanvas.Body>
// //             </Offcanvas>
// //         </>
// //     );
// // }
// function APPnavbar() {
//     const totalCount = useSelector((state) => state.cart.totalCount);
//     const [showCart, setShowCart] = useState(false);

//     const handleCartShow = () => setShowCart(true);
//     const handleCartClose = () => setShowCart(false);

//     return (
//         <>
//             <Navbar expand="lg" className="head" fixed='top'>
//                 <Container fluid className='storeContainer'>
//                     <Navbar.Brand href="#"><div className='logo'>
//                         <p className='logoText'><span className='tLetter' >T</span>rendify</p>
//                     </div></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-2 my-lg-0"
//                             style={{ maxHeight: '100px' }}
//                             navbarScroll >
//                             <Nav.Link href="#action1" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }} >Home</Nav.Link>
//                             <Nav.Link href="#action2" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }}>Contact</Nav.Link>
//                             <NavDropdown title="Products Category" id="navbarScrollingDropdown">
//                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action4">
//                                     Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action5">
//                                     Something else here
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                         <Form className="d-flex">
//                             <button
//                                 style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}
//                                 className='navIcon'
//                                 onClick={handleCartShow}
//                             >
//                                 <MdOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
//                                 <span className='navSpan'>{totalCount}</span>
//                             </button>
//                         </Form>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Car />
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// export default APPnavbar;
// import React, { useState } from 'react';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../rtk/slices/cartslices';
// import { Offcanvas } from 'react-bootstrap';
// import Car from './Car';

// function APPnavbar() {
//     const totalCount = useSelector((state) => state.cart.totalCount);
//     const [showCart, setShowCart] = useState(false);
//     const dispatch = useDispatch();

//     const handleCartShow = () => setShowCart(true);
//     const handleCartClose = () => setShowCart(false);

//     return (
//         <>
//             <Navbar expand="lg" className="head" fixed='top'>
//                 <Container fluid className='storeContainer'>
//                     <Navbar.Brand href="#"><div className='logo'>
//                         <p className='logoText'><span className='tLetter' >T</span>rendify</p>
//                     </div></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-2 my-lg-0"
//                             style={{ maxHeight: '100px' }}
//                             navbarScroll >
//                             <Nav.Link href="#action1" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }} >Home</Nav.Link>
//                             <Nav.Link href="#action2" style={{ color: '#ffffff', fontSize: '1.2rem', margin: '0 1rem' }}>Contact</Nav.Link>
//                             <NavDropdown title="Products Category" id="navbarScrollingDropdown">
//                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action4">
//                                     Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action5">
//                                     Something else here
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                         <Form className="d-flex">
//                             <button
//                                 style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}
//                                 className='navIcon'
//                                 onClick={handleCartShow}
//                             >
//                                 <MdOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
//                                 <span className='navSpan'>{totalCount}</span>
//                             </button>
//                         </Form>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Car />
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// export default APPnavbar;
// APPnavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from '../rtk/slices/cartslices';
import Car from './Car';

function APPnavbar() {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Calculate total count
  const totalCount = cart.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <>
      <Navbar expand="lg" className="head" fixed='top' style={{marginBottom:'40rem'}}>
        <Container fluid className='storeContainer'>
          <Navbar.Brand href="#">
            <div className='logo'>
              <p className='logoText'><span className='tLetter' >T</span>rendify</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to={'/'} href="#action1" className='navLink' style={{ color: '#ffffff',textDecoration:'none', fontSize: '1.2rem', margin: '1rem 1rem' }}><span  className='linkSpan' >Home</span></Link>
              <Link to={'/contact'} href="#action1" className='navLink' style={{ color: '#ffffff',textDecoration:'none', fontSize: '1.2rem', margin: '1rem 1rem' }}><span className='linkSpan'>Contact Us </span></Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="primary" className='navIcon' onClick={handleShow} style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}>
                <MdOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
                <span className='navSpan'>{totalCount}</span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome To Shopping Car</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Car />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default APPnavbar;
