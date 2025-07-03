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
};

const email = "partners@prefixtree.xyz";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* never let anything poke out horizontally */}
      <body className={`${font.className} overflow-x-hidden`}>
        {/* ---------- HEADER ---------- */}
        <header className="flex items-baseline justify-center py-12 px-4 sm:px-8">
          <a href="/" className="text-xl">
            <h1>PRFX</h1>
          </a>

          {/* smaller left-margin on phones so the whole chunk stays < 100 vw */}
          <nav className="ml-6 sm:ml-20 flex gap-7 text-xl">
            <a
              href={`mailto:${email}`}
              className="hover:underline hover:underline-offset-4"
            >
              Mail
            </a>
          </nav>
        </header>

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="container w-fill md:max-w-4xl mx-auto px-4 sm:px-8">
          {children}
        </main>

        {/* ---------- FOOTER ---------- */}
        <footer className="mt-48 pb-12 flex  flex-wrap items-center justify-center gap-10 px-4 sm:px-8">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Mail size={16} />
            Mail
          </a>

          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <span>Privacy</span>
          </a>

          <a
            href="https://www.linkedin.com/company/overvue-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <LinkedIn />
          </a>
          <a
            href="https://x.com/Overvu_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <X />
          </a>

          <h3 className="text-lg">© {new Date().getFullYear()} Prefix Tree</h3>
        </footer>
      </body>
    </html>
  );
}
