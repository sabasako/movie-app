import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./carousel.css";
import Navigation from "@/components/navigation/Navigation";
import Search from "@/components/search/Search";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie app built with Next.js, Typescript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-darkBlue flex lg:block`}>
        <Navigation />
        <main className="flex flex-col w-full my-8 mr-8 lg:m-8 lg:w-auto xs:m-4">
          <Search />
          {children}
        </main>
      </body>
    </html>
  );
}
