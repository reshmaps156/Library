
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  { useEffect, useState } from 'react'
import { allBookApi, getAcceptedReservationsApi, getReservedBooksApi } from '../services/allApi';
function Overview() {
    
    const [totalBooks,setTotalBooks] = useState(0)
    const [allBookData,setAllBookData] = useState([])
   const [totalIssue,setTotalIssue] = useState([])
    const [totalRequest,setTotalRequest] = useState([])
      
    const allBooks = async()=>{
        const result = await allBookApi()
        const bookData = result.data
        setAllBookData(bookData)
        
        
        const totalAvailable =bookData.map((item)=>item.availabilty).reduce((a,b)=>a+b)
        setTotalBooks(totalAvailable)
        
        
      }

      const issuedBook = async()=>{
       const result =  await getAcceptedReservationsApi()
       setTotalIssue(result.data.length)
    
       
      }

      const requestedBooks = async()=>{
       const result =await getReservedBooksApi()
       setTotalRequest(result.data.length)
       
      }
      useEffect(()=>{
        
        allBooks()
        issuedBook()
        requestedBooks()

      },[])
     
      
      
    return (
        <>
            <div className="row p-5">

                <div className="col-md-3 mt-3">
                    <div className='shadow p-3 rounded-3 text-center d-flex align-items-center'>
                        <div className=''>
                        <div >
                            <CircularProgressbar value={totalBooks} text={`${totalBooks}`}  styles={buildStyles({pathColor:'green',textColor:'green'})}/></div>
                        </div>
                        <div className='ms-3'>
                            <p>Total Books </p>
                           
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mt-3">
                    <div className='shadow p-3 rounded-3 text-center d-flex align-items-center'>
                        <div className=''>
                        <div >
                            <CircularProgressbar value={totalRequest} text={`${totalRequest}`}  styles={buildStyles({pathColor:'green',textColor:'green'})}/></div>
                        </div>
                        <div className='ms-3'>
                            <p>Requests</p>
                           
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mt-3">
                    <div className='shadow p-3 rounded-3 text-center d-flex align-items-center'>
                        <div className=''>
                        <div >
                            <CircularProgressbar value={totalIssue} text={`${totalIssue}`}  styles={buildStyles({pathColor:'green',textColor:'green'})}/></div>
                        </div>
                        <div className='ms-3'>
                            <p> Issued Book</p>
                           
                        </div>
                    </div>
                </div>

                


               


            </div>

        </>
    )
}

export default Overview