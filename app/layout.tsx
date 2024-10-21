import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google'

import "./globals.css";

const font = Playfair_Display({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Generative AI & Large Language Model (LLM) Consulting - Overvu Solutions",
  description: "Unlock the full potential of Generative AI and Large Language Models with Overvu Solutions. Our tailored consulting services help businesses deploy, optimize, and integrate AI models for transformative business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} `}
      >
        {children}
      </body>
    </html>
  );
}
