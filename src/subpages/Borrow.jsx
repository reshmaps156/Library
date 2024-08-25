import React, { useEffect, useState } from 'react';
import { getUserBorrowedBooksApi } from '../services/allApi'; 

function Borrow() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userDetails = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = userDetails._id;

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const result = await getUserBorrowedBooksApi(userId);
        setBorrowedBooks(result.data);
        console.log(result);
        
      } catch (error) {
        console.error('Failed to fetch borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);
console.log(borrowedBooks);

  return (
    <>
      <div className='p-md-5'>
        <table className='table shadow'>
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
        </table>
      </div>
    </>
  );
}

export default Borrow;
