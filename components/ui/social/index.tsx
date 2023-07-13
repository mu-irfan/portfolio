"use client";
import React from "react";
import Link from "next/link";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import cn from "classnames";
import { IconType } from "react-icons";

import { SOCIAL_LINKS } from "@/config/constants";

interface IconsMap {
  [key: string]: IconType | any;
}

const ICONS: IconsMap = {
  github: FiGithub,
  twitter: FiTwitter,
  linkedIn: FiLinkedin,
};

interface ISocialProps {
  className?: string;
}

export const Social: React.FC<ISocialProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.name];
        return (
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block reset-link"
            key={link.name}
          >
            <Icon className="w-5 h-5 transition-all text-slate-light hover:-translate-y-1 hover:text-green" />
          </Link>
        );
      })}
    </div>
  );
};
