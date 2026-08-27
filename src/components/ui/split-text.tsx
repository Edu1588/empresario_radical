import { motion, Variants } from "motion/react";
import { cn } from "../../lib/utils";
import React from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  // Split by <br/> or \n to handle line breaks, then by spaces
  const lines = text.split(/<br\s*\/?>|\n/);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex flex-col", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap gap-[0.25em] overflow-hidden">
          {line.split(" ").map((word, wordIndex) => {
            if (word.trim() === "") return null;
            return (
              <motion.span variants={child} key={`${lineIndex}-${wordIndex}`} className="inline-block origin-bottom">
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
