import Movie from "@/components/movies/Movie";
import movieData from "@/data.json";

export default function Page() {
  const tvShows = movieData.filter((movie) => movie.category === "TV Series");

  return (
    <section>
      <h1 className="mt-4 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
        TV Series
      </h1>
      <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
        {tvShows.map((show) => (
          <Movie
            imageSrc={show.thumbnail.regular.large}
            category={show.category}
            isBookmarked={show.isBookmarked}
            rating={show.rating}
            title={show.title}
            year={show.year}
            key={show.title + show.year + show.category}
          />
        ))}
      </div>
    </section>
  );
}
