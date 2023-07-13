"use client";
import React, { FC, ReactNode } from "react";
import cn from "classnames";
type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  size = "md",
  className,
}) => {
  const buttonClass = cn(
    "inline-block font-mono border rounded-[4px] leading-[0.9] text-green border-green transition-all hover:shadow-outline-green hover:-translate-x-1 hover:-translate-y-1",
    { "text-sm px-4 py-3 text-[13px]": size === "sm" },
    { "text-sm px-7 py-5": size === "md" },
    { "text-lg px-12 py-6": size === "lg" },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
