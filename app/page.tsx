import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import Movie from "@/components/movies/Movie";
import { EmblaOptionsType } from "embla-carousel";
import movieData from "@/data.json";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
console.log(SLIDES);

export default function Home() {
  const recommendedMovies = movieData.filter(
    (movie) => movie.isTrending === false
  );
  const trendingMovies = movieData.filter((movie) => movie.isTrending === true);

  return (
    <>
      <section className="sandbox__carousel mt-9">
        <h1 className="mb-8 text-4xl text-pureWhite xs:mb-5 xs:text-2xl">
          Trending
        </h1>
        <EmblaCarousel movies={trendingMovies} options={OPTIONS} />
      </section>
      <section>
        <h1 className="mt-16 mb-8 text-4xl text-pureWhite xs:mt-12 xs:mb-6 xs:text-2xl">
          Recommended for you
        </h1>
        <div className="grid grid-cols-4 gap-8 xl:grid-cols-3 sm:grid-cols-2 xs:gap-4">
          {recommendedMovies.map((movie) => (
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
