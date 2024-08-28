import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getReservedBooksApi, rejectReservedBookApi, acceptReservationApi } from '../services/allApi'; 

function Requests() {
  const [reservedBooks, setReservedBooks] = useState([]);

  useEffect(() => {
    const fetchReservedBooks = async () => {
      try {
        const result = await getReservedBooksApi();
        setReservedBooks(result.data);
      } catch (error) {
        console.error('Failed to fetch reserved books:', error);
      }
    };

    fetchReservedBooks();
  }, []);
  
  

  const handleAccept = async (reservation) => {
    try {
        const issueDate = new Date().toISOString(); 
        const { userId, bookId, username, bookName, author } = reservation;
        const returnDate = new Date(issueDate);
        returnDate.setDate(returnDate.getDate() + 7);

      await acceptReservationApi({
        userId,
        bookId,
        username,
        bookName,
        author,
        issueDate,
        returnDate: returnDate.toISOString()
      });

      
      setReservedBooks((prevBooks) =>
        prevBooks.filter(
          (reservedBook) => reservedBook._id !== reservation._id
        )
      );
    } catch (error) {
      console.error('Failed to accept reservation:', error);
    }
  };

  const handleReject = async (userId, bookId) => {
    try {
      await rejectReservedBookApi(userId, bookId);

      setReservedBooks((prevBooks) =>
        prevBooks.filter(
          (reservedBook) =>
            !(reservedBook.userId === userId && reservedBook.bookId === bookId)
        )
      );
    } catch (error) {
      console.error('Failed to reject reservation:', error);
    }
  };

  return (
    <div className='p-5'>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Availability</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservedBooks.map((reservedBook, index) => (
            <tr key={reservedBook._id}>
              <td>{index + 1}</td>
              <td>{reservedBook.username}</td>
              <td>{reservedBook.bookName}</td>
              <td>{reservedBook.author}</td>
              <td>{reservedBook.availablity}</td>
              <td>{new Date(reservedBook.reserveDate).toLocaleDateString('en-GB')}</td>
              <td>
                <button
                  className='btn btn-success me-2'
                  onClick={() => handleAccept(reservedBook)}
                >
                  Accept
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => handleReject(reservedBook.userId, reservedBook.bookId)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Requests;
