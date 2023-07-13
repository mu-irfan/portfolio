"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { MobileMenu } from "./mobile-menu";
import { NAVIGATION_LINKS, TRANSITION_DELAY } from "@/config/constants";
import { Button } from "@/components/ui";
import { motion, useAnimation } from "framer-motion";

interface IHeaderProps {
  className?: string;
}

export const Navbar: React.FC<IHeaderProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 1000,
        damping: 12,
        delay: i * 0.2,
      },
    }));
  }, [controls]);

  const smoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: any
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`z-50 py-7 px-6 lg:px-10 xl:px-[50px] ${className || ""}`}
    >
      <nav className="flex items-center justify-between">
        <div className="relative">
          <Link href="/" className="reset-link">
            <Image
              src="/images/header-logo.png"
              width={43}
              height={45}
              alt="logo"
            />
          </Link>
        </div>
        <div className="items-center justify-center hidden space-x-8 md:flex">
          <ul className="hidden text-[13px] space-x-7 md:block">
            {NAVIGATION_LINKS.map(({ name, path }, i) => (
              <Link
                key={name}
                href={path}
                className="inline-block reset-link"
                legacyBehavior
              >
                <motion.a
                  custom={i}
                  animate={controls}
                  initial={{ y: -20, opacity: 0 }}
                  key={name}
                  className="inline-block reset-link"
                  onClick={(event) => smoothScroll(event, path)}
                >
                  <li className="space-x-1 transition-all text-slate-lightest hover:text-green">
                    <span className="inline-block mb-1 text-green">
                      0{i + 1}.
                    </span>
                    <span className="inline-block">{name}</span>
                  </li>
                </motion.a>
              </Link>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: TRANSITION_DELAY * NAVIGATION_LINKS.length - 0.4,
            }}
            className="ml-4"
          >
            <Link href="/" className="reset-link">
              <Button size="sm">Resume</Button>
            </Link>
          </motion.div>
        </div>

        {/* mobile menu icon */}
        <div
          className={`block space-y-2 text-right md:hidden z-50 ${
            isOpen && "space-y-0"
          }`}
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <span
            className={`w-8 h-[2px] bg-green block transition-all
              ${isOpen && "rotate-45 scale-110 duration-500"}`}
          />
          <span
            className={`w-5 h-[2px] ml-auto bg-green block transition-all duration-1000
              ${isOpen && "hidden"}`}
          />
          <span
            className={`w-8 h-[2px] bg-green block transition-all duration-500 
              ${isOpen && "-rotate-45 scale-110 -translate-y-[10px]"}`}
          />
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
