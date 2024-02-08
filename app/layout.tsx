import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

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
      <body className={`${outfit.className} bg-darkBlue flex`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
