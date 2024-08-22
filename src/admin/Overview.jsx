
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  { useEffect, useState } from 'react'
import { allBookApi } from '../services/allApi';
function Overview() {
    
    const [totalBooks,setTotalBooks] = useState(0)
    const [allBookData,setAllBookData] = useState([])
   
       
    //   const totalBook = allBookData.reduce((sum,book)=>sum+book.availabilty)
    //   console.log(totalBook);
      
    const allBooks = async()=>{
        const result = await allBookApi()
        const bookData = result.data
        setAllBookData(bookData)
        console.log(bookData);
        
        const totalAvailable =bookData.map((item)=>item.availabilty).reduce((a,b)=>a+b)
        setTotalBooks(totalAvailable)
        
        
      }
      useEffect(()=>{
        
        allBooks()
        

      },[allBooks])
     
      
      
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
                            <p>Total Books</p>
                           
                        </div>
                    </div>
                </div>

               


            </div>

        </>
    )
}

export default Overview