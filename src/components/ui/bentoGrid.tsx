import { BlogType } from "@/data/blogPosts";
import { cn } from "@/utils/cn";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  tags,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  tags? : BlogType[];
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 group/bento transition duration-200 shadow-input",
        className
      )}
    >   
        {header}
        


      </div>
  );
};
