"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui";
import { HeroSection as HeroSectionType } from "@/types";

import { NAVIGATION_LINKS } from "@/config/constants";

export const HeroSection: React.FC<{ data: HeroSectionType }> = ({ data }) => {
  const COMPONENT_DELAY = NAVIGATION_LINKS.length * 0.2 + 0.2;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: COMPONENT_DELAY }}
      className="max-w-5xl py-16 mx-auto sm:py-24 md:py-20 lg:py-16 xl:py-16 2xl:pt-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: COMPONENT_DELAY + 0.2 * 1,
        }}
        className="mb-5 font-mono sm:mb-7 lg:mb-8 text-green"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: COMPONENT_DELAY + 0.2 * 2,
        }}
        className="text-[40px] leading-[0.9] sm:text-5xl  md:text-6xl lg:text-[80px] font-semibold text-slate-lightest mb-2 lg:mb-1"
      >
        Suleman Khan.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: COMPONENT_DELAY + 0.2 * 3,
        }}
        className="text-[40px] leading-[0.9] sm:text-5xl  md:text-6xl lg:text-[80px] font-semibold text-slate"
      >
        {data.tagline}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: COMPONENT_DELAY + 0.2 * 4,
        }}
        className="text-lg sm:text-xl sm:leading-tight leading-[24px] sm:max-w-xl text-slate mt-5"
      >
        <PortableText value={data.description} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: COMPONENT_DELAY + 0.2 * 5,
        }}
      >
        <Button
          className="mt-12"
          onClick={() => window.open(data.callToAction.url, "_blank")}
        >
          {data.callToAction.label}
        </Button>
      </motion.div>
    </motion.section>
  );
};
