import axios from "axios";
import { Now_Playing_Movie_API, options } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux'
import { setNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = async () => {
    const dispatch =useDispatch();
    
    try {
        const res = await axios.get(Now_Playing_Movie_API, options);
        dispatch(setNowPlayingMovies(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default useNowPlayingMovies;