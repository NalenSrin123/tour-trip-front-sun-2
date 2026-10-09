const articles = [
  {
    id: "sihanoukville-secret-islands",
    category: "ISLANDS",
    title: "Sihanoukville's Secret Islands",
    date: "Sep 28, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1674017062593-8d4e8e5f5be7?fm=jpg&q=60&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Turquoise water, white sand and green palm trees on a Cambodian island",
  },
  {
    id: "kampot-pepper-farm-guide",
    category: "FOOD",
    title: "Kampot Pepper Farm Guide",
    date: "Aug 15, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1625885707454-60a95de41b63?fm=jpg&q=60&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Close-up of green peppercorns growing on a pepper vine at a Cambodian pepper farm",
  },
  {
    id: "phnom-penh-architectural-walk",
    category: "CULTURE",
    title: "Phnom Penh Architectural Walk",
    date: "Jul 10, 2024",
    readTime: "5 min read",
    image: "/images/angkor-wat-1.jpg",
    alt: "Traditional Khmer stone carvings with Cambodian temple architecture in the background",
  },
];

const TravelInspiration = () => {
  return (
    <section
      aria-labelledby="travel-inspiration-heading"
      className="bg-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2
            id="travel-inspiration-heading"
            className="text-[24px] font-bold tracking-tight text-[#14213D]"
          >
            More Travel Inspiration
          </h2>
          <p className="mt-2 text-[12px] text-slate-500">
            Read more stories from the road
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-sm"
            >
              <img
                src={article.image}
                alt={article.alt}
                loading="lazy"
                className="h-[180px] w-full object-cover sm:h-[150px] lg:h-[120px]"
              />
              <div className="p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                  {article.category}
                </p>
                <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-[#14213D]">
                  {article.title}
                </h3>
                <p className="mt-2 text-[12px] text-slate-400">
                  {article.date} · {article.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelInspiration;
