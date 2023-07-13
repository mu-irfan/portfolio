"use client";
import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";
import { Experince as ExperinceType } from "@/types";

export const Experince: React.FC<{ data: ExperinceType[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      const tabElement = tabRef.current as HTMLDivElement;
      tabElement.classList.add("opacity-0");
      setTimeout(() => {
        tabElement.classList.remove("opacity-0");
      }, 4);
    }
  }, [activeIndex]);

  const handleTabChange = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-14 h-[720px] md:h-[600px]" id="experience">
      <div className="flex items-center xl:justify-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:pl-6 lg:pl-12">
          <span className="text-[17px] md:text-[22px] font-normal font-mono text-green">
            02.
          </span>
          Where I’ve Worked
        </h2>
        <hr className="w-20 md:w-[50%] ml-6  border-gray-700 mb-6" />
      </div>

      <div className="flex flex-col md:flex-row pt-6 md:pb-40 max-w-3xl md:pl-6 mx-auto">
        <div className="flex md:hidden overflow-x-auto border-b-2  border-[#19325c]">
          {data.map((comp, index) => (
            <div
              key={index}
              className={cn("flex", {
                "bg-[#112240] rounded-sm": activeIndex === index,
              })}
            >
              <button
                className={cn(
                  "py-2.5 px-4 min-w-max text-left font-normal text-[13px] font-mono",
                  {
                    "border-b-2 border-green": activeIndex === index,
                  },
                  "hover:text-green hover:border-b-2",
                  {
                    "hover:border-green": activeIndex !== index,
                  }
                )}
                onClick={() => handleTabChange(index)}
              >
                {comp.companyName}
              </button>
            </div>
          ))}
        </div>
        <div className="hidden md:inline md:w-[22%]">
          {data.map((comp, index) => (
            <div
              key={index}
              className={cn("flex", {
                "bg-[#112240] rounded-sm": activeIndex === index,
              })}
            >
              <div
                className={cn("bg-[#112240] w-[2px]", {
                  "border-l-2 border-l-green rounded-lg": activeIndex === index,
                })}
                key={index}
              ></div>
              <button
                className={cn(
                  "relative py-3 px-4 block text-left w-full font-normal text-[12.5px] font-mono",
                  {
                    "text-green": activeIndex === index,
                    "hover:text-green hover:bg-[#112240]":
                      activeIndex !== index,
                  }
                )}
                onClick={() => handleTabChange(index)}
              >
                {comp.companyName}
              </button>
            </div>
          ))}
        </div>
        <div className="md:w-4/4 mt-10 md:mt-0">
          {data.map((comp, index) => (
            <div
              key={index}
              ref={tabRef}
              className={cn(
                "pl-2 md:pl-8 py-2 transition-opacity duration-300",
                { hidden: activeIndex !== index },
                { block: activeIndex === index },
                { "opacity-0": activeIndex !== index }
              )}
            >
              <h2 className="text-2xl font-semibold">
                {comp.role} at
                <span key={comp._id}>
                  <Link
                    href={comp.url}
                    target="_blank"
                    className="text-[20px] font-semibold text-green pl-1"
                  >
                    {comp.companyName}
                  </Link>{" "}
                </span>
              </h2>
              <span className="text-sm font-mono">{comp.duration}</span>
              <div className="max-w-[530px] grid grid-cols-1 py-4  md:p-4 gap-2">
                {comp.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 md:gap-x-2"
                  >
                    <BiRightArrow className="w-2.5 h-2.5 text-green flex-shrink-0 mt-1" />
                    <span className="text-[18px] md:text-[18px] leading-6 ">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
