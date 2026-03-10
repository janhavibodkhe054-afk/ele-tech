import React from "react";
import { Link } from "react-router-dom";

const Sanitary = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/outlet2.webp"
          alt="Sanitary Fixtures Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Installation of Sanitary Fixtures & Outlets
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Installation of Sanitary Fixtures & Outlets
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/outlet1.webp"
              alt="Sanitary Fixture Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Professional Installation of Sanitary Fixtures
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sanitary fixtures are essential components of modern
              plumbing systems used in bathrooms, kitchens, and
              utility areas. These fixtures include wash basins,
              sinks, toilets, bathtubs, showers, urinals, faucets,
              and other outlets that ensure proper water usage and
              sanitation within a building.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Proper installation of sanitary fixtures ensures
              efficient water flow, leak-free connections, and
              reliable drainage performance. Professional plumbing
              installation helps maintain hygiene, improve comfort,
              and prevent water leakage that could damage building
              structures.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Modern Bathroom & Plumbing Fixture Solutions
            </h3>

            

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern sanitary installations include advanced plumbing
              technologies such as water-saving fixtures, concealed
              piping systems, pressure-controlled faucets, and
              high-quality ceramic or stainless steel fittings.
              These innovations help reduce water consumption while
              maintaining efficiency and durability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional plumbers ensure that each fixture is
              properly aligned with water supply pipelines and
              drainage systems. Accurate installation minimizes
              maintenance issues, prevents leaks, and ensures
              long-lasting performance of plumbing systems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Proper installation of sanitary fixtures is essential
              for maintaining hygiene, comfort, and functionality in
              residential and commercial buildings. With expert
              plumbing solutions, property owners can ensure safe
              water usage, efficient drainage, and reliable
              performance of all bathroom and kitchen fixtures.
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

export default Sanitary;