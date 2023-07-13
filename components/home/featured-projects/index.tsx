import React from "react";

import { Title } from "@/components/";
import Card from "./card";
import { Project } from "@/types";

export const FeaturedProjects: React.FC<{ data: Project[] }> = ({ data }) => {
  return (
    <section className="max-w-5xl mx-auto md:mt-12" id="work">
      <Title prefix="03.">Some Things I’ve Built</Title>
      <div className="space-y-8 lg:space-y-28">
        {data.map((project, index) => (
          <Card
            key={project._id}
            direction={index % 2 === 0 ? "right" : "left"}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};
