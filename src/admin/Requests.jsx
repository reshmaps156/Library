import React from 'react'
import Table from 'react-bootstrap/Table';

function Requests() {
  return (
    <div className='p-5'>
       <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>User </th>
          <th>Book Name</th>
          <th>Avialbility</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button className='btn btn-success me-2'>Accept</button>
            <button className='btn btn-danger'>Reject</button>
          </td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default Requests