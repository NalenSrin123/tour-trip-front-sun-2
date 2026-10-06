import React from 'react'

const PromoBanner = () => {
  return (
    <section className=" px-5 py-10">
      <div
        className="relative mx-auto max-w-[1370px] overflow-hidden rounded-3xl
        bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative min-h-[340px] px-8 py-10 md:px-14">
          {/* Promo Label */}
          <span className="absolute left-15 top-0 rounded-b-xl bg-[#ff674d] px-6 py-3 font-bold text-white">
            SPECIAL PROMO
          </span>

          <div className="flex min-h-[340px] flex-col justify-center pt-8">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Summer Adventure — Save 20%
            </h1>

            <p className="mt-5 max-w-4xl text-lg text-white md:text-xl">
              Book your next adventure with code TRIPGO20 and enjoy exclusive
              premium travel benefits.
            </p>

            <button className="mt-6 w-fit rounded-lg bg-[#ff674d] px-5 py-3 font-bold text-white hover:bg-[#ff543c]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
