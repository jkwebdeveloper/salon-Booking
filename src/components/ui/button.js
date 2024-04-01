import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex md:w-auto w-full gap-[0.5rem] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline:
          "border-[1px]  border-primary bg-background shadow-sm hover:bg-primary hover:text-white",
        secondary:
          "focus:outline-none uppercase bg-[#0AADA4] hover:bg-[#0b645f] text-white font-medium  active:scale-90 transition text-sm",
        primary:
          "focus:outline-none uppercase bg-[#711F7E] hover:bg-[#BF27D7] text-white font-medium  active:scale-90 transition text-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        danger: "text-red-500 uppercase border-red-500 border-[1px] hover:bg-red-500 hover:text-white ",
        blog_button: "bg-[#FAFAFA] hover:bg-[#F4E9FF] hover:border-primary border-[1px] border-[#E6E6E6]"
      },
      size: {
        default: "px-6 py-3 h-8",
        sm: "h-8 px-5 text-xs",
        lg: "h-10 px-8",
        icon: "h-8 w-5 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, parent = false, type = "button", onClick, ...props }, ref) => {
  const Comp = (asChild && Slot) || (parent && "span" || "button")
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

export default Button;
export { Button, buttonVariants };
