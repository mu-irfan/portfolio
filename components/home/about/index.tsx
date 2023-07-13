import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BiRightArrow } from "react-icons/bi";
import { Title } from "@/components/ui";
import { AboutSection } from "@/types";
import { urlFor } from "@/sanity/utils";

export const About: React.FC<{ data: AboutSection }> = ({ data }) => {
  return (
    <div className="pt-24 lg:pt-52 pb-16 lg:pb-20" id="about">
      <Title prefix="01." className="mb-8 xl:pl-11">
        About Me
      </Title>
      <div className="flex flex-col items-center justify-center max-w-4xl py-2 pb-16 mx-auto lg:flex-row lg:items-start lg:pb-20">
        <div className="text-center lg:text-left lg:mr-12">
          <PortableText
            value={data.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
                    {children}
                  </p>
                ),
              },
            }}
          />
          <div className="grid max-w-md grid-cols-2 gap-2 md:grid-cols-2">
            {data.technologies.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <BiRightArrow className="w-2 h-2 text-green" />
                <span className="text-[12px] md:text-sm font-mono">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 mt-16 lg:mt-4">
          <div className="border-green w-full border-2 rounded-md">
            <Image
              src={urlFor(data.image).url()}
              width={70}
              height={70}
              alt={data.image.alt || ""}
              className="relative object-cover rounded-md bottom-4 right-3 w-72 h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
