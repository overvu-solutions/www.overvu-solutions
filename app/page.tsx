import Image from "next/image";
import { Mail, File, AppWindowMac, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="self-center	">
          <Image
            className="dark:invert"
            src="logo.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div>
          <div className="text-block" id="header">
            <p className="text-xl">
              Overvu Solutions is an AI consulting focused on generative
              technologies. Founded by AI experts from Revolut, Google,
              Techstart, PwC, and Cambridge. We believe in the power of AI to
              unlock creativity across all industries.
            </p>
          </div>
        </div>

        <div className="container mt-28">
          <div className="section flex flex-col">
            <div className="p-0 flex justify-center">
              <img src="i/pavel.jpg" className="rounded-full w-36 h-36" />
            </div>
            <div className="description">
              <a href="https://www.linkedin.com/in/pgrach/" className="underline underline-offset-2 text-lg">Pavel Grachev</a> <br className="py-1"/>
              <div className="light">Partner &amp; CEO</div>
            </div>
          </div>

          <div className="section flex flex-col">
            <div className="p-0 flex justify-center">
              <img src="i/bohdan.jpg" className="rounded-full w-36 h-36 " />
            </div>
            <div className="description">
              <a href="https://www.linkedin.com/in/bsnisar/" className="underline underline-offset-2">Bohdan Snisar</a> <br />
              <div className="light">Partner &amp; CTO</div>
            </div>
          </div>

          <div className="section flex flex-col">
            <div className="p-0 flex justify-center">
              <img src="i/yaniv.jpg" className="rounded-full w-36 h-36" />
            </div>
            <div className="description">
              <a href="https://www.linkedin.com/in/yaniv-proselkov/" className="underline underline-offset-2">Yaniv Proselkov</a> <br />
              <div className="light">Researcher &amp; CSO</div>
            </div>
          </div>
          
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <File size={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppWindowMac size={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} />
          Company
        </a>
      </footer>
    </div>
  );
}
