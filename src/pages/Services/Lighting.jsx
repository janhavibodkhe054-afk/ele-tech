import React from "react";
import { Link } from "react-router-dom";

const Lighting = () => {
  return (
    <div className="w-full">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/light1.jpg"
          alt="Lighting Contractors"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Lighting Contractors
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Lighting Contractors
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
              src="/light2.webp"
              alt="Lighting Installation"
              className="rounded-lg mb-8 w-full h-[400px]"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-5">
              Lighting Contractors
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Lighting contractors specialize in the design, installation,
              and maintenance of lighting systems for residential,
              commercial, and industrial environments. Proper lighting
              plays an important role in improving visibility, enhancing
              building aesthetics, increasing productivity, and ensuring
              safety in indoor and outdoor spaces. Professional lighting
              contractors provide customized lighting solutions that meet
              both functional and decorative requirements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Lighting installations include a wide range of systems such
              as interior lighting, exterior lighting, architectural
              lighting, landscape lighting, street lighting, and security
              lighting. Contractors evaluate the building structure and
              lighting requirements before designing an efficient lighting
              layout. Modern lighting systems often incorporate LED
              technology, which offers higher energy efficiency, longer
              lifespan, and reduced electricity consumption.
            </p>

            {/* ================= HEADING ================= */}
            <h3 className="text-2xl font-semibold mb-6">
              Energy-Efficient Lighting Design & Installation
            </h3>

          

            {/* More Info */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional lighting contractors install a variety of
              lighting fixtures including LED panels, downlights,
              floodlights, decorative lights, and outdoor lighting
              systems. These systems are carefully connected to the
              electrical network using proper wiring methods and control
              switches to ensure smooth and safe operation. Lighting
              systems can also be integrated with automation controls
              that allow users to manage brightness, schedules, and
              energy usage efficiently.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Outdoor lighting installations are particularly important
              for pathways, gardens, parking areas, and building
              exteriors. These systems improve safety and security by
              providing adequate illumination in dark areas. Weather-
              resistant fixtures and protected electrical connections
              are used to ensure durability and long-term performance
              in outdoor environments.
            </p>

            <p className="text-gray-600 leading-relaxed">
              After installation, lighting systems are tested to ensure
              proper illumination levels, electrical safety, and energy
              efficiency. Professional lighting contractors also provide
              maintenance services to ensure that lighting fixtures and
              electrical connections continue to perform efficiently
              over time. Well-planned lighting solutions enhance the
              functionality, appearance, and safety of buildings and
              outdoor spaces.
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

export default Lighting;