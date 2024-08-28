import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAcceptedReservationsApi, markBookReturnedApi } from '../services/allApi'; 

function Status() {
  const [acceptedReservations, setAcceptedReservations] = useState([]);

  useEffect(() => {
    const fetchAcceptedReservations = async () => {
      try {
        const result = await getAcceptedReservationsApi();
        setAcceptedReservations(result.data);
        
      } catch (error) {
        console.error('Failed to fetch accepted reservations:', error);
      }
    };

    fetchAcceptedReservations();
  }, []);
  const handleReturned = async (id) => {
    try {
      await markBookReturnedApi(id);
      setAcceptedReservations(prevReservations =>
        prevReservations.filter(reservation => reservation._id !== id)
      );
    } catch (error) {
      console.error('Failed to mark book as returned:', error);
    }
  };

  

  return (
    <div className='p-5'>
      <Table striped className='table' responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Book Name</th>
            <th>Issue</th>
            <th>Return</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {acceptedReservations.map((reservation, index) => (
            <tr key={reservation._id}>
              <td>{index + 1}</td>
              <td>{reservation.username}</td>
              <td>{reservation.bookName}</td>
              <td>{new Date(reservation.reserveDate).toLocaleDateString('en-GB')}</td>
              <td>{new Date(reservation.returnDate).toLocaleDateString('en-GB')}</td>
              <td>
                <button className='btn btn-success me-2' onClick={()=>{handleReturned(reservation._id)}}>Returned</button>
                <button className='btn btn-outline-secondary'>Email</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Status;
