import React from 'react'
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';


function SavedItem() {
  const savedArray = useSelector((state)=>state.savedReducer)
  console.log(savedArray);
  
  return (
    <div className='row p-3 '>
      
    <div className="col-md-3 ">
    <Card className='mt-3'>
      <Card.Img variant="top" className='p-4  ' height={'250px'} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <p className='text-center text-secondary'>Author</p>
        <Card.Text className='d-flex justify-content-between'>
            
            <button className='btn btn-outline-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            <button className='btn btn-outline-primary'><FontAwesomeIcon icon={faTrashCan} /></button>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>

    <h2>No Saved Books</h2>
   
    

</div>
  )
}

export default SavedItem