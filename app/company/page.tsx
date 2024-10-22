import Image from "next/image";
import { Mail, File, AppWindowMac, Globe } from "lucide-react";



export default function Company() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h2>Overvu Solutions</h2>
      </header>
      <main className="flex flex-col">
        <div className="text-left">
          <h3 className="text-2xl">Company</h3>
          <div className="pl-4 mt-5">
            <ul>
              <li>Address: xxxxx, xxxxx, London, United Kingdom</li>
              <li>Email: <a href="mailto:partners@overvu.solutions">partners@overvu.solutions</a></li>
              <li>Phone: +44 </li>
            </ul>
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
