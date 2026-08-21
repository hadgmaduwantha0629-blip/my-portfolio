import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gevindu Maduwantha | Software Developer & Computer Vision Researcher",
  description:
    "Portfolio of Gevindu Maduwantha, a Computer Studies undergraduate, software developer and deep learning researcher specializing in computer vision, web and mobile development, ERP systems, artificial intelligence, IoT and creative technology.",
  keywords: [
    "Gevindu Maduwantha",
    "Software Developer",
    "Computer Vision Researcher",
    "Deep Learning Researcher",
    "Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "Web Development",
    "Mobile Development",
    "ERP Systems",
    "IoT",
    "Full Stack Development",
  ],
  authors: [{ name: "Gevindu Maduwantha" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
