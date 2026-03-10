import React from "react";
import { Link } from "react-router-dom";

const Residential = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/resident1.jpg"
          alt="Residential Electrical Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Residential Electrical Installation
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Residential Electrical Installation
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
              src="/resident2.webp"
              alt="Residential Electrical Work"
              className="rounded-lg mb-8 w-full"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Residential Electrical Installation
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Residential electrical installation involves designing,
              installing, and maintaining electrical systems in homes,
              apartments, and residential buildings. These systems are
              responsible for safely distributing electricity to lighting
              fixtures, electrical outlets, appliances, air conditioning
              units, and other household equipment. Proper residential
              electrical installation ensures reliable power supply,
              efficient energy use, and safe operation of electrical
              devices within the home.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Professional electricians carefully plan the electrical
              layout of a house before installation begins. This includes
              determining the placement of switches, sockets, lighting
              fixtures, distribution boards, and wiring routes.
              High-quality electrical cables, circuit breakers, and
              protective devices are used to ensure the electrical system
              can safely handle household power demands while minimizing
              risks such as short circuits or electrical overload.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Safe Wiring Systems & Home Electrical Solutions
            </h3>

            
            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Residential electrical installations typically include
              wiring networks, electrical panels, lighting circuits,
              power outlets, and grounding systems. Electricians install
              concealed or surface wiring depending on the building
              structure and design requirements. Proper circuit
              distribution ensures that electrical loads are balanced
              across the system, improving energy efficiency and
              preventing overheating of wires or electrical components.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern homes often include additional electrical solutions
              such as energy-efficient LED lighting, smart home
              automation systems, inverter connections, and solar power
              integration. These technologies help homeowners reduce
              electricity consumption while maintaining comfortable
              living environments with reliable electrical support.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Safety is one of the most important aspects of residential
              electrical installation. Electricians install proper
              earthing systems, circuit breakers, and residual current
              devices (RCDs) to protect residents from electrical
              hazards. After installation, the entire electrical system
              is tested to ensure proper voltage levels, secure wiring,
              and compliance with electrical safety standards. A
              professionally installed residential electrical system
              provides long-term reliability, improved safety, and
              efficient energy usage for modern homes.
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

export default Residential;