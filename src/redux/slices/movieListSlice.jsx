import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_MOVIE_LIST, API_KEY } from '../../constans/api'

const initialState = {
  movieList : [],
}

export const getMovieList=createAsyncThunk('getMovieList',async ()=>{
    const res=await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`)
    return res.data.results

})


export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {  //HTTP Request
    builder.addCase(getMovieList.fulfilled, (state, action) => {
        state.movieList=action.payload
      })
}}) 

export const {  } = movieListSlice.actions

export default movieListSlice.reducer