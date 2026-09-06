import {
  FiCheckCircle,
  FiCompass,
  FiLock,
  FiMapPin,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiCheckCircle,
    title: "Best Price Guarantee",
    description: "We offer competitive prices and price matching on all curated tours.",
  },
  {
    icon: FiCompass,
    title: "Professional Tour Guides",
    description: "Expert local guides with deep knowledge of Khmer history and culture.",
  },
  {
    icon: FiMapPin,
    title: "Easy & Fast Booking",
    description: "Book your complete dream trip safely in just a few clicks.",
  },
  {
    icon: FiLock,
    title: "Secure Payment",
    description: "Your payment and personal information are always fully encrypted.",
  },
];

const Home = () => {
  return (
    <main className="bg-white text-[#1d2e50]">
      <section className="bg-[#f5f8fb] px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-8 text-center sm:mb-10">
            {/* <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-[#10ad91] sm:text-sm sm:tracking-[0.18em]">
              The TripGo difference
            </p> */}
            <h1 className="text-2xl font-bold sm:text-4xl">Why Choose Us</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              We promise absolute premium service and care from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(29,46,80,0.06)] sm:p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f8f4] text-[#10ad91]">
                  <Icon size={19} />
                </div>
                <h2 className="text-base font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1120px] rounded-2xl bg-[#e9f8f5] px-5 py-10 text-center sm:px-10 sm:py-12">
          {/* <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-[#10ad91] sm:text-sm sm:tracking-[0.18em]">
            Travel notes, delivered
          </p> */}
          <h2 className="text-2xl font-bold sm:text-4xl">Get Travel Inspiration</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Subscribe to receive new destinations, travel tips, and exclusive offers directly in your inbox. No spam, ever.
          </p>
          <form className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:flex-row">
            <label htmlFor="travel-email" className="sr-only">
              Email address
            </label>
            <input
              id="travel-email"
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-white bg-white px-4 py-3 text-sm text-[#1d2e50] outline-none placeholder:text-slate-400 focus:border-[#10ad91]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#f36f56] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#df5d46]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;