import React from "react";
import { Link } from "react-router-dom";

const CommercialWork = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/elect1.jpg"
          alt="Commercial Electrical Works"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Commercial Electrical Works
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Commercial Electrical Works
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
              src="/elect2.jpg"
              alt="Commercial Electrical Work"
              className="rounded-lg mb-8 w-full h-[450px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Commercial Electrical Works
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial electrical works include the installation,
              maintenance, and repair of electrical systems used in
              commercial buildings such as offices, retail stores,
              restaurants, hotels, shopping centers, and institutional
              facilities. These electrical systems are designed to support
              higher power demands and ensure reliable operation of lighting,
              HVAC systems, security equipment, and other electrical
              infrastructure required for daily business operations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Professional commercial electricians design and install
              electrical wiring systems, distribution boards, switchgear,
              and lighting networks that ensure safe and efficient power
              distribution across the building. Proper electrical planning
              ensures that all circuits are balanced, energy consumption
              is optimized, and safety standards are maintained. Modern
              commercial facilities often include energy-efficient lighting
              systems and automated electrical controls to improve overall
              operational efficiency.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Electrical Maintenance & System Upgrades
            </h3>

            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              In addition to installation services, commercial electrical
              works also involve routine maintenance and system upgrades.
              Electrical professionals inspect wiring networks, circuit
              breakers, distribution panels, and lighting systems to ensure
              that they operate safely and efficiently. Preventive
              maintenance helps detect potential electrical issues before
              they cause equipment failure or power interruptions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Electrical upgrades may include replacing outdated wiring,
              installing advanced lighting systems, upgrading electrical
              panels, or integrating energy-efficient technologies. These
              improvements help businesses reduce electricity consumption
              and maintain reliable electrical performance across the
              facility.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Safety is an important aspect of commercial electrical work.
              Proper grounding, circuit protection devices, and electrical
              safety standards are followed to prevent electrical hazards.
              After completing installation or maintenance work,
              electricians perform thorough testing and inspections to
              verify that the electrical system operates correctly and
              meets required safety regulations. Reliable commercial
              electrical systems are essential for maintaining smooth
              business operations and protecting equipment and occupants.
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

export default CommercialWork;