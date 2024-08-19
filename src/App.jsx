

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './main pages/Home'
import Register from './user-management/Register'
import Login from './user-management/Login'
import Dashboard from './main pages/Dashboard'

function App() {
  

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} login/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
