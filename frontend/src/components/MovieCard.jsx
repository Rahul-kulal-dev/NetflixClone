import React from 'react';
import { useDispatch } from 'react-redux';
import { setId, setOpen } from '../redux/movieSlice';

function MovieCard({ item }) {

  if(item.poster_path==null) return;
  

  const dispatch=useDispatch();
  const handleOpen=()=>{
    dispatch(setOpen(true));
    dispatch(setId(item.id));
  }
  return (
    <div onClick={()=>handleOpen()} className='w-64 flex shrink-0 bg-red-600 p-2 rounded'>
      <img
        className='w-full h-[90%] object-cover rounded'
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt='movie banner'
      />
      
    </div>
  );
}

export default MovieCard;
