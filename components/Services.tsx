"use client";

import { motion } from "motion/react";
import React from "react";

const Ampersand = () => {
  return (
    <span className="mr-4 rotate" style={{ fontSize: "0.856em" }}>
      §
    </span>
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


const Services = () => {
    const services = [
    {
        key: 'llm-systems',
        label: 'LLM Systems',
        copy: 'Ship a production-grade LLM stack in 90 days—slash model delivery time by 80% and save $2M+ in ML-ops overhead.',
        badge: 'Enterprise AI & ML teams'
    },
    {
        key: 'ai-chatbots',
        label: 'AI Chatbots',
        copy: 'Deploy revenue-driving chatbots that cut support tickets by 70% and boost conversion rates by 30%—live in under 30 days.',
        badge: 'Support, Sales & e-commerce'
    },
    {
        key: 'ai-copilots',
        label: 'AI Copilots',
        copy: 'Supercharge knowledge work with copilots that handle 80% of routine tasks—tripling team throughput in weeks.',
        badge: 'Legal, R&D & Customer Success'
    },
    {
        key: 'image-video-generation',
        label: 'Image & Video Generation',
        copy: 'Produce 10k+ brand-safe visuals and videos per month at 1/10th the agency cost—scale content without scaling headcount.',
        badge: 'Marketing & Creative Ops'
    },
    {
        key: 'coding-agents',
        label: 'Coding Agents',
        copy: 'Automate 60% of code reviews and refactoring—cut dev cycles in half and eliminate $1M+/yr in rework.',
        badge: 'Engineering & DevOps'
    },
    {
        key: 'ai-strategy-architecture',
        label: 'AI Strategy & Architecture',
        copy: 'Craft a GenAI roadmap that delivers 10× ROI in 12 months—secure, scalable infra & vendor picks vetted for regulated markets.',
        badge: 'CTO, CIO & Product Leadership'
    }
    ];

  return (
    <section id="services" className="py-20 px-4 md:px-16 max-w-6xl mx-auto">

      <BlockHeader title="Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {services.map(({ key, label, copy, badge }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-1">
              <span className="w-6 h-px bg-gray-300 mr-2" />
              <div className="font-mono uppercase text-xs text-gray-500 tracking-widest">
                {label}
              </div>
            </div>
            <p className="font-serif text-lg leading-relaxed text-gray-900 mb-2">
              {copy}
            </p>
            {badge && <p className="italic text-sm text-gray-600">{badge}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Services;