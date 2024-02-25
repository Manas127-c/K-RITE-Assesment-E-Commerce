import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Products from './assets/components/Products'
import Contact from './assets/components/Contact'
import Navbar from './assets/components/Navbar'
import Responsivenav from './assets/components/Responsivenav'
import Footer from './assets/components/Footer'
import Productdetails from './assets/components/Productdetails'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Cart from './assets/components/Cart'
const App = () => {
  const [click,setclick]=useState(false)
  return (
    <div className='w-full h-screen bg-slate-100 relative'>
      <Responsivenav click={click} setclick={setclick}/>
      <ToastContainer/>
      <Navbar setclick={setclick}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/:id' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    
  )
}

export default App