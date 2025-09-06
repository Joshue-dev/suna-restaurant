"use client";
import { animate, motion, useMotionValue } from "motion/react";
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
    const currentX = x.get();
    const index = Math.round(-currentX / ITEM_WIDTH);
    const clampedIndex = Math.max(0, Math.min(index, photos.length - 1));
    const targetX = -clampedIndex * ITEM_WIDTH;

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
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
