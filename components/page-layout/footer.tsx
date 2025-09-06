import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer>
      {/* Social Media Section */}
      <div className="bg-zinc-900 py-4 text-amber-50">
        <div className="max-w-6xl mx-auto px-2 lg:px-6">
          <div className="flex items-center justify-between text-sm whitespace-nowrap gap-1">
            <span className="font-light text-xs md:text-base tracking-wider heading">
              FOLLOW US
            </span>
            <span className="font-bold max-sm:hidden">@sunasbeachclubrestaurant</span>
            <span className="font-light text-xs md:text-base  tracking-wider heading">
              ON INSTAGRAM
            </span>
          </div>
        </div>
      </div>

      {/* Contact & Newsletter Section */}
      <div className="bg-amber-50 py-16 md:py-20" id="contact-us">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Contact Information */}
          <div className="space-y-2">
            <p className="text-zinc-800 text-xl md:text-2xl font-light heading mb-0">
              +90 533 846 10 10
            </p>
            <p className="text-zinc-800 text-xl md:text-2xl font-medium tracking-wider heading">
              @sunasbeachclubrestaurant
            </p>
            <p className="text-zinc-700 text-base tracking-wider uppercase">
              Fevzi Çakmak Sokak, Lapta 9915
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
