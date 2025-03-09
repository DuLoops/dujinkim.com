import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-orange-400 border-2 bg-neutral-900 md:hover:bg-orange-400 md:hover:text-black",
        tag: "bg-neutral-900 border-2 rouned-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-xl px-3",
        default: "w-24 text-lg md:w-40 px-1 rounded-2xl",
        lg: "w-28 text-xl md:w-40 rounded-3xl p-1",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ( {children, className, ...props} , ref) => {
    return (
      <button
        className={cn(
          "relative p-[2px]",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-neutral-400 rounded-lg" />
        <div className="flex flex-row px-3 gap-2 py-2  bg-black rounded-[6px]  relative group transition text-white hover:bg-transparent">
        {children}
        </div>
      </button>
    )
  }
)
GradientButton.displayName = "GradientButton"


export { Button, buttonVariants,  GradientButton }
