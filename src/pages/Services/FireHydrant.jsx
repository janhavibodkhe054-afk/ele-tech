import React from "react";
import { Link } from "react-router-dom";

const FireHydrant = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">

        <img
          src="/firehydrant1.webp"
          alt="Fire Hydrant System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Fire Hydrant System
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Fire Hydrant System
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">

            {/* Main Image */}
            <img
              src="/firehydrant2.jpg"
              alt="Fire Hydrant Installation"
              className="rounded-lg mb-6 w-full h-[250px] md:h-[400px] object-cover"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Fire Hydrant System
            </h2>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              A fire hydrant system is a crucial fire protection solution that
              provides a reliable water supply for controlling and extinguishing
              fires in buildings, factories, warehouses, and commercial
              complexes. The system consists of hydrant valves, pumps,
              pipelines, hose reels, and water storage tanks designed to
              deliver high-pressure water during fire emergencies.
            </p>

           

            <p className="text-gray-600 leading-relaxed text-justify">
              Our fire hydrant system services include professional design,
              installation, testing, and maintenance in compliance with fire
              safety standards. We ensure reliable pump systems, proper pipeline
              layouts, and efficient water distribution to provide maximum
              safety for residential, commercial, and industrial properties.
            </p>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-3">
                Mechanical Services
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">

                <li>
                  <Link to="/fire-fighting-system" className="hover:text-orange-500">
                    ▸ Fire Fighting System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-hydrant-system" className="hover:text-orange-500">
                    ▸ Fire Hydrant System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-suppression-system" className="hover:text-orange-500">
                    ▸ Fire Suppression System
                  </Link>
                </li>

                <li>
                  <Link to="/industrial-exhaust-system" className="hover:text-orange-500">
                    ▸ Industrial Exhaust System
                  </Link>
                </li>

                <li>
                  <Link to="/heating-cooling-system" className="hover:text-orange-500">
                    ▸ Heating & Cooling System
                  </Link>
                </li>

                <li>
                  <Link to="/building-management-system" className="hover:text-orange-500">
                    ▸ Building Management System
                  </Link>
                </li>

              </ul>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FireHydrant;