import React  from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'CineMatch - Love at First Scene',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className = {inter.variable}>
      <body className = "bg-[#18191A] text-white antialiased font-sans">
        {children} {/* Injects page-specific content */}
      </body>
    </html>
  );
}
