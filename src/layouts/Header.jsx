import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'#2C5F2D'}} >
        <Container  className='d-flex justify-content-between'>
          <Navbar.Brand href="#home" style={{color:'#F4E1D2'}}>
           
            <p>XYZ Libarary</p>
          
          </Navbar.Brand>
          <Link to={'/login'}><button className='btn btn-warning'>Login</button></Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Header