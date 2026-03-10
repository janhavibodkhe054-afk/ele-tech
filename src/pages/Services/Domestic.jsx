import React from "react";
import { Link } from "react-router-dom";

const Domestic = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/water2.webp"
          alt="Domestic Water Supply"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Domestic Water Supply
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Domestic Water Supply
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/water1.webp"
              alt="Domestic Water Supply System"
              className="w-full rounded-lg mb-8 -[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Reliable Domestic Water Supply Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Domestic water supply systems are designed to deliver
              clean and safe water to residential buildings, apartments,
              and housing complexes. These systems ensure a consistent
              supply of water for daily household activities such as
              drinking, cooking, bathing, cleaning, and sanitation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical domestic water supply system includes water
              storage tanks, pumps, pipelines, valves, and filtration
              systems. Water is stored in overhead or underground tanks
              and distributed through properly designed piping networks
              to different areas of the building while maintaining
              adequate water pressure and flow.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Efficient Water Distribution & Plumbing Solutions
            </h3>

           
            <p className="text-gray-600 leading-relaxed mb-6">
              Proper design and installation of domestic water supply
              systems help ensure efficient water distribution
              throughout the building. High-quality pipes, fittings,
              pressure pumps, and control valves are used to prevent
              leakage, maintain water pressure, and ensure long-term
              reliability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern domestic water systems may also include filtration
              units, water softeners, and automated pumping systems to
              improve water quality and reduce maintenance requirements.
              These technologies help ensure safe and convenient water
              access for residents.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional installation and maintenance of domestic
              water supply systems are essential for maintaining
              hygiene, preventing water wastage, and ensuring reliable
              operation. A well-designed water distribution system
              improves the efficiency of residential plumbing
              infrastructure and supports comfortable living
              environments.
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

export default Domestic;