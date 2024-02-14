import TvShowsClient from "@/components/pages/tvshows/TvShowsClient";

export const metadata = {
  title: "TV Shows",
  description: "Watch your favorite TV shows",
};

export default function Home() {
  return (
    <>
      <TvShowsClient />
    </>
  );
}
