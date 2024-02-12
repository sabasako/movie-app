import Image from "next/image";
import movieImage from "@/public/assets/thumbnails/beyond-earth/regular/large.jpg";
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
}

export default function Movie({
  imageSrc,
  title,
  isBookmarked,
  rating,
  category,
  year,
}: MovieProps) {
  return (
    <div className="flex flex-col">
      <div className="relative cursor-pointer group">
        <Image
          src={imageSrc}
          className="w-full h-auto rounded-lg"
          alt={title}
          width={560}
          height={348}
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-stone-800 via-stone-800/50 to-transparent">
          <BookMark isBookmarked={isBookmarked} />
          <PlayButton />
        </div>
      </div>
      <Description
        trending={false}
        title={title}
        rating={rating}
        category={category}
        year={year}
      />
    </div>
  );
}
