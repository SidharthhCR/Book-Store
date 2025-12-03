import React from 'react'
import loadImage from '../assets/bookloader.gif'

const Loader = () => {
  return (
    <div   >
        <img className='w-full'  style={{height:'600px'}} src={loadImage} alt="" />
    </div>
  )
}

export default Loader