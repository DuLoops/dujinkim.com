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
      "rounded-lg  bg-card text-card-foreground shadow-sm overflow-hidden",
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
    className={cn("object-cover w-full", className)}
    {...props}
  />
))

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-h-32 p-5 flex flex-col gap-2 justify-around", className)} {...props} />
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
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-white mb-1",
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
    className={cn("text-md text-neutral-400", className)}
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
