import React from 'react'
import './home.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBook, faFlaskVial, faHeart, faLandmarkDome, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';







function Home() {
    return (
        <>
            <div style={{ backgroundColor: '#F1F8E9', height: '90vh', width: '100%', backgroundImage: '' }} className=' d-flex align-items-center justify-content-center flex-column'>
                <div className=''>
                    <h1 className='heroFont' style={{ color: '#2C5F2D' }}>Welcome to XYZ Library</h1>

                    <h1 style={{ color: '#2C5F2D' }}>Discover, Borrow and Enjoy a World of Books</h1>

                    <button className='btn btn-success'>Get started</button>

                </div>

            </div>
            <div style={{ backgroundColor: '#F1F8E9' ,width:'100%'}} >
                <div className='row'>
                    <div className="col-md-1"></div>
                    <div className='col-md-10'>
                        <div className='d-flex justify-content-between'>
                            <h5>Featured Categories</h5>
                            <p>All categories<FontAwesomeIcon icon={faAngleRight} className='ms-1'/></p>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-2">
                                <Card style={{ width: '100%' ,backgroundColor:'#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'><FontAwesomeIcon icon={faPalette} style={{color: "#FFD43B",}} /></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Arts</Card.Subtitle>
                                        <Card.Text>
                                            
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                            <Card style={{ width: '100%' ,backgroundColor:'#F5F5F5'}} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                        <FontAwesomeIcon icon={faHeart} style={{color: "#f10937",}} />
                                            </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Romance</Card.Subtitle>
                                        <Card.Text>
                                            
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                            <Card style={{ width: '100%',backgroundColor:'#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                        <FontAwesomeIcon icon={faLandmarkDome} style={{color: "#0a5ef0",}} />
                                            </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">History</Card.Subtitle>
                                        <Card.Text>
                                            
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                            <Card style={{ width: '100%',backgroundColor:'#F5F5F5' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                        <FontAwesomeIcon icon={faBook} style={{color: "#75fd72",}} />
                                            </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Biography</Card.Subtitle>
                                        <Card.Text>
                                            
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                            <Card style={{ width: '100%',backgroundColor:'#E8F5E9' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                        <FontAwesomeIcon icon={faFlaskVial} style={{color: "#5726e8",}} />
                                            </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">Science</Card.Subtitle>
                                        <Card.Text>
                                            
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2">
                            <Card style={{ width: '100%' ,backgroundColor:'#F5F5F5' }} className='border-0 shadow p-3 mt-3 '>
                                    <Card.Body>
                                        <Card.Title className='text-center'>
                                        <FontAwesomeIcon icon={faGalacticRepublic} style={{color: "#B197FC",}} />
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
        </>
    )
}

export default Home