import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { options, Upcoming_Movie_API } from '../utils/constants';
import { setUpcomingMovie } from '../redux/movieSlice';

const UseUpcomingMovie=async()=> {
  const dispatch =useDispatch();
   
    try {
        
        const res = await axios.get(Upcoming_Movie_API, options);
        dispatch(setUpcomingMovie(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default UseUpcomingMovie