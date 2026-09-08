import React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ href, to, children, className, ...props }: AnimatedButtonProps) {
  const baseClass = cn("btn-uiverse font-sans inline-flex", className);
  const inner = (
    <>
      <span className="invisible block px-6 py-3">{children}</span>
      <div className="anim-bg anim-bg-1">
        <span>{children}</span>
      </div>
      <div className="anim-bg anim-bg-2">
        <span>{children}</span>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props as any}>
        {inner}
      </Link>
    );
  }
  
  return (
    <a href={href} className={baseClass} {...props}>
      {inner}
    </a>
  );
}