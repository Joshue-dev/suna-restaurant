import { Footer } from "@/components/page-layout/footer";
import CareersSection from "@/page-components/careers";
import Description from "@/page-components/description";
import HeroSection from "@/page-components/heroSection";
import Reservation from "@/page-components/reservation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Description />
      <Reservation/>
      <CareersSection/>
      <Footer/>
    </>
  );
}
