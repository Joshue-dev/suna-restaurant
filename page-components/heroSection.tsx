"use client";
import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useEffect, useState } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/background-1.jpeg",
    "/images/background-2.jpeg",
    "/images/background-3.jpeg",
  ];

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        console.log(`Transitioning from ${prevIndex} to ${nextIndex}`); // Debug log
        return nextIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
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
