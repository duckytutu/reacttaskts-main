import { type LabelHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../utils/cn";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: ReactNode;
}

export function Label({ className, required, children, ...props }: LabelProps) {
  return (
    <label className={cn("text-left block", className)} {...props}>
      <div className="mb-1">
        {required && <span className="text-(--error)">* </span>}
        <span>{children}</span>
      </div>
    </label>
  );
}

