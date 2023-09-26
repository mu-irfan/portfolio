import React from "react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import { Title } from "@/components/ui";
import { SKILLS } from "@/config/constants";

export const About = () => {
  return (
    <div className="pt-24 lg:pt-52 pb-16 lg:pb-20" id="about">
      <Title prefix="01." className="mb-8 xl:pl-11">
        About Me
      </Title>
      <div className="flex flex-col items-center justify-center max-w-4xl py-2 pb-16 mx-auto lg:flex-row lg:items-start lg:pb-20">
        <div className="text-center lg:text-left lg:mr-12">
          <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
            Hi, I&apos;m Irfan, a passionate software engineer, and web
            developer. Specializing in web technologies and frameworks like
            React and NextJS, I bring over 1.5 years of expertise to the table.
            I excel in crafting efficient and visually stunning web experiences.
          </p>
          <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
            I&apos;ve thrived in Designing and developing high-performance
            websites using TailwindCSS, React, Next.js and other technologies
            ensuring scalability and seamless functionality.
          </p>
          <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
            My toolkit includes HTML, CSS, Tailwind, JavaScript, ReactJS, and
            NextJS.
          </p>
          <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
            Additionally, I have solid experience in Firebase, Git & GitHub,
            Redux, API development & integration, PSD/XD/Figma to React/Next js
            conversions.
          </p>
          <p className="text-[18px] md:text-xl leading-6 lg:leading-7  pb-4">
            Here are a few technologies I&apos;ve been working with over the years:
          </p>

          <div className="grid max-w-md grid-cols-2 gap-2 md:grid-cols-2">
            {SKILLS.map((skill, index) => (
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
              src="/images/me.png"
              width={70}
              height={70}
              alt="muhammad irfan"
              className="relative object-cover rounded-md bottom-4 right-3 w-72 h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
