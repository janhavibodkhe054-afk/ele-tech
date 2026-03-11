import React from "react";
import { Link } from "react-router-dom";

const Stp = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/stp1.webp"
          alt="STP System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            STP (Sewage Treatment Plant)
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; STP
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/stp2.webp"
              alt="Sewage Treatment Plant"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Sewage Treatment Plant (STP) Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A Sewage Treatment Plant (STP) is a facility designed to
              treat wastewater generated from residential, commercial,
              and industrial buildings. The primary purpose of an STP
              system is to remove contaminants, harmful bacteria, and
              pollutants from sewage water before it is discharged or
              reused. Proper wastewater treatment helps protect the
              environment and ensures safe water management.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              STP systems involve multiple treatment processes such as
              primary treatment, biological treatment, and filtration.
              These processes help separate solid waste, break down
              organic matter, and remove harmful microorganisms from
              wastewater. The treated water can then be reused for
              irrigation, landscaping, flushing systems, or safely
              discharged into drainage systems.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Efficient Wastewater Management
            </h3>

           
            <p className="text-gray-600 leading-relaxed mb-6">
              Modern sewage treatment plants use advanced technologies
              such as aeration systems, membrane filtration, and
              biological reactors to ensure efficient treatment of
              wastewater. These technologies help improve water quality
              while minimizing environmental impact.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              STP systems are widely used in residential societies,
              commercial complexes, hotels, hospitals, and industrial
              facilities where large volumes of wastewater are
              generated daily. Properly designed treatment systems
              ensure compliance with environmental regulations and
              sustainable water management practices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional STP installation and maintenance ensure
              long-term reliability and efficient performance. With
              proper wastewater treatment systems in place,
              organizations can reduce environmental pollution,
              conserve water resources, and promote sustainable
              infrastructure development.
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

export default Stp;