"use client";
import { Fragment, RefObject, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  Variants,
} from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";

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

const links = [
  { label: "Menus", href: "#" },
  { label: "Opening Times", href: "#opening-times" },
  { label: "Contact Us", href: "#contact-us" },
];

export const Header = ({
  targetRef,
}: {
  targetRef: RefObject<HTMLDivElement | null>;
}) => {
  const controls = useAnimation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  const { scrollY } = useScroll({ target: targetRef });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPast(!entry.isIntersecting); // true when passed
      },
      {
        root: null, // viewport
        threshold: 0, // trigger as soon as it leaves view
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  const navColor = showMenu || scrolledPast ? "bg-zinc-900" : "bg-transparent";

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        animate={{
          height: showMenu ? "100%" : "max-content",
        }}
        transition={{ type: "keyframes", ease: "easeInOut", delay: 0.02 }}
        className={`fixed w-full z-[9999] justify-between px-6 py-4 flex flex-col transition-colors duration-300 ${navColor}`}
      >
        <div className="flex items-center justify-between">
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
          <p className="uppercase max-lg:hidden text-amber-100">
            Fevzi Çakmak Sokak, Lapta 9915
          </p>
          <div
            className="text-white 
            flex items-center gap-1 font-medium tracking-wide text-lg relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            <motion.span
              initial={false}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block relative overflow-hidden w-max"
            >
              <span
                className="block transition-transform duration-300"
                style={{
                  transform: `translateX(${showMenu ? "-100%" : "0%"})`,
                }}
              >
                MENU
              </span>
              <span
                className="block absolute top-0 left-0 w-full transition-transform duration-300"
                style={{
                  transform: `translateX(${showMenu ? "0%" : "100%"})`,
                }}
              >
                CLOSE
              </span>
            </motion.span>

            <motion.div
              key={showMenu ? "close" : "hamburger"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              // className="absolute inset-0 flex items-center justify-center"
            >
              <Icon
                icon={
                  showMenu
                    ? "material-symbols-light:close"
                    : "hugeicons:menu-09"
                }
                fontSize="24px"
              />
            </motion.div>
          </div>
        </div>
        {showMenu && (
          <Fragment>
            <div className="flex flex-1 flex-col items-center gap-2 justify-center text-amber-100 uppercase">
              {links?.map((item, idx) => {
                return (
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                      rest: {},
                      hover: {},
                    }}
                    key={idx}
                    className="relative inline-block w-fit" // Add relative positioning for the border
                  >
                    <a href={item.href} className="text-lg font-semibold">
                      {item.label}
                    </a>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-amber-100" // Border styling
                      variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-1 justify-center text-amber-100 uppercase">
              <p>+90 533 846 10 10</p>
              <p>@sunasbeachclubrestaurant</p>
            </div>
          </Fragment>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
