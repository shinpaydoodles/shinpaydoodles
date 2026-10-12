import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
    secondary:
      "border border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
