import React from "react";

const ExperienceCard = ({ experience }) => {
  const Icon = experience.icon;

  return (
    <button className="group flex min-h-[175px] flex-col items-center justify-center rounded-2xl bg-[#f5f7fa] px-3 py-6 transition hover:-translate-y-1 hover:shadow-md">
      {/* Icon */}
      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${experience.iconBg}`}
      >
        <Icon
          className={`h-7 w-7 ${experience.iconColor}`}
          aria-hidden="true"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-[#1d3157]">{experience.name}</h3>

      {/* Count */}
      <p className="mt-1 text-[#7083a2]">{experience.count} Experiences</p>
    </button>
  );
};

export default ExperienceCard;
