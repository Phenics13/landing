import { Variants } from "framer-motion";

export const animation = (
  delay: number,
  offset: number = 0,
  duration: number = 0.8
) =>
  ({
    offscreen: {
      opacity: 0,
      y: offset,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: delay,
        duration: duration,
      },
    },
  } as Variants);
