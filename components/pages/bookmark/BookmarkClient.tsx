"use client";

import MovieContextProvider from "@/store/movie-context";
import SearchContextProvider from "@/store/search-context";
import Bookmark from "./Bookmark";

export default function HomeClient() {
  return (
    <>
      <MovieContextProvider>
        <SearchContextProvider>
          <Bookmark />
        </SearchContextProvider>
      </MovieContextProvider>
    </>
  );
}
