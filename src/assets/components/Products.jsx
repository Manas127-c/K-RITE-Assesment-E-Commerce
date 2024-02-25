import axios from '../../utils/axios'
import React, { useCallback, useEffect, useState } from 'react'
import { PiCurrencyInr } from "react-icons/pi";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Products = () => {
  const [product,setproduct]=useState(null)
  const getproducts=async()=>{
    const {data}=await axios.get('/products')
    setproduct(data.products)
  }
  useEffect(()=>{
    getproducts()
  },[])
  return product ? (
    <div className='w-full min-h-[100vh] bg-white pt-20'>
      <div className='md:w-[65%] w-full h-[100vh]  mx-auto my-5 flex'>
        <div className='w-full h-full flex flex-col justify-between items-center'>
          <div className='w-full md:h-[10%] h-[5%] flex items-center justify-center'>
            <h1 className='text-lg text-zinc-400'>{product.length} total no. of products</h1>          
          </div>
          <div className='w-full md:h-[85%] h-[100%] flex flex-wrap md:gap-5 gap-2 overflow-y-auto p-4'>
              {product.map((e,i)=>(<Link to={`/products/${e.id}`} key={i} className='md:w-[14vw] w-[45vw] md:h-[20vw] h-[40vh] bg-zinc-100 rounded-lg p-2 relative'>
                <img className='w-full h-[70%] object-cover' src={e.thumbnail} alt="" />
                <h1 className='absolute px-3 rounded-full py-1 right-3 top-3 bg-white text-violet-600 text-xs'>{e.category}</h1>
                <div className='flex w-full items-center justify-between mt-10'>
                  <h1 className='text-md text-black'>{e.title}</h1>
                  <h1 className='text-md text-blue-500 flex items-center justify-center'><PiCurrencyInr/>{e.price}</h1>
                </div>
              </Link>))}
          </div>
        </div>
      </div>
    </div>
  ):(<Loader/>)
}

export default Products