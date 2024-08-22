import React from 'react'

function Profile() {
   const user =  JSON.parse(sessionStorage.getItem("existingUser"))
   
   
  return (
    <div className='m-md-5 shadow p-4 '>
        <h2 className='text-success'>Profile Details</h2>

        <p className='mt-5 fw-bolder'>Name:<span className=' text-success' style={{textTransform:'capitalize'}}> {user.username}</span></p>
        <p  className='mt-5 fw-bolder'>Age: <span  className=' text-success' >{user.age}</span></p>
        <p  className='mt-5 fw-bolder'>Email ID :<span  className=' text-success' >{user.email}</span></p>
    </div>
  )
}

export default Profile