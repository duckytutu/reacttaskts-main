import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-md px-3 py-2 text-base",
          "transition-colors duration-200 ease-in-out",
          "outline-none",
          "bg-(--bg-input) text-(--text-primary) border border-(--border)",
          "hover:border-(--border-hover)",
          "focus:border-(--border-focus) focus:bg-(--bg-input-focus) focus:shadow-[0_0_0_2px_rgba(136,136,136,0.2)]",
          error && "border-(--error)",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

