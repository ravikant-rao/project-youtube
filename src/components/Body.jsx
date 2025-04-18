import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  return (
    <div className='flex overflow-x-hidden  '>
        {isMenuOpen &&<div className='hidden md:inline'> < Sidebar/></div>}
        <Outlet/>
    </div>
  )
}

export default Body