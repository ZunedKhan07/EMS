import React from 'react'
import TaskNum from './TaskNum'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>HELLO! <br /> <span>Juned Khan</span></h1>
       
        <button className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-xl'>sing-out</button>
   
    </div>
  )
}

export default Header
