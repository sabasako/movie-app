import Movie from "@/components/movies/Movie";
import movieData from "@/data.json";

export default function Page() {
  const bookmarkedTvShows = movieData.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked
  );
  const bookmarkedMovies = movieData.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked
  );

  return (
    <>
      <section>
        <h2 className="mt-6 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
          Bookmarked Movies
        </h2>
        <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
          {bookmarkedMovies.map((movie) => (
            <Movie
              imageSrc={movie.thumbnail.regular.large}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              rating={movie.rating}
              title={movie.title}
              year={movie.year}
              key={movie.title + movie.year + movie.category}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mt-12 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
          TV Series
        </h2>
        <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
          {bookmarkedTvShows.map((movie) => (
            <Movie
              imageSrc={movie.thumbnail.regular.large}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              rating={movie.rating}
              title={movie.title}
              year={movie.year}
              key={movie.title + movie.year + movie.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}
