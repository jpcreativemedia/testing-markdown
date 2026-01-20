import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}
      >
        <Header />
        {/*
        <HeaderHover />
         */}
        <div className="flex flex-col min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
          {children}
        </div>
        <Foooter />
      </body>
    </html>
  );
}
