import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
  // Mechanical Services
  { name: "Fire Fighting System", link: "/fire-fighting-system", image: "/firefight1.png" },
  { name: "Fire Hydrant System", link: "/fire-hydrant-system", image: "/firehydrant1.webp" },
  { name: "Fire Suppression System", link: "/fire-suppression-system", image: "/supression2.jpg" },
  { name: "Industrial Exhaust System", link: "/industrial-exhaust-system", image: "/exhaust2.jpg" },
  { name: "Heating & Cooling System", link: "/heating-cooling-system", image: "/heat1.jpg" },
  { name: "Building Management System", link: "/building-management-system", image: "/build2.jpg" },

  // Electrical Services
  { name: "Commercial Electrical Installation", link: "/commercial-electrical-installation", image: "/commercial2.avif" },
  { name: "Industrial Electrical Installation", link: "/industrial-electrical-installation", image: "/industrial2.jpg" },
  { name: "Farmhouse Electrical Installation", link: "/farmhouse-electrical-installation", image: "/farmhouse1.jpg" },
  { name: "Electrical Turnkey Projects", link: "/electrical-turnkey-projects", image: "/turnkey2.jpg" },
  { name: "HT-LT Cable Laying", link: "/ht-lt-cable-laying", image: "/htlt2.jpeg" },
  { name: "Solar System Installation", link: "/solar-system-installation", image: "/solar2.jpg" },
  { name: "Lighting Contractors", link: "/lighting-contractors", image: "/light2.webp" },
  { name: "Commercial Electrical Works", link: "/commercial-electrical-works", image: "/elect2.jpg" },
  { name: "Residential Electrical Work", link: "/residential-electrical-work", image: "/resident2.webp" },
  { name: "Home Automation", link: "/home-automation", image: "/automation2.webp" },
  { name: "Telephone / Data system", link: "/telephone-data-system", image: "/phone2.jpg" },
  { name: "Public address system", link: "/public-address-system", image: "/public1.jpg" },
  { name: "Fire alarm system", link: "/fire-alarm-system", image: "/fire2.jpg" },
  { name: "Security system", link: "/security-system", image: "/security2.jpg" },
  { name: "CCTV system", link: "/cctv-system", image: "/cctv2.jpg" },

  // Plumbing Services
  { name: "STP", link: "/stp", image: "/stp2.webp" },
  { name: "Rain Water system", link: "/rain-water-system", image: "/rain1.jpg" },
  { name: "Domestic water supply", link: "/domestic-water-supply", image: "/water1.webp" },
  { name: "Drainage systems", link: "/drainage-systems", image: "/plumbing1.webp" },
  { name: "Installation of sanitary fixtures", link: "/sanitary-fixtures-installation", image: "/outlet1.webp" },
];

export default function ServicesProducts() {
  const navigate = useNavigate();

  const chunkSize = 10;
  const slides = [];

  for (let i = 0; i < services.length; i += chunkSize) {
    slides.push(services.slice(i, i + chunkSize));
  }

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Services & <span className="text-orange-500">Products</span>
          </h2>

          <p className="text-orange-500 mt-3 font-semibold tracking-widest text-xs sm:text-sm md:text-base">
            💡 ( MECHANICAL, ELECTRICAL & PLUMBING )
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
        >
          {slides.map((slideServices, index) => (
            <SwiperSlide key={index}>

              {/* GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">

                {slideServices.map((service, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(service.link)}
                    className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500"
                  >

                    {/* IMAGE */}
                    <img
                      src={service.image}
                      alt={service.name}
                      onError={(e) => (e.target.src = "/default-service.jpg")}
                      className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-2 sm:p-3">

                      <h3 className="text-white text-[11px] sm:text-xs md:text-sm font-semibold text-center leading-tight line-clamp-2">
                        {service.name}
                      </h3>

                    </div>

                  </div>
                ))}

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}