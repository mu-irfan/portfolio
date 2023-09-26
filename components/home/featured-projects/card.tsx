"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import cn from "classnames";
import { Project } from "@/types";

interface IProps {
  direction?: "left" | "right";
  project?: Project;
}
const Card: React.FC<IProps> = ({ direction = "left", project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="z-20 w-full rounded lg:grid lg:grid-cols-12 lg:items-center bg-green/5 lg:bg-transparent">
      {/* Preview */}
      <div
        className={cn(
          "relative z-10 group hidden lg:overflow-hidden lg:rounded lg:row-start-1 lg:row-end-2 lg:block shadow-card-navy-hover",
          direction === "left"
            ? "lg:col-start-1 lg:col-end-8"
            : "lg:col-start-6 lg:col-end-13"
        )}
      >
        {project?.imageSrc && (
          <Image
            src={project.imageSrc.src}
            alt={project.imageSrc.alt || ""}
            width={800}
            height={600}
            className="object-cover w-full h-full transition duration-150 cursor-pointer filter-multiply group-hover:filter-none"
          />
        )}
        <div className="absolute inset-0 duration-100 ease-in-out delay-150 opacity-50 cursor-pointer bg-cyan-500/50 group-hover:bg-transparent" />
      </div>

      {/* Caption */}
      <div
        className={cn(
          "relative z-20 p-5 pb-4 lg:row-start-1 lg:row-end-2 sm:pb-8 sm:p-10 lg:p-2",
          direction === "left"
            ? "lg:col-start-5 xl:col-start-7 lg:col-end-13 lg:self-end lg:text-right"
            : "lg:col-start-1 lg:col-end-9 xl:col-end-7 lg:self-start lg:text-left"
        )}
      >
        <p className="mt-3 mb-2 text-[13px] font-mono text-green">
          Featured Projects
        </p>
        <h3 className="text-2xl font-semibold sm:text-3xl hover:text-green">
          {project.name}
        </h3>
        <p className="right-0 text-lg transition-all duration-300 delay-75 lg:-mr-2 lg:hover:shadow-card-navy-hover lg:shadow-card-navy my-7 lg:p-6 lg:rounded lg:bg-navy-light text-slate-lightest">
          {project.description}
        </p>
        <ul
          className={cn(
            "text-[13px] font-mono text-slate-lightest flex space-x-2 lg:space-x-5",
            direction === "left" ? "lg:justify-end" : "lg:justify-start"
          )}
        >
          {project?.technologies.map((tag) => (
            <li key={tag}>
              <Link
                href="/"
                className="cursor-default reset-link text-slate-lightest"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            "flex mt-5 space-x-5",
            direction === "left" ? "lg:justify-end" : "lg:justify-start"
          )}
        >
          <li>
            <Link
              href={project.source}
              target="_blank"
              className="transition-all reset-link text-slate-lightest hover:text-green"
            >
              <FiExternalLink className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
