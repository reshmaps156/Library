

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Home from './main pages/Home'
import Register from './user-management/Register'
import Login from './user-management/Login'
import Dashboard from './main pages/Dashboard'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Adminpanel from './main pages/Adminpanel'
import Pagenotfound from './subpages/Pagenotfound'

function App() {
  

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} login />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin-panel' element={<Adminpanel/>}/>
          
        </Route>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
