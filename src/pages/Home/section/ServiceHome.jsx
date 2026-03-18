import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Mechanical Utility Piping Services",
    desc: "We provide end-to-end mechanical piping solutions including installation, maintenance, and optimization of industrial piping networks for utilities such as water, air, and gas systems.",
  },
  {
    title: "Electrical & IT Infrastructure Services",
    desc: "Our team delivers reliable electrical and IT infrastructure including wiring systems, panels, power distribution, networking, and industrial automation support.",
  },
  {
    title:
      "Industrial Loadmatic Conveyor / Machine Assembly Line Installation & Commissioning",
    desc: "We specialize in installing and commissioning conveyor systems, robotic automation, and machine assembly lines to improve production efficiency.",
  },
  {
    title: "Industrial Spare Parts – Procurement & Supply",
    desc: "We ensure quick procurement and supply of industrial spare parts, components, and equipment to maintain smooth operations and reduce downtime.",
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <p className="text-orange-500 font-semibold tracking-widest mb-3 flex items-center gap-2 text-sm">
              💡 WHAT WE DO
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5">
              Solutions <span className="text-orange-500">We Provide</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base text-justify">
              Ele-Tech delivers advanced industrial engineering solutions
              designed to support modern manufacturing and infrastructure
              development. With years of experience in electrical,
              mechanical, and automation services, we help industries
              achieve efficiency, reliability, and long-term performance.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              Our expertise includes industrial installation, electrical
              infrastructure development, robotic automation integration,
              and utility piping systems. We work closely with clients
              to provide customized solutions tailored to their operational
              requirements.
            </p>

          </div>

          {/* RIGHT ACCORDION */}
          <div data-aos="fade-left" className="space-y-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition"
              >

                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition"
                >
                  <div className="flex gap-3 sm:gap-4">

                    <div className="bg-orange-500 text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <ArrowRight size={18} />
                    </div>

                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">
                      {service.title}
                    </h3>

                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-300 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    active === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}