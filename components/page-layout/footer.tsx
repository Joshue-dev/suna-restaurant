import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer>
      {/* Social Media Section */}
      <div className="bg-zinc-900 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between text-white text-sm">
            <span className="font-light tracking-wider">FOLLOW US</span>
            <span className="font-medium">@Bramble_W1D</span>
            <span className="font-light tracking-wider">ON INSTAGRAM</span>
          </div>
        </div>
      </div>

      {/* Contact & Newsletter Section */}
      <div className="bg-amber-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Contact Information */}
          <div className="space-y-4 mb-12">
            <p className="text-zinc-800 text-xl md:text-2xl font-light">
              +44 7546 029851
            </p>
            <p className="text-zinc-800 text-xl md:text-2xl font-medium tracking-wider">
              HELLO@BRAMBLE.COM
            </p>
            <p className="text-zinc-700 text-base tracking-wider">
              1 SOHO ST LDN W1D 3GT
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="JOIN THE MAILING LIST"
              className="flex-1 px-4 py-3 bg-white border border-zinc-300 text-zinc-800 placeholder-zinc-500 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
            <Button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 text-sm font-medium tracking-wider">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
