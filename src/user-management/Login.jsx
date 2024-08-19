
import React from 'react'
import { Link } from 'react-router-dom'



function Login() {
  return (
    <div style={{width:'100%',height:'100vh'}} className=' d-flex align-items-center justify-content-center' >
        <div className='shadow p-5' style={{width:'500px'}}>
      
        <h3 className='text-center mb-3' style={{color:'#2C5F2D'}}>Sign In</h3>
        <form action="">

            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Email ID'/>
            </div> 

            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Password'/>
            </div>

            <div className="mb-3">
                <button className='btn w-100' style={{backgroundColor:'#2C5F2D',color:'white'}}>Login</button>
                New User ? <Link to={'/register'}>Register</Link>
            </div>

        </form>
        </div>

    </div>
  )
}

export default Login