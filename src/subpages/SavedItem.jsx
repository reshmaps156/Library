import React from 'react'
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';


function SavedItem() {
  return (
    <div className='row p-3 '>
      
    <div className="col-md-4 mt-3">
    <Card >
      <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
            
            <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            <button className='btn btn-primary'><FontAwesomeIcon icon={faTrashCan} /></button>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4 mt-3">
    <Card >
      <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
            
            <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            <button className='btn btn-primary'><FontAwesomeIcon icon={faTrashCan} /></button>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4 mt-3">
    <Card >
      <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
            
            <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            <button className='btn btn-primary'><FontAwesomeIcon icon={faTrashCan} /></button>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4 mt-3">
    <Card >
      <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
            
            <button className='btn btn-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            <button className='btn btn-primary'><FontAwesomeIcon icon={faTrashCan} /></button>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    

</div>
  )
}

export default SavedItem