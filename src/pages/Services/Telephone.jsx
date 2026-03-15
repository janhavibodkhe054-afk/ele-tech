import React from "react";
import { Link } from "react-router-dom";

const Telephone = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">
        <img
          src="/phone1.webp"
          alt="Telephone Data System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Telephone / Data System
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Telephone / Data System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/phone2.jpg"
              alt="Telephone Data Cabling"
              className="w-full rounded-lg mb-6 h-[250px] md:h-[380px] object-cover"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Telephone & Data Communication Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Telephone and data systems provide reliable communication
              and internet connectivity for homes, offices, and
              commercial buildings. These systems support voice calls,
              networking, and digital data transfer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our services include structured cabling, network
              installation, data outlets, switches, and communication
              racks to ensure stable and high-speed connectivity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A properly designed communication network improves
              productivity, ensures secure data transfer, and allows
              easy expansion as technology and connectivity needs grow.
            </p>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-3">
                Electrical Systems
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">

                <li>
                  <Link to="/home-automation" className="hover:text-orange-500">
                    ▸ Home Automation
                  </Link>
                </li>

                <li>
                  <Link to="/telephone-data-system" className="hover:text-orange-500">
                    ▸ Telephone / Data System
                  </Link>
                </li>

                <li>
                  <Link to="/public-address-system" className="hover:text-orange-500">
                    ▸ Public Address System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-alarm-system" className="hover:text-orange-500">
                    ▸ Fire Alarm System
                  </Link>
                </li>

                <li>
                  <Link to="/security-system" className="hover:text-orange-500">
                    ▸ Security System
                  </Link>
                </li>

                <li>
                  <Link to="/cctv-system" className="hover:text-orange-500">
                    ▸ CCTV System
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

export default Telephone;