"use client";
import { Button } from "../ui/button";
import { motion, useAnimation, Variants } from "motion/react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: 0.5, duration: 0.01 },
    },
  },
};

export const Header = () => {
  const controls = useAnimation();
  return (
    <nav className="fixed w-full z-[9999] flex items-center justify-between p-6 md:p-8">
      <motion.button
        onHoverStart={() => controls.start("visible")}
        onHoverEnd={() => controls.start("hidden")}
        className="border border-amber-50 text-amber-50 rounded-none text-lg w-32 h-12 relative cursor-pointer"
      >
        RESERVE
        <motion.svg
          width="128"
          height="48"
          viewBox="0 0 128 48"
          className="absolute top-0 left-0 pointer-events-none"
          initial="hidden"
          animate={controls}
        >
          <motion.path
            d="M0 48 H128 V0 H0 Z"
            strokeWidth={2}
            stroke="#FEE685"
            fill="none"
            variants={draw}
          />
        </motion.svg>
      </motion.button>
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:bg-white/10 hover:text-white flex items-center gap-2 font-medium tracking-wide"
      >
        MENU
        {/* <Menu className="h-5 w-5" /> */}
      </Button>
    </nav>
  );
};
