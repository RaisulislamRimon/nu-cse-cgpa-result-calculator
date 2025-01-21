import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NU CSE CGPA Result Calculator",
  description: "CGPA Calculator for NU CSE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className="bg-gradient-to-r from-blue-50 to-blue-100">
        <header className="flex items-center p-4 bg-white shadow-md">
          <Image src="/logo.png" alt="CGPA Calculator Logo" width={50} height={50} />
          <h1 className="ml-4 text-2xl font-bold text-blue-700">CGPA Calculator</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
