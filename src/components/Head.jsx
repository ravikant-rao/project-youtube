import React from 'react'
import hambergIcon from "../assets/icon/hamberg.png"
import ytLogo from "../assets/logo/youtube.png"
import userIcon from "../assets/icon/user-icon.png"
import searchIcon from "../assets/icon/search.png"
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch();
    const toogleMenuHandler = ()=>{
        dispatch(toogleMenu());
    }

  return (
    <div className='relative  grid grid-flow-col p-6 shadow-lg '>
        <div className='flex col-span-1 items-center '>
            <img 
            className='h-6 cursor-pointer '
            src={hambergIcon} onClick={toogleMenuHandler} alt="hamberg" />
            <img
            className='h-7 ml-5'
            src={ytLogo} alt="youtube-logo" />
        </div>
        <div className=' flex items-center'>
            <input
             className='border col-span-10 w-[89%] p-2 rounded-l-2xl '
             placeholder='Search'
             type="text" />
            <button className='bg-gray-100 px-6 py-[10px] rounded-r-2xl border border-l-0 '><img className='h-5 ' src={searchIcon} alt="" /></button>
        </div>
        <div className=' col-span-1 flex justify-end items-center '>
            <img 
            className='h-8 pr-11'
            src= {userIcon} alt="user" />
        </div>
    </div>
  )
}

export default Head