"use client";
import { animate, motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { useCallback, useRef } from "react";

const photos = [
  { src: "/bramble-photo1.png", alt: "DJ at turntables" },
  { src: "/bramble-photo2.png", alt: "Bartender at work" },
  { src: "/bramble-photo3.png", alt: "Smiling bartender" },
  { src: "/bramble-photo4.png", alt: "Cocktail preparation" },
  { src: "/bramble-photo5.png", alt: "Customers enjoying drinks" },
  { src: "/bramble-photo3.png", alt: "Smiling bartender" },
  { src: "/bramble-photo4.png", alt: "Cocktail preparation" },
  { src: "/bramble-photo5.png", alt: "Customers enjoying drinks" },
];

const ITEM_WIDTH = 288;

const Description = () => {
  const targetRef = useRef(null);
  const x = useMotionValue(0);
  
  const handleDragEnd = useCallback(() => {
    const currentX = x.get()
    const index = Math.round(-currentX/ITEM_WIDTH);
    const clampedIndex = Math.max(0, Math.min(index, photos.length - 1))
    const targetX = -clampedIndex * ITEM_WIDTH

    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    })
  }, []);

  return (
    <div
      ref={targetRef}
      className="relative bg-zinc-900 py-16 md:py-24 min-h-screen overflow-hidden"
    >
      {/* Description Text */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
          Stay until the early hours with cocktails, craft beers, bar food &
          London's finest hi-fi sound system.
          <br />
          Bramble is your new go-to spot to relax and unwind after a long day.
        </p>

        <h2 className="text-white text-xl md:text-2xl font-light tracking-wider">
          GOOD FOOD + GOOD DRINKS + GOOD MUSIC = GREAT VIBES.
        </h2>
      </div>

      {/* Polaroid Photo Gallery */}
      <motion.div
        style={{ x }}
        drag="x"
        onDragEnd={handleDragEnd}
        data-cursor="drag"
        className="flex  justify-center gap-6 px-6"
      >
        {photos.map((photo, index) => (
          <div key={index} className="bg-amber-50 p-4 pb-8 shadow-lg">
            <img
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              className="w-64 h-80 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Description;
