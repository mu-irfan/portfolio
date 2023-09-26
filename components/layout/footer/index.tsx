import React from "react";
import Link from "next/link";
import { Social } from "@/components/ui";

export const Footer = () => {
  return (
    <footer className="max-w-[270px] mx-auto text-xs text-center space-y-6 py-4 mb-1">
      <Social className="space-x-10 lg:hidden" />
      <Link
        href="/"
        className="inline-block font-mono transition-all text-slate-light reset-link hover:text-green"
      >
        Designed & Built by Muhammad Irfan
      </Link>
    </footer>
  );
};
