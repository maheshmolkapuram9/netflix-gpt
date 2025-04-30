import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesPlayingNow: null,
  moviesPopular: null,
  moviesTopRated: null,
  moviesUpComing: null,
  trailer: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMoviesPlayingNow: (state, action) => {
      state.moviesPlayingNow = action.payload;
    },
    addMoviesPopular: (state, action) => {
      state.moviesPopular = action.payload;
    },
    addMoviesTopRated: (state, action) => {
      state.moviesTopRated = action.payload;
    },
    addMoviesUpComing: (state, action) => {
      state.moviesUpComing = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addMoviesPlayingNow,
  addMoviesPopular,
  addMoviesTopRated,
  addMoviesUpComing,
  addTrailer,
} = moviesSlice.actions;

export default moviesSlice.reducer;
