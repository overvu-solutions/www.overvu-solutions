/* app/layout.tsx (Next 13+/14 root layout) */
import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import { Mail } from "lucide-react";

import LinkedIn from "@/components/svg/LinkedIn";
import X from "@/components/svg/X";

import "./globals.css";

// /* ————— fonts ————— */
// const fontV2 = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
//   variable: "--font-cormorant-garamond",
// });

const font = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "PRFX - AI Leadership Solutions",
  description: "Turn your company into an industry leader with AI.",
  openGraph: {
    title: "PRFX - AI Leadership Solutions",
    description: "Turn your company into an industry leader with AI.",
    url: "https://prefixtree.xyz",
    siteName: "PRFX",
    images: [
      {
        url: "https://prefixtree.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "PRFX - AI Leadership Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const email = "partners@prefixtree.xyz";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} overflow-x-hidden`}>
          {children}
      </body>
    </html>
  );
}
