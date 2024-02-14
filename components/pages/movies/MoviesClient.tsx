"use client";

import MovieContextProvider from "@/store/movie-context";
import SearchContextProvider from "@/store/search-context";
import Movies from "./Movies";

export default function HomeClient() {
  return (
    <>
      <MovieContextProvider>
        <SearchContextProvider>
          <Movies />
        </SearchContextProvider>
      </MovieContextProvider>
    </>
  );
}
