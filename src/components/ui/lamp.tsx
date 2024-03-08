"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";



export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-32 flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 p-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 "> <motion.div initial={{ width: "8rem" }} whileInView={{ width: "16rem" }} transition={{
        delay: 2, duration: 2, ease: "easeInOut",
      }}
        className="absolute inset-auto z-30 h-1/3 w-64 top-0 rounded-full bg-teal-400 blur-2xl"
      ></motion.div>
        {/*Beam*/}
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 2,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] top-0 bg-cyan-400 "
        ></motion.div>
        <div className="relative z-50 flex flex-col ">
          {children}
        </div>
      </div>
    </div>
  );
};
