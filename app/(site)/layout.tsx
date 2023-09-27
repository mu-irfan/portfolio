import "../globals.css";
import { calibre, firaCode, inter, sfMono } from "@/config/fonts";
import { Footer, Navbar, Sides } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Irfan",
  description: "Muhammad Irfan Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-irfan.vercel.app/",
    title: "Muhammad Irfan",
    description: "Muhammad Irfan Portfolio",
    images: [
      {
        url: "/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Irfan",
      },
    ],
  },
  }


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} ${calibre.variable} ${sfMono.variable}`}
      >
        <Navbar />
        <Sides />

        <main className="container px-6 mx-auto sm:px-12 lg:px-[100px] xl:px-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

