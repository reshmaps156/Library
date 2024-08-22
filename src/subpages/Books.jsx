import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { allBookApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTosavedItem } from '../redux/slice/savedSlice';


function Books() {
  const [allBookData,setAllBookData] = useState([])
  const dispatch = useDispatch()
  const allBooks = async()=>{
    const result = await allBookApi()
    const bookData = result.data
    setAllBookData(bookData)

  }
 
  
  useEffect(()=>{
    allBooks()
  },[])
  return (
    <div className='row p-3 '>
      
        {allBookData.map((books)=>(<div className="col-md-3 mt-3">
        <Card style={{backgroundColor:'#F5F5F5'}} className='shadow'>
          <Card.Img variant="top" className='p-4'   height={'250px'} src={books.bookImg} />
          <Card.Body>
            <Card.Title className='text-center'>{books.bookname}</Card.Title>
            <p className='text-center text-secondary'>{books.author}</p>
            <Card.Text className='d-flex justify-content-between'>
                <button type='button' className='btn btn-outline-warning'><FontAwesomeIcon icon={faBookmark}
                 onClick={()=>dispatch(addTosavedItem(books))}/></button>
                <button className='btn btn-outline-success'><FontAwesomeIcon icon={faBagShopping} /></button>
            </Card.Text>

          </Card.Body>
        </Card>
        </div>))
        }
        
        

    </div>
  )
}

export default Books