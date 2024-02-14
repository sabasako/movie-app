import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./carousel.css";
import Navigation from "@/components/navigation/Navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${outfit.className} flex bg-darkBlue m-0 lg:flex-col`}
        >
          <Navigation />
          <main className="flex flex-col w-full my-8 ml-40 mr-8 lg:m-8 lg:w-auto xs:m-4">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
