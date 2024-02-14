"use client";

import MovieContextProvider from "@/store/movie-context";
import Home from "./Home";
import SearchContextProvider from "@/store/search-context";

export default function HomeClient() {
  return (
    <>
      <MovieContextProvider>
        <SearchContextProvider>
          <Home />
        </SearchContextProvider>
      </MovieContextProvider>
    </>
  );
}
