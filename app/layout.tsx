import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Andrea Arredondo's Blog`,
  description: `Hi! I'm Andrea Arredondo I'm a Mexican Data Scientist & Actuary based in [Mexico City, San Jose] passionate about science, ai, and cats.`,
  keywords: [
    "Andrea Arredondo",
    "Andrea",
    "Arredondo",
    "Personal Website",
    "Portfolio",
  ],
  authors: [{ name: "David Lazaro" }, { name: "Andrea Arredondo" }],
  creator: "David & Andrea",
  metadataBase: new URL("https://andrea-arredondo.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Andrea Arredondo",
    description: "Andrea Arredondo personal website",
    url: "https://andrea-arredondo.vercel.app/",
    siteName: "Andrea Arredondo",
    type: "website",
    images: [
      {
        url: "https://npr.brightspotcdn.com/dims4/default/6d84553/2147483647/strip/true/crop/1168x613+24+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F01%2F14%2Fthis-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
