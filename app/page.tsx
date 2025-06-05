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
    <h3 className="text-left text-3xl mb-5 uppercase font-semibold " style={{ letterSpacing: "0.08em" }}>
      <Ampersand /> {title}
    </h3>
  );
};

const Team = () => {
  return (
    <div className="w-full mx-8">
      <BlockHeader title="team" />

      <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-2 mb-10">
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

      <div className="text-xs text-gray-500 font-mono mb-1">⸺ FOUNDERS</div>
      <div className="text-left text-md max-w-2xl mb-8  text-black">
          Founded by Pavel, Bohdan, and Yaniv — former senior contributors to Revolut, Google, Techstars, and Cambridge.
      </div>

      {/* 2) LLM & Automation */}
      <div className="text-xs text-gray-500 font-mono  mb-1">⸺ EXPERIENCE</div>
      <div className=" text-left text-md max-w-2xl mb-8 text-black">
        Together, we’ve built and deployed LLM systems across fintech, developer tools, fashion, and web3 — from infra to interface.
      </div>

      {/* 3) New Web3 / Finance Line */}
      <div className="text-xs text-gray-500 font-mono  mb-1">⸺ PERSPECTIVE</div>
      <div className="text-left text-md max-w-2xl mb-8  text-black">
        Our backgrounds span financial infrastructure, applied research, and intelligent systems — with a focus on deployment, not speculation
      </div>
    </div>
  );
};

const CaseItem = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="mb-8">
      <h5 className="text-md mb-4">{title}</h5>
      <div className="text-gray-600 text-left text-md">{body}</div>
    </div>
  );
};

const Cases = () => {
  return (
    <div className="w-full mx-8">
      <BlockHeader title="cases" />
      <div>
        <CaseItem
          title="1. REDRESS - FASHION  CO-PILOT"
          body="Redress is our AI-powered fashion co-pilot that helps users 'complete the look' by sourcing reference images that perfectly reflect their style and aesthetic. Without any model fine-tuning, Redress leverages a curated library of visuals and smart similarity matching to suggest complementary pieces—whether it's pairing a statement jacket with the ideal trousers or finding the perfect shoes to tie an outfit together. The result is a seamless, style-driven experience that feels like having a personal stylist in your pocket."
        />

        <CaseItem
          title="2. CBDC Proposal"
          body="We participated in a competitive tender for a central bank’s digital
            currency (CBDC) initiative. Proposal landed into the sandbox."
        />

        {/* 3 */}
        <CaseItem
          title="3. 0DOCS - Auto Gen documentation dev tool"
          body="Our suite of developer tools is continuously evolving. The latest
          update introduces a unified SDK that streamlines API integrations,
          enhanced debugging utilities for faster issue resolution, and
          out-of-the-box templates that accelerate time to market. Whether
          you’re building smart contracts, integrating DLT nodes, or deploying
          AI-driven services, these tools simplify complex workflows and empower
          engineering teams to ship with confidence."
        />

        {/* ───────────────────────────────────────────────────────────────────── */}
        {/* 4 */}
        {/* ───────────────────────────────────────────────────────────────────── */}
        <CaseItem
          title="4. **nda** - programable money asset"
          body="Help to design new class of investment asset. Without revealing details it jsut cool and we are proud of it."
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen pb-20 px-4 sm:p-1">
      <div className="flex w-full justify-center my-[5rem]">
        <HeroImage />
      </div>

      <main className="flex flex-col gap-[6rem] row-start-2 items-center sm:items-start max-w-screen-md">
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

        <div className="pt-16 text-center text-lg text-gray-600">
          Curious how a custom agent fits your workflow?{" "}
          <a
            href="mailto:partners@overvu.solutions"
            className=" hover:underline hover:underline-offset-4"
          >
            Let&apos;s Talk
          </a>
        </div>
      </main>
    </div>
  );
}
