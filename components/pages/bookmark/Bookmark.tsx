"use client";

import Search from "@/components/search/Search";
import MovieContainer from "@/components/movies/MovieContainer";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "@/store/movie-context";
import MovieSkeleton from "@/components/skeleton/MovieSkeleton";

export default function Bookmark() {
  const { movies: movieData } = useContext(MovieContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <Search />
        <div>
          <h2 className="mt-16 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
            Bookmarked Movies
          </h2>
          <div className="grid grid-cols-4 gap-12 xl:grid-cols-3 md:grid-cols-2 xs:gap-4">
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
          </div>
        </div>
        <div>
          <h2 className="mt-16 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
            Bookmarked TV Series
          </h2>
          <div className="grid grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
          </div>
        </div>
      </>
    );
  }

  const bookmarkedTvShows = movieData.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked
  );
  const bookmarkedMovies = movieData.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked
  );

  const allBookmarked = [...bookmarkedMovies, ...bookmarkedTvShows];

  return (
    <>
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
    </>
  );
}
