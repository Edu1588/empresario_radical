import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface AnimatedButtonProps {
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function AnimatedButton({ href, to, children, className, ...props }: AnimatedButtonProps) {
  const baseClass = cn("btn-blue font-sans", className);
  const inner = (
    <>
      <span>{children}</span>
      <i className="animation"></i>
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
    <a href={href} className={baseClass} {...props as any}>
      {inner}
    </a>
  );
}
