import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownItem } from 'flowbite-react'



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setIsLoggedIn(true)
        }
    }, [])
    const onLogoutClick = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <div className='flex justify-between ' style={{ height: '74px' }} >
                <img className='w-30' src="https://thumbs.dreamstime.com/b/open-book-icon-logo-vector-education-icon-logo-open-book-icon-logo-vector-illustration-isolated-o-nwhite-background-140097853.jpg" alt="" />

                <h1 className='text-3xl font-bold p-4'>Book Store</h1>

                <div className='flex items-center'>

                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                    <span><FontAwesomeIcon icon={faFacebook} /></span>

                    {
                        isLoggedIn ? <Dropdown className='text-black' label={
                            <div>
                                <img className='w-10 ' src="https://www.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966952.jpg" alt="" />
                            </div>
                        } dismissOnClick={false}>
                            <DropdownItem></DropdownItem>
                            <div>
                                <Link to="/profile" className="cursor-pointer">Profile</Link>
                            </div>
                            <div>
                                <button className='cursor-pointer' onClick={onLogoutClick}>Log out</button>

                            </div>

                        </Dropdown> :
                            <Link to={'/login'}>
                                <button className='border rounded-3xl font-bold hover:bg-green-500 hover:text-black m-2 p-3'>Login</button></Link>
                    }

                </div>
            </div>
            <div className='bg-blue-950 flex justify-center gap-4 ' style={{ height: '45px' }}>
                <Link to={'/'}> <button className=' text-white text-xl'>Home</button></Link>
                <Link to={'/books'}><button className=' text-white text-xl'>Books</button></Link>
                <button className='  text-white text-xl' >Careers</button>
                <button className='  text-white text-xl'>Contact</button>
            </div>

        </>
    )
}

export default Header