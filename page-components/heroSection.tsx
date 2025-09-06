import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bramble-hero.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

     
    </div>
  )
})

export default HeroSection;
