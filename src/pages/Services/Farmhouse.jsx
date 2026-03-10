import React from "react";
import { Link } from "react-router-dom";

const Farmhouse = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/farmhouse2.webp"
          alt="Farmhouse Electrical Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Farmhouse Electrical Installation
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Farmhouse Electrical Installation
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
              src="/farmhouse1.jpg"
              alt="Farmhouse Electrical Work"
              className="rounded-lg mb-8 w-full h-[400px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Farmhouse Electrical Installation
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Farmhouse electrical installation involves designing and
              installing reliable electrical systems for farmhouses, rural
              properties, agricultural land, and countryside residences.
              Unlike urban residential properties, farmhouse electrical
              systems must support larger outdoor areas, water pumps,
              irrigation equipment, security lighting, and sometimes
              agricultural machinery. Proper electrical planning ensures safe
              power distribution across indoor and outdoor areas of the
              farmhouse property.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A well-designed farmhouse electrical system includes power
              supply for lighting, appliances, water pumping systems, garden
              lighting, and outdoor electrical outlets. Electricians install
              distribution boards, wiring networks, switches, and circuit
              protection devices to ensure efficient electricity flow. Since
              many farmhouses are located in remote areas, it is also common
              to integrate backup power systems such as generators or solar
              power solutions to maintain continuous electricity supply.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Outdoor Electrical Systems & Energy Solutions
            </h3>

           
            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Farmhouse installations often require extensive outdoor
              electrical infrastructure. Electricians install weatherproof
              wiring systems, underground cables, garden lighting, and
              electrical connections for outdoor equipment. Special care is
              taken to protect wiring from environmental factors such as rain,
              moisture, and dust. Proper grounding systems are also installed
              to ensure electrical safety in open rural environments.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In many modern farmhouses, energy-efficient solutions such as
              solar panels and LED lighting are integrated into the electrical
              system. Solar systems can provide sustainable electricity for
              lighting, irrigation pumps, and other farm operations. These
              systems help reduce energy costs while ensuring reliable power
              supply in areas where grid electricity may be limited.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Safety and durability are essential for farmhouse electrical
              installations. Proper circuit breakers, surge protection, and
              grounding systems are installed to prevent electrical faults
              and protect appliances and equipment. After installation,
              electricians conduct testing and inspections to ensure that
              the electrical system operates safely and efficiently across
              the entire farmhouse property. A professionally installed
              electrical system ensures comfort, safety, and reliable power
              for both residential living and agricultural activities.
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

export default Farmhouse;