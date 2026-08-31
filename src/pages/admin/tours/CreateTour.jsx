import { useState } from "react";
import { ChevronDown, SaveCheck,X } from "lucide-react";

function CreateTour() {
     const [active, setActive] = useState(false);
     return (
          <>
               <div className="min-h-screen bg-[#f8f8fc] px-5 py-7">

                    {/* Header */}
                    <div className="mb-5 flex items-start justify-between">
                         <div>
                              <div className="mb-1 text-[13px] text-[#8b8fa8]">
                                   Tours <span className="mx-1">›</span> Add New
                              </div>

                              <h1 className="text-[24px] font-bold text-[#111827]">
                                   Add Tour
                              </h1>

                              <p className="mt-1 text-[13px] text-[#737993]">
                                   Create a new tour package for your destination.
                              </p>
                         </div>

                         <div className="flex gap-2.5">
                              <button
                                   type="button"
                                   className="h-[38px] rounded-md border border-[#d3d7e2] bg-white px-3 sm:px-5 text-[13px] font-semibold text-[#344054] hover:bg-[#f8f9fc]"
                              >
                                   <X size={16} className="inline-block sm:mr-2" />
                                   <span className="hidden sm:inline">Cancel</span>
                              </button>

                              <button
                                   type="button"
                                   className="h-[38px] align-middle rounded-md  bg-[#5146e5] px-5 text-[13px] font-semibold text-white hover:bg-[#453bd1]"
                              >
                                   <SaveCheck size={16} className="inline-block" />
                                   <span className="hidden sm:inline ml-2">Save Tour</span>
                              </button>
                         </div>
                    </div>


                    {/* Basic Information */}
                    <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">

                         <div className="mb-4 border-b border-[#e1e3eb] pb-3">
                              <h2 className="text-[14px] font-bold text-[#17233d]">
                                   Basic Information
                              </h2>
                         </div>

                         {/* Tour Title */}
                         <div className="mb-4">
                              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                   Tour Title<span className="text-red-500">*</span>
                              </label>

                              <input
                                   type="text"
                                   placeholder="e.g., Kyoto Cultural Experience"
                                   className="h-11 w-full rounded-md border border-[#d5d9e3] bg-white px-4 text-[13px] text-[#26324a] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                              />
                         </div>


                         {/* Category + Destination */}
                         <div className="grid grid-cols-2 gap-4">

                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Category<span className="text-red-500">*</span>
                                   </label>

                                   <div className="relative">
                                        <select
                                             className="h-11 w-full appearance-none rounded-md border border-[#d5d9e3] bg-white px-4 pr-10 text-[13px] text-[#344054] outline-none focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                        >
                                             <option value="">Select a category</option>
                                             <option>Cultural</option>
                                             <option>Adventure</option>
                                             <option>Beach</option>
                                             <option>Family</option>
                                             <option>Luxury</option>
                                        </select>

                                        <ChevronDown
                                             size={16}
                                             className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8499]"
                                        />
                                   </div>
                              </div>


                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Destination<span className="text-red-500">*</span>
                                   </label>

                                   <div className="relative">
                                        <select
                                             className="h-11 w-full appearance-none rounded-md border border-[#d5d9e3] bg-white px-4 pr-10 text-[13px] text-[#344054] outline-none focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                        >
                                             <option value="">Select a destination</option>
                                             <option>Kyoto, Japan</option>
                                             <option>Tokyo, Japan</option>
                                             <option>Siem Reap, Cambodia</option>
                                        </select>

                                        <ChevronDown
                                             size={16}
                                             className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8499]"
                                        />
                                   </div>
                              </div>

                         </div>
                    </div>


                    {/* Tour Details */}
                    <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">

                         <div className="mb-4 border-b border-[#e1e3eb] pb-3">
                              <h2 className="text-[14px] font-bold text-[#17233d]">
                                   Tour Details
                              </h2>
                         </div>


                         {/* Slug */}
                         <div className="mb-4">
                              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                   Slug<span className="text-red-500">*</span>
                              </label>

                              <input
                                   type="text"
                                   placeholder="e.g., kyoto-cultural-experience"
                                   className="h-11 w-full rounded-md border border-[#d5d9e3] bg-white px-4 text-[13px] text-[#26324a] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                              />
                         </div>


                         {/* Duration */}
                         <div className="grid grid-cols-2 gap-4">

                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Duration (Days)<span className="text-red-500">*</span>
                                   </label>

                                   <input
                                        type="number"
                                        min="1"
                                        placeholder="e.g., 5"
                                        className="h-11 w-full rounded-md border border-[#d5d9e3] px-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                   />
                              </div>


                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Duration (Nights)<span className="text-red-500">*</span>
                                   </label>

                                   <input
                                        type="number"
                                        min="0"
                                        placeholder="e.g., 4"
                                        className="h-11 w-full rounded-md border border-[#d5d9e3] px-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                   />
                              </div>

                         </div>
                    </div>


                    {/* Pricing */}
                    <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">

                         <div className="mb-4 border-b border-[#e1e3eb] pb-3">
                              <h2 className="text-[14px] font-bold text-[#17233d]">
                                   Pricing
                              </h2>
                         </div>


                         <div className="grid grid-cols-2 gap-4">

                              {/* Base Price */}
                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Base Price<span className="text-red-500">*</span>
                                   </label>

                                   <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#7c8499]">
                                             $
                                        </span>

                                        <input
                                             type="number"
                                             step="0.01"
                                             placeholder="0.00"
                                             className="h-11 w-full rounded-md border border-[#d5d9e3] pl-8 pr-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                        />
                                   </div>

                                   <p className="mt-1 text-[10px] text-[#8b92a6]">
                                        Standard price for this tour.
                                   </p>
                              </div>


                              {/* Price Override */}
                              <div>
                                   <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                                        Price Override
                                   </label>

                                   <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#7c8499]">
                                             $
                                        </span>

                                        <input
                                             type="number"
                                             step="0.01"
                                             placeholder="Optional"
                                             className="h-11 w-full rounded-md border border-[#d5d9e3] pl-8 pr-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                                        />
                                   </div>

                                   <p className="mt-1 text-[10px] text-[#8b92a6]">
                                        Leave empty to use the base price.
                                   </p>
                              </div>

                         </div>
                    </div>


                    {/* Tour Status */}
                    <div className="rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">

                         <div className="mt-3 flex items-center justify-between rounded bg-[#f0f1ff] px-3 py-2.5">

                              <div>
                                   <p className="text-[10px] font-semibold text-gray-700">
                                        Destination Status
                                   </p>

                                   <p className="text-[9px] text-gray-500">
                                        Active destinations are visible to customers.
                                   </p>
                              </div>

                              {/* Static Toggle */}
                              <div
                                   onClick={() => setActive(!active)}
                                   className={`relative h-4 w-7 cursor-pointer rounded-full transition-colors ${active ? "bg-[#5b50e6]" : "bg-gray-300"
                                        }`}
                              >
                                   <div
                                        className={`absolute top-[2px] h-3 w-3 rounded-full bg-white shadow transition-all ${active ? "right-[2px]" : "left-[2px]"
                                             }`}
                                   ></div>
                              </div>

                         </div>

                    </div>

               </div>
          </>
     )
}
export default CreateTour;