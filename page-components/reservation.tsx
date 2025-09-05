"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
const Reservation = () => {
  return (
    <div className="relative bg-amber-50 py-16 md:py-24">
      {/* Repeating Header Text */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-zinc-800 text-2xl font-light tracking-wider mx-8 py-4"
            >
              OPENING TIMES
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Cocktail Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/cocktail-martini.png"
              alt="Elegant martini cocktail"
              className="w-64 h-80 object-cover"
            />
          </div>

          {/* Center - Opening Hours */}
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-zinc-800 font-medium text-lg mb-1">MONDAY</h3>
              <p className="text-zinc-700">CLOSED</p>
            </div>

            <div>
              <h3 className="text-zinc-800 font-medium text-lg mb-1">
                TUESDAY - THURSDAY
              </h3>
              <p className="text-zinc-700">BAR: 12PM - 12PM</p>
              <p className="text-zinc-700">KITCHEN: 6PM - 9PM</p>
            </div>

            <div>
              <h3 className="text-zinc-800 font-medium text-lg mb-1">FRIDAY</h3>
              <p className="text-zinc-700">BAR: 12PM - 12PM</p>
              <p className="text-zinc-700">LUNCH: 12PM - 3PM</p>
              <p className="text-zinc-700">KITCHEN: 6PM - 9PM</p>
            </div>

            <div>
              <h3 className="text-zinc-800 font-medium text-lg mb-1">
                SATURDAY
              </h3>
              <p className="text-zinc-700">BAR: 12PM - 1AM</p>
              <p className="text-zinc-700">KITCHEN: 12PM - 9PM</p>
            </div>

            <div>
              <h3 className="text-zinc-800 font-medium text-lg mb-1">SUNDAY</h3>
              <p className="text-zinc-700">BAR: 12PM - 7PM</p>
              <p className="text-zinc-700">KITCHEN: 12PM - 4PM</p>
            </div>
          </div>

          {/* Right Cocktail Images */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/cocktail-red.png"
              alt="Red cocktails"
              className="w-64 h-64 object-cover"
            />
          </div>
        </div>

        {/* Reservation Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-zinc-800 bg-transparent text-zinc-800 hover:bg-zinc-800 hover:text-amber-50 font-medium tracking-wider px-8 py-3 text-base"
          >
            MAKE A RESERVATION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
