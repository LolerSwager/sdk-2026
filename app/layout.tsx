import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/(navigation)/NavLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDK",
  description: "SDK || LolerSwager.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 bg-transparent flex justify-between">
          <Link href="http://localhost:3000">
            <Image
              className="brightness-0 invert"
              src="/images/logo.svg"
              alt="SDK logo"
              width={100}
              height={20}
              priority
            />
          </Link>
          <nav className="flex gap-4 p-4">
            <NavLink href="/server/test">server</NavLink>
            <NavLink href="/about">about</NavLink>
          </nav>
        </header>
        {children}

        <footer className="p-4 bg-black flex items-center justify-center">
          <p>2016 - {new Date().getFullYear()} | LolerSwager.com</p>
        </footer>
      </body>
    </html>
  );
}
