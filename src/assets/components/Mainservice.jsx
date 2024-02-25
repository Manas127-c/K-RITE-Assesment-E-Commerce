import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import Loader from './Loader'
const Mainservice = () => {

    const [catagories,setcatagories]=useState(null)
    const getdata=async()=>{
    const {data}=await axios.get('/products')
    let c=data.products.map((e,i)=>e.category)
    c=[...new Set(c)]
    setcatagories(c)
  }
  useEffect(()=>{
    getdata()
  },[])
  return catagories ?(
    <div className='w-full md:h-[100vh] h-[70vh] bg-zinc-100 md:py-20 py-2 '>
        <div className='md:w-[65%] w-full h-full mx-auto '>
            <h1 className='text-lg text-zinc-400'>Check Now</h1>
            <h1 className='text-xl text-black font-bold'>Our Featured Services</h1>
            <div className='w-full md:h-[90%] h-[60vh]  flex flex-wrap md:gap-10 gap-2 mt-5'>
                {catagories.map((e,i)=>(<Link key={i} className='w-[30%] h-[45%] bg-blue-600 flex items-center justify-center text-white md:text-2xl text:sm font-semibold rounded-xl'>{e}</Link>))}
            </div>
        </div>
    </div>
  ):(<Loader/>)
}

export default Mainservice