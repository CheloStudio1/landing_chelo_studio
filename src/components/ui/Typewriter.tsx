"use client";

import React from "react";
import { motion } from "framer-motion";

interface Segment {
  text?: string;
  className?: string;
  isLineBreak?: boolean;
}

interface Props {
  segments: Segment[];
  className?: string;
  delay?: number;
  speed?: number;
}

/**
 * A highly customizable Typewriter component using Framer Motion.
 * Supports split-styled segments and line breaks.
 */
export const Typewriter = ({ segments, className = "", delay = 0.5, speed = 0.04 }: Props) => {
  const [iteration, setIteration] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIteration(prev => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.h2
      key={iteration}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {segments.map((segment, sIdx) => {
        if (segment.isLineBreak) {
          return <br key={`${iteration}-${sIdx}`} />;
        }
        return (
          <span key={`${iteration}-${sIdx}`} className={segment.className}>
            {segment.text?.split("").map((char, cIdx) => (
              <motion.span key={`${iteration}-${sIdx}-${cIdx}`} variants={child}>
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.h2>
  );
};
