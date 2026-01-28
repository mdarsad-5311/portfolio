import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        // Base style (NO BORDER)
        "flex h-11 w-full rounded-md bg-gray-100 px-4 py-2 text-base text-gray-900",
        "placeholder:text-gray-400",
        
        // Remove all borders & rings
        "border-0 outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0",
        
        // Subtle focus like image
        "focus:bg-white transition-colors duration-200",

        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
