import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../services/allApi';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css'; 

function Register() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        age: "",
        email: "",
        password: "",
        access: "user"
    });
    const navigate = useNavigate();

    const handleRegister = async () => {
        const { username, age, email, password } = userDetails;
        if (!username || !age || !email || !password) {
            toast.error('Please fill the form completely');
        } else {
            const result = await registerApi(userDetails);
            if (result.status === 200) {
                toast.success('Registration successful');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        }
    }

    return (
        <div className='register-container'>
            <div className='register-form shadow p-4'>
                <h3 className='text-center mb-4' style={{ color: '#2C5F2D' }}>Register Now</h3>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Name</label>
                        <input
                            type="text"
                            id="username"
                            className='form-control'
                            placeholder='Enter your name'
                            onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            className='form-control'
                            placeholder='Enter your age'
                            onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email">Email ID</label>
                        <input
                            type="email"
                            id="email"
                            className='form-control'
                            placeholder='Enter your email'
                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className='form-control'
                            placeholder='Enter your password'
                            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                        />
                    </div>

                    <button
                        type='button'
                        onClick={handleRegister}
                        className='btn btn-style text-white w-100'
                    >
                        Register
                    </button>
                    <div className='text-center mt-3'>
                        Already a User? <Link to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" transition={Zoom} autoClose={1500} />
        </div>
    );
}

export default Register;
