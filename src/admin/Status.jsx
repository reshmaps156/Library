import React from 'react'
import Table from 'react-bootstrap/Table';
function Status() {
  return (
    <div className='p-5'>
       <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>User </th>
          <th>Book Name</th>
          <th>Issue</th>
          <th>Return</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td></td>
          <td>
            <button className='btn btn-success me-2'>Returned</button>
            <button className='btn btn-outline-secondary'>Email</button>
          </td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default Status