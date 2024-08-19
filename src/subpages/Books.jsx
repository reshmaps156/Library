import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';


function Books() {
  return (
    <div className='row p-3 '>
      
        <div className="col-md-4 mt-3">
        <Card style={{backgroundColor:'#F5F5F5'}} className='shadow'>
          <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faBookmark} /></button>
                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            </Card.Text>

          </Card.Body>
        </Card>
        </div>
        <div className="col-md-4 mt-3">
        <Card style={{backgroundColor:'#F5F5F5'}} className='shadow'>
          <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faBookmark} /></button>
                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            </Card.Text>

          </Card.Body>
        </Card>
        </div>
        <div className="col-md-4 mt-3">
        <Card style={{backgroundColor:'#F5F5F5'}} className='shadow'>
          <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faBookmark} /></button>
                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            </Card.Text>

          </Card.Body>
        </Card>
        </div>
        <div className="col-md-4 mt-3">
        <Card style={{backgroundColor:'#F5F5F5'}} className='shadow'>
          <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faBookmark} /></button>
                <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            </Card.Text>

          </Card.Body>
        </Card>
        </div>
        

    </div>
  )
}

export default Books