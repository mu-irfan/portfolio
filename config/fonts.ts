import { Inter, Fira_Code } from "next/font/google";

import LocalFont from "next/font/local";
const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  fallback: ["monospace"],
  variable: "--font-firacode",
  weight: ["300", "400", "700"],
});

const sfMono = LocalFont({
  variable: "--font-sfmono",
  src: [
    {
      path: "../public/fonts/sf-mono/sf-mono-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono/sf-mono-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const calibre = LocalFont({
  variable: "--font-calibre",
  src: [
    {
      path: "../public/fonts/calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/calibre/Calibre-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export { calibre, inter, firaCode, sfMono };
