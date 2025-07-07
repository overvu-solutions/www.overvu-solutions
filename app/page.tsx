import { BlockHeader } from "@/components/BlockHeader";

import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";

import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Brands from "@/components/Brands";


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
      <h4 className="mb-24 text-5xl sans-serif">
        Built to ship, not to demo.
      </h4>

      <p className="text-left text-md  text-gray-800 mb-8">
          We are a boutique consultancy based in London and Luxembourg. From research to real-world, we architect, deploy, and scale AI-native software in complient environments like fintech or biotech.
      </p>

      <p className="text-left text-md  text-gray-800 mb-8">
       	<strong>Applied AI. Real systems. Zero fluff</strong>
      </p>
    </div>
  );
};

const Team = () => {
  return (
    <div className="w-full mx-1 md:mx-8">
      <BlockHeader title="team" />

      <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-2 my-10">
        <Avatar
          pic="i/bohdan.jpg"
          name="Bohdan Snisar"
          link="https://www.linkedin.com/in/bsnisar/"
        />
        <Avatar
          pic="i/pavel.jpg"
          name="Pavel Grachev-Mousset"
          link="https://www.linkedin.com/in/pgrach/"
        />        
        <Avatar
          pic="i/yaniv.jpg"
          name="Yaniv Proselkov"
          link="https://www.linkedin.com/in/yaniv-proselkov/"
        />
        <Avatar
          pic="i/IvanZhuravel.jpg"
          name="Ivan Zhuravel"
          link="https://www.linkedin.com/in/zhuravel-ivan-b8578560/"
        />
        <Avatar
          pic="i/valeria.jpg"
          name="Valeria Jannelli"
          link="https://www.linkedin.com/in/valeria-jannelli/"
        />
        <Avatar
          pic="i/anastasia.jpeg"
          name="Anastasia Demchuk"
          link="https://www.linkedin.com/in/anastasia-demchuk/"
        />        
        
      </div>

      {/* 1) Founded‐By / Team Intro */}

      <div className="">
        <div className="text-xs text-gray-500 font-mono mb-1">⸺ FOUNDERS</div>
        <div className="text-left text-md max-w-2xl mb-8  text-black">
          Founded by Pavel and Bohdan — former senior contributors to
          Revolut, Google, Techstars, and Cambridge.
        </div>

        {/* 2) LLM & Automation */}
        <div className="text-xs text-gray-500 font-mono  mb-1">
          ⸺ EXPERIENCE
        </div>
        <div className=" text-left text-md max-w-2xl mb-8 text-black">
          Together, we&apos;ve built and deployed Applied AI across fintech,
          developer tools, and web3.
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

        <Team />
        <Brands />
        <Services />
        <Cases />

        {/* CTA */}
        <div className="pt-16 text-center text-lg text-gray-600">
          <p>
            Curious?{" "}
            <a href="mailto:partners@prefixtree.xyz" className="underline">
              Let&apos;s Talk
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
