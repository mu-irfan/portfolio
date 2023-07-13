"use client";
import { motion } from "framer-motion";

interface ISideProps {
  direction?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export const Side: React.FC<ISideProps> = ({
  direction = "left",
  className,
  children,
}) => {
  const sideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-100%" : "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const delay = 3; // Delay in seconds

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sideVariants}
      transition={{ delay, duration: 0.5 }}
      className={`fixed bottom-0 hidden lg:flex flex-col items-center justify-center space-y-6 max-w-[20px] ${
        className || ""
      } ${
        direction === "left"
          ? "left-8 xl:left-14 right-auto"
          : "right-8 xl:right-14 left-auto"
      }`}
    >
      {children}
      <div className="h-24 border-l border-slate-light"></div>
    </motion.aside>
  );
};
