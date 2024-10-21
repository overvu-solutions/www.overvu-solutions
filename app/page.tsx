import Image from "next/image";
import { Mail, File, AppWindowMac, Globe } from "lucide-react";

const Section = ({pic, alt, name, link}: {pic: string; alt: string; name: string; link: string}) => {
  return <div className="section w-full md:w-1/4 flex flex-col">
    <div className="p-0 flex justify-center">
      <img src={pic} className="rounded-full w-36 h-36" />
    </div>
    <div className="description">
      <a href={link} className="underline underline-offset-2 text-lg">{name}</a> <br className="py-1" />
      <div className="light">{alt}</div>
    </div>
  </div>;
}


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="self-center	">
          <Image
            className=""
            src="/logo2.png"
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

        <div className="w-full flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20 mt-28">
          <Section pic="i/pavel.jpg" alt="Partner &amp; CEO" name="Pavel Grachev" link="https://www.linkedin.com/in/pgrach/" />
          <Section pic="i/bohdan.jpg" alt="Partner &amp; CTO" name="Bohdan Snisar" link="https://www.linkedin.com/in/bsnisar/" />
          <Section pic="i/yaniv.jpg" alt="Researcher &amp; CSO" name="Yaniv Proselkov" link="https://www.linkedin.com/in/yaniv-proselkov/" />
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

  function section(text: string) {
    return <div className="section flex flex-col">
      <div className="p-0 flex justify-center">
        <img src="i/pavel.jpg" className="rounded-full w-36 h-36" />
      </div>
      <div className="description">
        <a href="https://www.linkedin.com/in/pgrach/" className="underline underline-offset-2 text-lg">Pavel Grachev</a> <br className="py-1" />
        <div className="light">{text}</div>
      </div>
    </div>;
  }
}
