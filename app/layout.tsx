import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suna's Beach Bar and Restaurant",
  description: "A luxury beach, bar and restaurant, perfect for relaxation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/background-1.jpg" />
        <link rel="preload" as="image" href="/images/background-2.jpg" />
        <link rel="preload" as="image" href="/images/background-3.jpg" />
      </head>

      <body
        className={`${crimsonPro.variable} ${interSans.variable} 
        ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
