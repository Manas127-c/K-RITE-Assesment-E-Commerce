import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { infopsasync, removeProduct } from '../../reducer/productSlice';
import { CiStar } from "react-icons/ci";
import { PiCurrencyInr } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { loadaddcart } from '../../reducer/addcartSlice';

const Productdetails = () => {
    const detail=[{im:<TbTruckDelivery/>,text:'Free delivery'},{im:<TbReplaceFilled/>,text:'7 day replacement'},{im:<PiShieldCheckeredFill/>,text:'1 year warranty'}]
    const addcart=(info)=>{
        dispatch(loadaddcart(info))
    }
    const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infopsasync(id));
    return () => {
      dispatch(removeProduct());
    };
  }, [id]);
  const { info } = useSelector((state) => state.product);
  return info ? (
    <div className='w-full min-h-[100vh] bg-white pt-20'>
        <div className='md:w-[65%] h-[100vh] w-full mx-auto py-10 md:flex md:flex-row flex-col items-center justify-center'>
            <div className='md:w-[50%] w-full md:h-[70%] h-[50%]  flex  flex-col-reverse'>
                <div className='w-full  h-[50%]  flex  items-center justify-center gap-2'>
                   {info.details.images.map((e,i)=>(<img className='w-[18%] h-[30%] object-cover' key={i} src={e} alt=""/>))}
                </div>
                <div className='w-full h-[50%]  px-2 flex items-center justify-center'>
                    <img className='w-full h-[30vh] object-cover' src={info.details.thumbnail} alt="" />
                </div>
            </div>
            <div className='md:w-[50%] w-full md:h-full h-[50%] flex flex-col items-start md:justify-center justify-start gap-2 px-10 md:py-5 py-0'>
            <h1 className='text-2xl font-normal'>{info.details.title}</h1>
            <h1 className='flex items-center justify-start'>MRP : <PiCurrencyInr/>{info.details.price}</h1>
            <p className='text-base text-zinc-400'>{info.details.description}</p>
            <div className='w-full h-20  mt-4 flex justify-start'>
                {detail.map((e,i)=>( <div key={i} className='w-[33%]  h-full text-lg text-black flex flex-col items-center justify-center'>{e.im} <h1 className='md:text-sm text-xs'>{e.text}</h1></div>))}
               
            </div>
            <h1 className='text-md text-black'>Brand : {info.details.brand}</h1>
            <h1 className='text-md text-black'>Availiable : {info.details.stock>0 ? 'In stock':'Out of stock'}</h1>
            
            <button onClick={()=>addcart(info.details)} className='px-4 py-2 bg-blue-500 rounded-md text-white'>Add to Cart</button>
            </div>
        </div>
    </div>
  ):(<h1>Loading</h1>)
}

export default Productdetails