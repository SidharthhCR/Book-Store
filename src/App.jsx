
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import { useState } from 'react'
import Loader from './components/Loader'
import { Slide, ToastContainer } from 'react-toastify'
import Profile from './pages/Profile'




function App() {
 const [showHome,setShowHome]=useState(false)

 setTimeout(()=>{
  setShowHome(true)
 },5000);

  return (
    <>
    <Routes>
      <Route path='/' element={showHome?<Home/>:<Loader/>}/>
       <Route path='/books' element={<Books/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/login' element={<Auth/>}/> 
         <Route path='/register' element={<Auth insideRegister={true}/>}/>
         <Route path='/profile' element={<Profile/>}/>

          <Route path='/*' element={<Pnf/>}/>
    </Routes>

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>

    </>
  )
}

export default App
