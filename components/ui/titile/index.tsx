import React from "react";
import cn from "classnames";
interface iProps {
  prefix?: string;
  children: React.ReactNode;
  className?: string;
}
export const Title = ({ children, prefix, className }: iProps) => {
  return (
    <h2
      className={cn(
        "flex items-center text-left text-[26px] sm:text-3xl md:text-[30px] font-semibold mt-3 mb-10",
        className
      )}
    >
      <span className="mr-1 -mt-1 font-mono text-base font-normal sm:text-xl text-green">
        {prefix}
      </span>
      {children}
      <span className="inline-block w-[50px] sm:w-[200px] lg:w-[300px] lg:ml-4 h-[1px] bg-navy-lightest ml-3" />
    </h2>
  );
};
