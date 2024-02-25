import React from 'react'
import { Link } from 'react-router-dom'

const Herotemplate = ({title}) => {
  return (
    <div className='md:w-[70%] w-[100%] md:h-[70vh] mx-auto md:flex md:flex-row flex-col p-12 gap-2 md:gap-0'>
            <div className='md:w-[50%] w-full md:h-full h-[50%] flex flex-col justify-center items-start'>
                <h1 className='text-xl text-zinc-400'>Welcome to</h1>
                <h1 className='text-6xl text-black font-bold mb-8'>{title}</h1>
                <p className='text-base text-zinc-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ex molestiae voluptas quisquam, commodi iusto natus dicta deserunt placeat minima iure molestias cumque et at.</p>
                <Link to='/products' className='mt-10 px-4 py-2 bg-blue-600 text-white text-md font-medium'>SHOP NOW</Link>
            </div>
            <div className='md:w-[50%] w-full md:h-full h-[50%]'>
                <img className=' w-full h-full object-cover'src="https://www.shopvii.com/assets/img/electronics/electronics-banner.png" alt="" />
            </div>
        </div>
  )
}

export default Herotemplate