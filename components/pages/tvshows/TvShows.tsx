"use client";

import Search from "@/components/search/Search";
import MovieContainer from "@/components/movies/MovieContainer";
import { useContext } from "react";
import { MovieContext } from "@/store/movie-context";

export default function TvShows() {
  const { movies: movieData } = useContext(MovieContext);
  const movies = movieData.filter((movie) => movie.category === "TV Series");

  return (
    <>
      <Search />
      <MovieContainer heading="TV Series" movies={movies} />
    </>
  );
}
