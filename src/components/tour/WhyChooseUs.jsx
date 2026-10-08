import React from 'react'
import { BadgeDollarSign, UserRoundCheck, MousePointerClick, LockKeyhole } from 'lucide-react'

const FEATURES = [
  {
    icon: BadgeDollarSign,
    title: 'Best Price Guarantee',
    description: 'We offer the most competitive prices with no hidden fees, guaranteed.',
  },
  {
    icon: UserRoundCheck,
    title: 'Professional Tour Guides',
    description: 'Experienced local guides who know every corner of the destination.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy & Fast Booking',
    description: 'Book your dream trip in minutes with our simple booking process.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Payment',
    description: 'Your payments are protected with encrypted, secure checkout.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f8f9f8] px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-[28px] font-bold text-[#182849] md:text-[32px]">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm text-gray-500 md:text-base">
            We promise absolute premium service and care from start to finish
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-xl bg-white p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef6f4]">
                <Icon className="h-5 w-5 text-[#10ad91]" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-[#182849]">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
