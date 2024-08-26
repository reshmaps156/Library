
import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi } from '../services/allApi';
import './register.css'

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()


    const handleLogin = async () => {
        const { email, password } = loginData
        if (!email || !password) {
            toast.info('Please fill the form completely')
        } else {
           
            const result = await loginApi(loginData)
            

            sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token", result.data.token)
            setLoginData({
                email: "",
                password: ""
            })
            
            if (result.status == 200) {
                toast.success('Login successful')

            } else {
                toast.error(result.response.data)

            }
            if(result.data.existingUser.access != "admin"){
                setTimeout(() => {
                    navigate('/dashboard')
                }, 2000);
            }else{
                navigate('/admin-panel')
            }
        }
    }
    

    return (
        <div style={{ width: '100%', height: '100vh' }} className=' d-flex align-items-center justify-content-center register-container ' >
            <div className='shadow p-5 register-form' style={{ width: '500px' }}>

                <h3 className='text-center mb-3' style={{ color: '#2C5F2D' }}>Sign In</h3>
                <form action="">

                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Email ID' onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <input type="text" className='form-control' placeholder='Password' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <button type='button' onClick={handleLogin} className='btn w-100 btn-style' style={{ backgroundColor: '#2C5F2D', color: 'white' }}>Login</button>
                        New User ? <Link to={'/register'}>Register</Link>
                    </div>

                </form>
            </div>
            <ToastContainer position='top-center' autoClose={1000} />
        </div>
    )
}

export default Login