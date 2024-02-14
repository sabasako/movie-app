import Search from "@/components/search/Search";
import Image from "next/image";
import notFoundImage from "@/public/not-found/not-found.webp";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-6 mt-16 lg:h-96">
        <h1 className="text-4xl">404 - Not Found</h1>
      </div>
    </div>
  );
}
