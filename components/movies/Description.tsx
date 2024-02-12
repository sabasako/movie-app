interface DescriptionProps {
  trending?: boolean;
  title: string;
  year: number;
  rating: string;
  category: string;
}

export default function Description({
  trending,
  title,
  year,
  rating,
  category,
}: DescriptionProps) {
  return (
    <div
      className={`${
        trending ? "absolute left-4 bottom-4" : "mt-4"
      } text-lg text-pureWhite`}
    >
      <p
        className={`flex items-center ${
          trending ? "justify-center" : "justify-start"
        } gap-4 text-base opacity-80 xl:text-sm xl:gap-3 md:text-xs md:gap-2`}
      >
        <span>{year}</span>
        <span className="rounded-full bg-slate-200 size-1 "></span>
        <span className="flex items-center justify-center gap-1">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
              fill="#FFF"
              opacity=".75"
            />
          </svg>
          {category}
        </span>
        <span className={`rounded-full bg-slate-200 size-1`}></span>
        <span>{rating}</span>
      </p>
      <p className="text-3xl xl:text-2xl md:text-xl xs:text-sm">{title}</p>
    </div>
  );
}
