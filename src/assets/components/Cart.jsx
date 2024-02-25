import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PiCurrencyInr } from "react-icons/pi";
import { clearcart, decreasecart, increasecart, removeaddcart, subtotal } from '../../reducer/addcartSlice'

const Cart = () => {
    const {cartitem}=useSelector(state=>state.addcart)
    const {carttotalamount}=useSelector(state=>state.addcart)
    const dispatch=useDispatch()
    const remove=(e)=>{
        dispatch(removeaddcart(e))
    }
    const clearall=()=>{
        dispatch(clearcart())
    }
    const decrease=(e)=>{
        dispatch(decreasecart(e))
    }
    const increase=(e)=>{
        dispatch(increasecart(e))
    }
    useEffect(()=>{
        dispatch(subtotal())
    },[cartitem])
    
  return (
    <div className='w-full min-h-[100vh] bg-white md:pt-20 pt-5 relative flex flex-col items-center justify-center'>
        <h1 className='md:text-3xl text-xl text-black font-semibold '>Shopping Cart</h1>
        <div className='w-[90%] h-[75vh]  md:mt-5 mt-0 '>
            <div className=' flex md:text-md text-sm font-light items-center justify-between px-2 border-b-[1px] border-zinc-500 py-5'>
                <h1>PEODUCT</h1>
                <h1>PRICE</h1>
                <h1>QUNATITY</h1>
                <h1>TOTAL</h1>
            </div>
            <div className='w-full flex flex-col h-[60%]  overflow-y-auto'>
                {cartitem.map((e,i)=>(<div key={i} className='w-full md:h-[50%] h-[35%] border-b-[1px] border-zinc-500 flex items-center justify-start md:gap-[12.5vw] gap-[13vw] p-2'>
                    <div className='md:flex md:flex-row flex-col md:w-64   h-full gap-2'><img className=' md:w-[50%] w-full  md:h-full h-[50%] object-cover' src={e.thumbnail} alt="error"/>
                    <div className='w-[50%] h-full flex-col'> <h1 className='md:text-md text-xs'>{e.title}</h1><button  onClick={()=>remove(e)} className='hover:text-red-500 md:text-md text-xs'>remove</button></div></div>
                    <h1 className=' flex items-center justify-center'><PiCurrencyInr/>{e.price}</h1>
                    <div className='md:w-24 w-44 h-10 border-[1px] border-zinc-700 flex items-center justify-evenly md:ml-48 ml-2'>
                        <button onClick={()=>decrease(e)}>-</button>
                        <h1 className='md:text-md text-xs'>{e.cartquantity}</h1>
                        <button onClick={()=>increase(e)}>+</button>
                    </div>
                    <h1 className='md:ml-44 ml-4 flex items-center justify-center'><PiCurrencyInr/>{e.price * e.cartquantity}</h1>
                </div>))}
            </div>
            <div className='w-full h-[30%]  flex items-center justify-between px-2'>
                <button onClick={()=>clearall()} className='px-4 py-2 border-[1px] border-zinc-800 rounded-sm text-black text-lg font-light'>Clear cart</button>
                <div className='flex flex-col gap-4'> <h1 className='flex items-center justify-center'><span className='mr-3'>Subtotal</span> <PiCurrencyInr/>{carttotalamount}</h1>
                <button className='px-4 py-2 bg-blue-600 rounded-sm text-white text-lg font-medium'>CHECKOUT</button><Link className='py-2 border-b-[1px] border-zinc-800 'to='/'>Continue Shopping</Link></div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart