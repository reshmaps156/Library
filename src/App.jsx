

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './main pages/Home'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
