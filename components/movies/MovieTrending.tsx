import Image from "next/image";
import PlayButton from "./PlayButton";
import BookMark from "./Bookmark";
import Description from "./Description";

interface MovieProps {
  imageSrc: string;
  title: string;
  isBookmarked: boolean;
  rating: string;
  category: string;
  year: number;
  id: string;
}

export default function MovieTrending({
  imageSrc,
  title,
  isBookmarked,
  rating,
  category,
  year,
  id,
}: MovieProps) {
  return (
    <div className="relative cursor-pointer group">
      <Image
        src={imageSrc}
        alt="movie image"
        className="w-full h-auto rounded-lg"
        width={940}
        height={460}
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-stone-800 via-stone-800/50 to-transparent">
        <Description
          trending={true}
          title={title}
          rating={rating}
          category={category}
          year={year}
        />{" "}
        <BookMark id={id} isBookmarked={isBookmarked} />
        <PlayButton />
      </div>
    </div>
  );
}
