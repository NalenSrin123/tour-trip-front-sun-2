import React, { useState } from "react";
import {
     Clock3,
     Users,
     Utensils,
     MapPin,
     CalendarDays,
     Plus,
     Minus,
     CheckCircle2,
     XCircle,
     Heart,
     ArrowLeft,
} from "lucide-react";

const ExperienceDetails = () => {
     const [guests, setGuests] = useState(2);
     const [selectedDate, setSelectedDate] = useState("2024-10-24");

     const pricePerPerson = 35;
     const totalPrice = guests * pricePerPerson;

     const increaseGuests = () => {
          if (guests < 8) {
               setGuests(guests + 1);
          }
     };

     const decreaseGuests = () => {
          if (guests > 1) {
               setGuests(guests - 1);
          }
     };

     return (
          <div className="min-h-screen bg-white">
               {/* Main Container */}
               <div className="mx-auto max-w-6xl px-5 py-8">
                    {/* Back Button */}
                    <button
                         type="button"
                         className="mb-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:text-emerald-300 "
                    >
                         <ArrowLeft size={16} />
                         Back to Experiences
                    </button>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_330px]">
                         {/* ================= LEFT CONTENT ================= */}
                         <main>
                              {/* Experience Header */}
                              <div className="mb-5">
                                   <h1 className="max-w-2xl text-3xl font-bold leading-tight text-[#17284d]">
                                        Authentic Khmer Clay-Pot Cooking Class
                                   </h1>

                                   <div className="mt-2 flex flex-wrap items-center gap-4">
                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                             <div className="flex text-[13px] text-[#f7b731]">★★★★★</div>

                                             <span className="text-xs font-semibold text-[#17284d]">
                                                  5.0
                                             </span>

                                             <span className="text-xs text-gray-400">(84 Reviews)</span>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                             <MapPin size={12} className="text-[#10b899]" />
                                             Siem Reap, Cambodia
                                        </div>
                                   </div>
                              </div>

                              {/* Information Cards */}
                              <div className="mb-7 grid grid-cols-1 gap-3 rounded-xl bg-[#f5f7fa] p-4 sm:grid-cols-3">
                                   {/* Duration */}
                                   <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                             <Clock3 size={15} className="text-[#10b899]" />
                                        </div>

                                        <div>
                                             <p className="text-[10px] text-gray-400">Duration</p>

                                             <p className="text-xs font-semibold text-[#344054]">
                                                  4 Hours
                                             </p>
                                        </div>
                                   </div>

                                   {/* Class Size */}
                                   <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                             <Users size={15} className="text-[#10b899]" />
                                        </div>

                                        <div>
                                             <p className="text-[10px] text-gray-400">Class Size</p>

                                             <p className="text-xs font-semibold text-[#344054]">
                                                  Up to 8 people
                                             </p>
                                        </div>
                                   </div>

                                   {/* Includes */}
                                   <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                             <Utensils size={15} className="text-[#10b899]" />
                                        </div>

                                        <div>
                                             <p className="text-[10px] text-gray-400">Includes</p>

                                             <p className="text-xs font-semibold text-[#344054]">
                                                  3-Course Meal
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              {/* ================= OVERVIEW ================= */}
                              <section className="mb-7">
                                   <h2 className="mb-3 text-base font-bold text-[#17284d]">
                                        Experience Overview
                                   </h2>

                                   <p className="max-w-3xl text-[12px] leading-[1.7] text-gray-500">
                                        Uncover the secrets of real Cambodian cuisine inside a charming
                                        open-air kitchen pavilion. Your day begins with an educational
                                        market walk through local Siem Reap morning stalls. Discover how
                                        local ginger, lemongrass, kaffir lime leaves, and galangal are
                                        sourced fresh daily. Back in the kitchen, learn how to grind
                                        traditional Khmer curry paste (Kroeung) by hand and construct
                                        the famous Fish Amok inside organic hand-woven banana leaf
                                        bowls.
                                   </p>
                              </section>

                              {/* ================= HIGHLIGHTS ================= */}
                              <section className="mb-7">
                                   <h2 className="mb-3 text-base font-bold text-[#17284d]">
                                        Experience Highlights
                                   </h2>

                                   <div className="space-y-2">
                                        <Highlight text="Local morning wet-market guided tour" />
                                        <Highlight text="Grind authentic yellow Kroeung paste by hand" />
                                        <Highlight text="Construct and steam traditional Fish Amok" />
                                        <Highlight text="Cook inside custom handmade Khmer clay-pots" />
                                   </div>
                              </section>

                              {/* ================= INCLUDED ================= */}
                              <section>
                                   <h2 className="mb-3 text-base font-bold text-[#17284d]">
                                        What's Included
                                   </h2>

                                   <div className="rounded-xl bg-[#f5f7fa] px-5 py-4">
                                        <IncludedItem text="All organic ingredients and market trip expense" />
                                        <IncludedItem text="Hands-on instruction by certified local Khmer chef" />
                                        <IncludedItem text="Complimentary pickup from city center hotels" />
                                        <IncludedItem text="Personal recipe book to take back home" />

                                        <IncludedItem
                                             text="Personal alcoholic or soft drinks during meal"
                                             included={false}
                                        />
                                   </div>
                              </section>
                         </main>

                         {/* ================= BOOKING CARD ================= */}
                         <aside>
                              <div className="sticky top-6 rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-sm">
                                   {/* Price */}
                                   <div className="mb-5">
                                        <span className="text-2xl font-bold text-[#ff684d]">$35</span>

                                        <span className="ml-1 text-xs text-gray-400">/ person</span>
                                   </div>

                                   <div className="border-t border-[#edf0f4]" />

                                   {/* Date */}
                                   <div className="mt-4">
                                        <label className="mb-2 block text-[10px] font-semibold text-[#344054]">
                                             Select Date
                                        </label>

                                        <div className="relative">
                                             <input
                                                  type="date"
                                                  value={selectedDate}
                                                  onChange={(e) => setSelectedDate(e.target.value)}
                                                  className="h-10 w-full rounded-lg border border-[#e4e7ec] bg-white px-3 text-xs text-[#344054] outline-none transition focus:border-[#10b899]"
                                             />

                                             <CalendarDays
                                                  size={15}
                                                  className="pointer-events-none absolute right-3 top-3 text-[#10b899]"
                                             />
                                        </div>
                                   </div>

                                   {/* Guests */}
                                   <div className="mt-4">
                                        <label className="mb-2 block text-[10px] font-semibold text-[#344054]">
                                             Number of Guests
                                        </label>

                                        <div className="flex h-10 items-center justify-between rounded-lg border border-[#e4e7ec] px-3">
                                             <button
                                                  type="button"
                                                  onClick={decreaseGuests}
                                                  disabled={guests <= 1}
                                                  className="text-gray-400 transition hover:text-[#10b899] disabled:cursor-not-allowed disabled:opacity-40"
                                             >
                                                  <Minus size={13} className="cursor-pointer" />
                                             </button>

                                             <span className="text-xs font-medium text-[#344054]">
                                                  {guests}
                                             </span>

                                             <button
                                                  type="button"
                                                  onClick={increaseGuests}
                                                  disabled={guests >= 8}
                                                  className="text-gray-400 transition hover:text-[#10b899] disabled:cursor-not-allowed disabled:opacity-40"
                                             >
                                                  <Plus size={13} className="cursor-pointer" />
                                             </button>
                                        </div>
                                   </div>

                                   {/* Total */}
                                   <div className="mt-5 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-[#344054]">
                                             Total Price
                                        </span>

                                        <span className="text-lg font-bold text-[#17284d]">
                                             ${totalPrice}
                                        </span>
                                   </div>

                                   {/* Book Button */}
                                   <button
                                        type="button"
                                        className="mt-4 cursor-pointer h-10 w-full rounded-lg bg-[#10b899] text-xs font-semibold text-white transition hover:bg-[#0e9f85]"
                                   >
                                        Book Experience Now
                                   </button>

                                   {/* Wishlist */}
                                   <button
                                        type="button"
                                        className="mt-2 cursor-pointertransition-all duration-200 hover:text-emerald-400  flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-[#e4e7ec] bg-white text-xs font-semibold text-[#344054] transition hover:bg-[#f8f9fc]"
                                   >
                                        <Heart size={14} />
                                        Add to Wishlist
                                   </button>
                              </div>
                         </aside>
                    </div>
               </div>
          </div>
     );
};

/* ================= HIGHLIGHT COMPONENT ================= */

const Highlight = ({ text }) => {
     return (
          <div className="flex items-center gap-2">
               <CheckCircle2
                    size={13}
                    className="shrink-0 fill-[#d9f8f2] text-[#10b899]"
               />

               <span className="text-[11px] text-gray-500">{text}</span>
          </div>
     );
};

/* ================= INCLUDED COMPONENT ================= */

const IncludedItem = ({ text, included = true }) => {
     return (
          <div className="mb-3 flex items-center gap-3 last:mb-0">
               {included ? (
                    <CheckCircle2
                         size={13}
                         className="shrink-0 fill-[#d9f8f2] text-[#10b899]"
                    />
               ) : (
                    <XCircle size={13} className="shrink-0 cursor-pointer fill-[#ffe4df] text-[#ff684d]" />
               )}

               <span className="text-[11px] text-gray-500">{text}</span>
          </div>
     );
};

export default ExperienceDetails;
