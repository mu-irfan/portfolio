"use client";
import React, { useState } from "react";
import { Projects } from "./project";
import { Button } from "@/components/ui";
import Link from "next/link";
import { Project } from "@/types";


export const NoteworthyProject: React.FC<{ data: Project[] }> = ({ data }) => {
  const [intialProject, setInitialProject] = useState(6);
  const [toggledProject, setToggledProject] = useState(false);

  const handleToggleProjects = () => {
    setToggledProject(true);
    setInitialProject(intialProject + data.slice(6, data.length).length);
  };

  const hideProjects = () => {
    setToggledProject(false);
    setInitialProject(intialProject - data.slice(6, data.length).length);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[24px] leading-[0.9] lg:text-[32px] pt-60 font-semibold text-slate-lightest mb-2">
          Other Noteworthy Projects
        </h1>
        <Link href="/archive" className="mb-6 font-mono font-medium text-sm">
          view the archive
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.slice(0, intialProject).map((project: any, ind) => (
          <Projects key={ind} project={project} />
        ))}
      </div>
      <div className="text-center">
        {!toggledProject ? (
          <Button onClick={handleToggleProjects} className="my-20">
            Show More
          </Button>
        ) : (
          <Button onClick={hideProjects} className="my-20">
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};
