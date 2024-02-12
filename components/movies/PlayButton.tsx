export default function PlayButton() {
  return (
    <>
      <div className="absolute z-20 items-center justify-center hidden w-32 gap-4 p-6 -translate-x-1/2 -translate-y-1/2 rounded-full hover:opacity-80 group-hover:flex inset-x-1/2 inset-y-1/2 bg-white/15 md:w-24 md:p-5 md:gap-3 xs:group-hover:hidden">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-8 stroke-pureWhite md:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
        <p className="text-2xl font-semibold text-pureWhite md:text-xl">Play</p>
      </div>
      <div className="absolute inset-0 z-0 hidden rounded-lg group-hover:block bg-white/5 xs:group-hover:hidden"></div>
    </>
  );
}
