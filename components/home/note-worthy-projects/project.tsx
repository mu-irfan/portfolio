import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { Project } from "@/types";
import { PortableText } from "@portabletext/react";

export const Projects: React.FC<{ project: Project }> = ({ project }) => {
  if (!project) {
    return null;
  }
  return (
    <Link target="_blank" href={project.url} className="reset-link">
      <div className="group bg-[#112240] text-white flex flex-col justify-between rounded-[4px] px-7 py-9 h-full transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <div className="text-green w-10 h-10">
                <CiFolderOn className="h-11 w-11" />
              </div>
              <div className="text-slate-light flex items-center gap-3">
                <FiExternalLink className="w-5 h-5 hover:text-green" />
              </div>
            </div>
            <h2 className="text-[1.4rem] leading-[26px] font-semibold transition-colors group-hover:text-green">
              {project.name}
            </h2>
            <PortableText
              value={project.content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-[18px] leading-[22px] py-2 text-slate-light">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          </div>
        </div>
        <div className="">
          <ul className="flex space-x-4">
            {project.technologies.map((tech: string, ind: number) => (
              <li key={ind} className="text-xs text-slate-400 py-2  rounded-md">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};
