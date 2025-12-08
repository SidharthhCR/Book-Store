import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../services/allApi'
import { toast } from 'react-toastify'







const Auth = ({ insideRegister }) => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
  })

  const onRegisterClick = async () => {
    try {
      if (userData.userName == "" || userData.email == "" || userData.password == "") {
        toast.error("please fill the form")
      } else {
        let apiResponse = await registerUser(userData);
        console.log(apiResponse)
        if (apiResponse.status == 201) {
          toast.success("successfully registered")
          navigate('/login')
        } else {
          toast.error(apiResponse.response.data.message)
        }
      }

    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
  }


  const onLoginClick = async () => {
    try {
      let reqBody = {
        email: userData.email,
        password: userData.password
      }
      let apiResponse = await loginUser(reqBody)
      console.log(apiResponse)
      if (apiResponse.status == 200) {
        toast.success("Successfully login")

        localStorage.setItem('token', apiResponse.data.token)
        navigate("/")
      } else {
        toast.error(apiResponse.response.data.message)
      }
    } catch (error) {
      toast.error("somethin went wrong")
      console.log(error)
    }
  }
  return (
    <>
      <div className="auth">
        <h1 className='text-center text-4xl '>BOOK STORE</h1>
        <div className='flex  justify-center my-20'>

          <div className='h-[500px] w-[450px] bg-blue-950 rounded-2xl   '>
            <h1 className='text-center p-2 text-white'>
              {insideRegister ? 'Register' : 'Login'}
            </h1>
            <div className='text-center text-white text-4xl'>
              <FontAwesomeIcon icon={faUser} />
            </div>

            <div className='mx-15'>
              {
                insideRegister && <input
                  onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                  className='w-75 my-5 p-3 rounded-2xl  bg-gray-100 text-black'
                  type="text"
                  placeholder='User Name' />

              }
              <input className='w-75 my-5 p-3 rounded-2xl  bg-gray-100 text-black'
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                type="text"
                placeholder='Email id' />
              <input className='w-75 my-5 p-3 rounded-2xl bg-gray-100 text-black'
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                type="text"
                placeholder='password' />
            </div>

            <div className='flex justify-evenly'>
              <p className='text-yellow-300 text-sm'>*Never share your password with orthers</p>
              <p className='text-white'>Forget Password</p>
            </div>
            {
              insideRegister ? <button
                className='border-0 bg-green-700 w-75 p-2 rounded-xl text-white mx-15 mt-5'
                onClick={onRegisterClick}>Register</button> : <button
                  className='border-0 bg-green-700 w-75 p-2 rounded-xl text-white mx-15 mt-10'
                  onClick={onLoginClick}>Login</button>
            }

            <p className='text-white mx-15'>-----------------------------or--------------------------</p>
            {
              insideRegister ? <div>

                <h1 className='text-center text-white'>ARE YOU NEW USER ?</h1>
                <Link to={'/Login'}>
                  <p className='text-center text-white'>Login</p>
                </Link>
              </div> : <div>

                <h1 className='text-center text-white'>ARE YOU AN EXCISTING USER ?</h1>
                <Link to={'/Register'}>
                  <p className='text-center text-white'>Register</p>
                </Link>
              </div>


            }

          </div>
        </div>
      </div>


    </>
  )
}

export default Auth