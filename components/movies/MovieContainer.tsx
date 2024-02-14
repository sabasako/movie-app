import { MovieCl } from "@/classes/classes";
import Movie from "./Movie";
import { useContext } from "react";
import { SearchContext } from "@/store/search-context";

interface MovieContainerProps {
  movies: MovieCl[];
  heading: string;
  displayWhileSearching?: boolean;
  allMovies?: MovieCl[];
  displayWhileSearchingBookmark?: boolean;
}

export default function MovieContainer({
  movies,
  heading,
  displayWhileSearching = true,
  allMovies,
  displayWhileSearchingBookmark = false,
}: MovieContainerProps) {
  const { searchValue } = useContext(SearchContext);
  let searchedMovies;

  if (allMovies && searchValue !== "") {
    searchedMovies = allMovies.filter((movie) =>
      movie.title
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
  } else {
    searchedMovies = movies.filter((movie) =>
      movie.title
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
  }

  function handleDisplayHeading() {
    if (
      searchValue === "" &&
      !displayWhileSearching &&
      searchedMovies.length === 0
    ) {
      return `You don't have ${heading}`;
    }
    if (searchValue === "") {
      return heading;
    }
    return `Found ${searchedMovies.length} results for "${searchValue}"`;
  }

  if (
    displayWhileSearching ||
    (!displayWhileSearching &&
      searchValue === "" &&
      !displayWhileSearchingBookmark)
  ) {
    return (
      <section>
        <h1 className="mt-16 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
          {handleDisplayHeading()}
        </h1>

        <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
          {searchedMovies.map((movie) => (
            <Movie
              imageSrc={
                movie?.thumbnail?.regular?.large ||
                movie?.thumbnail?.trending?.large ||
                ""
              }
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              rating={movie.rating}
              title={movie.title}
              year={movie.year}
              key={movie.title + movie.year + movie.category}
              id={movie.id}
            />
          ))}
        </div>
      </section>
    );
  } else if (
    !displayWhileSearching &&
    searchValue !== "" &&
    displayWhileSearchingBookmark
  ) {
    return (
      <section>
        <h1 className="mt-16 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
          {searchValue === ""
            ? heading
            : `Found ${searchedMovies.length} results for "${searchValue}"`}
        </h1>

        <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
          {searchedMovies.map((movie) => (
            <Movie
              imageSrc={
                movie?.thumbnail?.regular?.large ||
                movie?.thumbnail?.trending?.large ||
                ""
              }
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              rating={movie.rating}
              title={movie.title}
              year={movie.year}
              key={movie.title + movie.year + movie.category}
              id={movie.id}
            />
          ))}
        </div>
      </section>
    );
  }
}
