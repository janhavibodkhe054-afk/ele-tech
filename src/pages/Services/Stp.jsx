import React from "react";
import { Link } from "react-router-dom";

const Stp = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">
        <img
          src="/stp1.webp"
          alt="STP System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            STP (Sewage Treatment Plant)
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; STP
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/stp2.webp"
              alt="Sewage Treatment Plant"
              className="w-full rounded-lg mb-6 h-[250px] md:h-[380px] object-cover"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sewage Treatment Plant Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Sewage Treatment Plants (STP) are designed to treat
              wastewater from residential, commercial, and industrial
              buildings before it is safely reused or discharged.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              These systems remove harmful pollutants, bacteria,
              and solid waste through biological and filtration
              processes to improve water quality.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Properly installed STP systems support sustainable
              water management by reducing pollution and enabling
              treated water reuse for landscaping, flushing, and
              irrigation.
            </p>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-3">
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

export default Stp;