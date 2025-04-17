import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  return (
    <>
    {isMenuOpen ?
    <div className='md:absolute left-[200px] mt-[100px]'>
        <ButtonList/>
        <VideoContainer/>
    </div>
    :
    <div className='mt-[100px]'>
        <ButtonList/>
        <VideoContainer/>
    </div>
    }
    </>
  )
}

export default MainContainer