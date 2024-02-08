"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({
  href,
  children,
}: NavigationLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`group ${path === href ? "activeLink" : ""} cursor-pointer`}
    >
      {children}
    </Link>
  );
}
