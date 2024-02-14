"use client";

import movieData from "@/data.json";
import Search from "@/components/search/Search";
import SearchContextProvider from "@/store/search-context";
import MovieContainer from "@/components/movies/MovieContainer";
import TrendingContainer from "@/components/movies/TrendingContainer";

export default function Home() {
  const bookmarkedTvShows = movieData.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked
  );
  const bookmarkedMovies = movieData.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked
  );

  const allBookmarked = [...bookmarkedMovies, ...bookmarkedTvShows];

  return (
    <SearchContextProvider>
      <Search />
      <MovieContainer
        displayWhileSearching={false}
        heading="Bookmarked Movies"
        movies={bookmarkedMovies}
      />
      <MovieContainer
        displayWhileSearching={false}
        heading="Bookmarked TV Series"
        movies={bookmarkedTvShows}
      />
      <MovieContainer
        displayWhileSearching={false}
        displayWhileSearchingBookmark={true}
        heading="Bookmarked TV Series"
        movies={allBookmarked}
      />
    </SearchContextProvider>
  );
}
