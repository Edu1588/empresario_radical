"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";

const StickyProcessCard = ({
  i,
  step,
  progress,
  range,
  targetScale,
}: {
  i: number;
  step: any;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div
      ref={container}
      className="sticky top-16 md:top-32 flex items-center justify-center w-full pb-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20}px)`,
        }}
        className="relative origin-top bg-[#1E5AE8] p-8 md:p-12 rounded-3xl shadow-xl w-full border border-transparent flex flex-col justify-center"
      >
        <div className="text-white font-bold text-4xl md:text-5xl mb-6 opacity-80">0{i + 1}</div>
        <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white">{step.title}</h4>
        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">{step.desc}</p>
      </motion.div>
    </div>
  );
};

export const ProcessScrollingAnimation = ({ steps }: { steps: any[] }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div
        ref={container}
        className="relative flex w-full flex-col pb-[10vh]"
      >
        {steps.map((s, i) => {
          const targetScale = Math.max(0.8, 1 - (steps.length - i - 1) * 0.05);
          return (
            <StickyProcessCard
              key={`step_${i}`}
              i={i}
              step={s}
              progress={scrollYProgress}
              range={[i * (1/steps.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
};
