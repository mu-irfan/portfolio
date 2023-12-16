"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/config/constants";
import { Button } from "@/components";

interface IMobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const MobileMenu: React.FC<IMobileMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.querySelector("main")?.classList.add("blur");
    } else {
      document.body.style.overflow = "unset";
      document.querySelector("main")?.classList.remove("blur");
    }
  }, [isOpen]);

  return (
    <aside
      className={`fixed inset-0 w-3/4 sm:w-1/2 h-screen pb-12 transition duration-200 bg-navy-light md:hidden z-30
        ${
          isOpen
            ? "translate-x-1/3 sm:translate-x-full ease-out"
            : "translate-x-[200%] ease-in"
        }`}
      // aria-hidden={!isOpen}
    >
      <div className="h-screen mx-auto">
        <nav className="z-50 flex flex-col items-center justify-between h-screen">
          <ul className="flex flex-col my-auto space-y-2 text-center md:space-y-5">
            {NAVIGATION_LINKS.map(({ name, path }, i) => (
              <Link key={name} href={path} className="inline-block reset-link">
                <li
                  className="mt-5 text-slate-lightest"
                  onClick={() => setIsOpen(false)}
                >
                  <p className="mb-1 text-sm text-green">0{i + 1}.</p>
                  <p className="text-base sm:text-lg">{name}</p>
                </li>
              </Link>
            ))}
            <Link href="https://drive.google.com/file/d/1Y2mm1eKT5r-QaY9fz6T-MD4XnNnsHzFk/view?usp=sharing" className="!mt-12">
              <button className="inline-block font-mono border rounded-[4px] leading-[0.9] text-green border-green transition-all hover:shadow-outline-green hover:-translate-x-1 hover:-translate-y-1 text-sm px-4 py-3 text-[13px]">
                Resume
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
