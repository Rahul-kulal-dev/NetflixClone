import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function MovieContainer() {
  const movie=useSelector((state)=>state.movieApp);
  console.log(movie);
  return (
    <div>
      <MovieList title={"Popular Movie"} movies={movie.popularMovie}/>
       <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovie}/>
        <MovieList title={"New Playing Movie"} movies={movie.nowPlayingMovie}/>
         <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovie}/>
    </div>
  )
}

export default MovieContainer