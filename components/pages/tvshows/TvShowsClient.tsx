"use client";

import MovieContextProvider from "@/store/movie-context";
import SearchContextProvider from "@/store/search-context";
import TvShows from "./TvShows";

export default function HomeClient() {
  return (
    <>
      <MovieContextProvider>
        <SearchContextProvider>
          <TvShows />
        </SearchContextProvider>
      </MovieContextProvider>
    </>
  );
}
