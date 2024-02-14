"use client";

import Search from "@/components/search/Search";
import MovieContainer from "@/components/movies/MovieContainer";
import TrendingContainer from "@/components/movies/TrendingContainer";
import { useContext } from "react";
import { MovieContext } from "@/store/movie-context";
import { MovieCl } from "@/classes/classes";

// let savedMovies: Array<MovieCl>;
export default function Home() {
  const { movies: movieData } = useContext(MovieContext);

  // if (typeof window !== "undefined") {
  //   savedMovies =
  //     JSON.parse(window.localStorage.getItem("movies") || "null") || movieData;
  // }

  const recommendedMovies = movieData.filter(
    (movie) => movie.isTrending === false
  );
  const trendingMovies = movieData.filter((movie) => movie.isTrending === true);

  return (
    <>
      <Search />
      <TrendingContainer movies={trendingMovies} />
      <MovieContainer
        heading="Recommended for you"
        movies={recommendedMovies}
        allMovies={movieData}
      />
    </>
  );
}
