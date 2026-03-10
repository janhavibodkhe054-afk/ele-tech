import React from "react";
import { Link } from "react-router-dom";

const ElectricalTurnkey = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/turnkey1.webp"
          alt="Electrical Turnkey Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Electrical Turnkey Projects
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Electrical Turnkey Projects
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
              src="/turnkey2.jpg"
              alt="Electrical Turnkey Work"
              className="rounded-lg mb-8 w-full h-[400px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Electrical Turnkey Projects
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Electrical turnkey projects involve delivering complete electrical
              infrastructure solutions from initial design and planning to final
              installation and commissioning. In turnkey projects, the electrical
              contractor takes full responsibility for the entire project
              lifecycle, ensuring that the electrical system is delivered ready
              for operation. These projects are commonly implemented in
              commercial buildings, industrial facilities, residential
              complexes, infrastructure developments, and large-scale
              construction projects.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              The turnkey approach simplifies project management for clients
              because all electrical services are handled by a single provider.
              This includes electrical design, procurement of materials,
              installation of wiring systems, switchboards, transformers,
              lighting systems, and electrical panels. Professional engineers
              carefully plan the electrical network to ensure efficient power
              distribution, operational reliability, and compliance with
              electrical safety standards.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Complete Electrical Design, Installation & Commissioning
            </h3>


            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Turnkey electrical projects typically begin with detailed
              engineering design and load analysis. Electrical engineers create
              system layouts for cable routing, power distribution, lighting
              systems, and equipment connections. High-quality electrical
              components such as transformers, switchgear, distribution panels,
              cable trays, and protection systems are selected to ensure safe
              and reliable operation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              During the installation phase, experienced electricians install
              electrical wiring, power distribution panels, control systems, and
              lighting networks across the project site. Advanced electrical
              systems such as automation controls, backup power solutions,
              energy monitoring systems, and safety protection devices may also
              be integrated depending on project requirements.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Once installation is complete, comprehensive testing and
              commissioning are conducted to verify the performance and safety
              of the entire electrical system. Engineers test voltage levels,
              load capacity, circuit protection, and system reliability before
              handing over the completed project. Electrical turnkey solutions
              provide clients with efficient project execution, reduced
              coordination challenges, and a fully operational electrical system
              ready for immediate use.
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

export default ElectricalTurnkey;