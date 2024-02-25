import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[100vh] bg-white pt-20 flex flex-col items-center justify-center gap-10' >
      <h1 className='text-3xl font-bold'>Contact Form</h1>
      <div className='md:w-[30vw] w-[97%] h-[70vh] bg-zinc-100 rounded-xl px-5 py-10 relative'>
        <form action="https://formspree.io/f/xayrjqrz" method='POST'>
          <input className='  w-full h-10 text-black px-2 rounded' type="text" placeholder='Username' name='username' required autoComplete='off' />
          <input className='  w-full h-10 text-black px-2 rounded mt-5' type="email" placeholder='Email' name='Email' required autoComplete='off' />
          <textarea name="message" cols="30" rows="10" className=' w-full mt-5 rounded resize-none' required placeholder='Enter your message' autoComplete='off'></textarea>
          <input type="submit" value="Send" className='w-full rounded cursor-pointer py-2 bg-blue-600 text-white mt-5' />
        </form>
      </div>
    </div>
  )
}

export default Contact