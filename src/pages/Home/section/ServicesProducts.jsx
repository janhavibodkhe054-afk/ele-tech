import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
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
  { name: "STP", link: "/stp", image: "/stp2.webp" },
  { name: "Rain Water system", link: "/rain-water-system", image: "/rain1.jpg" },
  { name: "Domestic water supply", link: "/domestic-water-supply", image: "/water1.webp" },
  { name: "Drainage systems", link: "/drainage-systems", image: "/plumbing1.webp" },
  { name: "Installation of sanitary fixtures", link: "/sanitary-fixtures-installation", image: "/outlet1.webp" },
];

export default function ServicesProducts() {
  const navigate = useNavigate();

  // Split services into chunks of 10
  const chunkSize = 10;
  const slides = [];
  for (let i = 0; i < services.length; i += chunkSize) {
    slides.push(services.slice(i, i + chunkSize));
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services & <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-orange-500 mt-3 font-semibold tracking-widest">
            💡 ( MECHANICAL, ELECTRICAL & PLUMBING )
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={40}
        >
          {slides.map((slideServices, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {slideServices.map((service, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(service.link)}
                    className="relative cursor-pointer group overflow-hidden rounded-md shadow-md"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-38 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end justify-center p-2">
                      <h3 className="text-white text-xs md:text-sm font-semibold text-center">
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