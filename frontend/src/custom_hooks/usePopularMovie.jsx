import React from 'react'
import { setPopularMovie } from '../redux/movieSlice';
import { options, Popular_movie_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const usePopularMovie=async()=> {

 const dispatch =useDispatch();
    
    try {
        const res = await axios.get(Popular_movie_API, options);
        dispatch(setPopularMovie(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovie