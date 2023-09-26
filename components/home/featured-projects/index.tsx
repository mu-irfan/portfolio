import React from "react";
import { Title } from "@/components/";
import Card from "./card";
import { FEATURED_PROJECTS } from "@/config/constants";

export const FeaturedProjects = () => {
  return (
    <section className="max-w-5xl mx-auto md:mt-12" id="work">
      <Title prefix="03.">Some Things I’ve Built</Title>
      <div className="space-y-8 lg:space-y-28">
        {FEATURED_PROJECTS.map((project, index) => (
          <Card
            key={index}
            direction={index % 2 === 0 ? "right" : "left"}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};
