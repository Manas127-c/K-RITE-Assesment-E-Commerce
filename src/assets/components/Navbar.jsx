import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { useSelector } from 'react-redux';
const Navbar = ({setclick}) => {
  const {cartitem}=useSelector(state=>state.addcart)
  console.log(cartitem)
  return (
    <div className='px-3 md:px-16 w-full h-20 bg-zinc-100 flex items-center justify-between fixed top-0 z-[99]'>
        <div className=' w-24 h-10 md:w-36 md:h-16'><img className='w-full h-full object-cover' src="https://www.names.co.uk/blog/wp-content/uploads/2018/05/dotSTORE.png" alt="" /></div>  
        <div className=' hidden routes md:flex gap-7 uppercase text-sm font-semibold '><Link to='/'>Home</Link><Link to='/about'>About</Link><Link to='/products'>Products</Link><Link to='/contact'>Contact Us</Link></div>
        <div className='hidden button md:flex gap-8'>
          
          <Link to='/cart' className='text-4xl relative'><RiShoppingCart2Line />
          <div className='w-[1vw] h-[1vw] bg-blue-400 absolute top-0 right-0 rounded-full flex items-center justify-center text-xs font-semibold'>{cartitem.length}</div></Link>
        </div>
        <IoIosMenu onClick={()=>setclick((prev)=>true)} className='md:hidden text-5xl'/>
      </div>
  )
}

export default Navbar