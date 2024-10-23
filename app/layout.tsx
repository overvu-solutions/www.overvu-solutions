import type { Metadata } from "next";
import { Playfair_Display, Literata } from "next/font/google";

import "./globals.css";
import Image from "next/image";

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
        <div>
          <header className=" px-6 mt-4 ">
            <div className="flex justify-between text-3xl uppercase w-full mt-2  w-full">
              <div className="self-start">
              <a href="/">ㄖvervue</a>
              </div>
              <div className="self-start">
                <a href="mailto:partners@overvue.solutions" className=" hover:underline hover:underline-offset-4">contact</a>
              </div>              
            </div>
          </header>
          <div className="max-w-full	md:max-w-screen-lg	relative	mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
