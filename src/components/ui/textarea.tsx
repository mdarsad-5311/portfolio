import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          // Base (NO BORDER)
          "flex min-h-[120px ] w-full rounded-md bg-gray-100 px-4 py-3 text-base text-gray-900",
          "placeholder:text-gray-400",

          // Remove all borders & rings
          "border-0 outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0",

          // Subtle focus like image
          "focus:bg-white transition-colors duration-200 resize-none",

          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",

          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
