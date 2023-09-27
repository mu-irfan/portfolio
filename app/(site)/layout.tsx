import "../globals.css";
import { calibre, firaCode, inter, sfMono } from "@/config/fonts";
import { Footer, Navbar, Sides } from "@/components";
import Head from "next/head";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Muhammad Irfan</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muhammad Irfan" />
        <meta property="og:description" content="Muhammad Irfan portfolio" />
        <meta property="og:url" content="https://muhammad-irfan.vercel.app/" />
        <meta property="og:image" content="/images/OG.png" />
      </Head>
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
