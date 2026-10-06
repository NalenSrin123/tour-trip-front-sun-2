import {
  CircleX,
  Waves,
  Mountain,
  Palmtree,
  CookingPot,
  TentTree,
} from "lucide-react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    name: "Culture",
    count: 18,
    icon: CircleX,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    name: "Beach",
    count: 12,
    icon: Waves,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    name: "Adventure",
    count: 15,
    icon: Mountain,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    name: "Nature",
    count: 14,
    icon: Palmtree,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    name: "Food",
    count: 9,
    icon: CookingPot,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    name: "Camping",
    count: 8,
    icon: TentTree,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1370px]">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-[#1d3157] md:text-[40px]">
            Explore Experiences
          </h2>

          <p className="mt-4 text-lg text-[#7083a2]">
            Find your perfect travel style
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.name} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
