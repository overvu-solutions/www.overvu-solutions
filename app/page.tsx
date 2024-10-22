import Image from "next/image";

import { Mail, File, AppWindowMac, Globe } from "lucide-react";
import Link from "next/link";

const Section = ({
  pic,
  alt,
  name,
  link,
}: {
  pic: string;
  alt: string;
  name: string;
  link: string;
}) => {
  return (
    <div className=" w-full md:w-1/4 flex flex-col">
      <div className="p-0 flex justify-center">
        <img src={pic} className="rounded-full w-36 h-36" alt="" />
      </div>
      <div className="description">
        <a href={link} className="underline underline-offset-2 text-lg">
          {name}
        </a>{" "}
        <br className="py-1" />
        <div className="light">{alt}</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex w-full justify-center pt-8 pb-1">
            <Image
              alt="logo"
              loading="lazy"
              width="909"
              height="589"
              decoding="async"
              data-nImage="1"
              className="h-auto w-60"
              src="/logo4.png"
            />
          </div>
          <div className="text-2xl text-center mt-4">
            Overvue is an independent GenAI consulting and product company.
            Founded by AI experts from Revolut, Google, Techstars and Cambridge.
            We saw the untapped potential of GenAI and LLMs in automation,
            decision-making, and efficiency, and are driven to bring that value
            to businesses across industries.
          </div>

          <div className="w-full pt-48 sm:pt-48">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-20">
              <li className="h-[50px] w-[130px] sm:h-auto sm:w-[170px]">
                <Image
                  alt="Cambridge"
                  loading="lazy"
                  width="637"
                  height="246"
                  decoding="async"
                  data-nImage="1"
                  className="h-full w-full"
                  src="/media/cambridge.jpg"
                />
              </li>

              <li className="h-[70px] w-[70px] sm:inline sm:h-[100px] sm:w-[150px]">
                <Image
                  alt="Revolut"
                  loading="lazy"
                  width="909"
                  height="589"
                  decoding="async"
                  data-nImage="1"
                  className="h-full w-full"
                  src="/media/revolut.svg"
                />
              </li>

              <li className="h-[50px] w-[50px] sm:h-[50px] sm:w-[50px]">
                <Image
                  alt="Google"
                  loading="lazy"
                  width="60"
                  height="146"
                  decoding="async"
                  data-nImage="1"
                  className="h-full w-full"
                  src="/media/google.svg"
                />
              </li>

              <li className="h-[70px] w-[100px] sm:h-[100px] sm:w-[100px]">
                <Image
                  alt="techstars"
                  loading="lazy"
                  width="731"
                  height="137"
                  decoding="async"
                  data-nImage="1"
                  className="h-full w-full"
                  src="/media/techstars.svg"
                />
              </li>

              <li className="h-[70px] w-[70px] sm:inline sm:h-[100px] sm:w-[100px]">
                <Image
                  alt="Wix"
                  loading="lazy"
                  width="909"
                  height="589"
                  decoding="async"
                  data-nImage="1"
                  className="h-full w-full"
                  src="/media/wix.svg"
                />
              </li>

              {/* <li className="h-[100px] w-[100px] sm:h-[130px] sm:w-[130px]">
              <Image
                alt="kpmg"
                loading="lazy"
                width="652"
                height="652"
                decoding="async"
                data-nImage="1"
                className="h-full w-full"
                src="/media/kpmg.svg"
              />
            </li> */}
            </ul>
          </div>

          <div className="w-full pt-28 sm:pt-56">
            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20 ">
              <Section
                pic="i/pavel.jpg"
                alt="Partner &amp; CEO"
                name="Pavel Grachev"
                link="https://www.linkedin.com/in/pgrach/"
              />
              <Section
                pic="i/bohdan.jpg"
                alt="Partner &amp; CTO"
                name="Bohdan Snisar"
                link="https://www.linkedin.com/in/bsnisar/"
              />
              <Section
                pic="i/yaniv.jpg"
                alt="Researcher &amp; CSO"
                name="Yaniv Proselkov"
                link="https://www.linkedin.com/in/yaniv-proselkov/"
              />
            </div>
          </div>

          {/* <div className="w-full text-left">
            <h3 className="font-2xl">Story</h3>
            <p>
              <strong>Realization:</strong> We saw the untapped potential of
              Generative AI and Large Language Models (LLMs) in solving business
              problems
            </p>
            <p>
              <strong>Problem:</strong> Many businesses struggle to understand
              and implement AI effectively, missing out on the benefits of
              automation, better decision-making, and efficiency
            </p>
            <p>
              <strong>Mission:</strong> Set out to make AI solutions accessible,
              practical, and impactful for organizations
            </p>
          </div> */}
        </main>

        <footer className="pt-52 pb-12 row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} />
            Company
          </Link>
        </footer>
      </div>
    </div>
  );
}
