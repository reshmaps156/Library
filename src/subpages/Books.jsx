import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { allBookApi, reserveBookApi } from '../services/allApi';
import { useDispatch } from 'react-redux';
import { addToSaved } from '../react-redux/slice/savedBookSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Books() {
  const [allBookData, setAllBookData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); 
  const [reservedBooks, setReservedBooks] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (book) => {
    if (reservedBooks.length >= 2) {
      alert('You can only reserve two books.');
      return;
    }
    setSelectedBook(book);
    setShow(true);
  };

  const handleReserve = async () => {
    if (reservedBooks.length >= 2) {
      alert('You can only reserve two books.');
      return;
    }
  
    if (selectedBook) {
      try {
        const userId = user._id;
        const response = await reserveBookApi(userId, {
          bookId: selectedBook._id,
          username:user.username,
          bookName: selectedBook.bookname,
          author: selectedBook.author,
          availabilty:selectedBook.availabilty
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
  
  

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await allBookApi();
      const bookData = result.data;
      setAllBookData(bookData);
    };

    fetchBooks();
  }, []);

  return (
    <div className='row p-3'>
      {allBookData?.map((books) => (
        <div className="col-md-3 mt-3" key={books._id}>
          <Card style={{ backgroundColor: '#F5F5F5' }} className='shadow'>
            <Card.Img variant="top" className='p-4' height={'250px'} src={books.bookImg} />
            <Card.Body>
              <Card.Title className='text-center'>{books.bookname}</Card.Title>
              <p className='text-center text-secondary'>{books.author}</p>
              <Card.Text className='d-flex justify-content-between'>
                <button
                  type='button'
                  className='btn btn-outline-warning'
                  onClick={() => dispatch(addToSaved(books))}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
                <button
                  className='btn btn-outline-success'
                  onClick={() => handleShow(books)} 
                >
                  <FontAwesomeIcon icon={faBagShopping} />
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
  );
}

export default Books;
