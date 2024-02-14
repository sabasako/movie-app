"use client";

import movieData from "@/data.json";
import Search from "@/components/search/Search";
import SearchContextProvider from "@/store/search-context";
import MovieContainer from "@/components/movies/MovieContainer";
import TrendingContainer from "@/components/movies/TrendingContainer";

export default function Home() {
  const movies = movieData.filter((movie) => movie.category === "TV Series");

  return (
    <SearchContextProvider>
      <Search />
      <MovieContainer heading="TV Series" movies={movies} />
    </SearchContextProvider>
  );
}
