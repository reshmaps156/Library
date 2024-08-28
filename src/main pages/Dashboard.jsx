import { faBagShopping, faBars, faBook, faBookmark, faMagnifyingGlass, faPowerOff, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Books from '../subpages/Books';
import Profile from '../subpages/Profile';
import SavedItem from '../subpages/SavedItem';
import Borrow from '../subpages/Borrow';
import Search from '../utils/Search';





function Dashboard() {
    const [isCollapsed, setIsCollpased] = useState(false)
    const [book, setBook] = useState(true)
    const [profile, setProfile] = useState(false)
    const [saved, setSaved] = useState(false)
    const [borrow, setBorrow] = useState(false)
    const navigate = useNavigate()



    const handleCollpase = () => {
        setIsCollpased(!isCollapsed)
    }

    const handleDisplaybooks = () => {
        setBook(true)
        setProfile(false)
        setSaved(false)
        setBorrow(false)
    }
    const handleDisplayProfile = () => {
        setProfile(true)
        setBook(false)
        setSaved(false)
        setBorrow(false)
    }

    const handleSaved = () => {
        setSaved(true)
        setProfile(false)
        setBook(false)
        setBorrow(false)
    }
    const handleBorrow = () => {
        setBorrow(true)
        setProfile(false)
        setBook(false)
        setSaved(false)
    }
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('existingUser')
        navigate('/login')
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsCollpased(true)
            } else {
                setIsCollpased(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='d-flex   ' style={{ backgroundColor: '#F1F8E9' }} >
            <div className="">


                <Sidebar collapsed={isCollapsed} backgroundColor='#2C5F2D' className='shadow h-100' >
                    <div className='w-100'>
                        <p><FontAwesomeIcon icon={faBars} onClick={handleCollpase} style={{ cursor: 'pointer' }} size='2xl' className='ms-4 mt-4 text-secondary' /></p>
                    </div>
                    <Menu menuItemStyles={{
                        button: {
                            "color": "#FFFFFF",
                            ":hover": { backgroundColor: '#3A7F35', color: '#F1F8E9' }
                        }
                    }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} onClick={handleDisplayProfile}>
                            <MenuItem className='fw-bold'>
                                <FontAwesomeIcon icon={faUser} size='xl' className='me-4 ms-2' />Profile
                            </MenuItem>
                        </Link>



                        <Link style={{ textDecoration: 'none', color: 'black' }} onClick={handleDisplaybooks}>
                            <MenuItem className='fw-bold '>
                                <FontAwesomeIcon icon={faBook} size='xl' className='me-4 ms-2 ' />
                                Books </MenuItem>
                        </Link>


                        <Link style={{ textDecoration: 'none', color: 'black' }} onClick={handleSaved}><MenuItem className='fw-bold '>
                            <FontAwesomeIcon icon={faBookmark} size='xl' className='me-4 ms-2' />Saved Items </MenuItem>
                        </Link>


                        <Link style={{ textDecoration: 'none', color: 'black' }} onClick={handleBorrow}><MenuItem className='fw-bold '><FontAwesomeIcon icon={faBagShopping} size='xl' className='me-4 ms-2 ' />Borrowals </MenuItem></Link>
                    </Menu>
                </Sidebar>
            </div>
            <div className="w-100 ">
                <div className='w-100 d-flex justify-content-between mb-4 px-md-5 py-3'>
                   {book ? <Search/> :<div></div>}
                    <button type='button' className='btn btn-warning' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout
                    </button>
                </div>
                {
                    book && <Books /> || profile && <Profile /> || saved && <SavedItem /> || borrow && <Borrow />
                }

            </div>

        </div>
    )
}

export default Dashboard