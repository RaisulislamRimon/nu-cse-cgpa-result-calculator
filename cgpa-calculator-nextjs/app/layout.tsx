import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';

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
