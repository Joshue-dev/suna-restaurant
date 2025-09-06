import { Button } from "@/components/ui/button";

const CareersSection = () => {
  return (
    <div className="bg-zinc-800 py-16 md:py-20 text-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Cards */}
          <div className="text-center border-r-0 lg:border-r border-zinc-600 lg:pr-12">
            <h3 className="heading text-2xl md:text-3xl font-light mb-1 tracking-wider">
              BEACH
            </h3>
            <p className="text-base leading-tight tracking-tight mb-8 max-w-md mx-auto lg:mx-0">
              Don’t miss the opportunity to enjoy a day of relaxation on our
              delightful beach, basking in the warm rays of the sun while
              lounging on comfortable sun loungers and savoring the moment of
              complete relaxation.
            </p>
            <a href="#contact-us">
              <Button
                variant="outline"
                className="border border-white/90 bg-transparent text-white hover:bg-amber-50 
                hover:text-black font-medium tracking-wider p-5 text-sm"
              >
                SEE MORE
              </Button>
            </a>
          </div>

          {/* Careers */}
          <div className="text-center lg:pl-12">
            <h3 className="heading text-2xl md:text-3xl font-light mb-1 tracking-tight uppercase">
              Private party
            </h3>
            <p className="tracking-tighter leading-tight text-base mb-8 max-w-md mx-auto lg:mx-0">
              Experience luxury and seclusion awaits your party in our private
              VIP area with exclusive loungers and relaxation zones. Immerse
              yourself in an atmosphere of comfort and superiority, enjoying
              tranquility with your loved ones
            </p>
            <a href="#contact-us">
              <Button
                variant="outline"
                className="border border-white/90 bg-transparent text-white hover:bg-amber-50 
                hover:text-black font-medium tracking-wider p-5 text-sm"
              >
                CONTACT US
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
