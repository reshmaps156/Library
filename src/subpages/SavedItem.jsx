import React, { useEffect, useState } from 'react';
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { deleteBookApi, getSavedBookApi, saveBookApi } from '../services/allApi';

function SavedItem() {
    const [userSaved, setUserSaved] = useState([]);
    const savedBookArray = useSelector((state) => state.savedReducer);
    const userDetails = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = userDetails._id;
   
    
    const savebooksfun = async () => {
      try {
          // Deduplicate the savedBookArray by _id
          const uniqueBooks = Array.from(new Set(savedBookArray.map(book => book._id)))
              .map(id => {
                  return savedBookArray.find(book => book._id === id);
              });
  
          // Debug: Log the deduplicated books
          console.log('Unique books:', uniqueBooks);
  
          const result = await saveBookApi(userId, uniqueBooks);
          console.log('Save result:', result);
      } catch (error) {
          console.error('Error saving books:', error);
      }
  };
  

    const getSavedBookfn = async () => {
        try {
            const result = await getSavedBookApi(userId);
            setUserSaved(result.data.savedBuk || []); 
        } catch (error) {
            console.error('Error fetching saved books:', error);
        }
    };

    const deleteBookFn = async (bookId) => {
      try {
          const result = await deleteBookApi(userId, bookId);
          console.log('Delete result:', result);
          // Refresh the list of saved books
          getSavedBookfn();
      } catch (error) {
          console.error('Error deleting book:', error);
      }
  };

    useEffect(() => {
        
        savebooksfun();
        getSavedBookfn();
    }, [savedBookArray, userId]); 

    return (
        <div className='row p-3'>
            {userSaved.map((book) => (
                <div className="col-md-3" key={book._id}>
                    <Card className='mt-3'>
                        <Card.Img variant="top" className='p-4' height={'250px'} src={book.bookImg} />
                        <Card.Body>
                            <Card.Title className='text-center'>{book.bookname}</Card.Title>
                            <p className='text-center text-secondary'>{book.author}</p>
                            <Card.Text className='d-flex justify-content-between'>
                                <button className='btn btn-outline-success'>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </button>
                                <button className='btn btn-outline-primary' onClick={()=>deleteBookFn(book._id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default SavedItem;
