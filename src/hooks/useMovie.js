import { fetchOptions } from "../utils/assets";

const fetchMovie = async (movieName) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      fetchOptions,
    );
    const json = await data.json();
    return json?.results;
  } catch (err) {
    console.error("Error in fetching a movie", err);
  }
};

export default fetchMovie;
