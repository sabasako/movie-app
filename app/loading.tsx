"use client";

import { PacmanLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="absolute translate-x-1/2  translate-y-1/2 inset-1/2">
      <PacmanLoader color="#36d7b7" />
    </div>
  );
}
