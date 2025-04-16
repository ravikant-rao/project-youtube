import React from 'react'

const VideoCard = ({info}) => {
   if(info==undefined) return;
   const {statistics, snippet}= info;
   const {channelTitle,title,thumbnails} = snippet;
   
    
  return (
    <div className='w-76 mb-3'>
        <img
         className='rounded-xl'
         src={thumbnails.maxres.url} alt="" />
        <ul>
            <li className='font-semibold' >{title}</li>
            <li className='text-sm font-semibold font-serif text-black/60 mt-3'>{channelTitle}</li>
            <li className='text-xs'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard