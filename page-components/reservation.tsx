"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
const Reservation = () => {
  return (
    <div className="relative bg-amber-50 py-16 md:py-24" id='opening-times'>
      {/* Repeating Header Text */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-zinc-800 text-xl md:text-3xl tracking-tight mx-8 py-4 heading"
            >
              OPENING TIMES
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-3 gap-2 items-center">
          {/* Left Cocktail Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/mocktail.png"
              alt="Elegant red cocktail"
              className="size-44 lg:size-72 object-cover object-bottom-right"
            />
          </div>

          {/* Center - Opening Hours */}
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-zinc-800 font-bold text-lg mb-1">
                MONDAY - SUNDAY
              </h3>
              <p className="text-zinc-700">BEACH: 10AM - 6PM</p>
              <p className="text-zinc-700">BAR: 10AM - 10:30PM</p>
              <p className="text-zinc-700">RESTAURANT: 8AM - 10:30PM</p>
            </div>



          </div>

          {/* Right Cocktail Images */}
          <div className="flex justify-center lg:justify-start lg:mb-10">
            <img
              src="/images/cocktail.png"
              alt="Red cocktails"
              className="size-20 lg:size-44 object-cover transform -rotate-45"
            />
          </div>
        </div>

        {/* Reservation Button */}
        <div className="text-center max-lg:mt-8">
          <Button
            variant="outline"
            className="border-1 border-zinc-800 bg-transparent text-zinc-800 hover:bg-zinc-800 
            hover:text-amber-50 font-medium tracking-wider px-8 py-6 text-base rounded-none"
          >
            MAKE A RESERVATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
