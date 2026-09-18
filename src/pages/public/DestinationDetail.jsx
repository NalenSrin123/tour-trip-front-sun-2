import { Calendar, Thermometer, Coins, Globe } from "lucide-react";

const breadcrumb = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Mondulkiri Province", to: "/destinations/mondulkiri" },
];

const infoItems = [
  {
    icon: Calendar,
    label: "Best Time to Visit",
    value: "Nov - Feb (Cool Dry)",
  },
  {
    icon: Thermometer,
    label: "Avg Temperature",
    value: "22°C - 28°C",
  },
  {
    icon: Coins,
    label: "Local Currency",
    value: "KHR / USD",
  },
  {
    icon: Globe,
    label: "Official Language",
    value: "Khmer / Bunong",
  },
];

export default function DestinationDetail() {
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      {/* Hero Section */}
      <section className="relative h-[250px] overflow-hidden md:h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mondulkiri landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />

        <div className="absolute inset-0 flex items-start pt-16 md:pt-20">
          <div className="mx-auto max-w-[1150px] w-full px-6">
            <nav aria-label="Breadcrumb" className="mb-3 md:mb-4">
              <ol className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/70">
                {breadcrumb.map((item, i) => (
                  <li key={item.label} className="flex items-center gap-2">
                    {i > 0 && <span className="text-white/40">/</span>}
                    <a
                      href={item.to}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <h1 className="text-[28px] font-bold text-white leading-tight md:text-[36px]">
              Mondulkiri, Cambodia
            </h1>
            <p className="mt-3 max-w-[550px] text-[14px] leading-relaxed text-white/85 md:text-[15px]">
              Journey to Cambodia's wild east — a land of rolling hills,
              thundering waterfalls, indigenous cultures, and sanctuary
              elephant reserves.
            </p>
          </div>
        </div>
      </section>

      {/* Information Bar */}
      <section className="bg-[#f4f6f8]">
        <div className="mx-auto max-w-[1150px] px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 py-2"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] md:text-[12px] text-gray-500">{item.label}</p>
                  <p className="mt-0.5 text-[13px] md:text-[14px] font-semibold text-gray-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:py-16 md:px-6">
        <div className="mx-auto max-w-[1150px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-[22px] font-bold text-[#182849] md:text-[24px]">
                About Mondulkiri
              </h2>
              <div className="mt-5 space-y-5 text-[14px] leading-[1.75] text-gray-700 md:mt-6">
                <p>
                  Mondulkiri is the largest but most sparsely populated province
                  in Cambodia. Known for its thick pine forests, mist-shrouded
                  green hills, and cool climate, it offers an extreme contrast to
                  the tropical temples of Angkor and flatlands of Mekong. It's
                  the native home of the indigenous Bunong people, who hold a
                  deep spiritual connection to the surrounding forests and its
                  wild wildlife.
                </p>
                <p>
                  Travelers flock here to experience ethical wildlife tourism
                  inside deep elephant sanctuaries, hike to massive multi-tiered
                  waterfalls like Bou Sra, and explore local coffee plantations
                  that thrive in the rich volcanic highland soil. Mondulkiri is
                  Cambodia's premier raw tourism capital.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 flex justify-center lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=660&q=80"
                alt="Elephant in misty forest"
                className="h-[200px] w-full max-w-[330px] rounded-[12px] object-cover md:h-[240px] lg:h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}