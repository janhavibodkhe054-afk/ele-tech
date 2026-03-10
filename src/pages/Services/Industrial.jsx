import React from "react";
import { Link } from "react-router-dom";

const Industrial = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/Industrial1.jpg"
          alt="Industrial Electrical Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Industrial Electrical Installation
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Industrial Electrical Installation
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
              src="/industrial2.jpg"
              alt="Industrial Electrical Panel"
              className="rounded-lg mb-8 w-full h-[400px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Industrial Electrical Installation
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Industrial electrical installation involves the design, setup,
              and maintenance of electrical systems used in factories,
              manufacturing plants, processing facilities, and heavy industrial
              environments. These installations are much more complex than
              residential or commercial systems because they must handle high
              voltage loads, heavy machinery, automated production equipment,
              and continuous power requirements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Industrial electrical systems include power distribution panels,
              motor control centers (MCC), transformers, generators,
              switchgear, and industrial automation systems. Engineers design
              these systems to ensure efficient power distribution, minimize
              downtime, and maintain safe operation in demanding industrial
              environments. Proper load calculations and electrical planning
              ensure that all machinery and equipment receive stable and
              reliable electrical supply.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Power Distribution & Industrial Equipment Integration
            </h3>

            

            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              During industrial installation, electricians install heavy-duty
              cables, cable trays, conduits, and busbar systems to distribute
              power throughout the facility. Motor control centers and control
              panels are connected to production machines to allow precise
              electrical control and monitoring. These systems support
              automated manufacturing processes, conveyor systems, pumps,
              compressors, and other industrial equipment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Industrial facilities often require backup power solutions such
              as generators, UPS systems, and redundant electrical circuits to
              maintain operations during power interruptions. Advanced
              monitoring systems are also installed to track electrical load,
              detect faults, and improve energy efficiency across the entire
              facility. These technologies help industries maintain consistent
              productivity while reducing operational risks.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Safety is a critical factor in industrial electrical systems.
              Protective devices such as circuit breakers, overload relays,
              grounding systems, and surge protection equipment are installed
              to prevent electrical accidents and equipment damage. After
              installation, all systems undergo testing and commissioning to
              ensure they operate safely and meet industrial electrical
              standards. Proper industrial electrical installation improves
              operational reliability, energy efficiency, and long-term
              performance of industrial facilities.
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

export default Industrial;