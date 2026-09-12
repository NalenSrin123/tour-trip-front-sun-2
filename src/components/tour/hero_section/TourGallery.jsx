import { Heart, Share2, Images } from "lucide-react";

const photos = {
  main: "/images/angkor-wat-1.jpg",
  topRight: "/images/angkor-wat-2.png",
  middleRight: "/images/tonle-sap.png",
  bottomRight: "/images/ta-prohm.png",
  last: "/images/angkor-wat-sunset.png",
};

function TourGallery() {
  return (
    <section className="mx-auto max-w-[1200px] mb-8">
      {/* Breadcrumb */}
      <div className="m-8 flex items-center gap-3 text-[16px]">
        <span className="text-slate-600">Home</span>
        <span className="text-slate-300">&gt;</span>

        <span className="text-slate-600">Tours</span>
        <span className="text-slate-300">&gt;</span>

        <span className="text-slate-600">Siem Reap</span>
        <span className="text-slate-300">&gt;</span>

        <span className="font-semibold text-slate-800">
          Angkor Wat Discovery
        </span>
      </div>

      {/* Gallery */}
      <div className="flex justify-center items-center w-max-[]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.65fr_1fr]">
          {/* Main Image */}
          <div className="relative max-h-[440px] overflow-hidden rounded-[28px]">
            <img
              src={photos.main}
              alt="Angkor Wat"
              className="h-full w-full object-cover"
            />

            {/* Action buttons */}
            <div className="absolute right-6 top-6 flex gap-4">
              <button
                type="button"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                aria-label="Add to wishlist"
              >
                <Heart size={28} strokeWidth={1.8} className="text-red-500" />
              </button>

              <button
                type="button"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                aria-label="Share"
              >
                <Share2
                  size={28}
                  strokeWidth={1.8}
                  className="text-slate-800"
                />
              </button>
            </div>
          </div>

          {/* Small Images */}
          <div className="grid grid-cols-2 gap-6">
            {/* Top left */}
            <div className="h-[208px] overflow-hidden rounded-[28px]">
              <img
                src={photos.topRight}
                alt="Bayon Temple"
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Top right */}
            <div className="h-[208px] overflow-hidden rounded-[28px]">
              <img
                src={photos.middleRight}
                alt="Tonle Sap"
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Bottom left */}
            <div className="h-[208px] overflow-hidden rounded-[28px]">
              <img
                src={photos.bottomRight}
                alt="Ta Prohm"
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Bottom right */}
            <div className="relative h-[208px] overflow-hidden rounded-[28px]">
              <img
                src={photos.last}
                alt="Angkor Wat sunset"
                className="h-full w-full object-cover"
              />

              {/* View all photos */}
              <button
                type="button"
                className="absolute bottom-1/2 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-slate-800/85 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition hover:bg-slate-900"
              >
                <Images size={22} />
                View all photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourGallery;
