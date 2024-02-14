import { MovieCl } from "@/classes/classes";
import EmblaCarousel from "../carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useContext } from "react";
import { SearchContext } from "@/store/search-context";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface MovieProps {
  movies: MovieCl[];
}

export default function TrendingContainer({
  movies: trendingMovies,
}: MovieProps) {
  const { searchValue } = useContext(SearchContext);

  if (searchValue === "") {
    return (
      <section className="sandbox__carousel mt-9">
        <h1 className="mb-8 text-4xl text-pureWhite xs:mb-5 xs:text-2xl">
          Trending
        </h1>
        <EmblaCarousel movies={trendingMovies} options={OPTIONS} />
      </section>
    );
  }
}
