import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'








function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: '#2C5F2D', color: '#E5E5E5' }}>
                <Row className='  p-5' >
                <Col sm={12} md={2} className='mt-5'>
                        <div>
                            <h5 className='mb-5'>Mission</h5>

                            <p >Our mission is to make books accessible to everyone,everywhare.</p>
                            
                        </div>
                    </Col>
                    <Col sm={12} md={3} className='mt-5 '>
                        <div>
                            <h5 className='mb-5'>Subscribe</h5>
                            <div className='d-flex'>
                                <input type="text" placeholder='Email' className='form-control me-2' />
                                <button className='btn' style={{ backgroundColor: '#FFC857' }}>Click</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className='mt-5'>
                        <div>
                            <h5 className='mb-5'>Quick Links</h5>

                            <p>Home</p>
                            <p>Catalog</p>
                            <p>Login</p>
                            <p>Contact Us</p>
                        </div>
                    </Col>

                    <Col sm={12} md={3} className='mt-5'>
                        <div>
                            <h5 className='mb-5'>Contact Information</h5>

                            <p>Email : support@libraryapp.com</p>
                            <p>Phone : +91 6565623560</p>
                            <p>Address : 007 Library wst, BookHouse</p>
                        </div>
                    </Col>

                    <Col sm={12} md={2} className='mt-5'>
                        <div>
                            <h5 className='mb-5'>Follow Us</h5>
                            <div className='d-flex justify-content-between  '>
                                <FontAwesomeIcon icon={faFacebook} size='xl' />
                                <FontAwesomeIcon icon={faXTwitter} size='xl' />
                                <FontAwesomeIcon icon={faInstagram} size='xl' />
                                <FontAwesomeIcon icon={faYoutube} size='xl' />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='text-center ' style={{color:'#E5E5E5'}}>
                    <p className='pb-4'>© 2024 Library Management Application.All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer