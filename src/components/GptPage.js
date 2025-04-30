import React, { useRef } from "react";
import InputElement from "../utils/InputElement";
import RedButton from "../utils/RedButton";
import { languageConfig } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { addMoviesByGpt } from "../store/gptSlice";
import fetchMovie from "../hooks/useMovie";
import GptMovies from "./GptMovies";

const GptPage = () => {
  const dispatch = useDispatch();
  const languageCode = useSelector((store) => store.gpt.languageCode);
  const gptInput = useRef(null);

  const handleSearch = async () => {
    console.log("Search triggered");
    const query =
      "act like a movie name suggestion agent, only give names of 5 movies separated by comma and do not include numbers infront of movies, just give me movie names. here is the example: bahubali, RRR, orange, maharshi, animal";

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: gptInput.current.value + query,
        },
      ],
    });

    console.log(response.choices[0].message.content.split(","));
    const moviesByGpt = response.choices[0].message.content.split(",");

    const tmdbMovieResultsPromises = moviesByGpt.map((movie) =>
      fetchMovie(movie),
    );
    const tmdbMovieResults = await Promise.all(tmdbMovieResultsPromises);
    console.log(tmdbMovieResults);
    dispatch(addMoviesByGpt({ moviesByGpt, moviesByTmdb: tmdbMovieResults }));
  };
  return (
    <div className="bg-gradient-to-b from-black min-h-[100dvh] text-white flex flex-col pt-56 items-center">
      <div className="w-[70%]">
        <div className="max-h-20  grid grid-cols-[4fr_1fr] gap-6">
          <InputElement
            ref={gptInput}
            type="text"
            placeholder={languageConfig[languageCode].inputText}
            autoComplete="search"
            className=" mb-0 text-2xl"
          />
          <RedButton
            buttonText={languageConfig[languageCode].search}
            className="text-3xl"
            onClick={handleSearch}
          />
        </div>
      </div>
      <GptMovies />
    </div>
  );
};

export default GptPage;
