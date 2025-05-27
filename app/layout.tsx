import type { Metadata } from "next";
import { Literata } from "next/font/google";
import { Mail } from "lucide-react";

import LinkedIn from "@/components/svg/LinkedIn";
import X from "@/components/svg/X";

import "./globals.css";
// import Image from "next/image";
// import Link from "next/link";

const font = Literata({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Overvu | Custom LLM Agents & AI Consulting for Business Impact",
  description:
    "Overvu is a boutique AI consultancy building production-ready LLM agents tailored to your workflows. From copilots to automation, we help enterprises deploy AI systems that deliver real business outcomes.",
  keywords: [
    "custom LLM agents",
    "enterprise AI consulting",
    "AI copilots",
    "Generative AI for business",
    "AI agent development",
    "GPT-4 consulting",
    "AI workflow automation",
    "LLM deployment",
    "production-ready AI systems",
    "AI integration services",
  ],
  metadataBase: new URL("https://overvu.solutions"),
  openGraph: {
    title: "Overvu | Custom LLM Agents & AI Consulting for Business Impact",
    description:
      "We build tailored LLM agents for real-world use cases — copilots, automation, and more. Trusted by technical founders and innovation teams.",
    url: "https://overvu.solutions",
    siteName: "Overvu",
    images: [
      {
        url: "https://overvu.solutions/og-image.png",
        width: 1200,
        height: 630,
        alt: "Overvu AI Agents Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overvu | Custom LLM Agents for Enterprise",
    description:
      "Boutique AI agency designing LLM agents that deliver impact — copilots, automation, and enterprise AI workflows.",
    creator: "@Overvu_",
    images: ["https://overvu.solutions/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
          
          <a className="text-xl" href="/">
            <h1>OVERVU</h1>
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

            <h3 className="text-lg">
              © {new Date().getFullYear()} Overvue Solutions
            </h3>
          </footer>
        </div>
      </body>
    </html>
  );
}
