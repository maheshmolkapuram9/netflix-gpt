import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptSearch: false,
  languageCode: "en",
  moviesByGpt: null,
  moviesByTmdb: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    changeLanguageCode: (state, action) => {
      state.languageCode = action.payload;
    },
    addMoviesByGpt: (state, action) => {
      const { moviesByGpt, moviesByTmdb } = action.payload;
      state.moviesByGpt = moviesByGpt;
      state.moviesByTmdb = moviesByTmdb;
    },
  },
});

export const { toggleShowGptSearch, changeLanguageCode, addMoviesByGpt } =
  gptSlice.actions;

export default gptSlice.reducer;
