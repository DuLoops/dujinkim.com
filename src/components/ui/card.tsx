import * as React from "react"
import Image from "next/image"
import { cn } from "utils/cn"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-neutral-700 text-card-foreground overflow-hidden rounded-lg shadow-lg border border-4 transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  height: number
  width: number
}

const CardImage = React.forwardRef<
  HTMLImageElement,
  ImageProps
>(( { className, src, alt, height, width, ...props },  ref) => (
  
  <Image
    ref={ref}
    src={src}
    alt={alt}
    height={height}
    width={width}
    className={cn("object-contain w-full ", className)}
    {...props}
  />
))

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(" p-4 flex flex-col gap-2 justify-around bg-neutral-700 ", className)} {...props} />
))
CardContent.displayName = "CardContent"




const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap gap-2", className)}
    {...props}
  />
))

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
      // "bg-gradient-to-b from-white to-black from-70% inline-block text-transparent bg-clip-text",
      // "drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-md text-neutral-300", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardDate = React.forwardRef< 
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground italic text-right text-neutral-400", className)}
    {...props}
  />
))


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardImage, CardFooter, CardTitle, CardDescription, CardContent, CardTags, CardDate }
