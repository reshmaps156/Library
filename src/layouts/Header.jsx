import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'#2C5F2D'}} >
        <Container>
          <Navbar.Brand href="#home" style={{color:'#F4E1D2'}}>
           
            XYZ Libarary
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header