import { MovieCl } from "@/classes/classes";
import { createContext, useState } from "react";
import MOVIES_DATA from "@/data.json";

const MOVIES_DATA_WITH_ID = MOVIES_DATA.map((movie) => {
  return { ...movie, id: Math.random().toString() };
});

export const MovieContext = createContext<{
  movies: MovieCl[];
  handleBookmark: (id: string) => void;
}>({
  movies: MOVIES_DATA_WITH_ID,
  handleBookmark: () => {},
});

export default function MovieContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let savedMovies = MOVIES_DATA_WITH_ID;

  if (typeof window !== "undefined") {
    const localMovies = window.localStorage.getItem("movies");
    savedMovies = localMovies ? JSON.parse(localMovies) : MOVIES_DATA_WITH_ID;
  }
  const [movies, setMovies] = useState<MovieCl[]>(savedMovies);

  function handleBookmark(id: string) {
    setMovies((prevMovies) => {
      const newMovies = prevMovies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, isBookmarked: !movie.isBookmarked };
        }
        return movie;
      });
      window.localStorage.setItem("movies", JSON.stringify(newMovies));
      return newMovies;
    });
  }

  const MovieContextValue = {
    movies,
    handleBookmark,
  };

  return (
    <MovieContext.Provider value={MovieContextValue}>
      {children}
    </MovieContext.Provider>
  );
}
