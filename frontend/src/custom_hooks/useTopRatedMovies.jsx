import axios from 'axios';

import { options, Top_rated_Movie_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setTopRatedMovie } from '../redux/movieSlice';

const useTopRatedMovies=async()=> {
 const dispatch =useDispatch();
    try {
        const res = await axios.get(Top_rated_Movie_API, options);
        dispatch(setTopRatedMovie(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default useTopRatedMovies