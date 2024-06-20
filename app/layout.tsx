import { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";


export const metadata: Metadata = {
  title: "SkyEncripttion",
  description: "Coming Soon",
  openGraph: {
    title: "SkyEncripttion",
    description: "Coming Soon",
  }
};

export default function RootLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
    {/* Default Font: Geist Sans */}
    <body className={ GeistSans.className }>
    {children}
    </body>
    </html>
  );
}