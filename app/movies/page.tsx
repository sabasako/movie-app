import Movie from "@/components/movies/Movie";
import movieData from "@/data.json";

export default function Page() {
  const movies = movieData.filter((movie) => movie.category === "Movie");

  return (
    <section>
      <h1 className="mt-4 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
        Movies
      </h1>
      <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
        {movies.map((movie) => (
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
  );
}
