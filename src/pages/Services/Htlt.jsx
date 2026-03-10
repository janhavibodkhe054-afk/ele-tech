import React from "react";
import { Link } from "react-router-dom";

const Htlt = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/htlt.jpg"
          alt="HT LT Cable Laying"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            HT-LT Cable Laying
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; HT-LT Cable Laying
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
              src="/htlt2.jpeg"
              alt="Cable Laying Work"
              className="rounded-lg mb-8 w-full h-[450px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              HT-LT Cable Laying
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              HT-LT cable laying is an essential part of electrical
              infrastructure used to distribute electricity safely and
              efficiently across residential, commercial, and industrial
              facilities. HT (High Tension) cables are used for transmitting
              electricity at higher voltages over long distances, while LT
              (Low Tension) cables are used for power distribution to
              buildings, equipment, and electrical systems at lower voltage
              levels. Proper cable laying ensures reliable power supply and
              prevents electrical faults or interruptions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              The process of cable laying begins with careful planning and
              route selection. Engineers determine the safest and most
              efficient path for cable installation while considering load
              requirements, environmental conditions, and future expansion
              needs. Proper trenching, cable trays, conduits, and protective
              coverings are used to protect cables from physical damage,
              moisture, and environmental factors.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Underground & Overhead Cable Installation Systems
            </h3>

            

            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              HT and LT cables can be installed using underground trenching
              methods or overhead cable systems depending on project
              requirements. Underground cable laying is commonly used in
              modern urban infrastructure because it improves safety and
              reduces visual clutter. Cables are installed inside protective
              conduits or ducts and covered with sand, protective tiles,
              and warning tapes to ensure durability and easy maintenance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In large commercial and industrial facilities, cable trays,
              ladder systems, and structured cable routing are used to
              organize electrical wiring across buildings and production
              areas. These systems help manage heavy electrical loads and
              ensure proper cable separation for power, control, and
              communication systems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              After installation, electrical professionals conduct
              comprehensive testing such as insulation resistance testing,
              continuity testing, and voltage testing to verify the safety
              and performance of the cable system. Proper HT-LT cable
              installation improves electrical efficiency, ensures safe
              power transmission, and provides long-term reliability for
              electrical infrastructure.
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

export default Htlt;