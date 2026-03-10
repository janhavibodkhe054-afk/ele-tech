import React from "react";
import { Link } from "react-router-dom";

const Commercial = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/commercial1.jpg"
          alt="Commercial Electrical"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Commercial Electrical Installation
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Commercial Electrical Installation
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">

            {/* Main Image */}
            <img
              src="/commercial2.avif"
              alt="Electrical Panel"
              className="rounded-lg mb-8 w-full h-[500px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Commercial Electrical Installation
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial electrical installation refers to the complete setup of
              electrical infrastructure in commercial facilities such as office
              buildings, shopping complexes, hotels, hospitals, educational
              institutions, and industrial units. These systems are designed to
              support heavy electrical loads and ensure continuous power
              distribution for lighting, HVAC systems, machinery, security
              systems, and other operational equipment. A well-designed
              electrical system ensures efficiency, safety, and long-term
              reliability for commercial operations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              The installation process begins with electrical planning and load
              calculations. Engineers evaluate the power requirements of the
              building and design a distribution system that includes
              transformers, switchboards, panel boards, cable trays, conduits,
              and circuit protection devices. Proper electrical design helps
              avoid overloading, improves energy efficiency, and ensures
              compliance with electrical safety standards and regulations.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Electrical System Planning & Infrastructure Setup
            </h3>

            {/* Small Height Image */}
            

            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              During the installation phase, professional electricians install
              electrical conduits, wiring systems, distribution panels, circuit
              breakers, and grounding systems throughout the building. Cable
              management systems such as cable trays and trunking are used to
              organize and protect electrical wiring. These components ensure
              safe transmission of electricity while preventing electrical
              faults, short circuits, and overheating.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial electrical installations also include advanced lighting
              systems such as LED lighting, emergency lighting, and automated
              lighting controls. These solutions improve energy efficiency while
              ensuring proper illumination across office spaces, corridors,
              warehouses, and outdoor areas. Modern commercial facilities often
              integrate smart electrical systems that allow centralized control
              and monitoring of power consumption.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Safety is one of the most critical aspects of commercial
              electrical installation. Proper earthing systems, surge
              protection devices, and circuit breakers are installed to protect
              equipment and occupants from electrical hazards. After
              installation, the entire system undergoes testing and inspection
              to verify load distribution, voltage stability, and compliance
              with electrical safety standards. A professionally installed
              commercial electrical system ensures reliable power supply,
              reduced energy wastage, and long-term operational stability for
              businesses.
            </p>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">

              <h3 className="text-xl font-bold mb-6 border-b pb-3">
                Electrical Services
              </h3>

              <ul className="space-y-4 text-gray-700">

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

export default Commercial;