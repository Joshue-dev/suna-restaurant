"use client";
import { animate, AnimatePresence, motion, useMotionValue } from "motion/react";
import { forwardRef, useEffect, useState } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const images = [
    "/images/background-1.jpeg",
    "/images/background-2.jpeg",
    "/images/background-3.jpeg",
  ];

  useEffect(() => {
    const controls = animate(count, images.length - 1, {
      duration: images.length, // 1 second per image
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      onUpdate(v) {
        setIndex(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [count]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <AnimatePresence>
      <div
        ref={ref}
        className="relative min-h-[50vh] xl:min-h-screen overflow-hidden"
      >
        {/* Hero Background Image */}
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-zinc-900"
          style={{ backgroundImage: `url('${images[index]}')` }}
          transition={{
            repeat: Infinity, // loop forever
            repeatType: "mirror", // fade in → fade out
          }}
        />
      </div>
    </AnimatePresence>
  );
});

export default HeroSection;
