import Image from "next/image";

import { Mail, File, AppWindowMac, Globe } from "lucide-react";
import Link from "next/link";

const Avatar = ({
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
  const w = '25';
  return (
    <div className=" w-full md:w-36 flex flex-col">
      <div className="p-0 flex justify-center">
        <img src={pic} className={`rounded-full avatar`} alt="" />
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
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-md">
          <div className="flex w-full justify-center">
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
          <div className="w-full flex justify-center">
            <div className=" text-center mt-1 max-w-screen-md">
              <div className="text-left text-3xl md:text-4xl pb-2 mb-12">
                Overvue is an independent GenAI consulting and product company
              </div>
              <div className="text-left text-xl mt-6">
                We are a team of scientists and startup engineers researching
                and implementing AI/LLM solutions. We know how to build startups
                from 0 to 1 as we did it on our own.
              </div>
              <div className="text-left text-xl mt-6">
                Founded by AI experts from Revolut, Google, Techstars and
                Cambridge. We saw the untapped potential of GenAI and LLMs in
                automation, decision-making, and efficiency, and are driven to
                bring that value to businesses across industries.
              </div>
            </div>
          </div>
          <div className="w-full justify-center pt-28 sm:pt-28">
            <h3 className="text-center text-3xl mb-14">Team</h3>
            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8 md:gap-20 ">
              <Avatar
                pic="i/pavel.jpg"
                alt="Partner &amp; CEO"
                name="Pavel Grachev"
                link="https://www.linkedin.com/in/pgrach/"
              />
              <Avatar
                pic="i/bohdan.jpg"
                alt="Partner &amp; CTO"
                name="Bohdan Snisar"
                link="https://www.linkedin.com/in/bsnisar/"
              />
              <Avatar
                pic="i/yaniv.jpg"
                alt="Researcher &amp; CSO"
                name="Yaniv Proselkov"
                link="https://www.linkedin.com/in/yaniv-proselkov/"
              />
            </div>
            <div className="flex justify-center">
              <div className="text-justify text-xl max-w-screen-md">
                Our team consists of both academics and industry professionals.
                On the scientific side, we focus on network algorithms, with
                specialists in the areas of supply chains. Fine tuning LLMs and
                runing benchmarks on them. On the engineering side, building
                workflows and solutions based on LLMs for different use cases
                with understanding of proc and cons of LLMs. Moreover, creating
                infrastructure for data pipelines that is a fuel for any LLM
                project.
              </div>
            </div>
            <div className="w-full pt-10 sm:pt-10">
              <ul className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-20">
                <li className="h-auto w-[130px] sm:h-auto sm:w-[170px]">
                  <Image
                    alt="Cambridge"
                    loading="lazy"
                    width="637"
                    height="246"
                    decoding="async"
                    className="h-full w-full"
                    src="/media/cambridge.jpg"
                  />
                </li>

                <li className="h-auto w-[120px] sm:inline sm:h-[100px] sm:w-[150px]">
                  <Image
                    alt="Revolut"
                    loading="lazy"
                    width="909"
                    height="589"
                    decoding="async"
                    className="h-full w-full"
                    src="/media/revolut.svg"
                  />
                </li>

                <li className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]">
                  <Image
                    alt="Google"
                    loading="lazy"
                    width="60"
                    height="146"
                    decoding="async"
                    className="h-full w-full"
                    src="/media/google.svg"
                  />
                </li>

                <li className="h-auto w-[120px] sm:h-[150px] sm:w-[150px]">
                  <Image
                    alt="techstars"
                    loading="lazy"
                    width="731"
                    height="137"
                    decoding="async"
                    className="h-full w-full"
                    src="/media/techstars.png"
                  />
                </li>

                <li className="h-[65px] w-[65px] sm:inline sm:h-[78px] sm:w-[78px]">
                  <Image
                    alt="Wix"
                    loading="lazy"
                    width="909"
                    height="589"
                    decoding="async"
                    className="h-full w-full"
                    src="/media/wix1.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
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
