import heroImage from "../../assets/images/tours/Temple.jpg";

const HeroSectionAbout = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Ta Prohm Temple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-emerald-500 rounded-full mb-4">
            Travel Inspiration
          </span>

          {/* Title */}
          <h1 className="max-w-4xl text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Ta Prohm: Where Human Monument Meets
            <br className="hidden md:block" />
            Unyielding Force of Nature
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 sm:mt-8">
            <img
              src="https://i.pravatar.cc/100"
              alt="Author"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
            />

            <div>
              <p className="text-white font-medium text-sm sm:text-base">
                By Elena Vance
              </p>

              <p className="text-gray-300 text-xs sm:text-sm">
                Published September 12, 2026 • 8 min read
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;