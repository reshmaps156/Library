import { faBagShopping, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { allBookApi, removeBookApi, reserveBookApi } from '../services/allApi';
import { useDispatch } from 'react-redux';
import { addToSaved } from '../react-redux/slice/savedBookSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editbooks from './Editbooks';
import { addResponseContext, deleteResponseContext, editResponseContext, searchKeyContext } from '../context/DataShare';

function Books() {
  const [allBookData, setAllBookData] = useState([]);
  const [showModal1, setShowModal1] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [reservedBooks, setReservedBooks] = useState([]);
  const {addResponse} = useContext(addResponseContext)
  const {editResponse} = useContext(editResponseContext)
  const {deleteResponse,setDeleteResponse} = useContext(deleteResponseContext)
  const {searchKey} = useContext(searchKeyContext)
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const dispatch = useDispatch();
  const handleCloseModal1 = () => setShowModal1(false);


  const handleDeleteBook = async (book) => {
    const result = await removeBookApi(book._id)
    if (result.status == 200) {
      toast.success('Book Deleted')
      setDeleteResponse(result)
    }


  }

  const handleConfirmReserve = (book) => {
    if (reservedBooks.length >= 2) {
      alert('You can only reserve two books.');
      return;
    }
    setSelectedBook(book);
    setShowModal1(true);
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
          username: user.username,
          bookName: selectedBook.bookname,
          author: selectedBook.author,
          availabilty: selectedBook.availabilty
        });

        if (response) {
          console.log('Book reserved successfully', response);
          setReservedBooks(prevReservedBooks => [...prevReservedBooks, selectedBook]);
        }

        handleCloseModal1();
      } catch (error) {
        console.error('Failed to reserve book:', error);
      }
    }
  };



  useEffect(() => {
    const fetchBooks = async () => {
      const result = await allBookApi(searchKey);
      
      const bookData = result.data;
      setAllBookData(bookData);
      
      
    };
   
    fetchBooks();
  }, [addResponse,editResponse,deleteResponse,searchKey]);

  return (
    <div className='row p-3'>
      {allBookData?.map((books) => (
        <div className="col-md-3 mt-3" key={books._id}>
          <Card style={{ backgroundColor: '#F5F5F5' }} className='shadow'>
            <Card.Img variant="top" className='p-4' height={'250px'} src={books.bookImg} />
            <Card.Body>
              <Card.Title className='text-center'>{books.bookname}</Card.Title>
              <p className='text-center text-secondary'>{books.author}</p>
              {user.access == 'user' &&
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
                    onClick={() => handleConfirmReserve(books)}
                  >
                    <FontAwesomeIcon icon={faBagShopping} />
                  </button>
                </Card.Text>
              }
              {user.access == 'admin' &&
                <Card.Text className='d-flex justify-content-between'>
                  <button
                    type='button'
                    className='btn btn-outline-warning'
                  >
                    <Editbooks bookData={books}/>
                  </button>
                  <button
                    className='btn btn-outline-primary'
                    onClick={() => handleDeleteBook(books)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </Card.Text>
              }
            </Card.Body>


          </Card>
        </div>
      ))}

      <Modal show={showModal1} onHide={handleCloseModal1}>
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
          <Button variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button>
          <Button variant="success" onClick={handleReserve}>
            Reserve
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' transition={Zoom} />
    </div>
  );
}

export default Books;
