import MoviesClient from "@/components/pages/movies/MoviesClient";

export const metadata = {
  title: "Movies",
  description: "Watch your favorite movies",
};

export default function MoviesPage() {
  return (
    <>
      <MoviesClient />
    </>
  );
}
