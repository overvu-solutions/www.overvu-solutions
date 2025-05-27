import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const Brands = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
      <li className="h-[44px] sm:h-[56px] aspect-[637/246]">
        <Image
          alt="Cambridge"
          loading="lazy"
          width={637}
          height={246}
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
    <span className="font-bold mr-4">§</span>
  );
};


export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen pb-20 gap-16 px-4 sm:p-1">
      <div className="flex w-full justify-center">
        <Image alt="logo" loading="lazy" width="909" height="589" decoding="async" data-nImage="1" className="h-auto w-60" src="/hero.png" />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-md">
        <div className="w-full">
          <h1 className="text-center text-4xl md:text-5xl leading-tight pt-4 mb-5 font-semibold">
            We build intelligent agents that work.
          </h1>
          <h2 className="text-center text-xl text-gray-500 max-w-xl font-light mx-auto">
            Custom LLM-powered tools for real business workflows. Not chat gimmicks — just reliable automation.
          </h2>
        </div>

        <div className="w-full pt-14">
          <h3 className="text-left text-3xl mb-5 font-semibold">What we do</h3>

          <div className="mb-14 w-full pl-4">
            <div className="text-left text-xl mb-5 text-gray-900  font-sans">
              <Ampersand/> Build intelligent agents that understand your documentation, handle customer inquiries, process data insights, and support your team&apos;s daily workflows.
            </div>
            <div className="text-left text-lg pt-1 mb-2 font-mono text-black bg-gray-100 p-4 rounded-lg border">
              <code>&gt; ./agents --read-docs --respond-customers --analyze-data --assist-team</code>
            </div>
          </div>

          <div className="mb-14 w-full pl-4">
            <div className="text-left text-xl text-gray-900 mb-5 font-sans">
              <Ampersand/> Custom-built solutions with tailored embedding pipelines, robust infrastructure, fine-tuned models, seamless deployment, and full ownership of outcomes.
            </div>
            <div className="text-left text-lg pt-1 mb-2 font-mono text-black bg-gray-100 p-4 rounded-lg border">
              <code>&gt; handcrafted --embedding-pipelines --infrastructure --tune --deploy --own-results</code>
            </div>
          </div>
        </div>


        <div className="w-full pt-14">
            <h3 className="text-left text-3xl mb-5 font-semibold">Team</h3>
            <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-2 mb-10">
              <Avatar pic="i/pavel.jpg" name="Pavel Grachev-Mousset" link="https://www.linkedin.com/in/pgrach/" />
              <Avatar pic="i/bohdan.jpg" name="Bohdan Snisar" link="https://www.linkedin.com/in/bsnisar/" />
              <Avatar pic="i/yaniv.jpg" name="Yaniv Proselkov" link="https://www.linkedin.com/in/yaniv-proselkov/" />
              <Avatar pic="i/sripaad.jpg" name="Sripaad Srinivasan" link="https://www.linkedin.com/in/sripaad-srinivasan/" />
              <Avatar pic="i/valeria.jpg" name="Valeria Jannelli" link="https://www.linkedin.com/in/valeria-jannelli/" />
            </div>
            <div className="text-left text-xl max-w-2xl mb-8 text-gray-800">
              <Ampersand/> Founded by AI experts from Revolut, Google, Techstars, and Cambridge — our team blends deep ML research with production-grade engineering.
            </div>
            <div className="text-left text-xl max-w-2xl mb-8 text-gray-700">
              <Ampersand/> We specialize in LLMs and automation: from fine-tuning and evaluation to infrastructure and retrieval systems.
            </div>
        </div>

        <div className="w-full pt-26 sm:pt-10">
          <Brands />
        </div>

        <div className="pt-16 text-center text-lg text-gray-600">
          Curious how a custom agent fits your workflow? {" "}
          <a href="mailto:partners@overvu.solutions" className=" hover:underline hover:underline-offset-4">Let&apos;s Talk</a>
        </div>
      </main>
    </div>
  );
}