import Search from "@/components/search/Search";
import Image from "next/image";
import notFoundImage from "@/public/not-found/not-found.webp";

export default function NotFound() {
  return (
    <div>
      <Search />
      <div className="flex flex-col gap-6 lg:h-96 justify-start items-center mt-16">
        <h1 className="text-4xl">404 - Not Found</h1>
      </div>
    </div>
  );
}
