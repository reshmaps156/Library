import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center flex-column' style={{height:'100vh'}}>
        <img src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif" alt="" className='w-50'/>
        <Link to={'/'}><button className='btn btn-success mb-5'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back Home</button></Link>
    </div>
  )
}

export default Pagenotfound