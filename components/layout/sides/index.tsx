import React from "react";

import { Side, Social } from "@/components";
import Link from "next/link";
import { EMAIL } from "@/config/constants";

export const Sides = () => {
  return (
    <>
      <Side direction="left">
        <Social className="space-y-4" />
      </Side>
      <Side direction="right">
        <Link
          href="mailto:sulemank97@gmail.com"
          className="reset-link py-5 font-mono text-xs tracking-[0.16rem] text-slate-light vertical-rl hover:-translate-y-1 hover:text-green transition-all"
        >
          {EMAIL}
        </Link>
      </Side>
    </>
  );
};
