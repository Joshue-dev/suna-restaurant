import { Button } from "@/components/ui/button"

const CareersSection = () => {
    return (
   <div className="bg-zinc-800 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Gift Cards */}
              <div className="text-center lg:text-left border-r-0 lg:border-r border-zinc-600 lg:pr-12">
                <h3 className="text-white text-2xl md:text-3xl font-light mb-4 tracking-wider">GIFT CARDS</h3>
                <p className="text-white/90 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                  The perfect present for any occasion. Treat your friends, family or colleagues to lunch or dinner at
                  Bramble.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-white/90 bg-transparent text-white hover:bg-white/20 hover:text-white font-medium tracking-wider px-6 py-2 text-sm"
                >
                  LEARN MORE
                </Button>
              </div>

              {/* Careers */}
              <div className="text-center lg:text-left lg:pl-12">
                <h3 className="text-white text-2xl md:text-3xl font-light mb-4 tracking-wider">CAREERS</h3>
                <p className="text-white/90 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                  We are always happy to hear from passionate people who want to work with us. If you would like to join
                  the team then please send your CV to hello@bramble.com.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-white/90 bg-transparent text-white hover:bg-white/20 hover:text-white font-medium tracking-wider px-6 py-2 text-sm"
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CareersSection