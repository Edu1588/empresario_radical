"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import { InteractiveTravelCard } from "./3d-card";

const StickyCaseCard = ({
  i,
  caseData,
  progress,
  range,
  targetScale,
}: {
  i: number;
  caseData: any;
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
        className="relative origin-top flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-3xl shadow-xl w-full border border-gray-100"
      >
        {/* Image side */}
        <div className="w-full md:w-1/2 overflow-hidden shrink-0 perspective-[1000px] flex justify-center items-center">
          <InteractiveTravelCard
            imageUrl={caseData.img}
            className="w-full h-[250px] md:h-[350px] rounded-2xl shadow-none border-none bg-transparent"
            imageClassName="rounded-2xl object-cover"
          />
        </div>
        
        {/* Text side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] bg-gray-100 px-3 py-1.5 self-start mb-6 rounded-none">
            {caseData.tag}
          </span>
          <h4 className="font-sans font-semibold text-2xl md:text-3xl text-[#0A0A0A] mb-6">
            {caseData.title}
          </h4>
          <div className="space-y-4 text-[14px] md:text-[15px] font-light text-gray-600 leading-relaxed">
            <p>
              <strong className="font-semibold text-[#0A0A0A]">Contexto:</strong>{" "}
              {caseData.context}
            </p>
            <p>
              <strong className="font-semibold text-[#0A0A0A]">Diagnóstico:</strong>{" "}
              {caseData.diagnosis}
            </p>
            <p>
              <strong className="font-semibold text-[#0A0A0A]">Intervenção:</strong>{" "}
              {caseData.intervention}
            </p>
            <p>
              <strong className="font-semibold text-[#0A0A0A]">Resultado:</strong>{" "}
              {caseData.result}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const CasesScrollingAnimation = ({ cases }: { cases: any[] }) => {
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
        {cases.map((c, i) => {
          const targetScale = Math.max(0.8, 1 - (cases.length - i - 1) * 0.05);
          return (
            <StickyCaseCard
              key={`case_${i}`}
              i={i}
              caseData={c}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
};
