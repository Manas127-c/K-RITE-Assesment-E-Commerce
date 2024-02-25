import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Responsivenav = ({click,setclick}) => {
  const {cartitem}=useSelector(state=>state.addcart)
  return (
    <div className={`md:hidden absolute bg-white/50 backdrop-blur-md left-0 bottom-0 ${click ? 'h-full':'h-[0%]'} duration-300 w-full z-[100] flex flex-col items-center justify-center ${click ? 'opacity-100':'opacity-0'} ${click ? 'scale-1':' scale-0'}`}>
        <nav className='flex flex-col items-center justify-center text-3xl font-medium text-black gap-10 mb-24'>
        <Link onClick={()=>setclick((p)=>false)} to='/'>Home</Link><Link onClick={()=>setclick((p)=>false)} to='/about'>About</Link><Link onClick={()=>setclick((p)=>false)} to='/products'>Products</Link><Link onClick={()=>setclick((p)=>false)} to='/contact'>Contact Us</Link>
        
          <Link to='/cart' onClick={()=>setclick((p)=>false)} className='text-4xl relative'><RiShoppingCart2Line />
          <div className=' w-[4vw] h-[4vw] bg-blue-400 absolute top-0 right-0 rounded-full flex items-center justify-center text-xs font-semibold'>{cartitem.length}</div></Link>
        </nav>
        <IoCloseCircleOutline onClick={()=>setclick((p)=>false)} className='text-3xl text-black'/>
    </div>
  )
}

export default Responsivenav