"use client";

import { cn } from "utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export const InfiniteMovingImg = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true ,
  className,
}: {
  items: {
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  ",
        className
      )}
      onClick={() => {setStart(!start)}}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          !start && "[animation-play-state:paused]",
          pauseOnHover && "md:hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => 
          <li
            className="w-[300px] max-w-full h-[250px] relative flex-shrink-0  md:w-[450px] flex items-center justify-center "
            key={idx}
          >              
            <Image
              src={item.image}
              alt="image"
              className="shadow-neutral-800 
              object-cover
              w-[100px]
              h-[100px]
                bg-neutral-900 shadow-md shadow-neutral-900"
                fill
              />
          </li>
        )}
      </ul>
    </div>
  );
};
