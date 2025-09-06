"use client";
import { animate, motion, PanInfo, useMotionValue } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const photos = [
  { src: "/images/slide-1.jpg", alt: "DJ at turntables" },
  { src: "/images/slide-2.jpg", alt: "Bartender at work" },
  { src: "/images/slide-3.jpg", alt: "Smiling bartender" },
  { src: "/images/slide-4.jpg", alt: "Cocktail preparation" },
  { src: "/images/slide-5.jpg", alt: "Customers enjoying drinks" },
  { src: "/images/slide-6.jpg", alt: "Smiling bartender" },
];

const ITEM_WIDTH = 288; // card width + gap
const TOTAL_WIDTH = photos.length * ITEM_WIDTH;

// Wrap any value v into [min, max)
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const Description = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const scrollControls = useRef<{ stop: () => void }>(null);

  // Invisible wrap: whenever x leaves [-TOTAL_WIDTH, 0), jump it back
  useEffect(() => {
    return x.onChange((latest) => {
      const wrapped = wrap(-TOTAL_WIDTH, 0, latest);
      if (wrapped !== latest) x.set(wrapped);
    });
  }, [x]);

  const startAutoScroll = (from: number) => {
    scrollControls.current?.stop();
    scrollControls.current = animate(x, from - TOTAL_WIDTH, {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
    });
  };

  // On mount, kick off from x=0
  useEffect(() => {
    startAutoScroll(0);
    return () => scrollControls.current?.stop();
  }, []);

  return (
    <div
      ref={targetRef}
      className="relative bg-zinc-900 py-16 md:py-24 overflow-hidden text-amber-50"
      data-bg="change"
    >
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-xl md:text-3xl xl:text-4xl heading uppercase font-medium">
          With Suna's beach as your backdrop, you can take in the stunning
          scenery of the Mediterranean and the surrounding mountains.
        </h2>

        <p className="text-md font-light tracking-tighter px-6 md:px-40">
          Come and see for yourself why Suna’s Beach is the perfect getaway for
          you, your friends, and your family. We guarantee that you’ll have an
          unforgettable time!
        </p>
      </div>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 mt-32">
        <h2 className="text-white text-xl md:text-2xl font-light tracking-wider heading">
          GOOD FOOD + GOOD DRINKS + GOOD MUSIC + A GOOD VIEW = GREAT VIBES.
        </h2>
      </div>

      {/* Polaroid Photo Gallery */}
      <div className="overflow-hidden relative select-none" data-cursor="drag">
        <motion.div
          className="flex gap-6 px-6 cursor-grab"
          style={{ x }}
          drag="x"
          dragMomentum
          dragElastic={0.2}
          onDragStart={() => scrollControls.current?.stop()}
          onDragEnd={() => {
            const current = wrap(-TOTAL_WIDTH, 0, x.get());
            startAutoScroll(current);
          }}
        >
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-amber-100 p-4 pb-8 shadow-lg"
              style={{ width: ITEM_WIDTH }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-80 h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
