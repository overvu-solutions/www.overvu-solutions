import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";

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
    <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>
      §
    </span>
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
        data-nImage="1"
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
        We are a venture studio and boutique AI agency based in London &
        Luxembourg. Built to ship, not to demo.
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

const Team = () => {
  return (
    <div className="w-full mx-8">
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
          Together, we’ve built and deployed LLM systems across fintech,
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

const CaseItem = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle?: string;
  body: string;
}) => {
  return (
    <dl className="space-y-12">
      <div className="mb-12">
        <dt className="text-md font-medium tracking-wide uppercase mb-1">
          {title}
        </dt>
        <dd className="text-xs text-zinc-500 font-mono mb-3">{subtitle}</dd>
        <p className="text-sm leading-relaxed text-zinc-700 max-w-xl">{body}</p>
      </div>
    </dl>
  );
};

const Cases = () => {
  return (
    <div className="w-full mx-8">
      <BlockHeader title="cases" />
      <div className="py-4">
        <CaseItem
          title="REDRESS - FASHION  CO-PILOT"
          subtitle="AI stylist · B2B2C"
          body="A reference-based AI stylist that completes looks using curated visuals and smart similarity — no model fine-tuning required. Built for plug-and-play in multi-brand environments."
        />

        <CaseItem
          title="CBDC Proposal"
          subtitle="Digital currency · Central Bank Sandbox"
          body="We participated in a competitive tender for a central bank’s digital currency initiative. The proposal advanced into the regulatory sandbox."
        />

        <CaseItem
          title="NDA Project — Programmable Money Asset"
          subtitle="Fintech · Asset Design · Confidential"
          body="We contributed to the design of a novel investment instrument in the programmable money space. Details are under NDA — but it's one of the projects we’re most proud of."
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid items-center gap-[4rem] justify-items-center min-h-screen pb-20 px-4 sm:p-1">
      <div className="flex w-full justify-center my-[4rem] ">
        <HeroImage />
      </div>

      <main className="flex flex-col gap-main  row-start-2 items-center sm:items-start max-w-screen-md">
        {/* Pitch */}
        <div className="w-full">
          <HeroPitch />
        </div>

        {/* TEAM */}
        <div className="w-full">
          <Team />
        </div>

        <div className="w-full">
          <Cases />
        </div>

        {/* CASES */}
        <div className="w-full">
          <Brands />
        </div>

        <div className="pt-16 text-center w-full text-lg text-gray-600">
          <p>
            Curious?{"   "}
            <a href="mailto:partners@overvu.solutions" className=" underline ">
              Let&apos;s Talk
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
