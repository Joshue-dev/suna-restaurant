"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target && target.getAttribute("data-cursor") === "drag") {
        setCursorText("DRAG");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className={`rounded-full bg-amber-200 fixed z-[99999] pointer-events-none flex items-center justify-center`}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        width: cursorText ? 80 : 40,
        height: cursorText ? 80 : 40,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      {cursorText}
    </motion.div>
  );
};

export default Cursor;
