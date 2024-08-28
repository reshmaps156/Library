import React, { useEffect, useState } from 'react';
import { getUserBorrowedBooksApi } from '../services/allApi'; 
import { Table } from 'react-bootstrap';


function Borrow() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userDetails = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = userDetails._id;

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const result = await getUserBorrowedBooksApi(userId);
        setBorrowedBooks(result.data);
        
        
      } catch (error) {
        console.error('Failed to fetch borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);


  return (
    <>
      <div className='p-md-5'>
        <Table className='table shadow ' responsive striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Book</th>
              <th>Date of Issue</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((borrowedBook, index) => (
              <tr key={borrowedBook._id}>
                <td>{index + 1}</td>
                <td>{borrowedBook.bookName}</td>
                <td>{new Date(borrowedBook.reserveDate).toLocaleDateString('en-GB')}</td>
                <td>{new Date(borrowedBook.returnDate).toLocaleDateString('en-GB')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Borrow;
