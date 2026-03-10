import React from "react";
import { Link } from "react-router-dom";

const Drainage = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="plumbing2.webp"
          alt="Plumbing Drainage System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Plumbing Drainage System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Plumbing Drainage System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/plumbing1.webp"
              alt="Drainage Pipe Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Efficient Plumbing Drainage Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A plumbing drainage system is responsible for safely
              removing wastewater and sewage from residential,
              commercial, and industrial buildings. Proper drainage
              systems ensure that used water from kitchens, bathrooms,
              sinks, and washing areas is transported away from the
              building through well-designed pipelines and drainage
              networks.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical drainage system includes pipes, traps, vents,
              floor drains, inspection chambers, and sewer connections.
              These components work together to ensure smooth flow of
              wastewater while preventing blockages, foul odors, and
              contamination inside the building environment.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Reliable Wastewater Disposal Solutions
            </h3>

            

            <p className="text-gray-600 leading-relaxed mb-6">
              Properly designed drainage systems maintain adequate
              slope and pipe diameter to ensure smooth wastewater flow
              without clogging. High-quality PVC, HDPE, or cast iron
              pipes are commonly used for durability and long-term
              performance in plumbing infrastructure.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Vent pipes and traps are also essential parts of the
              drainage system. They help regulate air pressure within
              the pipes and prevent harmful sewer gases from entering
              the building. These safety measures improve sanitation
              and maintain a healthy indoor environment.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional installation of plumbing drainage systems
              ensures efficient wastewater disposal, reduced
              maintenance issues, and long-term reliability. A properly
              designed drainage network plays a vital role in
              maintaining hygiene, preventing water damage, and
              supporting safe building operations.
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

export default Drainage;