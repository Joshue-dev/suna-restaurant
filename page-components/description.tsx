const Description = () => {
  return (
    <div className="relative bg-zinc-900 py-16 md:py-24">
      {/* Description Text */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
          Stay until the early hours with cocktails, craft beers, bar food &
          London's finest hi-fi sound system.
          <br />
          Bramble is your new go-to spot to relax and unwind after a long day.
        </p>

        <h2 className="text-white text-xl md:text-2xl font-light tracking-wider">
          GOOD FOOD + GOOD DRINKS + GOOD MUSIC = GREAT VIBES.
        </h2>
      </div>

      {/* Polaroid Photo Gallery */}
      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-7xl mx-auto">
        {[
          { src: "/bramble-photo1.png", alt: "DJ at turntables" },
          { src: "/bramble-photo2.png", alt: "Bartender at work" },
          { src: "/bramble-photo3.png", alt: "Smiling bartender" },
          { src: "/bramble-photo4.png", alt: "Cocktail preparation" },
          { src: "/bramble-photo5.png", alt: "Customers enjoying drinks" },
        ].map((photo, index) => (
          <div
            key={index}
            className="bg-amber-50 p-4 pb-8 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{
              transform: `rotate(${
                (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)
              }deg)`,
            }}
          >
            <img
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              className="w-64 h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
