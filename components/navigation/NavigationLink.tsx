"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  content: string;
}

export default function NavigationLink({ href, content }: NavigationLinkProps) {
  const path = usePathname();
  const activeLink = path === href;

  return (
    <Link
      href={href}
      className={`group ${!activeLink ? "cursor-pointer" : "cursor-auto"}`}
    >
      <svg className="size-5" xmlns="http://www.w3.org/2000/svg">
        <path
          className={`${
            activeLink ? "" : "group-hover:fill-red"
          } transition-all duration-300 ease-in-out ${
            activeLink ? "fill-pureWhite" : ""
          }`}
          d={content}
          fill="#5A698F"
        />
      </svg>
    </Link>
  );
}
