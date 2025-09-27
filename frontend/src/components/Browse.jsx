import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';

import useNowPlayingMovies from '../custom_hooks/useNowPlayingMovies';
import usePopularMovie from '../custom_hooks/usePopularMovie';
import useTopRatedMovies from '../custom_hooks/useTopRatedMovies';
import UseUpcomingMovie from '../custom_hooks/UseUpcomingMovie';
import SearchMovie from './SearchMovie';

function Browse() {
  const user=useSelector((state)=>state.app.user);
  const navigate=useNavigate();

  const movie= useSelector((state)=>state.movieApp.nowPlayingMovies);
  const toggle=useSelector((state)=>state.movieApp.toggle);

  
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  UseUpcomingMovie();

  
  useEffect(()=>{
    if(!user){
      navigate("/");
    }
 
  },[])
  return (
    <div>
    <div>
        <Header/>
    </div>
    {
      toggle ?<><SearchMovie/></> :(<> <MainContainer/>
<MovieContainer/></>)
    }
   

    </div>
  )
}

export default Browse