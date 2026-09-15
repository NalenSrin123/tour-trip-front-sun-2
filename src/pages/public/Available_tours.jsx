import { MapPin, Star } from "lucide-react";
import React from "react";

const tours = [
  {
    id: 1,
    location: "Siem Reab",
    description: "Ethical Elephant Sanctuary Day Tour",
    day: "1 Day",
    rate1: 4.9,
    rate2: "(112)",
    price: 85,
    image:
      "https://www.dreamsabroad.com/wp-content/uploads/Five-Reasons-to-Visit-Angkor-Wat.jpg",
  },
  {
    id: 2,
    location: "Siem Reab",
    description: "Highland Jungle Trekking & Camping",
    day: "3 Days / 2 Nights",
    rate1: 4.8,
    rate2: "(74)",
    price: 195,
    image:
      "https://www.travelplusstyle.com/wp-content/uploads/2013/07/Cambodia_SiemReap_0379_2.jpg",
  },
  {
    id: 3,
    location: "Siem Reab",
    description: "Bousra Falls & Bunong Village Culture",
    day: "2 Days / 1 Night",
    rate1: 4.7,
    rate2: "(48)",
    price: 140,
    image:
      "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos75809575xl-1714097930352.jpg",
  },
  {
    id: 4,
    location: "Siem Reab",
    description: "Wildlife Observation & Deep Forest",
    day: "4 Days / 3 Nights",
    rate1: 4.9,
    rate2: "(36)",
    price: 280,
    image:
      "https://www.siemreap.net/wp-content/uploads/2017/12/siem-reap-pub-street-sunset.jpg",
  },
];
export const Available_tours = () => {
  return (
    <section className=" px-5 py-16 md:px-10 md:py-24">
      <div className=" mx-auto max-w-[1280px]">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1A2B4C] md:text-[38px]">
            Available Tours in Mondulkiri
          </h2>
          <p className="mt-4 text-base text-[#6B7280] md:text-lg">
            Curated premium packages for deep nature exploration
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => {
            const { id, location, description, day, rate1, rate2, price, image} = tour;
            return (
              <div key={id} className="overflow-hidden rounded-2xl bg-slate-50 shadow border border-slate-200">
                <div className="w-full">
                  <img
                    src={image}
                    alt={description}
                    className="h-48 w-full object-cover"
                  />
                </div>

                <div className="p-4 ">
                  <div className="w-full space-y-2.5">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold text-[#069427]"
                    >
                      <MapPin />
                      <span>{location}</span>
                    </a>

                    <h1 className="truncate text-xl font-bold">
                      {description}
                    </h1>
                    <div className="flex justify-between">
                      <p className="text-slate-600 font-semibold">{day}</p>
                      <h5 className="flex gap-2 ">
                        <span className=" text-amber-300 ">
                          <Star className="fill-amber-300" />
                        </span>
                        <strong>{rate1}</strong>
                        <p className="text-slate-600 font-semibold">{rate2}</p>
                      </h5>
                    </div>
                    <hr className="border-slate-200 border-t-2" />
                    <div className="flex justify-between items-center">
                      <div className="">
                        <p className="text-slate-600">Price per person</p>
                        <h3 className="text-red-600 text-2xl font-bold">$ {price}</h3>
                      </div>
                      <div>
                        <button className="bg-blue-950 text-white font-bold p-2 px-4 rounded-xl cursor-pointer">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
