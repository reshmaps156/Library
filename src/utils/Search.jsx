import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { searchKeyContext } from '../context/DataShare'


function Search() {
 const  { setSearchKey} = useContext(searchKeyContext)

 
    
    return (
        <>
            <form className='d-flex'>
                <input type="text" className='form-control' placeholder='Search' onChange={(e)=>setSearchKey(e.target.value)}/>
                <div className=' d-flex align-items-center' style={{ marginLeft: '-30px' }}><FontAwesomeIcon icon={faMagnifyingGlass} className='text-secondary' /></div>
            </form>
        </>
    )
}

export default Search