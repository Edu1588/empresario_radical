import re

with open("src/components/ui/animated-button.tsx", "r") as f:
    btn = f.read()

# We need to make sure the span inside the div has a z-index and the child divs take up background properly.
# The issue is the nth-child targeting in the CSS is catching the first span as well, because we added <span className="invisible"> as the first child of the fragment.

with open("src/styles.css", "r") as f:
    css = f.read()

# Fix CSS nth-child to target the specific divs we want to animate.
css = css.replace('.btn-whatsapp div:nth-child(1)', '.btn-whatsapp .anim-bg-1')
css = css.replace('.btn-whatsapp div:nth-child(2)', '.btn-whatsapp .anim-bg-2')
css = css.replace('.btn-red div:nth-child(1)', '.btn-red .anim-bg-1')
css = css.replace('.btn-red div:nth-child(2)', '.btn-red .anim-bg-2')
css = css.replace('.btn-blue div:nth-child(1)', '.btn-blue .anim-bg-1')
css = css.replace('.btn-blue div:nth-child(2)', '.btn-blue .anim-bg-2')

css = css.replace('.btn-uiverse div {', '.btn-uiverse .anim-bg {')
css = css.replace('.btn-uiverse div:nth-child(2)', '.btn-uiverse .anim-bg-2')
css = css.replace('.btn-uiverse:hover div:nth-child(1)', '.btn-uiverse:hover .anim-bg-1')
css = css.replace('.btn-uiverse:hover div:nth-child(2)', '.btn-uiverse:hover .anim-bg-2')

with open("src/styles.css", "w") as f:
    f.write(css)

# Now update the component to use these classes
btn_new = r'''import React from "react";
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
      <span className="invisible block px-2">{children}</span>
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
}'''

with open("src/components/ui/animated-button.tsx", "w") as f:
    f.write(btn_new)

