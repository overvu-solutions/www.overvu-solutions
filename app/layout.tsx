import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import { Mail } from "lucide-react";

import LinkedIn from "@/components/svg/LinkedIn";
import X from "@/components/svg/X";

import "./globals.css";

const fontV2 = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap', // or 'fallback' for smoother transition
  variable: '--font-cormorant-garamond',
});

const font = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: 'swap', // or 'fallback' for smoother transition
  variable: '--font-libre-baskerville',
});

export const metadata: Metadata = {
  title: "Prefix Tree | Custom LLM Agents & AI Systems",
  description:
    "Prefix Tree is a boutique AI studio designing and deploying LLM agents tailored to real-world workflows — from automation to copilots and internal tools.",
  keywords: [
    "Prefix Tree",
    "custom LLM agents",
    "LLM integration",
    "enterprise AI systems",
    "AI copilots",
    "workflow automation",
    "LLM consulting",
    "AI agent development",
    "production-grade AI",
    "AI infrastructure design",
  ],
  metadataBase: new URL("https://prefixtree.xyz"),
  openGraph: {
    title: "Prefix Tree | Custom LLM Agents & AI Systems",
    description:
      "We design and deploy structured AI agents for real-world use cases — copilots, automations, and internal tools.",
    url: "https://prefixtree.xyz",
    siteName: "Prefix Tree",
    images: [
      {
        url: "https://prefixtree.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prefix Tree AI Studio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prefix Tree | Custom AI Agents for Real Work",
    description:
      "LLM systems that go beyond chat — copilots, automations, and AI-native workflows, built for deployment.",
    creator: "@Overvu_", // update if needed
    images: ["https://prefixtree.xyz/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
const emial = "partners@overvu.solutions"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <header className={`flex justify-center items-baseline w-full my-[3.25rem] md:my-[3.4rem] text-light`}>
          
          <a className="text-xl" href="/">
            <h1>PRFX</h1>
          </a>
          
          <nav className="ml-20 flex justify-start  gap-7 text-xl">
            <a
              href={`mailto:${emial}`}
              className=" hover:underline hover:underline-offset-4"
            >
              Mail
            </a>
          </nav>
        </header>

        <div className="md:max-w-screen-lg mx-auto">
          <div className="max-w-full	relative	mx-auto">{children}</div>
          <footer className="mt-48 pb-12 row-start-3 flex gap-10 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href={`mailto:${emial}`}
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
              © {new Date().getFullYear()} Prefix Tree Ventures
            </h3>
          </footer>
        </div>
      </body>
    </html>
  );
}
