import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-white'>
        <ClipLoader size={150} color={'black'} loading={true} aria-label="Loading Spinner"
        data-testid="loader"/>
    </div>
  )
}

export default Loader