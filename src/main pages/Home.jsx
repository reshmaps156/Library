import React from 'react'
import './home.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBook, faFlaskVial, faHeart, faLandmarkDome, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';








function Home() {
    return (
        <>
         <Header/>
            <div style={{ backgroundColor: '#F1F8E9', height: '90vh', width: '100%', backgroundImage: '' }} className=' d-flex align-items-center justify-content-center flex-column'>
                <div className=''>
                    <h1 className='heroFont' style={{ color: '#2C5F2D' }}>Welcome to XYZ Library</h1>

                    <h1 style={{ color: '#2C5F2D' }}>Discover, Borrow and Enjoy a World of Books</h1>

                    <Link to={'/register'}><button className='btn btn-success'>Get started</button></Link>

                </div>

            </div>
            <div style={{ backgroundColor: '#F1F8E9', width: '100%' }} >
                <div className='row'>
                    <div className="col-md-1"></div>
                    <div className='col-md-10'>
                        <div className='d-flex justify-content-between'>
                            <h5>Featured Categories</h5>
                            <p>All categories<FontAwesomeIcon icon={faAngleRight} className='ms-1' /></p>
                        </div>
                        <div className="row mb-5 ">
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'><FontAwesomeIcon icon={faPalette} style={{ color: "#FFD43B", }} /></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Arts</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#F5F5F5' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <FontAwesomeIcon icon={faHeart} style={{ color: "#f10937", }} />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Romance</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <FontAwesomeIcon icon={faLandmarkDome} style={{ color: "#0a5ef0", }} />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">History</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#F5F5F5' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <FontAwesomeIcon icon={faBook} style={{ color: "#75fd72", }} />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Biography</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <FontAwesomeIcon icon={faFlaskVial} style={{ color: "#5726e8", }} />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Science</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <Card style={{ width: '100%', backgroundColor: '#F5F5F5' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                            <FontAwesomeIcon icon={faGalacticRepublic} style={{ color: "#B197FC", }} />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Fiction</Card.Subtitle>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div style={{ backgroundColor: '#F1F8E9', width: '100%' }}>
                <h4 className='text-center pt-5 '>Recently Added Books</h4>
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 mt-3 p-4">
                        <Card style={{ width: '100%',height:'250px' }}>
                            <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/g/m/t/the-48-laws-of-power-original-imaggw57dgbukgjd.jpeg?q=90&crop=false" className='w-100 h-100'/>
                        </Card>
                    </div>
                    <div className="col-md-2 mt-3 p-4">
                    <Card style={{ width: '100%',height:'250px' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg" className='w-100 h-100'/>
                        </Card>
                    
                    </div>
                    <div className="col-md-2 mt-3 p-4">
                    <Card style={{ width: '100%',height:'250px' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg" className='w-100 h-100'/>
                        </Card>
                    
                    </div>
                    <div className="col-md-2 mt-3 p-4">
                    <Card style={{ width: '100%',height:'250px' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg" className='w-100 h-100'/>
                        </Card>
                
                    </div>
                    <div className="col-md-2 mt-3 p-4">
                    <Card style={{ width: '100%',height:'250px' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562767468l/50782891.jpg" className='w-100 h-100'/>
                        </Card>
                
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default Home