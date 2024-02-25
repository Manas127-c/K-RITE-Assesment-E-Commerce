import React from 'react'

const Trusted = () => {
    const data=["https://1000logos.net/wp-content/uploads/2018/10/Xiaomi-Logo-2019.png","https://static.timesprime.com/3x/boat-logo-box.png?v=6","http://2.bp.blogspot.com/-blSZq1FN3xI/VSSrLAv4gaI/AAAAAAAAB3Q/o2ByT3uu-S4/s1600/sony%2Blogo%2Bvector.png","https://logos-world.net/wp-content/uploads/2023/01/Skullcandy-Logo-2003-500x281.png","https://static.shopalyst.com/assets/campaigns/boult_logo.png"]
  return (
    <div className='w-full h-[30vh] bg-zinc-100 md:mt-10 mt-20 relative flex items-center justify-center'>
        <h1 className='absolute md:left-1/2 left-32 top-7 -translate-x-[50%] text-lg text-zinc-600 font-medium'>Trusted By 1000+ companies</h1>
        <div className='md:w-[75%] w-full h-[50%] mx-auto mt-5 flex md:flex-nowrap flex-wrap  items-center md:justify-evenly justify-center'>
            {data.map((e,i)=>(<div key={i} className='md:w-[17%] w-[35%] md:h-[80%] h-[30%]'><img className='w-full h-full object-cover' src={e} alt="" /></div>))}
        </div>
    </div>
  )
}

export default Trusted