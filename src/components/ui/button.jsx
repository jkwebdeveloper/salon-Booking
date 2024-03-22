import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex md:w-auto w-full gap-[0.5rem] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-[1px] rounded-full border-black bg-background shadow-sm hover:bg-primary hover:text-white",
        secondary:
          "focus:outline-none uppercase bg-[#0AADA4] hover:bg-[#0b645f] text-white font-medium rounded-full active:scale-90 transition text-sm",
        primary:
          "focus:outline-none uppercase bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium rounded-full active:scale-90 transition text-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 h-8",
        sm: "h-8 px-5 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false,type="button", onClick, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      type={type}
      onClick={onClick instanceof Function ? onClick : undefined}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants };
