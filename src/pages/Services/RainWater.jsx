import React from "react";
import { Link } from "react-router-dom";

const RainWater = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">
        <img
          src="/rain2.jpg"
          alt="Rain Water Harvesting System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/rain1.jpg"
              alt="Rainwater Harvesting"
              className="w-full rounded-lg mb-6 md:mb-8 h-[220px] sm:h-[300px] md:h-[420px] object-cover"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rain Water Harvesting Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Rainwater harvesting systems collect and store rainwater
              for reuse in irrigation, groundwater recharge, and
              domestic purposes. These systems help conserve water
              and reduce dependency on external water sources.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              A typical system includes rooftop collection, gutters,
              filtration units, and storage tanks that safely store
              rainwater for future use.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Proper installation ensures efficient water collection,
              sustainable water management, and long-term reliability
              for residential and commercial buildings.
            </p>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-5 border-b pb-3">
                Plumbing Systems
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">

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
                  <Link
                    to="/sanitary-fixtures-installation"
                    className="hover:text-orange-500"
                  >
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