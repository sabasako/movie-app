"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
// import imageByIndex from "@/util/ImageByIndex";
import MovieTrending from "../movies/MovieTrending";
import { MovieCl } from "@/classes/classes";

type PropType = {
  movies: MovieCl[];
  options?: EmblaOptionsType;
};
export default function EmblaCarousel({ movies, options }: PropType) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movies.map((movie, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <MovieTrending
                imageSrc={movie.thumbnail?.trending?.large || ""}
                category={movie.category || "Movie"}
                isBookmarked={movie.isBookmarked || false}
                rating={movie.rating || "PG"}
                title={movie.title || "No Title Found"}
                year={movie.year || 2021}
                key={
                  movie?.title ||
                  "Movie" + movie?.year + movie?.category ||
                  "Movie"
                }
                id={movie.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
