import { cn } from "../../../utils/cn";

export interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className={cn("text-(--error) text-sm mt-1", className)}>
      {message}
    </div>
  );
}

