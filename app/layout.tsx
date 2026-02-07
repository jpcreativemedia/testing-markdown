import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Foooter from "@/ui/layout/Footer";
import Header from "@/ui/layout/Header";

// import HeaderHover from "@/ui/layout/HeaderHover";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = localFont({
  src: [
    {
      path: "../fonts/urbanist/Urbanist-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/urbanist/Urbanist-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "MVP - Markdown",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${inter.className} antialiased min-h-full`}>
        <Header />
        {/*
        <HeaderHover />
         */}
        <div className="flex flex-col min-h-screen items-center justify-center bg-white font-sans overflow-x-clip ">
          {children}
        </div>
        <Foooter />
      </body>
    </html>
  );
}
