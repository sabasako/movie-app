export default function MovieSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-64 2xl:w-52 xs:gap-3 xs:w-32 ">
      <div className="skeleton h-40 2xl:h-32 w-full xs:h-24"></div>
      <div className="skeleton h-4 w-44 2xl:w-40 xs:w-24"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}
