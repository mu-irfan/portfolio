import "../globals.css";

import { calibre, firaCode, inter, sfMono } from "@/config/fonts";
import { Footer, Navbar, Sides } from "@/components";
import Head from "next/head";
import sanityClient from "@/sanity/config/client";
import { HomePage } from "@/types";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityClient.fetch(`*[_type in ["homePage"]]`);
  const homePage: HomePage = data.find(
    (item: any) => item._type === "homePage"
  );

  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={homePage.seo.title} />
        <meta property="og:description" content={homePage.seo.description} />
        <meta property="og:image" content="/images/OT.png" />
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
