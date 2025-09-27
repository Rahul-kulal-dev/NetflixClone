import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

function MainContainer() {
  const movie=useSelector((state)=>state.movieApp?.nowPlayingMovie);

  if(!movie){
    return ;
  }

  const {id,overview,title}=movie[4];
 
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer