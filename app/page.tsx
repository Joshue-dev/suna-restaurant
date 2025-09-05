import Cursor from "@/components/cursor";
import { Footer } from "@/components/page-layout/footer";
import {Header} from "@/components/page-layout/header";
import CareersSection from "@/page-components/careers";
import Description from "@/page-components/description";
import HeroSection from "@/page-components/heroSection";
import Reservation from "@/page-components/reservation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />
      <HeroSection/>
      <Description />
      <Reservation/>
      <CareersSection/>
      <Footer/>
    </>
  );
}
