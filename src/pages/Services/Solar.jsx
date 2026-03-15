import React from "react";
import { Link } from "react-router-dom";

const Solar = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">
        <img
          src="/solar2.webp"
          alt="Solar System Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Solar System Installation
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Solar System Installation
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
              src="/solar2.jpg"
              alt="Solar Panel Installation"
              className="rounded-lg mb-6 w-full h-[250px] md:h-[400px] object-cover"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Solar System Installation
            </h2>

            {/* Short Content */}
            <p className="text-gray-600 leading-relaxed mb-4">
              Solar system installation allows homes and businesses to
              generate electricity using sunlight. Solar panels convert
              solar energy into usable power for lighting, appliances,
              and electrical systems.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our team provides professional solar installation including
              panel mounting, inverter setup, wiring, and system integration
              to ensure maximum energy efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With proper safety standards and modern technology, solar
              systems reduce electricity costs and provide a reliable,
              eco-friendly energy solution for long-term use.
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

export default Solar;