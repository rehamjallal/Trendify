import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Form, Button, Offcanvas } from 'react-bootstrap';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Car from './Car';

function APPnavbar() {
  const cart = useSelector((state) => state.cart.products);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalCount = cart.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <>
      <Navbar expand="lg" className="head" fixed='top' style={{marginBottom:'40rem'}}>
        <Container fluid className='storeContainer'>
          <Navbar.Brand >
            <div className='logo'>
              <p className='logoText'><span className='tLetter' >T</span>rendify</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='navbarScroll'  style={{backgroundColor:'#ffffff'}} />
          <Navbar.Collapse  id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
              <Link to={'/contact'} className='navLink' style={{ color: '#ffffff',textDecoration:'none', fontSize: '1.2rem', margin: '1rem 1rem' }}><span className='linkSpan'>ContactUs </span></Link>
              <Link to={'/'} className='navLink' style={{ color: '#ffffff',textDecoration:'none', fontSize: '1.2rem', margin: '1rem 1rem' }}><span  className='linkSpan' >Home</span></Link>
            </Nav>
            <Form className="d-flex car">
              <Button variant="primary" className='navIcon' onClick={handleShow} style={{ border: 'none', outline: 'none', background: 'none', color: '#ffffff' }}>
                <MdOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
                <span className='navSpan'>{totalCount}</span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas 
  show={show} 
  placement="end" 
  onHide={handleClose} 
  style={{ 
    width: '100%', 
    maxWidth: '420px', 
    '@media (max-width: 768px)': { 
      width: '100%' 
    },
    '@media (min-width: 768px) and (max-width: 992px)': { 
      width: '80%' 
    },
    '@media (min-width: 992px) and (max-width: 1200px)': { 
      width: '70%' 
    }
  }}
> 
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
