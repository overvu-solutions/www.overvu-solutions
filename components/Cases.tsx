import React from "react";
import {BlockHeader, Block, BlockBody} from "@/components/Block";

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
    <Block >
      <BlockHeader title="cases" />
      <BlockBody className="py-4">
        <CaseItem
          title="REDRESS - FASHION  CO-PILOT"
          subtitle="AI · AI stylist · B2B2C"
          body="A reference-based AI stylist that completes looks using curated visuals and smart similarity — no model fine-tuning required. Built for plug-and-play in multi-brand environments."
        />

        <CaseItem
          title="CBDC Proposal"
          subtitle="Digital currency · Central Bank Sandbox"
          body="We participated in a competitive tender for a central bank's digital currency initiative. The proposal advanced into the regulatory sandbox."
        />

        <CaseItem
           title="NDA Project — Hydropower Optimization"
           subtitle="Energy systems · Infrastructure modeling · Miners"
           body="We modeled demand-response strategies for variable hydro power, balancing system constraints and revenue potential. Project under NDA."
         />

        <CaseItem
          title="NDA Project — Programmable Money Asset"
          subtitle="Research · Fintech · Asset Design"
          body="We contributed to the design of a novel investment instrument in the programmable money space. Details are under NDA. Intersection of investement asset, DLT, programable money."
        />
      </BlockBody>
    </Block>
  );
};

export default Cases;