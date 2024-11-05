import type { Metadata } from "next";
import { Playfair_Display, Literata } from "next/font/google";
import { Mail, AppWindowMac, Globe } from "lucide-react";

import LinkedIn from "@/components/svg/LinkedIn";
import X from "@/components/svg/X";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const font = Literata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overvu | Generative AI & Large Language Model (LLM) Consulting",
  description:
    "Unlock the full potential of Generative AI and Large Language Models with Overvu Solutions. Our tailored consulting services help businesses deploy, optimize, and integrate AI models for transformative business outcomes.",
  keywords: [
    "Generative AI consulting",
    "LLM consulting",
    "AI model optimization",
    "custom AI solutions",
    "AI business transformation",
    "GPT consulting",
    "NLP solutions",
    "AI-powered automation",
    "enterprise AI",
    "machine learning consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} `}>
        <header className="header flex justify-center items-baseline w-full mt-2 w-full ">
          <a className="text-2xl" href="/">
            ㄖVERVUE
          </a>
          <nav className="ml-20 flex justify-start  gap-7 text-xl">
            {/* <a
              href="mailto:partners@overvu.solutions"
              className=" hover:underline hover:underline-offset-4"
            >
              Team
            </a> */}
            <a
              href="mailto:partners@overvu.solutions"
              className=" hover:underline hover:underline-offset-4"
            >
              Mail
            </a>
          </nav>
        </header>

        <div className="md:max-w-screen-lg mx-auto">
          <div className="max-w-full	relative	mx-auto">{children}</div>
          <footer className="pt-52 pb-12 row-start-3 flex gap-10 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:partners@overvu.solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={16} />
              Mail
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/company/overvue-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://x.com/Overvu_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X />
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
