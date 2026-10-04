import type { Variants } from "framer-motion";

// Shared easing: fast start, soft landing
export const EASE = [0.22, 1, 0.36, 1] as const;

// Long lists shouldn't make users wait seconds for the last card
const capDelay = (delay = 0) => Math.min(delay, 0.6);

// Text Variant motion
export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: 24,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: EASE,
        delay: capDelay(delay),
      },
    },
  };
};

// FadeIn motion
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | undefined,
  // kept for API compatibility; all reveals use a smooth tween now
  _type: "decay" | "spring" | "keyframes" | "tween" | "inertia" | undefined,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: capDelay(delay * 0.3),
        duration: Math.min(duration, 0.8),
        ease: EASE,
      },
    },
  };
};

// zoom in motion
export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: capDelay(delay),
        duration: duration,
        ease: EASE,
      },
    },
  };
};

// slide in motion
export const slideIn = (
  direction: "left" | "right" | "up" | "down" | undefined,
  _type: "decay" | "spring" | "keyframes" | "tween" | "inertia" | undefined,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: capDelay(delay),
        duration: Math.min(duration, 0.8),
        ease: EASE,
      },
    },
  };
};

// staggered container motion
export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
