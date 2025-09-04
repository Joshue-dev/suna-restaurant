import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
<div className="relative min-h-screen overflow-hidden">
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

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <Button
          variant="outline"
          className="border-2 border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium tracking-wide px-6 py-2"
        >
          RESERVE
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 hover:text-white flex items-center gap-2 font-medium tracking-wide"
        >
          MENU
          {/* <Menu className="h-5 w-5" /> */}
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-amber-100 font-light tracking-[0.2em] text-center">
          BRAMBLE
        </h1>
      </div>

    </div>
    )
}

export default HeroSection