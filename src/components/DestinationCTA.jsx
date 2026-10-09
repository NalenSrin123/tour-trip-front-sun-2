const DestinationCTA = () => {
  const scrollToTours = () => {
    document
      .getElementById("available-tours")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-white pb-12 pt-[50px]">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col items-center justify-center rounded-[10px] bg-[#EAF8F5] px-6 py-10 text-center md:h-[190px] md:py-0">
        <h2 className="text-[20px] font-bold text-[#1E2D50] md:text-[22px]">
          Ready to Explore Mondulkiri?
        </h2>
        <p className="mt-3 max-w-[420px] text-[12px] leading-relaxed text-[#526174]">
          Connect with our certified local guides and book custom tailor-made
          packages directly through TripGo today.
        </p>
        <button
          type="button"
          onClick={scrollToTours}
          className="mt-5 inline-flex h-[32px] w-[170px] items-center justify-center rounded-md bg-[#0DA88D] text-[11px] font-bold text-white transition-colors duration-150 hover:bg-[#0b927a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0DA88D]/40"
        >
          Explore Mondulkiri Tours
        </button>
      </div>
    </section>
  );
};

export default DestinationCTA;
