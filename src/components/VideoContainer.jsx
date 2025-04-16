import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    
    
    
  }
  useEffect(()=>{
    getVideos();
  },[]);

  return (
    <div className='flex gap-4 flex-wrap p-8'>
      {videos.map((video)=>{
        return <VideoCard key={video.id} info = {video}/>
      })
      }
      
    </div>
  )
}

export default VideoContainer