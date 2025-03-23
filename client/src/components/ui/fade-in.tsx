
import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "down":
        return { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "left":
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "right":
        return { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={getDirectionVariants()}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
