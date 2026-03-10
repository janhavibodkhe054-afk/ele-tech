import React from "react";
import { Link } from "react-router-dom";

const RainWater = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/rain2.jpg"
          alt="Rain Water Harvesting System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Rain Water System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Rain Water System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/rain1.jpg"
              alt="Rainwater Harvesting"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Rain Water Harvesting & Management Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Rainwater harvesting systems are designed to collect,
              store, and utilize rainwater for various purposes such
              as irrigation, groundwater recharge, and domestic
              non-drinking applications. These systems help conserve
              water resources and reduce dependency on municipal
              water supply while promoting sustainable water
              management practices.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical rainwater harvesting system includes rooftop
              collection areas, gutters, downpipes, filtration units,
              storage tanks, and recharge pits. Rainwater collected
              from roofs or open surfaces is filtered and stored
              safely for future use or directed to underground
              recharge systems to replenish groundwater levels.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Sustainable Water Conservation Solutions
            </h3>

           

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern rainwater harvesting systems are widely used in
              residential buildings, commercial complexes, industrial
              facilities, and agricultural properties. These systems
              help reduce water bills, prevent water shortages, and
              minimize stormwater runoff during heavy rainfall.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Properly designed filtration units remove debris, dust,
              and contaminants from rainwater before it enters
              storage tanks or recharge systems. This ensures
              cleaner water for reuse and helps protect plumbing
              infrastructure from damage or clogging.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Installing a rainwater harvesting system contributes
              significantly to environmental sustainability by
              conserving natural water resources. Professional
              installation ensures proper system design,
              efficient water collection, and long-term reliability
              for residential and commercial properties.
            </p>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">

              <h3 className="text-xl font-bold mb-6 border-b pb-3">
                Plumbing Systems
              </h3>

              <ul className="space-y-4 text-gray-700">

                <li>
                  <Link to="/stp" className="hover:text-orange-500">
                    ▸ STP
                  </Link>
                </li>

                <li>
                  <Link to="/rain-water-system" className="hover:text-orange-500">
                    ▸ Rain Water System
                  </Link>
                </li>

                <li>
                  <Link to="/domestic-water-supply" className="hover:text-orange-500">
                    ▸ Domestic Water Supply
                  </Link>
                </li>

                <li>
                  <Link to="/plumbing-drainage-system" className="hover:text-orange-500">
                    ▸ Plumbing Drainage System
                  </Link>
                </li>

                <li>
                  <Link to="/sanitary-fixtures-installation" className="hover:text-orange-500">
                    ▸ Installation of Sanitary Fixtures & Outlets
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

export default RainWater;