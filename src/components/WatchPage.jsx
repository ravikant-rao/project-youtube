import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {useSearchParams } from 'react-router-dom';

const WatchPage = (props) => {
    const [searchParams] = useSearchParams();
    
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <>
    <div  className='p-4 mt-20 hidden md:block'>
        <iframe width="1440" height="650" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='p-4 mt-20 block md:hidden '>
        <iframe width="330" height="220" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
    </div>
    </>
  )
}

export default WatchPage