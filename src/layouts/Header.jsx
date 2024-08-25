import { faJoomla } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     <Navbar style={{backgroundColor:'#2C5F2D'}} className='p-4'>
        <Container  className='d-flex justify-content-between'>
          <Navbar.Brand href="#home" style={{color:'#F4E1D2',fontFamily:'serif'}} className='d-flex'>
          <FontAwesomeIcon icon={faJoomla} beat className='me-2' size='2xl'/>
            <h3 className='text-capitalize'>BookHouse</h3>
          
          </Navbar.Brand>
          <Link to={'/login'}><button className='btn px-4 py-2' style={{backgroundColor:"#E67E22",color:'white'}}>Login</button></Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Header