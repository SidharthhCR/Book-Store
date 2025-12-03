
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import { useState } from 'react'
import Loader from './components/Loader'



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
         <Route path='/register' element={<Auth/>}/>

          <Route path='/*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
