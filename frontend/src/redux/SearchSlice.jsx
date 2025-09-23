import {createSlice} from '@reduxjs/toolkit'


export const searchSlice = createSlice({
  name: 'search',
  initialState:{
   movieName:null,
   searchMovie:null
  },
  reducers: {
setSearchMovieDetails:(state,action)=>{
 const {searchMovie,movies}=action.payload;
 state.movieName=searchMovie;
 state.searchMovie=movies;
},


  },
})

export const {setSearchMovieDetails} = searchSlice.actions;

export default searchSlice.reducer;