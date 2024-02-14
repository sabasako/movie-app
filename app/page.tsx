"use client";

import movieData from "@/data.json";
import Search from "@/components/search/Search";
import SearchContextProvider from "@/store/search-context";
import MovieContainer from "@/components/movies/MovieContainer";
import TrendingContainer from "@/components/movies/TrendingContainer";

export default function Home() {
  const recommendedMovies = movieData.filter(
    (movie) => movie.isTrending === false
  );
  const trendingMovies = movieData.filter((movie) => movie.isTrending === true);

  return (
    <SearchContextProvider>
      <Search />
      <TrendingContainer movies={trendingMovies} />
      <MovieContainer
        heading="Recommended for you"
        movies={recommendedMovies}
        allMovies={movieData}
      />
    </SearchContextProvider>
  );
}
