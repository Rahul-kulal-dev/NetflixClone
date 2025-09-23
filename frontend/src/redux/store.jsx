import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import searchReducer from './SearchSlice'

export const store = configureStore({
  reducer: {
    app:userReducer,
    movieApp:movieReducer,
    search:searchReducer

  },
})

