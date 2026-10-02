import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LolerSwager | Community",
  description: "Join the LolerSwager community on Discord.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer className="site-footer">
          <div className="site-footer__inner">
            <p>© {new Date().getFullYear()} LolerSwager · Independent community</p>
                <nav className="site-footer__links" aria-label="Site links">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/legal">Legal notice</Link>
                  <Link href="/sitemap.xml">Sitemap</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
