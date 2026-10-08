import React from 'react'

const PromoBanner = () => {
  return (
    <section className="px-5 py-15 md:px-10 md:py-15">
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl
        bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative min-h-[160px] px-8 py-6 md:px-12">
          {/* Promo Label */}
          <span className="absolute left-15 top-0 rounded-b-xl bg-[#ff674d] px-4 py-2 text-xs font-bold text-white">
            SPECIAL PROMO
          </span>

          <div className="flex min-h-[200px] flex-col justify-center pt-6">
            <h1 className="text-2xl font-extrabold text-white md:text-3xl">
              Summer Adventure — Save 20%
            </h1>

            <p className="mt-2 max-w-3xl text-sm text-white md:text-base">
              Book your next adventure with code TRIPGO20 and enjoy exclusive
              premium travel benefits.
            </p>

            <button className="mt-4 w-fit rounded-lg bg-[#ff674d] px-4 py-2 text-sm font-bold text-white hover:bg-[#ff543c]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
