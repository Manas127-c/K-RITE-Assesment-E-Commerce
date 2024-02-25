import React from 'react'

const Dropdown = ({sort}) => {
  return (
    <div onClick={()=>sort('Price low to high')} className='w-[3vw] h-[3vw] bg-red-500'>
    </div>
  )
}

export default Dropdown