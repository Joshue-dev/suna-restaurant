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
      duration: images.length * 2, // e.g. 6s to go 0→2
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [count, images.length]);

  // 3) Subscribe to count changes and update React state
  useEffect(() => {
    const unsubscribe = count.onChange((v) => {
      // round or floor to pick an integer slide index
      setIndex(Math.round(v));
    });
    return () => unsubscribe();
  }, [count]);

  return (
    <AnimatePresence>
      <div ref={ref} className="relative min-h-[50vh] xl:min-h-screen overflow-hidden">
        {/* Hero Background Image */}
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[index]}')` }}
          transition={{
            duration: 1, // 1s fade
            repeat: Infinity, // loop forever
            repeatType: "mirror", // fade in → fade out
            repeatDelay: 0.5 + index * 0, // wait 4s (plus any extra per-slide delay if you want)
          }}
        />
      </div>
    </AnimatePresence>
  );
});

export default HeroSection;
