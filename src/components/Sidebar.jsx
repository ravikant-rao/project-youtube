import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-[80px] bg-white p-4 w-55 '>
        <div className='mb-3'>
            <ul className=' '>
               <Link to={"/"}><li className='py-1 px-7 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Home</li></Link>
                <li className='py-1 px-7 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Shorts</li>
                <li className='py-1 px-7 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Subscriptions</li>
            </ul>
        </div>
        <div className='h-[1px] bg-gray-300  '></div>
        <div className='my-3'>
            <h1 className='px-2'>You</h1>
            <ul>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>History</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Playlists</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Your videos</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Your courses</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Watch Later</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Liked video</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Downloads</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Your clips</li>
            </ul>
        </div>
        <div className='h-[1px] bg-gray-300  '></div>
        <div className=' mt-3'>
            <h1 className='font-semibold px-2'>Subscriptions</h1>
            <ul className=''>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Music</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Sports</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Gaming</li>
                <li className='px-7 py-1 cursor-pointer hover:bg-gray-400/30 hover:rounded-md'>Movie</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar