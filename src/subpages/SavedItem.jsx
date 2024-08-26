import React, { useEffect, useState } from 'react';
import { faBagShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { deleteBookApi, getSavedBookApi, reserveBookApi, saveBookApi } from '../services/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import savedIcon from '../assets/savedIcon.png'

function SavedItem() {
    const [userSaved, setUserSaved] = useState([]);
    const savedBookArray = useSelector((state) => state.savedReducer);
    const [reservedBooks, setReservedBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null)
    const userDetails = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = userDetails._id;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (book) => {
        if (reservedBooks.length >= 2) {
            alert('You can only reserve two books.');
            return;
        }
        setSelectedBook(book);
        console.log(selectedBook);

        setShow(true);
    };

    const handleReserve = async () => {
        if (reservedBooks.length >= 2) {
            alert('You can only reserve two books.');
            return;
        }

        if (selectedBook) {
            try {

                const response = await reserveBookApi(userId, {
                    bookId: selectedBook._id,
                    username: userDetails.username,
                    bookName: selectedBook.bookname,
                    author: selectedBook.author,
                    availabilty: selectedBook.availabilty
                });

                if (response) {
                    console.log('Book reserved successfully', response);
                    setReservedBooks(prevReservedBooks => [...prevReservedBooks, selectedBook]);
                }

                handleClose();
            } catch (error) {
                console.error('Failed to reserve book:', error);
            }
        }
    };




    const savebooksfun = async () => {
        try {

            const uniqueBooks = Array.from(new Set(savedBookArray.map(book => book._id)))
                .map(id => {
                    return savedBookArray.find(book => book._id === id);
                });


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
      <>
           {userSaved?.length>0? <div className='row p-3'>
                {userSaved.map((book) => (
                    <div className="col-md-3" key={book._id}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" className='p-4' height={'250px'} src={book.bookImg} />
                            <Card.Body>
                                <Card.Title className='text-center'>{book.bookname}</Card.Title>
                                <p className='text-center text-secondary'>{book.author}</p>
                                <Card.Text className='d-flex justify-content-between'>
                                    <button className='btn btn-outline-success' onClick={() => handleShow(book)}>
                                        <FontAwesomeIcon icon={faBagShopping} />
                                    </button>
                                    <button className='btn btn-outline-primary' onClick={() => deleteBookFn(book._id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
    
                    </div>
                ))}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Reserve</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedBook && (
                            <>
                                <p className='fs-5'><strong>Book Name:</strong> <span className='text-success'>{selectedBook.bookname}</span></p>
                                <p className='fs-5'><strong>Author:</strong> <span className='text-success'>{selectedBook.author}</span></p>
                                <p className='fs-5'><strong>Category:</strong> <span className='text-success'>{selectedBook.category}</span></p>
                                <p className='fs-5'><strong>Status:</strong> <span className='text-success'>{selectedBook.status}</span></p>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={handleReserve}>
                            Reserve
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            :
            <div className='row'>
               <div className="col-md-3"></div>
               <div className="col-md-6  d-flex flex-column align-items-center ">
             
                   <img src={savedIcon} alt="" className='w-50'/>
                   <p className='text-center fs-3 mt-3 fw-bold' style={{color:'#2c5f2d'}}>Your saved list is empty...</p>
             
               </div>
               <div className="col-md-3"></div>
            </div>}
      </>
    );
}

export default SavedItem;
