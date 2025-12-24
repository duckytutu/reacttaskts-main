import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variantStyles = {
      primary: "bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)]",
      secondary: "bg-gray-600 hover:bg-gray-700",
      danger: "bg-red-600 hover:bg-red-700",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "mt-2 rounded-lg border border-transparent px-5 py-3 text-base font-medium",
          "font-inherit cursor-pointer transition-colors duration-200",
          "text-(--text-primary)",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

