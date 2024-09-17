"use client"
import { cn } from "utils/cn";
import clsx from "clsx";
import React from "react";
import useViewportWidth from "@/hooks/useViewportWidth";

export const Meteors = ({

  className,
}: {
  className?: string;
}) => {
  
  
  const width = useViewportWidth();
  const number = width > 768 ? 15 : 7;
  const meteors = new Array(number || 15).fill(true);

  return (
    <div className="h-[300px] absolute md:top-[100px]">
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect  absolute z-10 before:z-10 h-0.5 w-15 rounded-[9999px] bg-teal-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform  before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (width - -width) + -width) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
