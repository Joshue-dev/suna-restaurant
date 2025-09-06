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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-amber-100 font-light tracking-[0.2em] text-center">
          BRAMBLE
        </h1>
      </div>
    </div>
  )
})

export default HeroSection;
