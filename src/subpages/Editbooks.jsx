import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editBookApi } from '../services/allApi';
import 'react-toastify/dist/ReactToastify.css';

function Editbooks({ bookData }) {
    const [show, setShow] = useState(false);
    const [editBookDetails, setEditBookDetails] = useState({
        bookname: bookData.bookname,
        author: bookData.author,
        bookImg: bookData.bookImg,
        category: bookData.category,
        availabilty: bookData.availabilty,
        status: bookData.status
    })
    const bookId = bookData._id
    
    

    const handleClose = () => setShow(false);
    const handleCancel = () => {
        setEditBookDetails({
            bookname: bookData.bookname,
            author: bookData.author,
            bookImg: bookData.bookImg,
            category: bookData.category,
            availabilty: bookData.availabilty,
            status: bookData.status
        })
    }
    const handleShow = () => setShow(true);
    const handleEdit = async()=>{
        const {bookname,author,bookImg,category,availabilty,status} = editBookDetails
        if(!bookname || !author || !bookImg  || !category || !availabilty || !status){
            alert('Please fill the form')
        }else{
            const result = await editBookApi(bookId,editBookDetails)
            console.log(result);
            if(result.status==200){
                alert('Book Updated Successfully')
                handleClose()
            }else{
                alert('Something went wrong')
            }
            
        }
      
    }
    console.log(editBookDetails);

    return (
        <>
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Books</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Book Name' value={editBookDetails.bookname}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, bookname: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Author' value={editBookDetails.author}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, author: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Book Image' value={editBookDetails.bookImg}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, bookImg: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Category' value={editBookDetails.category}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, category: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='availabilty' value={editBookDetails.availabilty}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, availabilty: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='status' value={editBookDetails.status}
                            onChange={(e) => setEditBookDetails({ ...editBookDetails, status: e.target.value })} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Update
                    </Button>
                </Modal.Footer>
                
            </Modal>
           
          

        </>
    )
}

export default Editbooks