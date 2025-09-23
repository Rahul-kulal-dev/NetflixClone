import { createSlice } from '@reduxjs/toolkit'


export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovie: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:""
    },
    reducers: {

        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        setPopularMovie: (state, action) => {
            state.popularMovie = action.payload;
        }
        ,
        setTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },

        setUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
        },

        setToggleValue:(state)=>{
            state.toggle=!state.toggle;
        },
        setTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        setId:(state,action)=>{
            state.id=action.payload;
        }
    },
})

export const { setNowPlayingMovies, setPopularMovie, setTopRatedMovie,setUpcomingMovie,setToggleValue,setTrailerMovie,setOpen,setId } = movieSlice.actions;

export default movieSlice.reducer;