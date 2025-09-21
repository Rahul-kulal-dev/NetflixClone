import {createSlice} from '@reduxjs/toolkit'

const userFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: userFromLocalStorage,
    isLoading:false
  },
  reducers: {

setUsers:(state,action)=>{
    state.user=action.payload;
},

setLoading:(state,action)=>{
  state.isLoading=action.payload;
}
  },
})


export const {setUsers,setLoading} = userSlice.actions;

export default userSlice.reducer;