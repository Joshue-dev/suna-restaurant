"use client";
import Cursor from "@/components/cursor";
import { Footer } from "@/components/page-layout/footer";
import { Header } from "@/components/page-layout/header";
import CareersSection from "@/page-components/careers";
import Description from "@/page-components/description";
import HeroSection from "@/page-components/heroSection";
import Reservation from "@/page-components/reservation";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";
import Lenis from "lenis";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Cursor />
      <Header targetRef={heroRef} />
      <HeroSection ref={heroRef} />
      <Description />
      <Reservation />
      <CareersSection />
      <Footer />
    </>
  );
}
