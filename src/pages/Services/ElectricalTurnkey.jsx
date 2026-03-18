import React from "react";
import { Link } from "react-router-dom";

const ElectricalTurnkey = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">
        <img
          src="/turnkey1.webp"
          alt="Electrical Turnkey Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Electrical Turnkey Projects
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Electrical Turnkey Projects
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
              src="/turnkey2.jpg"
              alt="Electrical Turnkey Work"
              className="rounded-lg mb-6 w-full h-[250px] md:h-[400px] object-cover"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Electrical Turnkey Projects
            </h2>

            {/* Short Content */}
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Electrical turnkey projects provide complete electrical
              solutions from design and planning to installation and final
              commissioning. Our team handles the entire project to ensure
              efficient and reliable power systems.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Services include electrical design, wiring systems, distribution
              panels, transformers, lighting systems, and power management for
              commercial, industrial, and residential developments.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              With proper testing, safety standards, and modern electrical
              technology, we deliver ready-to-operate electrical systems that
              ensure long-term performance and operational reliability.
            </p>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-3">
                Electrical Services
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">

                <li>
                  <Link to="/commercial-electrical-installation" className="hover:text-orange-500">
                    ▸ Commercial Electrical Installation
                  </Link>
                </li>

                <li>
                  <Link to="/industrial-electrical-installation" className="hover:text-orange-500">
                    ▸ Industrial Electrical Installation
                  </Link>
                </li>

                <li>
                  <Link to="/farmhouse-electrical-installation" className="hover:text-orange-500">
                    ▸ Farmhouse Electrical Installation
                  </Link>
                </li>

                <li>
                  <Link to="/electrical-turnkey-projects" className="hover:text-orange-500">
                    ▸ Electrical Turnkey Projects
                  </Link>
                </li>

                <li>
                  <Link to="/ht-lt-cable-laying" className="hover:text-orange-500">
                    ▸ HT-LT Cable Laying
                  </Link>
                </li>

                <li>
                  <Link to="/solar-system-installation" className="hover:text-orange-500">
                    ▸ Solar System Installation
                  </Link>
                </li>

                <li>
                  <Link to="/lighting-contractors" className="hover:text-orange-500">
                    ▸ Lighting Contractors
                  </Link>
                </li>

                <li>
                  <Link to="/commercial-electrical-works" className="hover:text-orange-500">
                    ▸ Commercial Electrical Works
                  </Link>
                </li>

                <li>
                  <Link to="/residential-electrical-work" className="hover:text-orange-500">
                    ▸ Residential Electrical Work
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

export default ElectricalTurnkey;