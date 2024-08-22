import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../services/allApi'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
    const [userDetails,setUserDetails] = useState({
        username : "",
        age : "",
        email:"",
        password:"",
        access:"user"
    })
    const navigate = useNavigate()
 
    

    const handleRegister =async()=>{
        const {username,age,email,password} = userDetails
        if(!username || !age || !email || !password){
            toast.error('Please fill the form completely')
        }else{
            const result = await registerApi(userDetails)
            if(result.status==200){
                toast.success('Registration successful')
                setTimeout(()=>{
                    navigate('/login')
                },2000)
            }
        }
        
    }
    
  return (
    <div style={{width:'100%',height:'100vh'}} className=' d-flex align-items-center justify-content-center' >
        <div className='shadow p-5' style={{width:'500px'}}>
      
        <h3 className='text-center mb-3' style={{color:'#2C5F2D'}}>Register Now</h3>
        <form action="">
            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Name' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
            </div>

            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Age' onChange={(e)=>setUserDetails({...userDetails,age:e.target.value})}/>
            </div>

            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Email ID' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
            </div>

            

            <div className="mb-3">
                <input type="text" className='form-control' placeholder='Password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
            </div>

            <div className="mb-3">
                <button type='button' onClick={handleRegister} className='btn w-100' style={{backgroundColor:'#2C5F2D',color:'white'}}>Register</button>
                Already a User?<Link to={'/login'}> Login</Link>
            </div>

        </form>
        </div>
        <ToastContainer position="top-center" transition={Zoom} autoClose={1500}/>
    </div>
  )
}

export default Register