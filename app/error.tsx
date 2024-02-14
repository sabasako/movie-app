"use client";

import Search from "@/components/search/Search";

export default function Error() {
  return (
    <div>
      <Search />
      <div className="flex flex-col gap-6 lg:h-96 justify-start items-center mt-16">
        <h1 className="text-4xl">Something Went Wrong</h1>
      </div>
    </div>
  );
}
