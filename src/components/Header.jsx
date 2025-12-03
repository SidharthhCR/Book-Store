import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <>
            <div className='flex justify-between ' style={{height:'74px'}} >
                <img className='w-30' src="https://thumbs.dreamstime.com/b/open-book-icon-logo-vector-education-icon-logo-open-book-icon-logo-vector-illustration-isolated-o-nwhite-background-140097853.jpg" alt="" />

                <h1 className='text-3xl font-bold p-4'>Book Store</h1>

                <div>
                    <span><FontAwesomeIcon icon={faInstagram}/></span>
                    <span><FontAwesomeIcon icon={faTwitter}/></span>
                    <span><FontAwesomeIcon icon={faFacebook}/></span>
                    <button className='border rounded-3xl font-bold hover:bg-green-500 hover:text-black m-2 p-3'>Login</button>
                </div>
            </div>
            <div className='bg-blue-950 flex justify-center gap-4 ' style={{height:'45px'}}>
                <button className=' text-white text-xl'>Home</button>
                 <button  className=' text-white text-xl'>Books</button>
                  <button  className='  text-white text-xl' >Careers</button>
                   <button  className='  text-white text-xl'>Contact</button>
            </div>

        </>
    )
}

export default Header