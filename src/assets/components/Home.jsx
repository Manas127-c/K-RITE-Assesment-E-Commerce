import React from 'react'
import { Link } from 'react-router-dom'
import Herotemplate from './Herotemplate'
import Services from './Services'
import Trusted from './Trusted'
import Mainservice from './Mainservice'

const Home = () => {
  return (
    <div className='w-full min-h-[100vh] bg-white pt-20'>
        <Herotemplate title={'E-Store'}/>
        <Mainservice/>
        <Services/>
        <Trusted/>
    </div>
  )
}

export default Home