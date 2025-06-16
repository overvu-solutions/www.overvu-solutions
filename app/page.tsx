import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";

import Cases from "@/components/Cases";

const Brands = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
      <li className="h-[44px] sm:h-[56px] aspect-[5/2]">
        <Image
          alt="Cambridge"
          loading="lazy"
          width={537}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/cambridge.jpg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="Revolut"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/revolut.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[60/146]">
        <Image
          alt="Google"
          loading="lazy"
          width={60}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/google.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[131/137]">
        <Image
          alt="Techstars"
          loading="lazy"
          width={731}
          height={137}
          className="h-full w-auto object-contain"
          src="/media/techstars.png"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="Wix"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/wix1.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="ETH"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/eth.png"
        />
      </li>
    </ul>
  );
};

const Ampersand = () => {
  return (
    <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>§</span>
  );
};

const HeroImage = () => {
  return (
    <div className="">
      <Image
        alt="logo"
        loading="lazy"
        width="909"
        height="589"
        decoding="async"
        className="h-auto w-[10.856rem] md:w-[13.856rem] object-contain"
        src="/hero.png"
      />
    </div>
  );
};

const HeroPitch = () => {
  return (
    <div className="text-center  mx-8 text-gray-900  ">
      <p className="mb-14 text-3xl sans-serif">
           <em>Built to ship, not to demo.</em>
      </p>
    </div>
  );
};

const BlockHeader = ({ title }: { title: string }) => {
  return (
    <h3
      className="text-left text-3xl mb-4 uppercase font-semibold "
      style={{ letterSpacing: "0.08em" }}
    >
      <Ampersand /> {title}
    </h3>
  );
};

const Thesis = () => (
  <section className="w-full mx-1 md:mx-8 py-8">
    {/* Main section header */}
    <BlockHeader title="thesis" />

    {/* Core belief */}
    <h3
      className="text-left mb-4 uppercase font-semibold"
    >
      AI-native ventures outperform traditional players
    </h3>

    {/* WHY */}
    <h4 className="font-semibold mb-2">Why</h4>
    <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-zinc-700 max-w-xl mb-6">
      <li>AI-first processes are inherently more efficient.</li>
      <li>Legacy organisations lag on innovation and speed.</li>
    </ul>

    {/* WE */}
    <h4 className="font-semibold mb-2">We</h4>
    <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-zinc-700 max-w-xl">
      <li>Help established players innovate with AI-native architecture.</li>
      <li>Operate in true startup mode — rapid cycles, shipped code.</li>
    </ul>
  </section>
);




const Team = () => {
  return (
    <div className="w-full mx-1 md:mx-8">
      <BlockHeader title="team" />

      <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-2 my-10">
        <Avatar
          pic="i/pavel.jpg"
          name="Pavel Grachev-Mousset"
          link="https://www.linkedin.com/in/pgrach/"
        />
        <Avatar
          pic="i/bohdan.jpg"
          name="Bohdan Snisar"
          link="https://www.linkedin.com/in/bsnisar/"
        />
        <Avatar
          pic="i/yaniv.jpg"
          name="Yaniv Proselkov"
          link="https://www.linkedin.com/in/yaniv-proselkov/"
        />
        <Avatar
          pic="i/sripaad.jpg"
          name="Sripaad Srinivasan"
          link="https://www.linkedin.com/in/sripaad-srinivasan/"
        />
        <Avatar
          pic="i/valeria.jpg"
          name="Valeria Jannelli"
          link="https://www.linkedin.com/in/valeria-jannelli/"
        />
      </div>

      {/* 1) Founded‐By / Team Intro */}

      <div className="">
        <div className="text-xs text-gray-500 font-mono mb-1">⸺ FOUNDERS</div>
        <div className="text-left text-md max-w-2xl mb-8  text-black">
          Founded by Pavel, Bohdan, and Yaniv — former senior contributors to
          Revolut, Google, Techstars, and Cambridge.
        </div>

        {/* 2) LLM & Automation */}
        <div className="text-xs text-gray-500 font-mono  mb-1">
          ⸺ EXPERIENCE
        </div>
        <div className=" text-left text-md max-w-2xl mb-8 text-black">
          Together, we&apos;ve built and deployed LLM systems across fintech,
          developer tools, fashion, and web3 — from infra to interface.
        </div>

        {/* 3) New Web3 / Finance Line */}
        <div className="text-xs text-gray-500 font-mono  mb-1">
          ⸺ PERSPECTIVE
        </div>
        <div className="text-left text-md max-w-2xl mb-8  text-black">
          Our backgrounds span financial infrastructure, applied research, and
          intelligent systems — with a focus on deployment, not speculation
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    /* Prevent any accidental x-overflow as a final safety-net */
    <div className="min-h-screen overflow-x-hidden pb-20">

      {/* Hero logo row */}
      <div className="flex justify-center my-16">
        <HeroImage />
      </div>

      <main className="container mx-auto flex flex-col gap-16 px-4 sm:px-8">

        <HeroPitch />

        {/* Sections */}
        <Thesis />
        <Team />
        <Cases />
        <Brands />

        {/* CTA */}
        <div className="pt-16 text-center text-lg text-gray-600">
          <p>
            Curious?{" "}
            <a
              href="mailto:partners@overvu.solutions"
              className="underline"
            >
              Let&apos;s Talk
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}