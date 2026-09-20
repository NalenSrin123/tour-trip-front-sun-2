import React from "react";
import experienceImage from "../../assets/images/lok_lak.jpg";
import experienceImage2 from "../../assets/images/papaya_salad.jpg";
import experienceImage3 from "../../assets/images/beef.jpg";
import experienceImage4 from "../../assets/images/chicken_wing.jpg";
import experienceImage5 from "../../assets/images/mishu_shrim.jpg";

const smallImages = [
  { src: experienceImage, alt: "Traditional cooking experience" },
  { src: experienceImage2, alt: "Papaya salad preparation" },
  { src: experienceImage3, alt: "Beef dish" },
  { src: experienceImage4, alt: "Chicken wing dish" },
];

export default function Experience_detail() {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-slate-800">
          Traditional Cooking Collage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="overflow-hidden rounded-2xl shadow-md bg-white h-full">
            <img
              src={experienceImage5}
              alt="Fresh seafood experience"
              className="w-full h-full min-h-[420px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 auto-rows-fr">
            {smallImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md bg-white h-full"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
