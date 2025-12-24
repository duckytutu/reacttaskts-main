import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "h-10 w-full rounded-md px-3 py-2 text-base",
          "transition-colors duration-200 ease-in-out",
          "outline-none",
          "bg-(--bg-input) text-(--text-primary) border border-(--border)",
          "hover:border-(--border-hover)",
          "focus:border-(--border-focus) focus:bg-(--bg-input-focus)",
          error && "border-(--error)",
          className
        )}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";

