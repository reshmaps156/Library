import { faBars, faBookmark, faCalendarCheck, faChartLine, faClipboard, faFileArrowDown, faPowerOff, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Overview from '../admin/Overview';
import Requests from '../admin/Requests';
import Books from '../subpages/Books';
import Status from '../admin/Status';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBookApi } from '../services/allApi';

function Adminpanel() {
    const [show, setShow] = useState(false);
    const [isCollapsed, setIsCollpased] = useState(false)
    const [isOverview, setIsOverview] = useState(true)
    const [isRequest, setIsRequest] = useState(false)
    const [isBook, setIsBooks] = useState(false)
    const [isStatus, setIsStatus] = useState(false)
    const [bookData, setBookData] = useState({
        bookname: "",
        author: "",
        bookImg: "",
        category:"",
        availabilty: ""
    })

    const handleCancel = () => {
        setBookData({
            bookname: "",
            author: "",
            bookImg: "",
            category:"",
            availabilty: ""
        })
    }
    const handleCollpase = () => {
        setIsCollpased(!isCollapsed)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOverview = () => {
        setIsOverview(true)
        setIsRequest(false)
        setIsBooks(false)
        setIsStatus(false)
    }
    const handleRequest = () => {
        setIsOverview(false)
        setIsRequest(true)
        setIsBooks(false)
        setIsStatus(false)
    }
    const handleBooks = () => {
        setIsOverview(false)
        setIsRequest(false)
        setIsBooks(true)
        setIsStatus(false)
    }
    const handleStatus = () => {
        setIsOverview(false)
        setIsRequest(false)
        setIsBooks(false)
        setIsStatus(true)
    }
    const handleAddBook =async()=>{
        const {bookname,author,bookImg,category,availabilty} = bookData
        if(!bookname || !author || !bookImg ||!category || !availabilty){
            toast.info('Please fill the form completely')
        }else{
            const result = await addBookApi(bookData)
            console.log(result);
            
            if(result.data){
                toast.success('Book added successfully')
                setBookData({
                    bookname: "",
                    author: "",
                    bookImg: "",
                    category:"",
                    availabilty: ""
                })
                handleClose()
            }else{
                setBookData({
                    bookname: "",
                    author: "",
                    bookImg: "",
                    category:"",
                    availabilty: ""
                })
                toast.error(result.response.data)
            }
            
        }
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsCollpased(true)
            } else {
                setIsCollpased(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='d-flex'>
            <div>
                <Sidebar collapsed={isCollapsed} backgroundColor='#2C5F2D' className='shadow h-100' >
                    <div className='w-100'>
                        <p><FontAwesomeIcon icon={faBars} onClick={handleCollpase} style={{ cursor: 'pointer' }} size='2xl' className='ms-4 mt-4 text-light ' /></p>
                    </div>
                    <Menu menuItemStyles={{
                        button: {
                            "color": "#FFFFFF",
                            ":hover": { backgroundColor: '#3A7F35', color: '#F1F8E9' }
                        }
                    }}>
                        <MenuItem className='mt-2' onClick={handleOverview}> <FontAwesomeIcon icon={faChartLine} className='me-3 ms-2' size='xl' />Overview </MenuItem>
                        <MenuItem className='mt-2' onClick={handleRequest}> <FontAwesomeIcon icon={faFileArrowDown} className='me-3 ms-2' size='xl' />Requests </MenuItem>
                        <MenuItem className='mt-2' onClick={handleBooks} > <FontAwesomeIcon icon={faBookmark} className='me-3 ms-2' size='xl' /> Books </MenuItem>
                        <MenuItem className='mt-2' onClick={handleStatus}> <FontAwesomeIcon icon={faCalendarCheck} className='me-3 ms-2' size='xl' />Status </MenuItem>
                        <MenuItem onClick={handleShow} className='mt-2'><FontAwesomeIcon icon={faSquarePlus} className='me-3 ms-2' size='xl' />Add Book</MenuItem>
                        <MenuItem className='mt-2' > <FontAwesomeIcon icon={faPowerOff} className='me-3 ms-2' size='xl' /> Logout </MenuItem>

                    </Menu>
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Book Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-3'>
                                <input type="text" value={bookData.bookname} onChange={(e) => setBookData({ ...bookData, bookname: e.target.value })} className='form-control' placeholder='Book name' />
                            </div>
                            <div className='mb-3'>
                                <input type="text" value={bookData.author} onChange={(e) => setBookData({ ...bookData, author: e.target.value })} className='form-control' placeholder='Author' />
                            </div>
                            <div className='mb-3'>
                                <input type="text" value={bookData.bookImg} onChange={(e) => setBookData({ ...bookData, bookImg: e.target.value })} className='form-control' placeholder='Image Url' />
                            </div>
                            <div className='mb-3'>
                                <input type="text" value={bookData.category} onChange={(e) => setBookData({ ...bookData, category: e.target.value })} className='form-control' placeholder='Category' />
                            </div>
                            <div className='mb-3'>
                                <input type='number' onChange={(e) => setBookData({ ...bookData, availabilty: e.target.value })} className='form-control' value={bookData.availabilty} placeholder='Avialbilty' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="success" onClick={handleAddBook}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Sidebar>
            </div>
            <div className=' w-100'>
                {isOverview && <Overview /> || isRequest && <Requests /> || isBook && <Books /> || isStatus && <Status />}
            </div>
            <ToastContainer position='top-center' autoClose={1000} transition={Zoom}/>
        </div>
    )
}

export default Adminpanel